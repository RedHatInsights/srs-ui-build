"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[358],{7502:()=>{},6280:(e,t,a)=>{a.d(t,{OP:()=>m,EG:()=>p,mt:()=>c,UW:()=>E,nA:()=>g});var n=a(5418),i=a.n(n),r=a(8068),s=a(1593),o=a(8788),l=a(5216),c=function(e){var t=e.onConnectToRegistry,a=e.onDeleteRegistry,c=e.breadcrumbId,u=e.serviceRegistryDetails,d=(0,s.useTranslation)().t,m=!1,g=(0,n.useState)(),p=g[0],v=g[1],_=(0,l.useBasename)();null!=c&&(m=!0,d(c));var L=[i().createElement(o.DropdownItem,{key:"connect-registry",onClick:function(){return t&&t(u)}},d("srs.view_connection_information")),i().createElement(o.DropdownItem,{key:"delete-registry",onClick:function(){return a&&a(u)}},d("srs.delete_registry"))];return i().createElement(o.PageSection,{variant:o.PageSectionVariants.light},i().createElement(o.Level,null,i().createElement(o.LevelItem,null,m?i().createElement(o.Breadcrumb,null,i().createElement(o.BreadcrumbItem,null,i().createElement(r.Link,{to:_.getBasename()||"/"}," ",d("srs.service_registry_breadcrumb"))),i().createElement(o.BreadcrumbItem,{isActive:!0},null==u?void 0:u.name)):i().createElement(o.TextContent,null,i().createElement(o.Text,{component:"h1"}," ",d("srs.service_registry")))),c&&i().createElement(o.LevelItem,null,i().createElement(o.Dropdown,{onSelect:function(){v(!p)},toggle:i().createElement(o.KebabToggle,{onToggle:function(e){v(e)},id:"toggle-service-registry"}),isOpen:p,isPlain:!0,dropdownItems:L,position:o.DropdownPosition.right}))))},u=a(3494),d=function(e){var t=e.registryApisUrl,a=(0,s.useTranslation)().t,n=[{title:a("srs.connection_content_1"),code:t+"/apis/registry/v2"},{title:a("srs.connection_content_2"),code:t+"/apis/ccompat/v6"},{title:a("srs.connection_content_3"),code:t+"/apis/cncf/v0"}];return i().createElement("div",{className:"mas--details__drawer--tab-content"},i().createElement(o.TextContent,{className:"pf-u-pb-sm"},i().createElement(o.Title,{headingLevel:"h2",size:o.TitleSizes.lg},a("common.connection"))),i().createElement(o.TextContent,{className:"pf-u-pb-sm"},i().createElement(o.Text,{component:o.TextVariants.small},a("srs.connection_title_info"))),i().createElement(o.Form,null,null==n?void 0:n.map((function(e,n){var r=e.title,s=e.code;return t?i().createElement(o.FormGroup,{label:r,fieldId:"copy-clipboard-"+n,key:s+"'-'"+n},i().createElement(o.ClipboardCopy,{id:"copy-clipboard-"+n,hoverTip:a("common.copy_clipboard"),clickTip:a("common.copy_clipboard_successfully"),textAriaLabel:r,isReadOnly:!0},s)):i().createElement(o.Skeleton,{fontSize:"2xl"})}))))},m=function(e){var t=e.isExpanded,a=e.isLoading,n=e.onClose,r=e["data-ouia-app-id"],o=e.children,l=e.notRequiredDrawerContentBackground,c=e.registry,m=(0,s.useTranslation)().t,g=c||{},p=g.registryUrl,v=g.name,_=i().createElement(d,{registryApisUrl:p});return i().createElement(u.D5,{isExpanded:t,isLoading:a,onClose:n,panelBodyContent:_,drawerHeaderProps:{text:{label:m("srs.service_registry_instance_name")},title:{value:v,headingLevel:"h1"}},"data-ouia-app-id":r,notRequiredDrawerContentBackground:l},o)},g=function(e){var t=e.getAccessToServiceRegistry,a=(0,s.useTranslation)().t;return i().createElement(i().Fragment,null,i().createElement(c,{showKebab:!1}),i().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoAccess},titleProps:{title:a("srs.unauthorized_empty_state_title")},emptyStateBodyProps:{body:a("srs.unauthorized_empty_state_body")},buttonProps:{title:a("srs.get_access_to_service_registry"),variant:o.ButtonVariant.primary,onClick:t}})))},p=function(e){var t=e.onCreateserviceRegistry,a=(0,s.useTranslation)().t;return i().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoItems},titleProps:{title:a("srs.empty_state_registry_title")},emptyStateBodyProps:{body:a("srs.empty_state_registry_description")},buttonProps:{title:a("srs.create_service_registry"),variant:o.ButtonVariant.primary,onClick:t}}))},v=a(655),_=a(4550),L=a(2979),y=a(5537),f=a(5451),w=a(1942),C=a(4564),M=function(e){var t=e.status,a=e.instanceName,n=(0,s.useTranslation)().t,r=function(){switch(null==t?void 0:t.toLowerCase()){case y.hm[0].value:return i().createElement(f.ZP,{className:"mk--instances__table--icon--completed"});case y.hm[1].value:return i().createElement(C.ZP,{className:"mk--instances__table--icon--failed"});case y.hm[2].value:return i().createElement(w.ZP,null);case y.hm[3].value:case y.hm[4].value:return i().createElement(o.Spinner,{size:"md","aria-label":a,"aria-valuetext":"Creation in progress"});case y.hm[5].value:case y.hm[6].value:return;default:return i().createElement(w.ZP,null)}}();return i().createElement(o.Flex,null,r&&i().createElement(o.FlexItem,{spacer:{default:"spacerSm"}},r),i().createElement(o.FlexItem,null,function(){var e,a=y.hm.filter((function(e){var a;return(null===(a=e.value)||void 0===a?void 0:a.toLowerCase())===(null==t?void 0:t.toLowerCase())}));return 1===a.length?n("common."+(null===(e=a[0].value)||void 0===e?void 0:e.toLowerCase())):n("common.creation_pending")}()))},S=function(e){var t=e.total,a=e.page,n=e.perPage,r=e.handleCreateModal,l=(0,s.useTranslation)().t,c=[{item:i().createElement(o.Button,{variant:"primary",onClick:r,"data-testid":"tableServiceRegistry-buttonCreateServiceRegistry"},l("srs.create_service_registry"))}];return t&&t>0&&c.length>0&&c.push({item:i().createElement(u.wu,{widgetId:"pagination-options-menu-top",itemCount:t,page:a,perPage:n,isCompact:!0,titles:{paginationTitle:l("common.minimal_pagination"),perPageSuffix:l("common.per_page_suffix"),toFirstPage:l("common.to_first_page"),toPreviousPage:l("common.to_previous_page"),toLastPage:l("common.to_last_page"),toNextPage:l("common.to_next_page"),optionsToggle:l("common.options_toggle"),currPage:l("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(u.L5,{toolbarProps:{id:"registry-instance-toolbar",clearAllFilters:function(){},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:c})},E=function(e){var t=e.serviceRegistryItems,a=e.onViewConnection,c=(e.refresh,e.registryDataLoaded),d=e.onDelete,m=(e.expectedTotal,e.orderBy),g=e.setOrderBy,p=e.isDrawerOpen,f=e.loggedInUser,w=e.currentUserRegistries,C=e.total,E=void 0===C?0:C,T=e.page,x=e.perPage,h=e.handleCreateModal,b=(0,l.useAlert)().addAlert,N=(0,(0,l.useBasename)().getBasename)(),I=(0,s.useTranslation)().t,D=(0,l.useAuth)(),j=(0,n.useState)(),P=j[0],R=j[1],A=(0,n.useState)([]),k=A[0],z=A[1],B=(0,n.useState)([]),V=B[0],Z=B[1],F=(0,n.useState)(),O=F[0],U=F[1],G=[{title:I("common.name")},{title:I("common.owner")},{title:I("common.status")},{title:I("common.time_created")}];(0,n.useEffect)((function(){p||R("")}),[p]),(0,n.useEffect)((function(){null==D||D.isOrgAdmin().then((function(e){return U(e)}))}),[D]);var Y=function(){if(w){var e=w.filter((function(e){return e.status===L.RegistryStatusValueRest.Deprovision||e.status===L.RegistryStatusValueRest.Deleting})).filter((function(e){return k.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),t=(0,v.__spreadArray)((0,v.__spreadArray)([],k,!0),e,!0);z(t),t.forEach((function(e){(null==w?void 0:w.findIndex((function(t){return t.name===e})))<0&&(!function(e){var t=k.findIndex((function(t){return t===e}));if(t>-1){var a=Object.assign([],k);a.splice(t,1),z(a)}}(e),b({title:I("srs.service_registry_successfully_deleted",{name:e}),variant:l.AlertVariant.success}))}))}};(0,n.useEffect)((function(){Y(),function(){var e=JSON.parse(JSON.stringify(V));if(V&&V.length>0){var a=Object.assign([],t).filter((function(e){return e.status===L.RegistryStatusValueRest.Ready||e.status===L.RegistryStatusValueRest.Failed}));e.forEach((function(e){var t=a.filter((function(t){return e.id===t.id}));if(t&&t.length>0){var n=t[0],r=n.status,s=n.name;r===L.RegistryStatusValueRest.Ready?b({title:I("srs.registry_successfully_created"),variant:l.AlertVariant.success,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:I("srs.registry_success_message",{name:s})}}),dataTestId:"toastCreateRegistry-success"}):r===L.RegistryStatusValueRest.Failed&&b({title:I("srs.registry_not_created"),variant:l.AlertVariant.danger,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:I("srs.registry_failed_message",{name:s})}}),dataTestId:"toastCreateRegistry-failed"})}}))}var n=Object.assign([],null==t?void 0:t.filter((function(e){return e.status===L.RegistryStatusValueRest.Provisioning||e.status===L.RegistryStatusValueRest.Accepted})));Z(n)}()}),[T,x,t,w]);var Q,H=function(e){var t=e.name,a=e.row;return i().createElement(r.Link,{to:N+"/t/"+(null==a?void 0:a.id),"data-testid":"tableRegistries-linkKafka"},t)},W=function(e,t,n){var i,r,s;"connect-instance"===n?(a(t),R(null==t?void 0:t.id)):"delete-instance"===n&&d(t);var o=null===(s=null===(r=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.parentElement)||void 0===s?void 0:s.previousSibling;null!=o&&o.focus()},J=function(e){switch(e.toLowerCase()){case"name":return 0;case"owner":return 1;case"status":return 2;case"created_at":return 3;default:return}},K=function(){var e=(null==m?void 0:m.split(" "))||[];if(e.length>1)return{index:J(e[0]),direction:e[1]===_.SortByDirection.asc?_.SortByDirection.asc:_.SortByDirection.desc}};return i().createElement(o.PageSection,{className:"registry--main-page__page-section--table pf-m-padding-on-xl",variant:o.PageSectionVariants.default},i().createElement(o.Card,null,i().createElement(S,{page:T,perPage:x,total:E,handleCreateModal:h}),i().createElement(u.wR,{tableProps:{cells:G,rows:(Q=[],null==t||t.forEach((function(e){var t=e.name,a=e.created_at,n=e.status,r=e.owner;Q.push({cells:[{title:(null==n?void 0:n.toLowerCase())!==L.RegistryStatusValueRest.Ready?t:H({name:t,row:e})},r,{title:i().createElement(M,{status:n,instanceName:t})},{title:(0,y.L0)(a,I("ago"))}],originalData:(0,v.__assign)((0,v.__assign)({},e),{rowId:null==e?void 0:e.id})})})),Q),"aria-label":I("common.registry_instance_list"),actionResolver:function(e){var t,a,n,i=e.originalData,r=i.owner===f||O;return r||(n={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,v.__assign)((0,v.__assign)((t={title:I("srs.view_connection_information"),id:"connect-instance"},t["data-testid"]="tableRegistry-actionConnection",t.onClick=function(e){return r&&W(e,i,"connect-instance")},t),n),{tooltipProps:{position:"left",content:I("common.no_permission_to_connect_registry")}}),(0,v.__assign)((0,v.__assign)((a={title:I("srs.delete_registry"),id:"delete-instance"},a["data-testid"]="tableRegistry-actionDelete",a.onClick=function(e){return r&&W(e,i,"delete-instance")},a),n),{tooltipProps:{position:"left",content:I("common.no_permission_to_delete_service_registry")}})]},onSort:function(e,t,a,n){var i,r=a;(null===(i=K())||void 0===i?void 0:i.index)!==t&&"time-created"===n.property&&(r="desc"),g(function(e){switch(e){case 0:return"name";case 1:return"owner";case 2:return"status";case 3:return"created_at";default:return""}}(t)+" "+r)},sortBy:K(),hasDefaultCustomRowWrapper:!0},activeRow:P,onRowClick:function(e,t,n){var i,r,s=n.originalData,o=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.type,l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==o&&"a"!==(null==l?void 0:l.toLowerCase())&&(a(s),R(null==s?void 0:s.id))},rowDataTestId:"tableRegistry-row",loggedInUser:f}),t.length<1&&c&&i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoResult},titleProps:{title:I("common.no_results_found")},emptyStateBodyProps:{body:I("common.adjust_your_filters_and_try_again")}}),E>0&&i().createElement(u.wu,{widgetId:"pagination-options-menu-bottom",itemCount:E,variant:o.PaginationVariant.bottom,page:T,perPage:x,titles:{paginationTitle:I("common.full_pagination"),perPageSuffix:I("common.per_page_suffix"),toFirstPage:I("common.to_first_page"),toPreviousPage:I("common.to_previous_page"),toLastPage:I("common.to_last_page"),toNextPage:I("common.to_next_page"),optionsToggle:I("common.options_toggle"),currPage:I("common.curr_page")}})))}},2311:(e,t,a)=>{a.d(t,{a:()=>l});var n=a(5418),i=a.n(n),r=a(8788),s=a(1593),o=a(5537),l=function(e){var t=e.isModalOpen,a=e.children,n=e.title,l=e.handleModalToggle,c=e.onCreate,u=e.isFormValid,d=e.isCreationInProgress,m=e.primaryButtonTitle,g=e.dataTestIdSubmit,p=e.dataTestIdCancel,v=e.id,_=void 0===v?"modalCreateKafka":v,L=(0,s.useTranslation)().t;return i().createElement(r.Modal,{id:_,variant:r.ModalVariant.medium,title:n,isOpen:t,onClose:l,appendTo:(0,o.wx)(),actions:[i().createElement(r.Button,{key:"create",variant:"primary",type:"submit",onClick:c,isDisabled:!u||d,spinnerAriaValueText:L("submitting_request"),isLoading:d,"data-testid":g},m),i().createElement(r.Button,{key:"cancel",variant:"link",onClick:l,"data-testid":p},L("common.cancel"))]},a)}},9441:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(655),i=a(5418),r=a.n(i),s=a(8788),o=a(5537),l=function(e){var t=e.isModalOpen,a=e.title,i=e.modalProps,l=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,d=e.textProps,m=e.children,g=e.selectedItemData,p=void 0===g?"":g,v=e.textInputProps,_=i||{},L=_.variant,y=void 0===L?s.ModalVariant.small:L,f=_.titleIconVariant,w=void 0===f?"warning":f,C=_["aria-label"],M=_.showClose,S=void 0===M||M,E=(0,n.__rest)(_,["variant","titleIconVariant","aria-label","showClose"]),T=l||{},x=T.id,h=void 0===x?"mas--confirm__button":x,b=T.key,N=void 0===b?"confirm-button":b,I=T.variant,D=void 0===I?s.ButtonVariant.danger:I,j=T.onClick,P=T.isDisabled,R=T.label,A=void 0===R?"Delete":R,k=T.isLoading,z=(0,n.__rest)(T,["id","key","variant","onClick","isDisabled","label","isLoading"]),B=c||{},V=B.id,Z=void 0===V?"mas--cancel__button":V,F=B.key,O=void 0===F?'"cancel-button':F,U=B.variant,G=void 0===U?s.ButtonVariant.link:U,Y=B.label,Q=void 0===Y?"Cancel":Y,H=(0,n.__rest)(B,["id","key","variant","label"]),W=d||{},J=W.className,K=void 0===J?"mas--delete-item__modal--text":J,X=W.description,q=(0,n.__rest)(W,["className","description"]),$=v||{},ee=$.label,te=void 0===ee?"":ee,ae=$.value,ne=$.onChange,ie=$.onKeyPress,re=$.showTextInput,se=(0,n.__rest)($,["label","value","onChange","onKeyPress","showTextInput"]);return r().createElement(s.Modal,(0,n.__assign)({variant:y,isOpen:t,"aria-label":C,title:a,titleIconVariant:w,showClose:S,onClose:u,appendTo:(0,o.wx)(),actions:[r().createElement(s.Button,(0,n.__assign)({id:h,key:N,variant:D,onClick:function(){return j&&j(p)},isDisabled:P,isLoading:k},z),A),r().createElement(s.Button,(0,n.__assign)({id:Z,key:O,variant:G,onClick:u},H),Q)]},E),X&&r().createElement(s.Text,(0,n.__assign)({className:K,dangerouslySetInnerHTML:{__html:X||""}},q)),re&&r().createElement(r().Fragment,null,r().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:te}}),r().createElement(s.TextInput,(0,n.__assign)({id:"mas--name__input",name:"mas-name-input",type:"text",value:ae,onChange:ne,onKeyPress:ie,autoFocus:!0},se))),m)}},3242:(e,t,a)=>{a.d(t,{D:()=>l});var n=a(655),i=a(5418),r=a.n(i),s=a(8788),o=a(3494),l=function(e){var t=e.onClose,a=e.isLoading,i=void 0===a||a,l=e.drawerPanelContentProps,c=e.drawerHeaderProps,u=e.isExpanded,d=e.children,m=e.panelBodyContent,g=e.onExpand,p=e.notRequiredDrawerContentBackground,v=e["data-ouia-app-id"],_=e.inlineAlertMessage,L=l||{},y=L.widths,f=(0,n.__rest)(L,["widths"]),w=c||{},C=w.text,M=w.title,S=r().createElement(s.DrawerPanelContent,(0,n.__assign)({widths:y||{default:"width_50"}},f),i?r().createElement(o.yR,null):r().createElement(r().Fragment,null,r().createElement(s.DrawerHead,null,r().createElement(s.TextContent,null,(null==C?void 0:C.label)&&r().createElement(s.Text,{component:(null==C?void 0:C.component)||s.TextVariants.small,className:(null==C?void 0:C.className)||"pf-u-mb-0"},null==C?void 0:C.label),(null==M?void 0:M.value)&&r().createElement(s.Title,{headingLevel:(null==M?void 0:M.headingLevel)||"h2",size:(null==M?void 0:M.size)||s.TitleSizes.xl,className:(null==M?void 0:M.className)||"pf-u-mt-0"},null==M?void 0:M.value)),r().createElement(s.DrawerActions,null,r().createElement(s.DrawerCloseButton,{onClick:t}))),r().createElement(s.DrawerPanelBody,null,_,m)));return r().createElement(s.Drawer,{isExpanded:u,onExpand:g,"data-ouia-app-id":v},r().createElement(s.DrawerContent,{panelContent:S,className:p?"pf-m-no-background":""},r().createElement(s.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",d)))}},1098:(e,t,a)=>{a.d(t,{C:()=>p,j:()=>m});var n=a(655),i=a(5418),r=a.n(i),s=a(8788),o=a(777),l=a(4558),c=a(5569),u=a(1070),d=a(4564);var m,g=a(3651);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(m||(m={}));var p=function(e){var t=e.titleProps,a=e.buttonProps,i=e.emptyStateIconProps,p=e.emptyStateProps,v=e.emptyStateBodyProps,_=e.children,L=a||{},y=L.variant,f=void 0===y?s.ButtonVariant.primary:y,w=L.onClick,C=(0,n.__rest)(L,["variant","onClick"]),M=t||{},S=M.title,E=(0,n.__rest)(M,["title"]),T=v||{},x=T.body,h=(0,n.__rest)(T,["body"]),b=p||{},N=b.variant,I=void 0===N?m.GettingStarted:N,D=b.className,j=(0,n.__rest)(b,["variant","className"]),P=function(){return r().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},R=function(){var e={};switch(I){case m.GettingStarted:e={variant:s.EmptyStateVariant.xl,icon:l.ZP,titleSize:s.TitleSizes["4xl"],headingLevel:"h1"};break;case m.NoAccess:e={variant:s.EmptyStateVariant.large,icon:c.ZP,titleSize:s.TitleSizes.xl,headingLevel:"h2"};break;case m.NoItems:e={variant:s.EmptyStateVariant.large,icon:o.ZP,titleSize:s.TitleSizes.xl,headingLevel:"h2"};break;case m.NoResult:e={variant:s.EmptyStateVariant.large,icon:u.ZP,titleSize:s.TitleSizes.lg,headingLevel:"h2"};break;case m.UnexpectedError:e={variant:s.EmptyStateVariant.full,icon:d.ZP,titleSize:s.TitleSizes.lg,headingLevel:"h1"};break;case m.PageNotFound:e={variant:s.EmptyStateVariant.full,icon:P,titleSize:s.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:I||s.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),A=R.variant,k=R.icon,z=R.titleSize,B=R.headingLevel;return r().createElement(s.EmptyState,(0,n.__assign)({variant:A,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",D)},j),r().createElement(s.EmptyStateIcon,(0,n.__assign)({icon:k},i)),S&&r().createElement(s.Title,(0,n.__assign)({headingLevel:B,size:z},E),S),x&&r().createElement(s.EmptyStateBody,(0,n.__assign)({},h),x),(null==a?void 0:a.title)&&r().createElement(s.Button,(0,n.__assign)({variant:f,onClick:w},C),null==a?void 0:a.title),_)}},6554:(e,t,a)=>{a.d(t,{y:()=>o});var n=a(655),i=a(5418),r=a.n(i),s=a(8788),o=function(e){var t=e.bullseyeProps,a=e.spinnerProps;return r().createElement(s.Bullseye,(0,n.__assign)({},t),r().createElement(s.Spinner,(0,n.__assign)({},a)))}},6376:(e,t,a)=>{a.d(t,{w:()=>l});var n=a(655),i=a(5418),r=a.n(i),s=a(8068),o=a(8788),l=function(e){var t=e.page,a=e.perPage,l=void 0===a?10:a,c=e.itemCount,u=e.variant,d=void 0===u?o.PaginationVariant.top:u,m=e.isCompact,g=e.titles,p=(0,n.__rest)(e,["page","perPage","itemCount","variant","isCompact","titles"]),v=(0,s.useHistory)(),_=(0,s.useLocation)(),L=new URLSearchParams(_.search),y=(0,i.useCallback)((function(e,t){L.set(e,t.toString())}),[L]),f=(0,i.useCallback)((function(e,t){y("page",t.toString()),v.push({search:L.toString()})}),[y,v,L]),w=(0,i.useCallback)((function(e,t){y("page","1"),y("perPage",t.toString()),v.push({search:L.toString()})}),[y,v,L]);return r().createElement(o.Pagination,(0,n.__assign)({itemCount:c,perPage:l,page:t,onSetPage:f,variant:d,onPerPageSelect:w,isCompact:m},p,{titles:g}))}},2067:(e,t,a)=>{a.d(t,{w:()=>m});var n=a(655),i=a(5418),r=a.n(i),s=a(4550),o=a(3651),l=a(2979),c=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),u=c.Provider,d=function(e){var t=(0,i.useContext)(c),a=t.activeRow,s=t.onRowClick,u=t.rowDataTestId,d=t.loggedInUser,m=e||{},g=m.trRef,p=m.className,v=m.rowProps,_=m.row,L=(0,n.__rest)(m,["trRef","className","rowProps","row"]),y=v.rowIndex,f=_.isExpanded,w=_.originalData,C=(null==w?void 0:w.status)===l.RegistryStatusValueRest.Deprovision||(null==w?void 0:w.status)===l.RegistryStatusValueRest.Deleting,M=d===(null==w?void 0:w.owner),S=C||!M;return r().createElement("tr",(0,n.__assign)({"data-testid":u,tabIndex:S?void 0:0,ref:g,className:(0,o.css)(p,"pf-c-table-row__item",C?"pf-m-disabled":M&&"pf-m-selectable",!S&&a&&a===(null==w?void 0:w.rowId)&&"pf-m-selected"),hidden:void 0!==f&&!f,onClick:function(e){return!S&&s&&s(e,y,_)}},L))},m=function(e){var t=e.tableProps,a=e.tableHeaderProps,i=e.tableBodyProps,l=e.children,c=e.activeRow,m=e.onRowClick,g=e.rowDataTestId,p=e.loggedInUser,v=t.cells,_=t.rows,L=t.actionResolver,y=t.onSort,f=t.sortBy,w=t["aria-label"],C=t.variant,M=t.className,S=t.hasDefaultCustomRowWrapper,E=void 0!==S&&S,T=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return E&&(T.rowWrapper=d),r().createElement(u,{value:{activeRow:c,onRowClick:m,rowDataTestId:g,loggedInUser:p}},r().createElement(s.Table,(0,n.__assign)({className:(0,o.css)(E&&"mas--streams-table-view__table",M),cells:v,variant:C,rows:_,"aria-label":w,actionResolver:L,onSort:y,sortBy:f},T),r().createElement(s.TableHeader,(0,n.__assign)({},a)),r().createElement(s.TableBody,(0,n.__assign)({},i)),l))}},5642:(e,t,a)=>{a.d(t,{L:()=>o});var n=a(655),i=a(5418),r=a.n(i),s=a(8788),o=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,i=e.toolbarItems,o=e.toggleGroupItems,l=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,d=void 0===u?"md":u,m=t.inset,g=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return r().createElement(r().Fragment,null,r().createElement(s.Toolbar,(0,n.__assign)({id:l,clearAllFilters:c,inset:m,collapseListedFiltersBreakpoint:d},g),r().createElement(s.ToolbarContent,null,a&&r().createElement(s.ToolbarToggleGroup,(0,n.__assign)({toggleIcon:a.toggleIcon,breakpoint:"md"},a),o),null==i?void 0:i.map((function(e,t){var a=e.key,i=void 0===a?"mas":a,o=e.variant,l=e.className,c=e.id,u=e.alignment,d=e.item,m=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return r().createElement(s.ToolbarItem,(0,n.__assign)({key:i+"-"+t,variant:o,className:l,id:c,alignment:u},m),d)})))))}},9758:(e,t,a)=>{a.d(t,{Ny:()=>v,OU:()=>f,QK:()=>y});var n,i=a(655),r=a(5418),s=a.n(r),o=a(8788),l=a(2979),c=function(){this.name="",this.description=""},u=a(3494),d=a(1593),m=a(5537),g=a(5216),p=a(8068),v={CREATE_SERVICE_REGISTRY:"CREATE_SERVICE_REGISTRY",DELETE_SERVICE_REGISTRY:"DELETE_SERVICE_REGISTRY"},_=((n={})[v.CREATE_SERVICE_REGISTRY]=function(){var e=new c,t=(0,u.QK)(),a=t.store,n=t.hideModal,p=((null==a?void 0:a.modalProps)||{}).fetchServiceRegistries,v=(0,d.useTranslation)().t,_=(0,g.useAuth)(),L=(0,g.useConfig)().srs.apiBasePath,y=(0,g.useAlert)().addAlert,f=(0,r.useState)({fieldState:"default"}),w=f[0],C=f[1],M=(0,r.useState)({fieldState:"default"}),S=M[0],E=M[1],T=(0,r.useState)(e),x=T[0],h=T[1],b=(0,r.useState)(!0),N=b[0],I=b[1],D=(0,r.useState)(!1),j=D[0],P=D[1],R=function(){C({fieldState:"default"}),E({fieldState:"default"}),h(e),I(!0)};(0,r.useEffect)((function(){"error"!==w.fieldState&&"error"!==S.fieldState&&I(!0)}),[w.fieldState,S.fieldState]);var A,k,z,B,V,Z,F=function(e){h((0,i.__assign)((0,i.__assign)({},x),{name:e}));var t=!0;e&&!/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.trim())&&(t=!1),e&&e.length>m.xe?C({fieldState:"error",message:v("srs.service_registry_name_length_is_greater_than_expected",{maxLength:m.xe})}):t&&"error"===w.fieldState?C({fieldState:"default",message:""}):t||C({fieldState:"error",message:v("common.input_filed_invalid_helper_text")})},O=function(e){h((0,i.__assign)((0,i.__assign)({},x),{description:e}));var t=!0;e&&!/^[a-zA-Z0-9.,\-\s]*$/.test(e.trim())&&(t=!1),e&&e.length>m.YZ?E({fieldState:"error",message:v("srs.service_registry_description_length_is_greater_than_expected",{maxLength:m.YZ})}):t&&"error"===S.fieldState?E({fieldState:"default",message:""}):t||E({fieldState:"error",message:v("common.input_text_area_invalid_helper_text")})},U=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e,t,a,r;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return e=function(){var e=!0,t=x.name,a=x.description;return t&&""!==t.trim()?/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(t.trim())?/^[a-zA-Z0-9.,\-\s]*$/.test(a.trim())||(e=!1,E({fieldState:"error",message:v("common.input_text_area_invalid_helper_text")})):(e=!1,C({fieldState:"error",message:v("common.input_filed_invalid_helper_text")})):(e=!1,C({fieldState:"error",message:v("common.this_is_a_required_field")})),t.length>m.xe&&(e=!1,C({fieldState:"error",message:v("srs.service_registry_name_length_is_greater_than_expected",{maxLength:m.xe})})),a&&a.length>m.YZ&&(e=!1,E({fieldState:"error",message:v("srs.service_registry_desc_length_is_greater_than_expected",{maxLength:m.YZ})})),e}(),[4,null==_?void 0:_.srs.getToken()];case 1:if(t=i.sent(),!e)return I(!1),[2];if(!t)return[3,5];a=new l.RegistriesApi(new l.Configuration({accessToken:t,basePath:L})),i.label=2;case 2:return i.trys.push([2,4,,5]),P(!0),[4,a.createRegistry({name:x.name}).then((function(){n(),R(),p&&p(),P(!1)}))];case 3:return i.sent(),[3,5];case 4:return r=i.sent(),P(!1),function(e){var t,a;(0,m.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason),y({title:v("something_went_wrong"),variant:g.AlertVariant.danger,description:a})}(r),[3,5];case 5:return[2]}}))}))},G=function(e){e.preventDefault(),U()};return s().createElement(u.a$,{id:"modalCreateSRegistry",isModalOpen:!0,title:v("srs.create_service_registry_instance"),handleModalToggle:function(){R(),n()},onCreate:U,isFormValid:N,primaryButtonTitle:"Create",isCreationInProgress:j,dataTestIdSubmit:"modalCreateServiceRegistry-buttonSubmit",dataTestIdCancel:"modalCreateServiceRegistry-buttonCancel"},(A=w.message,k=w.fieldState,z=x.name,B=x.description,V=S.message,Z=S.fieldState,s().createElement(o.Form,{onSubmit:G},!N&&s().createElement(o.FormAlert,null,s().createElement(o.Alert,{variant:"danger",title:v("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})),s().createElement(o.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:A,validated:k,helperText:v("common.input_filed_invalid_helper_text")},s().createElement(o.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:z,onChange:F,validated:k,autoFocus:!0})),s().createElement(o.FormGroup,{label:"Description",fieldId:"text-input-description",helperTextInvalid:V,validated:Z,helperText:v("common.input_text_area_invalid_helper_text")},s().createElement(o.TextArea,{id:"text-input-description",name:"text-input-description",value:B,onChange:O,validated:Z})))))},n[v.DELETE_SERVICE_REGISTRY]=function(){var e=(0,d.useTranslation)().t,t=(0,g.useAlert)().addAlert,a=(0,p.useHistory)(),n=(0,g.useAuth)(),o=(0,g.useConfig)().srs.apiBasePath,c=(0,g.useBasename)(),v=(0,u.QK)(),_=v.store,L=v.hideModal,y=(null==_?void 0:_.modalProps)||{},f=y.title,w=y.confirmButtonProps,C=y.cancelButtonProps,M=y.textProps,S=y.serviceRegistryStatus,E=y.selectedItemData,T=y.onClose,x=y.fetchRegistries,h=y.shouldRedirect,b=null==E?void 0:E.name,N=(0,r.useState)(),I=N[0],D=N[1],j=(0,r.useState)(!1),P=j[0],R=j[1],A=function(){return(null==S?void 0:S.toLowerCase())===l.RegistryStatusValueRest.Ready&&(null==I?void 0:I.toLowerCase())!==(null==b?void 0:b.toLowerCase())},k=function(){D(""),L(),T&&T()};return s().createElement(u.AX,{isModalOpen:!0,title:f,confirmButtonProps:(0,i.__assign)((0,i.__assign)({isDisabled:A(),"data-testid":"modalDeleteRegistry-buttonDelete"},w),{onClick:function(r){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var s,u,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return s=r.id,u=r.name,[4,null==n?void 0:n.srs.getToken()];case 1:return d=i.sent(),s?(R(!0),[4,new l.RegistriesApi(new l.Configuration({accessToken:d,basePath:o})).deleteRegistry(s).then((function(){R(!1),t({title:e("srs.service_registry_deletion_success_message",{name:u}),variant:g.AlertVariant.success}),h?a.push(c.getBasename()):x&&x(),k()})).catch((function(a){R(!1),function(a){var n,i;(0,m.G6)(a)&&(i=null===(n=a.response)||void 0===n?void 0:n.data.reason),t({title:e("common.something_went_wrong"),variant:g.AlertVariant.danger,description:i})}(a)}))]):[3,3];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},isLoading:P}),cancelButtonProps:C,handleModalToggle:k,textProps:M,selectedItemData:E,textInputProps:{showTextInput:(null==S?void 0:S.toLowerCase())===l.RegistryStatusValueRest.Ready,label:e("common.service_registry_name_label",{name:b}),value:I,onChange:function(e){D(e)},onKeyPress:function(e){"Enter"!==e.key||A()||(null==w?void 0:w.onClick)&&w.onClick(E)},autoFocus:!0}})},n),L=(0,r.createContext)({showModal:function(){},hideModal:function(){},store:{}}),y=function(){return(0,r.useContext)(L)},f=function(e){var t,a=e.children,n=(0,r.useState)(),o=n[0],l=n[1],c=o||{},u=c.modalType,d=c.modalProps;return s().createElement(L.Provider,{value:{store:o,showModal:function(e,t){void 0===t&&(t={}),l((0,i.__assign)((0,i.__assign)({},o),{modalType:e,modalProps:t}))},hideModal:function(){l((0,i.__assign)((0,i.__assign)({},o),{modalType:null,modalProps:{}}))}}},(t=_[u],u&&t?s().createElement(t,(0,i.__assign)({id:"global-modal"},d)):null),a)}},5537:(e,t,a)=>{a.d(t,{YZ:()=>n.YZ,xe:()=>n.xe,L0:()=>n.L0,wx:()=>n.wx,G6:()=>i,hm:()=>n.hm});a(2519);var n=a(2648),i=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)}},8800:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(2448),i=a.n(n),r=a(1593),s=a(6486),o=a.n(s),l=a(3337),c=a.n(l),u=a(2578),d=a.n(u),m=a(7012),g=a.n(m),p=(a(6831),i().createInstance()),v="true"===new URLSearchParams(window.location.search).get("pseudolocalization");p.use(new(d())({enabled:v,wrapped:!0})).use(c()).use(o()).use(r.initReactI18next).init({backend:{loadPath:a.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,a,n){return n=n||{},"number"===t?new Intl.NumberFormat(a).format(e):e instanceof Date?"fromNow"===t?g()(e).fromNow(!0===n.omitSuffix):g()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,a){}},(function(){g().locale(i().language)})),p.on("languageChanged",(function(e){g().locale(e)}));const _=p}}]);
//# sourceMappingURL=358.0f28875b.js.map