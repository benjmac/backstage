/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, PropsWithChildren } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
} from 'react-router-dom';
import {
  BackstagePlugin,
  useAnalytics,
  getComponentData,
  AnalyticsDomain,
} from '@backstage/core-plugin-api';

type RouteObject = ReturnType<typeof createRoutesFromChildren>;
type ExtensionDomain = {
  pluginId?: string;
  componentName?: string;
};

/**
 * Returns an extension domain given the current pathname and a RouteObject
 * that defines all registered routes in react.
 *
 * If no exact match is found, path parts are stripped away, one-by-one, until
 * a parent-level path matches a route.
 */
const getExtensionDomain = (
  pathname: string,
  routes: RouteObject,
): ExtensionDomain => {
  const cleanPath = pathname.replace(/\/+$/, '');
  const matches = matchRoutes(routes, { pathname });
  const RouteElement = matches
    ?.filter(match => {
      const pathsMatch = match.pathname.replace(/\/+$/, '') === cleanPath;
      const hasRoutableElement = !!(match.route.element as React.ReactElement)
        ?.props?.element;
      return pathsMatch && hasRoutableElement;
    })
    .pop()?.route?.element;
  const RoutableElement = (RouteElement as React.ReactElement)?.props?.element;

  if (RoutableElement) {
    const plugin: BackstagePlugin | undefined = getComponentData(
      RoutableElement,
      'core.plugin',
    );
    if (plugin) {
      const displayname =
        RoutableElement.type.displayName || RoutableElement.type.name || '';
      const componentName =
        (displayname.match(/^Extension\((.*)\)$/i) || [])[1] || 'Component';
      return {
        pluginId: plugin.getId(),
        componentName,
      };
    }
  }

  // Try again, one path-level shallower.
  const nextLevelPath = cleanPath.split('/').slice(0, -1).join('/');
  return nextLevelPath !== '' ? getExtensionDomain(nextLevelPath, routes) : {};
};

/**
 * Performs the actual event capture on render.
 */
const CaptureOnRender = ({
  pathname,
  search,
  hash,
}: {
  pathname: string;
  search: string;
  hash: string;
}) => {
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.captureEvent('navigate', `${pathname}${search}${hash}`);
  }, [analytics, pathname, search, hash]);

  return null;
};

/**
 * Logs a "navigate" event with appropriate plugin-level analytics domain
 * attributes each time the user navigates to a page.
 */
export const RouteTracker = ({ children }: PropsWithChildren<{}>) => {
  const { pathname, search, hash } = useLocation();
  const attributes = getExtensionDomain(
    pathname,
    createRoutesFromChildren(children),
  );

  return (
    <AnalyticsDomain attributes={attributes}>
      <CaptureOnRender pathname={pathname} search={search} hash={hash} />
    </AnalyticsDomain>
  );
};
