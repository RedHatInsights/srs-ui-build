"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[873],{87502:()=>{},18271:(e,t,a)=>{a.d(t,{OP:()=>p,EG:()=>v,mt:()=>u,UW:()=>S});var n=a(75418),i=a.n(n),r=a(98068),o=a(31521),s=a(84669),l=a(46332),c=a(31151),u=function(e){var t=e.onConnectToRegistry,a=e.onDeleteRegistry,u=e.breadcrumbId,m=e.serviceRegistryDetails,d=(0,o.useTranslation)().t,g=!1,p=(0,n.useState)(),_=p[0],v=p[1],L=((0,l.useBasename)()||{}).getBasename,E=L&&L();null!=u&&(g=!0,d(u));var y=((0,c.x)()||{}).artifactId,f=[i().createElement(s.DropdownItem,{key:"connect-registry",onClick:function(){return t&&t(m)}},d("srs.view_connection_information")),i().createElement(s.DropdownItem,{key:"delete-registry",onClick:function(){return a&&a(m)}},d("srs.delete_registry"))];return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},g?i().createElement(s.Breadcrumb,null,i().createElement(s.BreadcrumbItem,null,i().createElement(r.Link,{to:"".concat(E)||"/"}," ",d("srs.service_registry_breadcrumb"))),i().createElement(s.BreadcrumbItem,{isActive:!0},y?i().createElement(r.Link,{to:"".concat(E,"/t/").concat(null==m?void 0:m.id)},null==m?void 0:m.name):null==m?void 0:m.name),y&&i().createElement(s.BreadcrumbItem,null,y)):i().createElement(s.TextContent,null,i().createElement(s.Text,{component:"h1"}," ",d("srs.service_registry")))),i().createElement(s.PageSection,{variant:s.PageSectionVariants.light},u&&i().createElement(s.Level,null,i().createElement(s.Title,{headingLevel:"h1"},null==m?void 0:m.name),i().createElement(s.Dropdown,{onSelect:function(){v(!_)},toggle:i().createElement(s.KebabToggle,{onToggle:function(e){v(e)},id:"toggle-service-registry"}),isOpen:_,isPlain:!0,dropdownItems:f,position:s.DropdownPosition.right}))))},m=a(33494),d=a(70251),g=function(e){var t=e.registryApisUrl,a=e.registryInstance,n=((0,c.x)()||{}).tokenEndPointUrl,u=(0,o.useTranslation)().t,m=((0,l.useBasename)()||{}).getBasename,g=m&&m(),p=[{title:u("srs.connection_content_1"),code:"".concat(t,"/apis/registry/v2")},{title:u("srs.connection_content_2"),code:"".concat(t,"/apis/ccompat/v6")},{title:u("srs.connection_content_3"),code:"".concat(t,"/apis/cncf/v0")}],_=(0,l.useModal)().showModal;return i().createElement("div",{className:"mas--details__drawer--tab-content"},i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},u("common.connection"))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.small},u("srs.connection_title_info"))),i().createElement(s.Form,null,null==p?void 0:p.map((function(e,a){var n=e.title,r=e.code;return t?i().createElement(s.FormGroup,{label:n,fieldId:"copy-clipboard-".concat(a),key:"".concat(r,"'-'").concat(a)},i().createElement(s.ClipboardCopy,{id:"copy-clipboard-".concat(a),hoverTip:u("common.copy_clipboard"),clickTip:u("common.copy_clipboard_successfully"),textAriaLabel:n,isReadOnly:!0},r)):i().createElement(s.Skeleton,{fontSize:"2xl"})}))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h3,className:"pf-u-mt-xl"},u("srs.service_accounts_small")),i().createElement(s.Text,{component:s.TextVariants.small},u("srs.create_service_account_to_generate_credentials")," ",i().createElement(r.Link,{to:"/service-accounts","data-testid":"tableStreams-linkKafka"},u("srs.service_accounts"))," ",u("common.page"),".")),i().createElement(s.Button,{variant:"secondary",onClick:function(){_(l.ModalType.KasCreateServiceAccount,{})},"data-testid":"drawerStreams-buttonCreateServiceAccount",isInline:!0},u("srs.create_service_account")),i().createElement(s.TextContent,{className:"pf-u-pt-sm"},i().createElement(s.Text,{component:s.TextVariants.small},i().createElement(o.Trans,{i18nKey:"srs.current_instance",components:[i().createElement(r.Link,{to:"".concat(g,"/t/").concat(null==a?void 0:a.id,"/roles"),key:"tableRegistries-linkKafka"})]}))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h3,className:"pf-u-mt-xl"},u("srs.authentication_method")),i().createElement(s.Text,{component:s.TextVariants.h4,className:"pf-u-mt-md"},u("srs.oauth")," ",i().createElement(s.Label,{color:"green"},u("srs.recommended")),i().createElement(s.Popover,{"aria-label":u("srs.oauth"),bodyContent:i().createElement("div",null,u("srs.oauth_popover_content"))},i().createElement(s.Button,{variant:s.ButtonVariant.plain,"aria-label":u("more_info_about_oauth")},i().createElement(d.HelpIcon,null)))),i().createElement(s.Text,{component:s.TextVariants.small},u("srs.oauth_description")),i().createElement(s.Text,{component:s.TextVariants.h6,className:"pf-u-mt-md"},u("srs.token_endpoint_url")),i().createElement(s.ClipboardCopy,{isReadOnly:!0},n)),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h4,className:"pf-u-mt-md"},u("srs.http_basic")),i().createElement(s.Text,{component:s.TextVariants.small},u("srs.http_basic_description"))))},p=function(e){var t=e.isExpanded,a=e.isLoading,n=e.onClose,r=e["data-ouia-app-id"],s=e.children,l=e.notRequiredDrawerContentBackground,c=e.registry,u=(0,o.useTranslation)().t,d=c||{},p=d.registryUrl,_=d.name,v=i().createElement(g,{registryApisUrl:p,registryInstance:c});return i().createElement(m.D5,{isExpanded:t,isLoading:a,onClose:n,panelBodyContent:v,drawerHeaderProps:{text:{label:u("srs.service_registry_instance_name")},title:{value:_,headingLevel:"h1"}},"data-ouia-app-id":r,notRequiredDrawerContentBackground:l},s)},_=a(10069),v=function(e){var t=e.onCreateserviceRegistry,a=(0,o.useTranslation)().t,n=i().useContext(_.QuickStartContext);return i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(m.C0,{emptyStateProps:{variant:m.jU.NoItems},titleProps:{title:a("srs.empty_state_registry_title")},emptyStateBodyProps:{body:i().createElement(i().Fragment,null,i().createElement(o.Trans,{i18nKey:"srs.empty_state_registry_description",components:[i().createElement(s.Button,{variant:s.ButtonVariant.link,isSmall:!0,isInline:!0,key:"btn-quick-start",onClick:function(){return n.setActiveQuickStart&&n.setActiveQuickStart("getting-started-service-registry")}})]}))},buttonProps:{title:a("srs.create_service_registry"),variant:s.ButtonVariant.primary,onClick:t}}))},L=a(70655),E=a(27577),y=a(67480),f=a(75381),C=a(35451),T=a(41942),w=a(84564),M=function(e){var t=e.status,a=e.instanceName,n=(0,o.useTranslation)().t,r=function(){switch(null==t?void 0:t.toLowerCase()){case f.hm[0].value:return i().createElement(C.ZP,{className:"mk--instances__table--icon--completed"});case f.hm[1].value:return i().createElement(w.ZP,{className:"mk--instances__table--icon--failed"});case f.hm[2].value:return i().createElement(T.ZP,null);case f.hm[3].value:case f.hm[4].value:return i().createElement(s.Spinner,{size:"md","aria-label":a,"aria-valuetext":"Creation in progress"});case f.hm[5].value:case f.hm[6].value:return;default:return i().createElement(T.ZP,null)}}();return i().createElement(s.Flex,null,r&&i().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},r),i().createElement(s.FlexItem,null,function(){var e,a=f.hm.filter((function(e){var a;return(null===(a=e.value)||void 0===a?void 0:a.toLowerCase())===(null==t?void 0:t.toLowerCase())}));return 1===a.length?n("common.".concat(null===(e=a[0].value)||void 0===e?void 0:e.toLowerCase())):n("common.creation_pending")}()))},x=function(e){var t=e.total,a=e.page,n=e.perPage,r=e.handleCreateModal,l=(0,o.useTranslation)().t,c=[{item:i().createElement(s.Button,{variant:"primary",onClick:r,"data-testid":"tableServiceRegistry-buttonCreateServiceRegistry"},l("srs.create_service_registry"))}];return t&&t>0&&c.length>0&&c.push({item:i().createElement(m.wu,{widgetId:"pagination-options-menu-top",itemCount:t,page:a,perPage:n,isCompact:!0,titles:{paginationTitle:l("common.minimal_pagination"),perPageSuffix:l("common.per_page_suffix"),toFirstPage:l("common.to_first_page"),toPreviousPage:l("common.to_previous_page"),toLastPage:l("common.to_last_page"),toNextPage:l("common.to_next_page"),optionsToggle:l("common.options_toggle"),currPage:l("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(m.L5,{toolbarProps:{id:"registry-instance-toolbar",clearAllFilters:function(){},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:c})},S=function(e){var t=e.serviceRegistryItems,a=e.onViewConnection,c=(e.refresh,e.registryDataLoaded),u=e.onDelete,d=(e.expectedTotal,e.orderBy),g=e.setOrderBy,p=e.isDrawerOpen,_=e.loggedInUser,v=e.currentUserRegistries,C=e.total,T=void 0===C?0:C,w=e.page,S=e.perPage,I=e.handleCreateModal,b=((0,l.useAlert)()||{}).addAlert,N=((0,l.useBasename)()||{}).getBasename,h=N&&N(),D=(0,o.useTranslation)().t,j=(0,l.useAuth)(),A=(0,n.useState)(),k=A[0],P=A[1],R=(0,n.useState)([]),V=R[0],z=R[1],B=(0,n.useState)([]),F=B[0],Q=B[1],U=(0,n.useState)(),O=U[0],G=U[1],Z=[{title:D("common.name")},{title:D("common.owner")},{title:D("common.status")},{title:D("common.time_created")}];(0,n.useEffect)((function(){p||P("")}),[p]),(0,n.useEffect)((function(){null==j||j.isOrgAdmin().then((function(e){return G(e)}))}),[j]);var Y=function(){if(v){var e=v.filter((function(e){return e.status===y.RegistryStatusValue.Deprovision||e.status===y.RegistryStatusValue.Deleting})).filter((function(e){return V.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),t=(0,L.__spreadArray)((0,L.__spreadArray)([],V,!0),e,!0);z(t),t.forEach((function(e){(null==v?void 0:v.findIndex((function(t){return t.name===e})))<0&&(!function(e){var t=V.findIndex((function(t){return t===e}));if(t>-1){var a=Object.assign([],V);a.splice(t,1),z(a)}}(e),b&&b({title:D("srs.service_registry_successfully_deleted",{name:e}),variant:l.AlertVariant.success}))}))}};(0,n.useEffect)((function(){Y(),function(){var e=JSON.parse(JSON.stringify(F));if(F&&F.length>0){var a=Object.assign([],t).filter((function(e){return e.status===y.RegistryStatusValue.Ready||e.status===y.RegistryStatusValue.Failed}));e.forEach((function(e){var t=a.filter((function(t){return e.id===t.id}));if(t&&t.length>0){var n=t[0],r=n.status,o=n.name;r===y.RegistryStatusValue.Ready?b&&b({title:D("srs.registry_successfully_created"),variant:l.AlertVariant.success,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:D("srs.registry_success_message",{name:o})}}),dataTestId:"toastCreateRegistry-success"}):r===y.RegistryStatusValue.Failed&&b&&b({title:D("srs.registry_not_created"),variant:l.AlertVariant.danger,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:D("srs.registry_failed_message",{name:o})}}),dataTestId:"toastCreateRegistry-failed"})}}))}var n=Object.assign([],null==t?void 0:t.filter((function(e){return e.status===y.RegistryStatusValue.Provisioning||e.status===y.RegistryStatusValue.Accepted})));Q(n)}()}),[w,S,t,v]);var H,W=function(e){var t=e.name,a=e.row;return i().createElement(r.Link,{to:"".concat(h,"/t/").concat(null==a?void 0:a.id),"data-testid":"tableRegistries-linkKafka"},t)},K=function(e,t,n){var i,r,o;"connect-instance"===n?(a(t),P(null==t?void 0:t.id)):"delete-instance"===n&&u(t);var s=null===(o=null===(r=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.previousSibling;null!=s&&s.focus()},J=function(e){switch(e.toLowerCase()){case"name":return 0;case"owner":return 1;case"status":return 2;case"created_at":return 3;default:return}},q=function(){var e=(null==d?void 0:d.split(" "))||[];if(e.length>1)return{index:J(e[0]),direction:e[1]===E.SortByDirection.asc?E.SortByDirection.asc:E.SortByDirection.desc}};return i().createElement(s.PageSection,{className:"registry--main-page__page-section--table pf-m-padding-on-xl",variant:s.PageSectionVariants.default},i().createElement(s.Card,null,i().createElement(x,{page:w,perPage:S,total:T,handleCreateModal:I}),i().createElement(m.wR,{tableProps:{cells:Z,rows:(H=[],null==t||t.forEach((function(e){var t=e.name,a=e.created_at,n=e.status,r=e.owner,o=e.instance_type;H.push({cells:[{title:(null==n?void 0:n.toLowerCase())!==y.RegistryStatusValue.Ready?t:W({name:t,row:e})},r,{title:i().createElement(M,{status:n,instanceName:t})},{title:i().createElement(i().Fragment,null,(0,f.L0)(a,D("ago")),i().createElement("br",null),o===(null===f.ik||void 0===f.ik?void 0:f.ik.eval)&&"2-month duration")}],originalData:(0,L.__assign)((0,L.__assign)({},e),{rowId:null==e?void 0:e.id})})})),H),"aria-label":D("common.registry_instance_list"),actionResolver:function(e){var t,a,n,i=e.originalData,r=i.owner===_||O;return r||(n={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,L.__assign)((0,L.__assign)((t={title:D("srs.view_connection_information"),id:"connect-instance"},t["data-testid"]="tableRegistry-actionConnection",t.onClick=function(e){return K(e,i,"connect-instance")},t),n),{tooltipProps:{position:"left",content:D("common.no_permission_to_connect_registry")}}),(0,L.__assign)((0,L.__assign)((a={title:D("srs.delete_registry"),id:"delete-instance"},a["data-testid"]="tableRegistry-actionDelete",a.onClick=function(e){return r&&K(e,i,"delete-instance")},a),n),{tooltipProps:{position:"left",content:D("common.no_permission_to_delete_service_registry")}})]},onSort:function(e,t,a,n){var i,r=a;(null===(i=q())||void 0===i?void 0:i.index)!==t&&"time-created"===n.property&&(r="desc"),g("".concat(function(e){switch(e){case 0:return"name";case 1:return"owner";case 2:return"status";case 3:return"created_at";default:return""}}(t)," ").concat(r))},sortBy:q(),hasDefaultCustomRowWrapper:!0},activeRow:k,onRowClick:function(e,t,n){var i,r,o=n.originalData,s=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.type,l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==s&&"a"!==(null==l?void 0:l.toLowerCase())&&(a(o),P(null==o?void 0:o.id))},rowDataTestId:"tableRegistry-row",loggedInUser:_}),t.length<1&&c&&i().createElement(m.C0,{emptyStateProps:{variant:m.jU.NoResult},titleProps:{title:D("common.no_results_found")},emptyStateBodyProps:{body:D("common.adjust_your_filters_and_try_again")}}),T>0&&i().createElement(m.wu,{widgetId:"pagination-options-menu-bottom",itemCount:T,variant:s.PaginationVariant.bottom,page:w,perPage:S,titles:{paginationTitle:D("common.full_pagination"),perPageSuffix:D("common.per_page_suffix"),toFirstPage:D("common.to_first_page"),toPreviousPage:D("common.to_previous_page"),toLastPage:D("common.to_last_page"),toNextPage:D("common.to_next_page"),optionsToggle:D("common.options_toggle"),currPage:D("common.curr_page")}})))};a(12773),a(59786),a(58684),a(55623)},52311:(e,t,a)=>{a.d(t,{a:()=>l});var n=a(75418),i=a.n(n),r=a(84669),o=a(31521),s=a(75381),l=function(e){var t=e.isModalOpen,a=e.children,n=e.title,l=e.handleModalToggle,c=e.onCreate,u=e.isFormValid,m=e.isCreationInProgress,d=e.primaryButtonTitle,g=e.dataTestIdSubmit,p=e.dataTestIdCancel,_=e.id,v=void 0===_?"modalCreateKafka":_,L=e.isDisabledButton,E=(0,o.useTranslation)().t;return i().createElement(r.Modal,{id:v,variant:r.ModalVariant.medium,title:n,isOpen:t,onClose:l,appendTo:(0,s.wx)(),actions:[i().createElement(r.Button,{key:"create",variant:"primary",type:"submit",onClick:c,isDisabled:!u||m||L,spinnerAriaValueText:E("submitting_request"),isLoading:m,"data-testid":g},d),i().createElement(r.Button,{key:"cancel",variant:"link",onClick:l,"data-testid":p},E("common.cancel"))]},a)}},79441:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=a(75381),l=function(e){var t=e.isModalOpen,a=e.title,i=e.modalProps,l=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,m=e.textProps,d=e.children,g=e.selectedItemData,p=void 0===g?"":g,_=e.textInputProps,v=i||{},L=v.variant,E=void 0===L?o.ModalVariant.small:L,y=v.titleIconVariant,f=void 0===y?"warning":y,C=v["aria-label"],T=v.showClose,w=void 0===T||T,M=(0,n.__rest)(v,["variant","titleIconVariant","aria-label","showClose"]),x=l||{},S=x.id,I=void 0===S?"mas--confirm__button":S,b=x.key,N=void 0===b?"confirm-button":b,h=x.variant,D=void 0===h?o.ButtonVariant.danger:h,j=x.onClick,A=x.isDisabled,k=x.label,P=void 0===k?"Delete":k,R=x.isLoading,V=(0,n.__rest)(x,["id","key","variant","onClick","isDisabled","label","isLoading"]),z=c||{},B=z.id,F=void 0===B?"mas--cancel__button":B,Q=z.key,U=void 0===Q?'"cancel-button':Q,O=z.variant,G=void 0===O?o.ButtonVariant.link:O,Z=z.label,Y=void 0===Z?"Cancel":Z,H=(0,n.__rest)(z,["id","key","variant","label"]),W=m||{},K=W.className,J=void 0===K?"mas--delete-item__modal--text":K,q=W.description,X=(0,n.__rest)(W,["className","description"]),$=_||{},ee=$.label,te=void 0===ee?"":ee,ae=$.value,ne=$.onChange,ie=$.onKeyPress,re=$.showTextInput,oe=(0,n.__rest)($,["label","value","onChange","onKeyPress","showTextInput"]);return r().createElement(o.Modal,(0,n.__assign)({variant:E,isOpen:t,"aria-label":C,title:a,titleIconVariant:f,showClose:w,onClose:u,appendTo:(0,s.wx)(),actions:[r().createElement(o.Button,(0,n.__assign)({id:I,key:N,variant:D,onClick:function(){return j&&j(p)},isDisabled:A,isLoading:R},V),P),r().createElement(o.Button,(0,n.__assign)({id:F,key:U,variant:G,onClick:u},H),Y)]},M),q&&r().createElement(o.Text,(0,n.__assign)({className:J,dangerouslySetInnerHTML:{__html:q||""}},X)),re&&r().createElement(r().Fragment,null,r().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:te}}),r().createElement(o.TextInput,(0,n.__assign)({id:"mas--name__input",name:"mas-name-input",type:"text",value:ae,onChange:ne,onKeyPress:ie,autoFocus:!0},oe))),d)}},53242:(e,t,a)=>{a.d(t,{D:()=>l});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=a(33494),l=function(e){var t=e.onClose,a=e.isLoading,i=void 0===a||a,l=e.drawerPanelContentProps,c=e.drawerHeaderProps,u=e.isExpanded,m=e.children,d=e.panelBodyContent,g=e.onExpand,p=e.notRequiredDrawerContentBackground,_=e["data-ouia-app-id"],v=e.inlineAlertMessage,L=l||{},E=L.widths,y=(0,n.__rest)(L,["widths"]),f=c||{},C=f.text,T=f.title,w=r().createElement(o.DrawerPanelContent,(0,n.__assign)({widths:E||{default:"width_50"}},y),i?r().createElement(s.yR,null):r().createElement(r().Fragment,null,r().createElement(o.DrawerHead,null,r().createElement(o.TextContent,null,(null==C?void 0:C.label)&&r().createElement(o.Text,{component:(null==C?void 0:C.component)||o.TextVariants.small,className:(null==C?void 0:C.className)||"pf-u-mb-0"},null==C?void 0:C.label),(null==T?void 0:T.value)&&r().createElement(o.Title,{headingLevel:(null==T?void 0:T.headingLevel)||"h2",size:(null==T?void 0:T.size)||o.TitleSizes.xl,className:(null==T?void 0:T.className)||"pf-u-mt-0"},null==T?void 0:T.value)),r().createElement(o.DrawerActions,null,r().createElement(o.DrawerCloseButton,{onClick:t}))),r().createElement(o.DrawerPanelBody,null,v,d)));return r().createElement(o.Drawer,{isExpanded:u,onExpand:g,"data-ouia-app-id":_},r().createElement(o.DrawerContent,{panelContent:w,className:p?"pf-m-no-background":""},r().createElement(o.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",m)))}},91098:(e,t,a)=>{a.d(t,{C:()=>p,j:()=>d});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=a(20777),l=a(34558),c=a(5569),u=a(71070),m=a(84564);var d,g=a(76814);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(d||(d={}));var p=function(e){var t=e.titleProps,a=e.buttonProps,i=e.emptyStateIconProps,p=e.emptyStateProps,_=e.emptyStateBodyProps,v=e.children,L=a||{},E=L.variant,y=void 0===E?o.ButtonVariant.primary:E,f=L.onClick,C=(0,n.__rest)(L,["variant","onClick"]),T=t||{},w=T.title,M=(0,n.__rest)(T,["title"]),x=_||{},S=x.body,I=(0,n.__rest)(x,["body"]),b=p||{},N=b.variant,h=void 0===N?d.GettingStarted:N,D=b.className,j=(0,n.__rest)(b,["variant","className"]),A=function(){return r().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},k=function(){var e={};switch(h){case d.GettingStarted:e={variant:o.EmptyStateVariant.xl,icon:l.ZP,titleSize:o.TitleSizes["4xl"],headingLevel:"h1"};break;case d.NoAccess:e={variant:o.EmptyStateVariant.large,icon:c.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case d.NoItems:e={variant:o.EmptyStateVariant.large,icon:s.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case d.NoResult:e={variant:o.EmptyStateVariant.large,icon:u.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h2"};break;case d.UnexpectedError:e={variant:o.EmptyStateVariant.full,icon:m.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;case d.PageNotFound:e={variant:o.EmptyStateVariant.full,icon:A,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:h||o.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),P=k.variant,R=k.icon,V=k.titleSize,z=k.headingLevel;return r().createElement(o.EmptyState,(0,n.__assign)({variant:P,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",D)},j),r().createElement(o.EmptyStateIcon,(0,n.__assign)({icon:R},i)),w&&r().createElement(o.Title,(0,n.__assign)({headingLevel:z,size:V},M),w),S&&r().createElement(o.EmptyStateBody,(0,n.__assign)({},I),S),(null==a?void 0:a.title)&&r().createElement(o.Button,(0,n.__assign)({variant:y,onClick:f},C),null==a?void 0:a.title),v)}},76554:(e,t,a)=>{a.d(t,{y:()=>s});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=function(e){var t=e.bullseyeProps,a=e.spinnerProps;return r().createElement(o.Bullseye,(0,n.__assign)({},t),r().createElement(o.Spinner,(0,n.__assign)({},a)))}},86376:(e,t,a)=>{a.d(t,{wu:()=>u,bN:()=>c,h0:()=>l});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=(0,i.createContext)(void 0),l=function(){return(0,i.useContext)(s)},c=function(e){var t=e.children,a=(0,i.useState)(1),n=a[0],o=a[1],l=(0,i.useState)(10),c=l[0],u=l[1];return r().createElement(s.Provider,{value:{page:n,perPage:c,setPage:o,setPerPage:u}},t)},u=function(e){var t=e.itemCount,a=e.variant,s=void 0===a?o.PaginationVariant.top:a,c=e.isCompact,u=e.titles,m=(0,n.__rest)(e,["itemCount","variant","isCompact","titles"]),d=l()||{},g=d.setPage,p=d.setPerPage,_=d.perPage,v=d.page,L=(0,i.useCallback)((function(e,t){g&&g(t)}),[]),E=(0,i.useCallback)((function(e,t){g&&g(1),p&&p(t)}),[]);return r().createElement(o.Pagination,(0,n.__assign)({itemCount:t,perPage:_,page:v,onSetPage:L,variant:s,onPerPageSelect:E,isCompact:c},m,{titles:u}))}},42067:(e,t,a)=>{a.d(t,{w:()=>d});var n=a(70655),i=a(75418),r=a.n(i),o=a(27577),s=a(76814),l=a(67480),c=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),u=c.Provider,m=function(e){var t=(0,i.useContext)(c),a=t.activeRow,o=t.onRowClick,u=t.rowDataTestId,m=t.loggedInUser,d=e||{},g=d.trRef,p=d.className,_=d.rowProps,v=d.row,L=(0,n.__rest)(d,["trRef","className","rowProps","row"]),E=_.rowIndex,y=v.isExpanded,f=v.originalData,C=(null==f?void 0:f.status)===l.RegistryStatusValue.Deprovision||(null==f?void 0:f.status)===l.RegistryStatusValue.Deleting,T=m===(null==f?void 0:f.owner),w=C||!T;return r().createElement("tr",(0,n.__assign)({"data-testid":u,tabIndex:w?void 0:0,ref:g,className:(0,s.css)(p,"pf-c-table-row__item",C?"pf-m-disabled":T&&"pf-m-selectable",!w&&a&&a===(null==f?void 0:f.rowId)&&"pf-m-selected"),hidden:void 0!==y&&!y,onClick:function(e){return!w&&o&&o(e,E,v)}},L))},d=function(e){var t=e.tableProps,a=e.tableHeaderProps,i=e.tableBodyProps,l=e.children,c=e.activeRow,d=e.onRowClick,g=e.rowDataTestId,p=e.loggedInUser,_=t.cells,v=t.rows,L=t.actionResolver,E=t.onSort,y=t.sortBy,f=t["aria-label"],C=t.variant,T=t.className,w=t.hasDefaultCustomRowWrapper,M=void 0!==w&&w,x=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return M&&(x.rowWrapper=m),r().createElement(u,{value:{activeRow:c,onRowClick:d,rowDataTestId:g,loggedInUser:p}},r().createElement(o.Table,(0,n.__assign)({className:(0,s.css)(M&&"mas--streams-table-view__table",T),cells:_,variant:C,rows:v,"aria-label":f,actionResolver:L,onSort:E,sortBy:y},x),r().createElement(o.TableHeader,(0,n.__assign)({},a)),r().createElement(o.TableBody,(0,n.__assign)({},i)),l))}},45642:(e,t,a)=>{a.d(t,{L:()=>s});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,i=e.toolbarItems,s=e.toggleGroupItems,l=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,m=void 0===u?"md":u,d=t.inset,g=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return r().createElement(r().Fragment,null,r().createElement(o.Toolbar,(0,n.__assign)({id:l,clearAllFilters:c,inset:d,collapseListedFiltersBreakpoint:m},g),r().createElement(o.ToolbarContent,null,a&&r().createElement(o.ToolbarToggleGroup,(0,n.__assign)({toggleIcon:a.toggleIcon,breakpoint:"md"},a),s),null==i?void 0:i.map((function(e,t){var a=e.key,i=void 0===a?"mas":a,s=e.variant,l=e.className,c=e.id,u=e.alignment,m=e.item,d=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return r().createElement(o.ToolbarItem,(0,n.__assign)({key:"".concat(i,"-").concat(t),variant:s,className:l,id:c,alignment:u},d),m)})))))}},78496:(e,t,a)=>{a.d(t,{Ny:()=>E,OU:()=>T,QK:()=>C});var n,i=a(70655),r=a(75418),o=a.n(r),s=a(84669),l=a(67480),c=function(){this.name="",this.description=""},u=a(33494),m=a(31521),d=a(75381),g=a(46332),p=function(e){var t=e.quota,a=e.hasServiceRegistryCreationFailed,n=e.loadingQuota,i=e.hasUserTrialInstance,r=(0,m.useTranslation)().t,l=t||{},c=l.data,u=l.isServiceDown,d=null==c?void 0:c.get(null===g.QuotaType||void 0===g.QuotaType?void 0:g.QuotaType.srs);if(void 0===t||n)return o().createElement(s.Alert,{className:"pf-u-mb-md",variant:s.AlertVariant.info,title:r("common.instance_checking_message"),"aria-live":"polite",isInline:!0,customIcon:o().createElement(s.Spinner,{size:"md","aria-valuetext":"Checking service registry availability"})});var p="",_="",v=s.AlertVariant.danger;return!d&&i?(p="common.trial_service_registry_title",v=s.AlertVariant.warning,_="common.deploy_one_instance_alert_message"):d||i?d&&0===(null==d?void 0:d.remaining)&&(v=s.AlertVariant.warning,p="common.standard_service_registry_alert_title",_="common.standard_service_registry_alert_message"):(v=s.AlertVariant.info,p="common.trial_quota_service_registry_title"),a&&(v=s.AlertVariant.danger,p="common.service_registry_creation_failed_alert_title",_=d?"common.standard_service_registry_creation_failed_alert_message":"common.trial_service_registry_creation_failed_alert_message"),u&&(p="common.something_went_wrong",v=s.AlertVariant.danger,_="common.ams_service_down_message"),o().createElement(o().Fragment,null,p&&o().createElement(s.Alert,{className:"pf-u-mb-md",variant:v,title:r(p),"aria-live":"polite",isInline:!0},r(_)))},_=a(10069),v=function(e){var t=e.isSrsTrial,a=(0,m.useTranslation)().t,n=o().useContext(_.QuickStartContext);return o().createElement(s.TextContent,null,o().createElement(s.Text,{component:s.TextVariants.h3},a("common.instance_information")),o().createElement(s.TextList,{component:s.TextListVariants.dl},o().createElement(s.Grid,{sm:6,lg:12,hasGutter:!0},t&&o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.duration")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.duration_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.artifact_versions")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.artifact_versions_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.artifact_size")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.artifact_size_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.request_rate")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.request_rate_value")))),o().createElement(s.Button,{isSmall:!0,isInline:!0,variant:s.ButtonVariant.link,style:{marginTop:"20px"},onClick:function(){return n.setActiveQuickStart&&n.setActiveQuickStart("getting-started-service-registry")}},a("common.quick_start_guide_message"))))},L=a(98068),E={CREATE_SERVICE_REGISTRY:"CREATE_SERVICE_REGISTRY",DELETE_SERVICE_REGISTRY:"DELETE_SERVICE_REGISTRY"},y=((n={})[E.CREATE_SERVICE_REGISTRY]=function(){var e,t=new c,a=(0,u.QK)(),n=a.store,_=a.hideModal,L=(null==n?void 0:n.modalProps)||{},E=L.fetchServiceRegistries,y=L.hasUserTrialInstance,f=(0,m.useTranslation)().t,C=(0,g.useAuth)(),T=(0,g.useConfig)().srs.apiBasePath,w=((0,g.useAlert)()||{}).addAlert,M=((0,g.useQuota)()||{}).getQuota,x=(0,r.useState)({fieldState:"default"}),S=x[0],I=x[1],b=(0,r.useState)(t),N=b[0],h=b[1],D=(0,r.useState)(!0),j=D[0],A=D[1],k=(0,r.useState)(!1),P=k[0],R=k[1],V=(0,r.useState)(),z=V[0],B=V[1],F=(0,r.useState)(!1),Q=F[0],U=F[1],O=null===(e=null==z?void 0:z.data)||void 0===e?void 0:e.get(null===g.QuotaType||void 0===g.QuotaType?void 0:g.QuotaType.srs),G=void 0===(null==z?void 0:z.loading)||(null==z?void 0:z.loading),Z=!O,Y=G||y||Q||O&&0===(null==O?void 0:O.remaining),H=function(){I({fieldState:"default"}),h(t),A(!0)};(0,r.useEffect)((function(){(0,i.__awaiter)(void 0,void 0,void 0,(function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return M?[4,M().then((function(e){B(e)}))]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[]),(0,r.useEffect)((function(){"error"!==S.fieldState&&A(!0)}),[S]);var W,K,J,q=function(e){h((0,i.__assign)((0,i.__assign)({},N),{name:e}));var t=!0;e&&!/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.trim())&&(t=!1),e&&e.length>d.xe?I({fieldState:"error",message:f("srs.service_registry_name_length_is_greater_than_expected",{maxLength:d.xe})}):t&&"error"===S.fieldState?I({fieldState:"default",message:""}):t||I({fieldState:"error",message:f("common.input_filed_invalid_helper_text")})},X=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e,t,a,n;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return e=function(){var e=!0,t=N.name;return t&&""!==t.trim()?/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(t.trim())||(e=!1,I({fieldState:"error",message:f("common.input_filed_invalid_helper_text")})):(e=!1,I({fieldState:"error",message:f("common.this_is_a_required_field")})),t.length>d.xe&&(e=!1,I({fieldState:"error",message:f("srs.service_registry_name_length_is_greater_than_expected",{maxLength:d.xe})})),e}(),[4,null==C?void 0:C.srs.getToken()];case 1:if(t=i.sent(),!e)return A(!1),[2];if(!t)return[3,5];a=new l.RegistriesApi(new l.Configuration({accessToken:t,basePath:T})),i.label=2;case 2:return i.trys.push([2,4,,5]),R(!0),[4,a.createRegistry({name:N.name}).then((function(){_(),H(),E&&E(),R(!1)}))];case 3:return i.sent(),[3,5];case 4:return n=i.sent(),R(!1),function(e){var t,a,n,i;(0,d.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason,i=null===(a=e.response)||void 0===a?void 0:a.data.code),i===d.SM.FAILED_TO_CHECK_QUOTA||i===d.SM.USER_ALREADY_HAVE_TRIAL_INSTANCE||i===d.SM.INSUFFICIENT_QUOTA||i===d.SM.INSUFFICIENT_STANDARD_QUOTA?U(!0):w&&w({title:f("something_went_wrong"),variant:g.AlertVariant.danger,description:n})}(n),[3,5];case 5:return[2]}}))}))},$=function(e){e.preventDefault(),X()};return o().createElement(u.a$,{id:"modalCreateSRegistry",isModalOpen:!0,title:f("srs.create_service_registry_instance"),handleModalToggle:function(){H(),_()},onCreate:X,isFormValid:j,primaryButtonTitle:"Create",isCreationInProgress:P,dataTestIdSubmit:"modalCreateServiceRegistry-buttonSubmit",dataTestIdCancel:"modalCreateServiceRegistry-buttonCancel",isDisabledButton:Y},o().createElement(p,{quota:z,hasServiceRegistryCreationFailed:Q,loadingQuota:G,hasUserTrialInstance:y}),o().createElement(s.Flex,{direction:{default:"column",lg:"row"}},o().createElement(s.FlexItem,{flex:{default:"flex_2"}}," ",(W=S.message,K=S.fieldState,J=N.name,o().createElement(s.Form,{onSubmit:$},!j&&o().createElement(s.FormAlert,null,o().createElement(s.Alert,{variant:"danger",title:f("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})),o().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:W,validated:K,helperText:f("common.input_filed_invalid_helper_text")},o().createElement(s.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:J,onChange:q,validated:K,autoFocus:!0}))))),o().createElement(s.Divider,{isVertical:!0}),o().createElement(s.FlexItem,{flex:{default:"flex_1"},className:"mk--create-instance-modal__sidebar--content"},o().createElement(v,{isSrsTrial:Z}))))},n[E.DELETE_SERVICE_REGISTRY]=function(){var e=(0,m.useTranslation)().t,t=(0,g.useAlert)().addAlert,a=(0,L.useHistory)(),n=(0,g.useAuth)(),s=(0,g.useConfig)().srs.apiBasePath,c=(0,g.useBasename)(),p=(0,u.QK)(),_=p.store,v=p.hideModal,E=(null==_?void 0:_.modalProps)||{},y=E.title,f=E.confirmButtonProps,C=E.cancelButtonProps,T=E.textProps,w=E.serviceRegistryStatus,M=E.selectedItemData,x=E.onClose,S=E.fetchRegistries,I=E.shouldRedirect,b=null==M?void 0:M.name,N=(0,r.useState)(),h=N[0],D=N[1],j=(0,r.useState)(!1),A=j[0],k=j[1],P=function(){return(null==w?void 0:w.toLowerCase())===l.RegistryStatusValue.Ready&&(null==h?void 0:h.toLowerCase())!==(null==b?void 0:b.toLowerCase())},R=function(){D(""),v(),x&&x()};return o().createElement(u.AX,{isModalOpen:!0,title:y,confirmButtonProps:(0,i.__assign)((0,i.__assign)({isDisabled:P(),"data-testid":"modalDeleteRegistry-buttonDelete"},f),{onClick:function(r){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var o,u,m;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return o=r.id,u=r.name,[4,null==n?void 0:n.srs.getToken()];case 1:return m=i.sent(),o?(k(!0),[4,new l.RegistriesApi(new l.Configuration({accessToken:m,basePath:s})).deleteRegistry(o).then((function(){k(!1),t({title:e("srs.service_registry_deletion_success_message",{name:u}),variant:g.AlertVariant.success}),I?a.push(c.getBasename()):S&&S(),R()})).catch((function(a){k(!1),function(a){var n,i;(0,d.G6)(a)&&(i=null===(n=a.response)||void 0===n?void 0:n.data.reason),t({title:e("common.something_went_wrong"),variant:g.AlertVariant.danger,description:i})}(a)}))]):[3,3];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},isLoading:A}),cancelButtonProps:C,handleModalToggle:R,textProps:T,selectedItemData:M,textInputProps:{showTextInput:(null==w?void 0:w.toLowerCase())===l.RegistryStatusValue.Ready,label:e("common.service_registry_name_label",{name:b}),value:h,onChange:function(e){D(e)},onKeyPress:function(e){"Enter"!==e.key||P()||(null==f?void 0:f.onClick)&&f.onClick(M)},autoFocus:!0}})},n),f=(0,r.createContext)({showModal:function(){},hideModal:function(){},store:{}}),C=function(){return(0,r.useContext)(f)},T=function(e){var t,a=e.children,n=(0,r.useState)(),s=n[0],l=n[1],c=s||{},u=c.modalType,m=c.modalProps;return o().createElement(f.Provider,{value:{store:s,showModal:function(e,t){void 0===t&&(t={}),l((0,i.__assign)((0,i.__assign)({},s),{modalType:e,modalProps:t}))},hideModal:function(){l((0,i.__assign)((0,i.__assign)({},s),{modalType:null,modalProps:{}}))}}},(t=y[u],u&&t?o().createElement(t,(0,i.__assign)({id:"global-modal"},m)):null),a)}},75381:(e,t,a)=>{a.d(t,{ik:()=>n.ik,xe:()=>n.xe,L0:()=>n.L0,wx:()=>n.wx,hm:()=>n.hm,SM:()=>i.S,G6:()=>i.G});a(82519);var n=a(52648),i=a(78261)}}]);
//# sourceMappingURL=873.efb8daaa.js.map