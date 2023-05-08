/*! For license information please see de24c8b6.89479c4c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[208824],{670418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(824246),a=r(511151);const o={id:"catalog-model",title:"@backstage/catalog-model",description:"API Reference for @backstage/catalog-model"},i=void 0,c={unversionedId:"reference/catalog-model",id:"reference/catalog-model",title:"@backstage/catalog-model",description:"API Reference for @backstage/catalog-model",source:"@site/../docs/reference/catalog-model.md",sourceDirName:"reference",slug:"/reference/catalog-model",permalink:"/docs/reference/catalog-model",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-model.md",tags:[],version:"current",frontMatter:{id:"catalog-model",title:"@backstage/catalog-model",description:"API Reference for @backstage/catalog-model"}},s={},l=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-model"})})]}),"\n",(0,n.jsx)(t.p,{children:"Types and validators that help describe the model of a Backstage Catalog"}),"\n",(0,n.jsx)(t.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Class"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.commonvalidatorfunctions",children:"CommonValidatorFunctions"})}),(0,n.jsx)(t.td,{children:"Contains various helper validation and normalization functions that can be composed to form a Validator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.defaultnamespaceentitypolicy",children:"DefaultNamespaceEntityPolicy"})}),(0,n.jsx)(t.td,{children:"Sets a default namespace if none was set."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.fieldformatentitypolicy",children:"FieldFormatEntityPolicy"})}),(0,n.jsx)(t.td,{children:"Ensures that the format of individual fields of the entity envelope is valid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.groupdefaultparententitypolicy",children:"GroupDefaultParentEntityPolicy"})}),(0,n.jsx)(t.td,{children:"DefaultParentPolicy is an EntityPolicy that updates group entities with a parent of last resort. This ensures that, while we preserve any existing group hierarchies, we can guarantee that there is a single global root of the group hierarchy."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kubernetesvalidatorfunctions",children:"KubernetesValidatorFunctions"})}),(0,n.jsx)(t.td,{children:"Contains validation functions that match the Kubernetes spec, usable to build a catalog that is compatible with those rule sets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.noforeignrootfieldsentitypolicy",children:"NoForeignRootFieldsEntityPolicy"})}),(0,n.jsx)(t.td,{children:"Ensures that there are no foreign root fields in the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.schemavalidentitypolicy",children:"SchemaValidEntityPolicy"})}),(0,n.jsx)(t.td,{children:"Ensures that the entity spec is valid according to a schema."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelopeschemavalidator",children:"entityEnvelopeSchemaValidator(schema)"})}),(0,n.jsxs)(t.td,{children:["Creates a validation function that takes some arbitrary data, and either returns that data cast to an ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelope",children:"EntityEnvelope"})," (or the given subtype) if it matches that schema, or throws a  describing the errors."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entitykindschemavalidator",children:"entityKindSchemaValidator(schema)"})}),(0,n.jsxs)(t.td,{children:["Creates a validation function that takes some arbitrary data, and either returns that data cast to a ","T"," if it matches that schema, or ","false"," if the schema apiVersion/kind didn't apply to that data, or throws a  describing actual errors."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entityschemavalidator",children:"entitySchemaValidator(schema)"})}),(0,n.jsxs)(t.td,{children:["Creates a validation function that takes some arbitrary data, and either returns that data cast to an ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," (or the given subtype) if it matches that schema, or throws a  describing the errors."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.getcompoundentityref",children:"getCompoundEntityRef(entity)"})}),(0,n.jsx)(t.td,{children:"Extracts the kind, namespace and name that form the compound entity ref triplet of the given entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.getentitysourcelocation",children:"getEntitySourceLocation(entity)"})}),(0,n.jsx)(t.td,{children:"Returns the source code location of the Entity, to the extent that one exists."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.isapientity",children:"isApiEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.iscomponententity",children:"isComponentEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.isdomainentity",children:"isDomainEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.isgroupentity",children:"isGroupEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.islocationentity",children:"isLocationEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.isresourceentity",children:"isResourceEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.issystementity",children:"isSystemEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.isuserentity",children:"isUserEntity(entity)"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.makevalidator",children:"makeValidator(overrides)"})}),(0,n.jsxs)(t.td,{children:["Creates a ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.validators",children:"Validators"})," object from ","overrides",", with default values taken from ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kubernetesvalidatorfunctions",children:"KubernetesValidatorFunctions"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.parseentityref",children:"parseEntityRef(ref, context)"})}),(0,n.jsx)(t.td,{children:"Parses an entity reference, either on string or compound form, and returns a structure with a name, and optional kind and namespace."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.parselocationref",children:"parseLocationRef(ref)"})}),(0,n.jsx)(t.td,{children:"Parses a string form location reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.stringifyentityref",children:"stringifyEntityRef(ref)"})}),(0,n.jsx)(t.td,{children:"Takes an entity or entity name/reference, and returns the string form of an entity ref."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.stringifylocationref",children:"stringifyLocationRef(ref)"})}),(0,n.jsx)(t.td,{children:"Turns a location ref into its string form."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Interface"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.apientityv1alpha1",children:"ApiEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage API kind Entity. APIs describe the interfaces for Components to communicate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.componententityv1alpha1",children:"ComponentEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage catalog Component kind Entity. Represents a single, individual piece of software."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.domainentityv1alpha1",children:"DomainEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage Domain kind Entity. Domains group Systems together."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage catalog Group kind Entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.locationentityv1alpha1",children:"LocationEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage catalog Location kind Entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.resourceentityv1alpha1",children:"ResourceEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage catalog Resource kind Entity. Represents infrastructure required to operate Components."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.systementityv1alpha1",children:"SystemEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage catalog System kind Entity. Systems group Components, Resources and APIs together."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntityV1alpha1"})}),(0,n.jsx)(t.td,{children:"Backstage catalog User kind Entity."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_edit_url",children:"ANNOTATION_EDIT_URL"})}),(0,n.jsx)(t.td,{children:"Annotation for linking to entity edit page from catalog pages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_kubernetes_api_server_ca",children:"ANNOTATION_KUBERNETES_API_SERVER_CA"})}),(0,n.jsx)(t.td,{children:"Annotation for specifying the Certificate Authority of an API server for a Kubernetes cluster"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_kubernetes_api_server",children:"ANNOTATION_KUBERNETES_API_SERVER"})}),(0,n.jsx)(t.td,{children:"Annotation for specifying the API server of a Kubernetes cluster"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_kubernetes_auth_provider",children:"ANNOTATION_KUBERNETES_AUTH_PROVIDER"})}),(0,n.jsx)(t.td,{children:"Annotation for specifying the auth provider for a Kubernetes cluster"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_location",children:"ANNOTATION_LOCATION"})}),(0,n.jsx)(t.td,{children:"Entity annotation containing the location from which the entity is sourced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_origin_location",children:"ANNOTATION_ORIGIN_LOCATION"})}),(0,n.jsx)(t.td,{children:"Entity annotation containing the originally sourced location which ultimately led to this entity being ingested."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_source_location",children:"ANNOTATION_SOURCE_LOCATION"})}),(0,n.jsx)(t.td,{children:"Entity annotation pointing to the source (e.g. source code repository root or similar) for this entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.annotation_view_url",children:"ANNOTATION_VIEW_URL"})}),(0,n.jsx)(t.td,{children:"Annotation for linking to entity page from catalog pages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.apientityv1alpha1validator",children:"apiEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.apientityv1alpha1",children:"ApiEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.componententityv1alpha1validator",children:"componentEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.componententityv1alpha1",children:"ComponentEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.default_namespace",children:"DEFAULT_NAMESPACE"})}),(0,n.jsx)(t.td,{children:"The namespace that entities without an explicit namespace fall into."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.domainentityv1alpha1validator",children:"domainEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.domainentityv1alpha1",children:"DomainEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entitypolicies",children:"EntityPolicies"})}),(0,n.jsxs)(t.td,{children:["Provides helpers for enforcing a set of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entitypolicy",children:"EntityPolicy"})," in an ","and","/","or"," expression."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1validator",children:"groupEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.locationentityv1alpha1validator",children:"locationEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.locationentityv1alpha1",children:"LocationEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_api_consumed_by",children:"RELATION_API_CONSUMED_BY"})}),(0,n.jsxs)(t.td,{children:["A relation of an API being consumed, typically by a component. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_consumes_api",children:"RELATION_CONSUMES_API"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_api_provided_by",children:"RELATION_API_PROVIDED_BY"})}),(0,n.jsxs)(t.td,{children:["A relation from an API to its provider entity (typically a component). Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_provides_api",children:"RELATION_PROVIDES_API"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_child_of",children:"RELATION_CHILD_OF"})}),(0,n.jsxs)(t.td,{children:["A relation from a child to a parent entity, used for example to describe the organizational structure between groups. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_parent_of",children:"RELATION_PARENT_OF"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_consumes_api",children:"RELATION_CONSUMES_API"})}),(0,n.jsxs)(t.td,{children:["A relation with an API entity, typically from a component. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_api_consumed_by",children:"RELATION_API_CONSUMED_BY"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_dependency_of",children:"RELATION_DEPENDENCY_OF"})}),(0,n.jsxs)(t.td,{children:["A relation denoting a reverse dependency by another entity. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_depends_on",children:"RELATION_DEPENDS_ON"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_depends_on",children:"RELATION_DEPENDS_ON"})}),(0,n.jsxs)(t.td,{children:["A relation denoting a dependency on another entity. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_dependency_of",children:"RELATION_DEPENDENCY_OF"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_has_member",children:"RELATION_HAS_MEMBER"})}),(0,n.jsxs)(t.td,{children:["A relation from a group to its member, typcally a user in a group. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_member_of",children:"RELATION_MEMBER_OF"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_has_part",children:"RELATION_HAS_PART"})}),(0,n.jsxs)(t.td,{children:["A relation from a containing entity to a contained entity. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_part_of",children:"RELATION_PART_OF"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_member_of",children:"RELATION_MEMBER_OF"})}),(0,n.jsxs)(t.td,{children:["A membership relation, typically for users in a group. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_has_member",children:"RELATION_HAS_MEMBER"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_owned_by",children:"RELATION_OWNED_BY"})}),(0,n.jsxs)(t.td,{children:["An ownership relation where the owner is usually an organizational entity (user or group), and the other entity can be anything. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_owner_of",children:"RELATION_OWNER_OF"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_owner_of",children:"RELATION_OWNER_OF"})}),(0,n.jsxs)(t.td,{children:["A relationship from an owner to the owned entity. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_owned_by",children:"RELATION_OWNED_BY"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_parent_of",children:"RELATION_PARENT_OF"})}),(0,n.jsxs)(t.td,{children:["A parent/child relation to build up a tree, used for example to describe the organizational structure between groups. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_child_of",children:"RELATION_CHILD_OF"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_part_of",children:"RELATION_PART_OF"})}),(0,n.jsxs)(t.td,{children:["A part/whole relation, typically for components in a system and systems in a domain. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_has_part",children:"RELATION_HAS_PART"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_provides_api",children:"RELATION_PROVIDES_API"})}),(0,n.jsxs)(t.td,{children:["A relation from an API provider entity (typically a component) to the API. Reversed direction of ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.relation_api_provided_by",children:"RELATION_API_PROVIDED_BY"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.resourceentityv1alpha1validator",children:"resourceEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.resourceentityv1alpha1",children:"ResourceEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.systementityv1alpha1validator",children:"systemEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.systementityv1alpha1",children:"SystemEntityV1alpha1"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.userentityv1alpha1validator",children:"userEntityV1alpha1Validator"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})," for ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntityV1alpha1"}),"."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type Alias"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})}),(0,n.jsx)(t.td,{children:"All parts of a complete entity ref, forming a full kind-namespace-name triplet."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),(0,n.jsx)(t.td,{children:"The parts of the format that's common to all versions/kinds of entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelope",children:"EntityEnvelope"})}),(0,n.jsx)(t.td,{children:"The envelope skeleton parts of an entity - whatever is necessary to be able to give it a ref and pass to further validation / policy checking."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entitylink",children:"EntityLink"})}),(0,n.jsx)(t.td,{children:"A link to external information that is related to the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entitymeta",children:"EntityMeta"})}),(0,n.jsx)(t.td,{children:"Metadata fields common to all versions/kinds of entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entitypolicy",children:"EntityPolicy"})}),(0,n.jsx)(t.td,{children:"A policy for validation or mutation to be applied to entities as they are entering the system."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entityrelation",children:"EntityRelation"})}),(0,n.jsx)(t.td,{children:"A relation of a specific type to another entity in the catalog."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.kindvalidator",children:"KindValidator"})}),(0,n.jsx)(t.td,{children:"Validates entities of a certain kind."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.validators",children:"Validators"})}),(0,n.jsx)(t.td,{children:"Type alias for implementing validators of various entity objects."})]})]})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var o,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in o=Object(arguments[s]))r.call(o,l)&&(c[l]=o[l]);if(t){i=t(o);for(var d=0;d<i.length;d++)n.call(o,i[d])&&(c[i[d]]=o[i[d]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,s=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;a=h("react.element"),o=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),i=h("react.provider"),c=h("react.context"),s=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),d=h("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function p(e,t,r){this.props=e,this.context=t,this.refs=x,this.updater=r||j}function y(){}function m(e,t,r){this.props=e,this.context=t,this.refs=x,this.updater=r||j}p.prototype.isReactComponent={},p.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,t,"setState")},p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=p.prototype;var g=m.prototype=new y;g.constructor=m,n(g,p.prototype),g.isPureReactComponent=!0;var _={current:null},v=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:_.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return i=i(s=e),e=""===n?"."+R(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),k(i,t,r,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=n+R(c=e[l],l);s+=k(c,t,r,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(c=e.next()).done;)s+=k(c=c.value,t,r,d=n+R(c,l++),i);else if("object"===c)throw t=""+e,Error(u(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function N(e,t,r){if(null==e)return e;var n=[],a=0;return k(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function P(){var e=T.current;if(null===e)throw Error(u(321));return e}var V={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:N,forEach:function(e,t,r){N(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error(u(143));return e}},t.Component=p,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.cloneElement=function(e,t,r){if(null==e)throw Error(u(267,e));var o=n({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)v.call(t,d)&&!E.hasOwnProperty(d)&&(o[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)o.children=r;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=b,t.createFactory=function(e){var t=b.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>o});var n=r(667294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:o(e),n.createElement(a.Provider,{value:c},t)}}}]);