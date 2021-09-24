"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[622],{87502:()=>{},26280:(e,t,a)=>{a.d(t,{OP:()=>g,EG:()=>_,mt:()=>c,UW:()=>S,nA:()=>p});var n=a(75418),i=a.n(n),r=a(98068),o=a(11593),s=a(84669),l=a(42589),c=function(e){var t=e.onConnectToRegistry,a=e.onDeleteRegistry,c=e.breadcrumbId,u=e.serviceRegistryDetails,m=(0,o.useTranslation)().t,d=!1,g=(0,n.useState)(),p=g[0],_=g[1],v=(0,l.useBasename)();null!=c&&(d=!0,m(c));var L=[i().createElement(s.DropdownItem,{key:"connect-registry",onClick:function(){return t&&t(u)}},m("srs.view_connection_information")),i().createElement(s.DropdownItem,{key:"delete-registry",onClick:function(){return a&&a(u)}},m("srs.delete_registry"))];return i().createElement(s.PageSection,{variant:s.PageSectionVariants.light},i().createElement(s.Level,null,i().createElement(s.LevelItem,null,d?i().createElement(s.Breadcrumb,null,i().createElement(s.BreadcrumbItem,null,i().createElement(r.Link,{to:v.getBasename()||"/"}," ",m("srs.service_registry_breadcrumb"))),i().createElement(s.BreadcrumbItem,{isActive:!0},null==u?void 0:u.name)):i().createElement(s.TextContent,null,i().createElement(s.Text,{component:"h1"}," ",m("srs.service_registry")))),c&&i().createElement(s.LevelItem,null,i().createElement(s.Dropdown,{onSelect:function(){_(!p)},toggle:i().createElement(s.KebabToggle,{onToggle:function(e){_(e)},id:"toggle-service-registry"}),isOpen:p,isPlain:!0,dropdownItems:L,position:s.DropdownPosition.right}))))},u=a(33494),m=a(70251),d=function(e){var t=e.registryApisUrl,a=e.tokenEndPointUrl,n=(0,o.useTranslation)().t,r=[{title:n("srs.connection_content_1"),code:t+"/apis/registry/v2"},{title:n("srs.connection_content_2"),code:t+"/apis/ccompat/v6"},{title:n("srs.connection_content_3"),code:t+"/apis/cncf/v0"}];return i().createElement("div",{className:"mas--details__drawer--tab-content"},i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},n("common.connection"))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.small},n("srs.connection_title_info"))),i().createElement(s.Form,null,null==r?void 0:r.map((function(e,a){var r=e.title,o=e.code;return t?i().createElement(s.FormGroup,{label:r,fieldId:"copy-clipboard-"+a,key:o+"'-'"+a},i().createElement(s.ClipboardCopy,{id:"copy-clipboard-"+a,hoverTip:n("common.copy_clipboard"),clickTip:n("common.copy_clipboard_successfully"),textAriaLabel:r,isReadOnly:!0},o)):i().createElement(s.Skeleton,{fontSize:"2xl"})}))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h3,className:"pf-u-mt-xl"},n("srs.authentication_method")),i().createElement(s.Text,{component:s.TextVariants.h4,className:"pf-u-mt-md"},n("srs.oauth")," ",i().createElement(s.Label,{color:"green"},n("srs.recommended")),i().createElement(s.Popover,{"aria-label":n("srs.oauth"),bodyContent:i().createElement("div",null,n("srs.oauth_popover_content"))},i().createElement(s.Button,{variant:s.ButtonVariant.plain,"aria-label":n("more_info_about_oauth")},i().createElement(m.HelpIcon,null)))),i().createElement(s.Text,{component:s.TextVariants.small},n("srs.oauth_description")),i().createElement(s.Text,{component:s.TextVariants.h6,className:"pf-u-mt-md"},n("srs.token_endpoint_url")),i().createElement(s.ClipboardCopy,null,a)),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h4,className:"pf-u-mt-md"},n("srs.http_basic")),i().createElement(s.Text,{component:s.TextVariants.small},n("srs.http_basic_description"))))},g=function(e){var t=e.isExpanded,a=e.isLoading,n=e.onClose,r=e["data-ouia-app-id"],s=e.children,l=e.notRequiredDrawerContentBackground,c=e.registry,m=e.tokenEndPointUrl,g=(0,o.useTranslation)().t,p=c||{},_=p.registryUrl,v=p.name,L=i().createElement(d,{registryApisUrl:_,tokenEndPointUrl:m});return i().createElement(u.D5,{isExpanded:t,isLoading:a,onClose:n,panelBodyContent:L,drawerHeaderProps:{text:{label:g("srs.service_registry_instance_name")},title:{value:v,headingLevel:"h1"}},"data-ouia-app-id":r,notRequiredDrawerContentBackground:l},s)},p=function(e){var t=e.getAccessToServiceRegistry,a=(0,o.useTranslation)().t;return i().createElement(i().Fragment,null,i().createElement(c,{showKebab:!1}),i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoAccess},titleProps:{title:a("srs.unauthorized_empty_state_title")},emptyStateBodyProps:{body:a("srs.unauthorized_empty_state_body")},buttonProps:{title:a("srs.get_access_to_service_registry"),variant:s.ButtonVariant.primary,onClick:t}})))},_=function(e){var t=e.onCreateserviceRegistry,a=(0,o.useTranslation)().t;return i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoItems},titleProps:{title:a("srs.empty_state_registry_title")},emptyStateBodyProps:{body:a("srs.empty_state_registry_description")},buttonProps:{title:a("srs.create_service_registry"),variant:s.ButtonVariant.primary,onClick:t}}))},v=a(70655),L=a(27577),y=a(72979),f=a(75381),E=a(35451),C=a(41942),w=a(84564),T=function(e){var t=e.status,a=e.instanceName,n=(0,o.useTranslation)().t,r=function(){switch(null==t?void 0:t.toLowerCase()){case f.hm[0].value:return i().createElement(E.ZP,{className:"mk--instances__table--icon--completed"});case f.hm[1].value:return i().createElement(w.ZP,{className:"mk--instances__table--icon--failed"});case f.hm[2].value:return i().createElement(C.ZP,null);case f.hm[3].value:case f.hm[4].value:return i().createElement(s.Spinner,{size:"md","aria-label":a,"aria-valuetext":"Creation in progress"});case f.hm[5].value:case f.hm[6].value:return;default:return i().createElement(C.ZP,null)}}();return i().createElement(s.Flex,null,r&&i().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},r),i().createElement(s.FlexItem,null,function(){var e,a=f.hm.filter((function(e){var a;return(null===(a=e.value)||void 0===a?void 0:a.toLowerCase())===(null==t?void 0:t.toLowerCase())}));return 1===a.length?n("common."+(null===(e=a[0].value)||void 0===e?void 0:e.toLowerCase())):n("common.creation_pending")}()))},M=function(e){var t=e.total,a=e.page,n=e.perPage,r=e.handleCreateModal,l=(0,o.useTranslation)().t,c=[{item:i().createElement(s.Button,{variant:"primary",onClick:r,"data-testid":"tableServiceRegistry-buttonCreateServiceRegistry"},l("srs.create_service_registry"))}];return t&&t>0&&c.length>0&&c.push({item:i().createElement(u.wu,{widgetId:"pagination-options-menu-top",itemCount:t,page:a,perPage:n,isCompact:!0,titles:{paginationTitle:l("common.minimal_pagination"),perPageSuffix:l("common.per_page_suffix"),toFirstPage:l("common.to_first_page"),toPreviousPage:l("common.to_previous_page"),toLastPage:l("common.to_last_page"),toNextPage:l("common.to_next_page"),optionsToggle:l("common.options_toggle"),currPage:l("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(u.L5,{toolbarProps:{id:"registry-instance-toolbar",clearAllFilters:function(){},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:c})},S=function(e){var t=e.serviceRegistryItems,a=e.onViewConnection,c=(e.refresh,e.registryDataLoaded),m=e.onDelete,d=(e.expectedTotal,e.orderBy),g=e.setOrderBy,p=e.isDrawerOpen,_=e.loggedInUser,E=e.currentUserRegistries,C=e.total,w=void 0===C?0:C,S=e.page,x=e.perPage,b=e.handleCreateModal,I=((0,l.useAlert)()||{}).addAlert,N=((0,l.useBasename)()||{}).getBasename,h=N&&N(),D=(0,o.useTranslation)().t,P=(0,l.useAuth)(),j=(0,n.useState)(),A=j[0],R=j[1],k=(0,n.useState)([]),z=k[0],V=k[1],B=(0,n.useState)([]),F=B[0],U=B[1],O=(0,n.useState)(),Q=O[0],G=O[1],Z=[{title:D("common.name")},{title:D("common.owner")},{title:D("common.status")},{title:D("common.time_created")}];(0,n.useEffect)((function(){p||R("")}),[p]),(0,n.useEffect)((function(){null==P||P.isOrgAdmin().then((function(e){return G(e)}))}),[P]);var H=function(){if(E){var e=E.filter((function(e){return e.status===y.RegistryStatusValueRest.Deprovision||e.status===y.RegistryStatusValueRest.Deleting})).filter((function(e){return z.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),t=(0,v.__spreadArray)((0,v.__spreadArray)([],z,!0),e,!0);V(t),t.forEach((function(e){(null==E?void 0:E.findIndex((function(t){return t.name===e})))<0&&(!function(e){var t=z.findIndex((function(t){return t===e}));if(t>-1){var a=Object.assign([],z);a.splice(t,1),V(a)}}(e),I&&I({title:D("srs.service_registry_successfully_deleted",{name:e}),variant:l.AlertVariant.success}))}))}};(0,n.useEffect)((function(){H(),function(){var e=JSON.parse(JSON.stringify(F));if(F&&F.length>0){var a=Object.assign([],t).filter((function(e){return e.status===y.RegistryStatusValueRest.Ready||e.status===y.RegistryStatusValueRest.Failed}));e.forEach((function(e){var t=a.filter((function(t){return e.id===t.id}));if(t&&t.length>0){var n=t[0],r=n.status,o=n.name;r===y.RegistryStatusValueRest.Ready?I&&I({title:D("srs.registry_successfully_created"),variant:l.AlertVariant.success,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:D("srs.registry_success_message",{name:o})}}),dataTestId:"toastCreateRegistry-success"}):r===y.RegistryStatusValueRest.Failed&&I&&I({title:D("srs.registry_not_created"),variant:l.AlertVariant.danger,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:D("srs.registry_failed_message",{name:o})}}),dataTestId:"toastCreateRegistry-failed"})}}))}var n=Object.assign([],null==t?void 0:t.filter((function(e){return e.status===y.RegistryStatusValueRest.Provisioning||e.status===y.RegistryStatusValueRest.Accepted})));U(n)}()}),[S,x,t,E]);var Y,W=function(e){var t=e.name,a=e.row;return i().createElement(r.Link,{to:h+"/t/"+(null==a?void 0:a.id),"data-testid":"tableRegistries-linkKafka"},t)},K=function(e,t,n){var i,r,o;"connect-instance"===n?(a(t),R(null==t?void 0:t.id)):"delete-instance"===n&&m(t);var s=null===(o=null===(r=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.previousSibling;null!=s&&s.focus()},J=function(e){switch(e.toLowerCase()){case"name":return 0;case"owner":return 1;case"status":return 2;case"created_at":return 3;default:return}},X=function(){var e=(null==d?void 0:d.split(" "))||[];if(e.length>1)return{index:J(e[0]),direction:e[1]===L.SortByDirection.asc?L.SortByDirection.asc:L.SortByDirection.desc}};return i().createElement(s.PageSection,{className:"registry--main-page__page-section--table pf-m-padding-on-xl",variant:s.PageSectionVariants.default},i().createElement(s.Card,null,i().createElement(M,{page:S,perPage:x,total:w,handleCreateModal:b}),i().createElement(u.wR,{tableProps:{cells:Z,rows:(Y=[],null==t||t.forEach((function(e){var t=e.name,a=e.created_at,n=e.status,r=e.owner,o=e.instance_type;Y.push({cells:[{title:(null==n?void 0:n.toLowerCase())!==y.RegistryStatusValueRest.Ready?t:W({name:t,row:e})},r,{title:i().createElement(T,{status:n,instanceName:t})},{title:i().createElement(i().Fragment,null,(0,f.L0)(a,D("ago")),i().createElement("br",null),o===(null===f.ik||void 0===f.ik?void 0:f.ik.eval)&&"2-month duration")}],originalData:(0,v.__assign)((0,v.__assign)({},e),{rowId:null==e?void 0:e.id})})})),Y),"aria-label":D("common.registry_instance_list"),actionResolver:function(e){var t,a,n,i=e.originalData,r=i.owner===_||Q;return r||(n={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,v.__assign)((0,v.__assign)((t={title:D("srs.view_connection_information"),id:"connect-instance"},t["data-testid"]="tableRegistry-actionConnection",t.onClick=function(e){return r&&K(e,i,"connect-instance")},t),n),{tooltipProps:{position:"left",content:D("common.no_permission_to_connect_registry")}}),(0,v.__assign)((0,v.__assign)((a={title:D("srs.delete_registry"),id:"delete-instance"},a["data-testid"]="tableRegistry-actionDelete",a.onClick=function(e){return r&&K(e,i,"delete-instance")},a),n),{tooltipProps:{position:"left",content:D("common.no_permission_to_delete_service_registry")}})]},onSort:function(e,t,a,n){var i,r=a;(null===(i=X())||void 0===i?void 0:i.index)!==t&&"time-created"===n.property&&(r="desc"),g(function(e){switch(e){case 0:return"name";case 1:return"owner";case 2:return"status";case 3:return"created_at";default:return""}}(t)+" "+r)},sortBy:X(),hasDefaultCustomRowWrapper:!0},activeRow:A,onRowClick:function(e,t,n){var i,r,o=n.originalData,s=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.type,l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==s&&"a"!==(null==l?void 0:l.toLowerCase())&&(a(o),R(null==o?void 0:o.id))},rowDataTestId:"tableRegistry-row",loggedInUser:_}),t.length<1&&c&&i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoResult},titleProps:{title:D("common.no_results_found")},emptyStateBodyProps:{body:D("common.adjust_your_filters_and_try_again")}}),w>0&&i().createElement(u.wu,{widgetId:"pagination-options-menu-bottom",itemCount:w,variant:s.PaginationVariant.bottom,page:S,perPage:x,titles:{paginationTitle:D("common.full_pagination"),perPageSuffix:D("common.per_page_suffix"),toFirstPage:D("common.to_first_page"),toPreviousPage:D("common.to_previous_page"),toLastPage:D("common.to_last_page"),toNextPage:D("common.to_next_page"),optionsToggle:D("common.options_toggle"),currPage:D("common.curr_page")}})))}},52311:(e,t,a)=>{a.d(t,{a:()=>l});var n=a(75418),i=a.n(n),r=a(84669),o=a(11593),s=a(75381),l=function(e){var t=e.isModalOpen,a=e.children,n=e.title,l=e.handleModalToggle,c=e.onCreate,u=e.isFormValid,m=e.isCreationInProgress,d=e.primaryButtonTitle,g=e.dataTestIdSubmit,p=e.dataTestIdCancel,_=e.id,v=void 0===_?"modalCreateKafka":_,L=e.isDisabledButton,y=(0,o.useTranslation)().t;return i().createElement(r.Modal,{id:v,variant:r.ModalVariant.medium,title:n,isOpen:t,onClose:l,appendTo:(0,s.wx)(),actions:[i().createElement(r.Button,{key:"create",variant:"primary",type:"submit",onClick:c,isDisabled:!u||m||L,spinnerAriaValueText:y("submitting_request"),isLoading:m,"data-testid":g},d),i().createElement(r.Button,{key:"cancel",variant:"link",onClick:l,"data-testid":p},y("common.cancel"))]},a)}},79441:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=a(75381),l=function(e){var t=e.isModalOpen,a=e.title,i=e.modalProps,l=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,m=e.textProps,d=e.children,g=e.selectedItemData,p=void 0===g?"":g,_=e.textInputProps,v=i||{},L=v.variant,y=void 0===L?o.ModalVariant.small:L,f=v.titleIconVariant,E=void 0===f?"warning":f,C=v["aria-label"],w=v.showClose,T=void 0===w||w,M=(0,n.__rest)(v,["variant","titleIconVariant","aria-label","showClose"]),S=l||{},x=S.id,b=void 0===x?"mas--confirm__button":x,I=S.key,N=void 0===I?"confirm-button":I,h=S.variant,D=void 0===h?o.ButtonVariant.danger:h,P=S.onClick,j=S.isDisabled,A=S.label,R=void 0===A?"Delete":A,k=S.isLoading,z=(0,n.__rest)(S,["id","key","variant","onClick","isDisabled","label","isLoading"]),V=c||{},B=V.id,F=void 0===B?"mas--cancel__button":B,U=V.key,O=void 0===U?'"cancel-button':U,Q=V.variant,G=void 0===Q?o.ButtonVariant.link:Q,Z=V.label,H=void 0===Z?"Cancel":Z,Y=(0,n.__rest)(V,["id","key","variant","label"]),W=m||{},K=W.className,J=void 0===K?"mas--delete-item__modal--text":K,X=W.description,q=(0,n.__rest)(W,["className","description"]),$=_||{},ee=$.label,te=void 0===ee?"":ee,ae=$.value,ne=$.onChange,ie=$.onKeyPress,re=$.showTextInput,oe=(0,n.__rest)($,["label","value","onChange","onKeyPress","showTextInput"]);return r().createElement(o.Modal,(0,n.__assign)({variant:y,isOpen:t,"aria-label":C,title:a,titleIconVariant:E,showClose:T,onClose:u,appendTo:(0,s.wx)(),actions:[r().createElement(o.Button,(0,n.__assign)({id:b,key:N,variant:D,onClick:function(){return P&&P(p)},isDisabled:j,isLoading:k},z),R),r().createElement(o.Button,(0,n.__assign)({id:F,key:O,variant:G,onClick:u},Y),H)]},M),X&&r().createElement(o.Text,(0,n.__assign)({className:J,dangerouslySetInnerHTML:{__html:X||""}},q)),re&&r().createElement(r().Fragment,null,r().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:te}}),r().createElement(o.TextInput,(0,n.__assign)({id:"mas--name__input",name:"mas-name-input",type:"text",value:ae,onChange:ne,onKeyPress:ie,autoFocus:!0},oe))),d)}},53242:(e,t,a)=>{a.d(t,{D:()=>l});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=a(33494),l=function(e){var t=e.onClose,a=e.isLoading,i=void 0===a||a,l=e.drawerPanelContentProps,c=e.drawerHeaderProps,u=e.isExpanded,m=e.children,d=e.panelBodyContent,g=e.onExpand,p=e.notRequiredDrawerContentBackground,_=e["data-ouia-app-id"],v=e.inlineAlertMessage,L=l||{},y=L.widths,f=(0,n.__rest)(L,["widths"]),E=c||{},C=E.text,w=E.title,T=r().createElement(o.DrawerPanelContent,(0,n.__assign)({widths:y||{default:"width_50"}},f),i?r().createElement(s.yR,null):r().createElement(r().Fragment,null,r().createElement(o.DrawerHead,null,r().createElement(o.TextContent,null,(null==C?void 0:C.label)&&r().createElement(o.Text,{component:(null==C?void 0:C.component)||o.TextVariants.small,className:(null==C?void 0:C.className)||"pf-u-mb-0"},null==C?void 0:C.label),(null==w?void 0:w.value)&&r().createElement(o.Title,{headingLevel:(null==w?void 0:w.headingLevel)||"h2",size:(null==w?void 0:w.size)||o.TitleSizes.xl,className:(null==w?void 0:w.className)||"pf-u-mt-0"},null==w?void 0:w.value)),r().createElement(o.DrawerActions,null,r().createElement(o.DrawerCloseButton,{onClick:t}))),r().createElement(o.DrawerPanelBody,null,v,d)));return r().createElement(o.Drawer,{isExpanded:u,onExpand:g,"data-ouia-app-id":_},r().createElement(o.DrawerContent,{panelContent:T,className:p?"pf-m-no-background":""},r().createElement(o.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",m)))}},91098:(e,t,a)=>{a.d(t,{C:()=>p,j:()=>d});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=a(20777),l=a(34558),c=a(5569),u=a(71070),m=a(84564);var d,g=a(76814);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(d||(d={}));var p=function(e){var t=e.titleProps,a=e.buttonProps,i=e.emptyStateIconProps,p=e.emptyStateProps,_=e.emptyStateBodyProps,v=e.children,L=a||{},y=L.variant,f=void 0===y?o.ButtonVariant.primary:y,E=L.onClick,C=(0,n.__rest)(L,["variant","onClick"]),w=t||{},T=w.title,M=(0,n.__rest)(w,["title"]),S=_||{},x=S.body,b=(0,n.__rest)(S,["body"]),I=p||{},N=I.variant,h=void 0===N?d.GettingStarted:N,D=I.className,P=(0,n.__rest)(I,["variant","className"]),j=function(){return r().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},A=function(){var e={};switch(h){case d.GettingStarted:e={variant:o.EmptyStateVariant.xl,icon:l.ZP,titleSize:o.TitleSizes["4xl"],headingLevel:"h1"};break;case d.NoAccess:e={variant:o.EmptyStateVariant.large,icon:c.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case d.NoItems:e={variant:o.EmptyStateVariant.large,icon:s.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case d.NoResult:e={variant:o.EmptyStateVariant.large,icon:u.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h2"};break;case d.UnexpectedError:e={variant:o.EmptyStateVariant.full,icon:m.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;case d.PageNotFound:e={variant:o.EmptyStateVariant.full,icon:j,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:h||o.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),R=A.variant,k=A.icon,z=A.titleSize,V=A.headingLevel;return r().createElement(o.EmptyState,(0,n.__assign)({variant:R,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",D)},P),r().createElement(o.EmptyStateIcon,(0,n.__assign)({icon:k},i)),T&&r().createElement(o.Title,(0,n.__assign)({headingLevel:V,size:z},M),T),x&&r().createElement(o.EmptyStateBody,(0,n.__assign)({},b),x),(null==a?void 0:a.title)&&r().createElement(o.Button,(0,n.__assign)({variant:f,onClick:E},C),null==a?void 0:a.title),v)}},76554:(e,t,a)=>{a.d(t,{y:()=>s});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=function(e){var t=e.bullseyeProps,a=e.spinnerProps;return r().createElement(o.Bullseye,(0,n.__assign)({},t),r().createElement(o.Spinner,(0,n.__assign)({},a)))}},86376:(e,t,a)=>{a.d(t,{wu:()=>u,bN:()=>c,h0:()=>l});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=(0,i.createContext)(void 0),l=function(){return(0,i.useContext)(s)},c=function(e){var t=e.children,a=(0,i.useState)(1),n=a[0],o=a[1],l=(0,i.useState)(10),c=l[0],u=l[1];return r().createElement(s.Provider,{value:{page:n,perPage:c,setPage:o,setPerPage:u}},t)},u=function(e){var t=e.itemCount,a=e.variant,s=void 0===a?o.PaginationVariant.top:a,c=e.isCompact,u=e.titles,m=(0,n.__rest)(e,["itemCount","variant","isCompact","titles"]),d=l()||{},g=d.setPage,p=d.setPerPage,_=d.perPage,v=d.page,L=(0,i.useCallback)((function(e,t){g&&g(t)}),[]),y=(0,i.useCallback)((function(e,t){g&&g(1),p&&p(t)}),[]);return r().createElement(o.Pagination,(0,n.__assign)({itemCount:t,perPage:_,page:v,onSetPage:L,variant:s,onPerPageSelect:y,isCompact:c},m,{titles:u}))}},42067:(e,t,a)=>{a.d(t,{w:()=>d});var n=a(70655),i=a(75418),r=a.n(i),o=a(27577),s=a(76814),l=a(72979),c=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),u=c.Provider,m=function(e){var t=(0,i.useContext)(c),a=t.activeRow,o=t.onRowClick,u=t.rowDataTestId,m=t.loggedInUser,d=e||{},g=d.trRef,p=d.className,_=d.rowProps,v=d.row,L=(0,n.__rest)(d,["trRef","className","rowProps","row"]),y=_.rowIndex,f=v.isExpanded,E=v.originalData,C=(null==E?void 0:E.status)===l.RegistryStatusValueRest.Deprovision||(null==E?void 0:E.status)===l.RegistryStatusValueRest.Deleting,w=m===(null==E?void 0:E.owner),T=C||!w;return r().createElement("tr",(0,n.__assign)({"data-testid":u,tabIndex:T?void 0:0,ref:g,className:(0,s.css)(p,"pf-c-table-row__item",C?"pf-m-disabled":w&&"pf-m-selectable",!T&&a&&a===(null==E?void 0:E.rowId)&&"pf-m-selected"),hidden:void 0!==f&&!f,onClick:function(e){return!T&&o&&o(e,y,v)}},L))},d=function(e){var t=e.tableProps,a=e.tableHeaderProps,i=e.tableBodyProps,l=e.children,c=e.activeRow,d=e.onRowClick,g=e.rowDataTestId,p=e.loggedInUser,_=t.cells,v=t.rows,L=t.actionResolver,y=t.onSort,f=t.sortBy,E=t["aria-label"],C=t.variant,w=t.className,T=t.hasDefaultCustomRowWrapper,M=void 0!==T&&T,S=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return M&&(S.rowWrapper=m),r().createElement(u,{value:{activeRow:c,onRowClick:d,rowDataTestId:g,loggedInUser:p}},r().createElement(o.Table,(0,n.__assign)({className:(0,s.css)(M&&"mas--streams-table-view__table",w),cells:_,variant:C,rows:v,"aria-label":E,actionResolver:L,onSort:y,sortBy:f},S),r().createElement(o.TableHeader,(0,n.__assign)({},a)),r().createElement(o.TableBody,(0,n.__assign)({},i)),l))}},45642:(e,t,a)=>{a.d(t,{L:()=>s});var n=a(70655),i=a(75418),r=a.n(i),o=a(84669),s=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,i=e.toolbarItems,s=e.toggleGroupItems,l=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,m=void 0===u?"md":u,d=t.inset,g=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return r().createElement(r().Fragment,null,r().createElement(o.Toolbar,(0,n.__assign)({id:l,clearAllFilters:c,inset:d,collapseListedFiltersBreakpoint:m},g),r().createElement(o.ToolbarContent,null,a&&r().createElement(o.ToolbarToggleGroup,(0,n.__assign)({toggleIcon:a.toggleIcon,breakpoint:"md"},a),s),null==i?void 0:i.map((function(e,t){var a=e.key,i=void 0===a?"mas":a,s=e.variant,l=e.className,c=e.id,u=e.alignment,m=e.item,d=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return r().createElement(o.ToolbarItem,(0,n.__assign)({key:i+"-"+t,variant:s,className:l,id:c,alignment:u},d),m)})))))}},78496:(e,t,a)=>{a.d(t,{Ny:()=>L,OU:()=>C,QK:()=>E});var n,i=a(70655),r=a(75418),o=a.n(r),s=a(84669),l=a(72979),c=function(){this.name="",this.description=""},u=a(33494),m=a(11593),d=a(75381),g=a(42589),p=function(e){var t=e.quota,a=e.hasServiceRegistryCreationFailed,n=e.loadingQuota,i=e.hasUserTrialInstance,r=(0,m.useTranslation)().t,l=t||{},c=l.data,u=l.isServiceDown,d=null==c?void 0:c.get(null===g.QuotaType||void 0===g.QuotaType?void 0:g.QuotaType.srs);if(void 0===t||n)return o().createElement(s.Alert,{className:"pf-u-mb-md",variant:s.AlertVariant.info,title:r("common.instance_checking_message"),"aria-live":"polite",isInline:!0,customIcon:o().createElement(s.Spinner,{size:"md","aria-valuetext":"Checking service registry availability"})});var p="",_="",v=s.AlertVariant.danger;return!d&&i?(p="common.trial_service_registry_title",v=s.AlertVariant.warning,_="common.deploy_one_instance_alert_message"):d||i?d&&0===(null==d?void 0:d.remaining)&&(v=s.AlertVariant.warning,p="common.standard_service_registry_alert_title",_="common.standard_service_registry_alert_message"):(v=s.AlertVariant.info,p="common.trial_quota_service_registry_title"),a&&(v=s.AlertVariant.danger,p="common.service_registry_creation_failed_alert_title",_=d?"common.standard_service_registry_creation_failed_alert_message":"common.trial_service_registry_creation_failed_alert_message"),u&&(p="common.something_went_wrong",v=s.AlertVariant.danger,_="common.ams_service_down_message"),o().createElement(o().Fragment,null,p&&o().createElement(s.Alert,{className:"pf-u-mb-md",variant:v,title:r(p),"aria-live":"polite",isInline:!0},r(_)))},_=function(e){var t=e.isSrsTrial,a=(0,m.useTranslation)().t;return o().createElement(s.TextContent,null,o().createElement(s.Text,{component:s.TextVariants.h3},a("common.instance_information")),o().createElement(s.TextList,{component:s.TextListVariants.dl},o().createElement(s.Grid,{sm:6,lg:12,hasGutter:!0},t&&o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.duration")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.duration_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.artifact_versions")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.artifact_versions_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.artifact_size")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.artifact_size_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},a("common.request_rate")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},a("common.request_rate_value"))))))},v=a(98068),L={CREATE_SERVICE_REGISTRY:"CREATE_SERVICE_REGISTRY",DELETE_SERVICE_REGISTRY:"DELETE_SERVICE_REGISTRY"},y=((n={})[L.CREATE_SERVICE_REGISTRY]=function(){var e,t=new c,a=(0,u.QK)(),n=a.store,v=a.hideModal,L=(null==n?void 0:n.modalProps)||{},y=L.fetchServiceRegistries,f=L.hasUserTrialInstance,E=(0,m.useTranslation)().t,C=(0,g.useAuth)(),w=(0,g.useConfig)().srs.apiBasePath,T=((0,g.useAlert)()||{}).addAlert,M=((0,g.useQuota)()||{}).getQuota,S=(0,r.useState)({fieldState:"default"}),x=S[0],b=S[1],I=(0,r.useState)(t),N=I[0],h=I[1],D=(0,r.useState)(!0),P=D[0],j=D[1],A=(0,r.useState)(!1),R=A[0],k=A[1],z=(0,r.useState)(),V=z[0],B=z[1],F=(0,r.useState)(!1),U=F[0],O=F[1],Q=null===(e=null==V?void 0:V.data)||void 0===e?void 0:e.get(null===g.QuotaType||void 0===g.QuotaType?void 0:g.QuotaType.srs),G=void 0===(null==V?void 0:V.loading)||(null==V?void 0:V.loading),Z=!Q,H=G||f||U||Q&&0===(null==Q?void 0:Q.remaining),Y=function(){b({fieldState:"default"}),h(t),j(!0)};(0,r.useEffect)((function(){(0,i.__awaiter)(void 0,void 0,void 0,(function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return M?[4,M().then((function(e){B(e)}))]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[]);var W,K,J,X=function(e){h((0,i.__assign)((0,i.__assign)({},N),{name:e}));var t=!0;e&&!/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.trim())&&(t=!1),e&&e.length>d.xe?b({fieldState:"error",message:E("srs.service_registry_name_length_is_greater_than_expected",{maxLength:d.xe})}):t&&"error"===x.fieldState?b({fieldState:"default",message:""}):t||b({fieldState:"error",message:E("common.input_filed_invalid_helper_text")})},q=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e,t,a,n;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return e=function(){var e=!0,t=N.name;return t&&""!==t.trim()?/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(t.trim())||(e=!1,b({fieldState:"error",message:E("common.input_filed_invalid_helper_text")})):(e=!1,b({fieldState:"error",message:E("common.this_is_a_required_field")})),t.length>d.xe&&(e=!1,b({fieldState:"error",message:E("srs.service_registry_name_length_is_greater_than_expected",{maxLength:d.xe})})),e}(),[4,null==C?void 0:C.srs.getToken()];case 1:if(t=i.sent(),!e)return j(!1),[2];if(!t)return[3,5];a=new l.RegistriesApi(new l.Configuration({accessToken:t,basePath:w})),i.label=2;case 2:return i.trys.push([2,4,,5]),k(!0),[4,a.createRegistry({name:N.name}).then((function(){v(),Y(),y&&y(),k(!1)}))];case 3:return i.sent(),[3,5];case 4:return n=i.sent(),k(!1),function(e){var t,a,n,i;(0,d.G6)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.reason,i=null===(a=e.response)||void 0===a?void 0:a.data.code),i===d.SM.FAILED_TO_CHECK_QUOTA||i===d.SM.USER_ALREADY_HAVE_TRIAL_INSTANCE||i===d.SM.INSUFFICIENT_QUOTA||i===d.SM.INSUFFICIENT_STANDARD_QUOTA?O(!0):T&&T({title:E("something_went_wrong"),variant:g.AlertVariant.danger,description:n})}(n),[3,5];case 5:return[2]}}))}))},$=function(e){e.preventDefault(),q()};return o().createElement(u.a$,{id:"modalCreateSRegistry",isModalOpen:!0,title:E("srs.create_service_registry_instance"),handleModalToggle:function(){Y(),v()},onCreate:q,isFormValid:P,primaryButtonTitle:"Create",isCreationInProgress:R,dataTestIdSubmit:"modalCreateServiceRegistry-buttonSubmit",dataTestIdCancel:"modalCreateServiceRegistry-buttonCancel",isDisabledButton:H},o().createElement(p,{quota:V,hasServiceRegistryCreationFailed:U,loadingQuota:G,hasUserTrialInstance:f}),o().createElement(s.Flex,{direction:{default:"column",lg:"row"}},o().createElement(s.FlexItem,{flex:{default:"flex_2"}}," ",(W=x.message,K=x.fieldState,J=N.name,o().createElement(s.Form,{onSubmit:$},!P&&o().createElement(s.FormAlert,null,o().createElement(s.Alert,{variant:"danger",title:E("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})),o().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:W,validated:K,helperText:E("common.input_filed_invalid_helper_text")},o().createElement(s.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:J,onChange:X,validated:K,autoFocus:!0}))))),o().createElement(s.Divider,{isVertical:!0}),o().createElement(s.FlexItem,{flex:{default:"flex_1"},className:"mk--create-instance-modal__sidebar--content"},o().createElement(_,{isSrsTrial:Z}))))},n[L.DELETE_SERVICE_REGISTRY]=function(){var e=(0,m.useTranslation)().t,t=(0,g.useAlert)().addAlert,a=(0,v.useHistory)(),n=(0,g.useAuth)(),s=(0,g.useConfig)().srs.apiBasePath,c=(0,g.useBasename)(),p=(0,u.QK)(),_=p.store,L=p.hideModal,y=(null==_?void 0:_.modalProps)||{},f=y.title,E=y.confirmButtonProps,C=y.cancelButtonProps,w=y.textProps,T=y.serviceRegistryStatus,M=y.selectedItemData,S=y.onClose,x=y.fetchRegistries,b=y.shouldRedirect,I=null==M?void 0:M.name,N=(0,r.useState)(),h=N[0],D=N[1],P=(0,r.useState)(!1),j=P[0],A=P[1],R=function(){return(null==T?void 0:T.toLowerCase())===l.RegistryStatusValueRest.Ready&&(null==h?void 0:h.toLowerCase())!==(null==I?void 0:I.toLowerCase())},k=function(){D(""),L(),S&&S()};return o().createElement(u.AX,{isModalOpen:!0,title:f,confirmButtonProps:(0,i.__assign)((0,i.__assign)({isDisabled:R(),"data-testid":"modalDeleteRegistry-buttonDelete"},E),{onClick:function(r){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var o,u,m;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return o=r.id,u=r.name,[4,null==n?void 0:n.srs.getToken()];case 1:return m=i.sent(),o?(A(!0),[4,new l.RegistriesApi(new l.Configuration({accessToken:m,basePath:s})).deleteRegistry(o).then((function(){A(!1),t({title:e("srs.service_registry_deletion_success_message",{name:u}),variant:g.AlertVariant.success}),b?a.push(c.getBasename()):x&&x(),k()})).catch((function(a){A(!1),function(a){var n,i;(0,d.G6)(a)&&(i=null===(n=a.response)||void 0===n?void 0:n.data.reason),t({title:e("common.something_went_wrong"),variant:g.AlertVariant.danger,description:i})}(a)}))]):[3,3];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},isLoading:j}),cancelButtonProps:C,handleModalToggle:k,textProps:w,selectedItemData:M,textInputProps:{showTextInput:(null==T?void 0:T.toLowerCase())===l.RegistryStatusValueRest.Ready,label:e("common.service_registry_name_label",{name:I}),value:h,onChange:function(e){D(e)},onKeyPress:function(e){"Enter"!==e.key||R()||(null==E?void 0:E.onClick)&&E.onClick(M)},autoFocus:!0}})},n),f=(0,r.createContext)({showModal:function(){},hideModal:function(){},store:{}}),E=function(){return(0,r.useContext)(f)},C=function(e){var t,a=e.children,n=(0,r.useState)(),s=n[0],l=n[1],c=s||{},u=c.modalType,m=c.modalProps;return o().createElement(f.Provider,{value:{store:s,showModal:function(e,t){void 0===t&&(t={}),l((0,i.__assign)((0,i.__assign)({},s),{modalType:e,modalProps:t}))},hideModal:function(){l((0,i.__assign)((0,i.__assign)({},s),{modalType:null,modalProps:{}}))}}},(t=y[u],u&&t?o().createElement(t,(0,i.__assign)({id:"global-modal"},m)):null),a)}},75381:(e,t,a)=>{a.d(t,{ik:()=>n.ik,xe:()=>n.xe,L0:()=>n.L0,wx:()=>n.wx,hm:()=>n.hm,SM:()=>i.S,G6:()=>i.G});a(82519);var n=a(52648),i=a(78261)},78800:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(42448),i=a.n(n),r=a(11593),o=a(16486),s=a.n(o),l=a(73337),c=a.n(l),u=a(32578),m=a.n(u),d=a(86369),g=a.n(d),p=(a(76831),i().createInstance()),_="true"===new URLSearchParams(window.location.search).get("pseudolocalization");p.use(new(m())({enabled:_,wrapped:!0})).use(c()).use(s()).use(r.initReactI18next).init({backend:{loadPath:a.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,a,n){return n=n||{},"number"===t?new Intl.NumberFormat(a).format(e):e instanceof Date?"fromNow"===t?g()(e).fromNow(!0===n.omitSuffix):g()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,a){}},(function(){g().locale(i().language)})),p.on("languageChanged",(function(e){g().locale(e)}));const v=p}}]);
//# sourceMappingURL=622.1e3af103.js.map