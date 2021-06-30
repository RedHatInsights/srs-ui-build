(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[618],{7502:()=>{},6280:(e,t,a)=>{"use strict";a.d(t,{OP:()=>m,EG:()=>p,mt:()=>c,UW:()=>E,nA:()=>g});var n=a(8121),i=a.n(n),r=a(6007),o=a(5351),s=a(8788),l=a(15),c=function(e){var t=e.onConnectToRegistry,a=e.onDeleteRegistry,c=e.breadcrumbId,u=e.serviceRegistryDetails,d=(0,o.useTranslation)().t,m=!1,g=(0,n.useState)(),p=g[0],_=g[1],v=(0,l.useBasename)();null!=c&&(m=!0,d(c));var L=[i().createElement(s.DropdownItem,{key:"connect-registry",onClick:function(){return t&&t(u)}},d("srs.view_connection_information")),i().createElement(s.DropdownItem,{key:"delete-registry",onClick:function(){return a&&a(u)}},d("srs.delete_registry"))];return i().createElement(s.PageSection,{variant:s.PageSectionVariants.light},i().createElement(s.Level,null,i().createElement(s.LevelItem,null,m?i().createElement(s.Breadcrumb,null,i().createElement(s.BreadcrumbItem,null,i().createElement(r.Link,{to:v.getBasename()||"/"}," ",d("srs.service_registry_breadcrumb"))),i().createElement(s.BreadcrumbItem,{isActive:!0},null==u?void 0:u.name)):i().createElement(s.TextContent,null,i().createElement(s.Text,{component:"h1"}," ",d("srs.service_registry")))),c&&i().createElement(s.LevelItem,null,i().createElement(s.Dropdown,{onSelect:function(){_(!p)},toggle:i().createElement(s.KebabToggle,{onToggle:function(e){_(e)},id:"toggle-service-registry"}),isOpen:p,isPlain:!0,dropdownItems:L,position:s.DropdownPosition.right}))))},u=a(3494),d=function(e){var t=e.registryApisUrl,a=(0,o.useTranslation)().t,n=[{title:a("srs.connection_content_1"),code:t+"/registry/v2"},{title:a("srs.connection_content_2"),code:t+"/ccompat/v6"},{title:a("srs.connection_content_3"),code:t+"/cncf/v0"}];return i().createElement("div",{className:"mas--details__drawer--tab-content"},i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},a("common.connection"))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.small},a("srs.connection_title_info"))),i().createElement(s.Form,null,null==n?void 0:n.map((function(e,n){var r=e.title,o=e.code;return t?i().createElement(s.FormGroup,{label:r,fieldId:"copy-clipboard-"+n,key:o+"'-'"+n},i().createElement(s.ClipboardCopy,{id:"copy-clipboard-"+n,hoverTip:a("common.copy_clipboard"),clickTip:a("common.copy_clipboard_successfully"),textAriaLabel:r,isReadOnly:!0},o)):i().createElement(s.Skeleton,{fontSize:"2xl"})}))))},m=function(e){var t=e.isExpanded,a=e.isLoading,n=e.onClose,r=e["data-ouia-app-id"],s=e.children,l=e.notRequiredDrawerContentBackground,c=e.registry,m=(0,o.useTranslation)().t,g=c||{},p=g.registryUrl,_=g.name,v=i().createElement(d,{registryApisUrl:p});return i().createElement(u.D5,{isExpanded:t,isLoading:a,onClose:n,panelBodyContent:v,drawerHeaderProps:{text:{label:m("srs.service_registry_instance_name")},title:{value:_,headingLevel:"h1"}},"data-ouia-app-id":r,notRequiredDrawerContentBackground:l},s)},g=function(e){var t=e.getAccessToServiceRegistry,a=(0,o.useTranslation)().t;return i().createElement(i().Fragment,null,i().createElement(c,{showKebab:!1}),i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoAccess},titleProps:{title:a("srs.unauthorized_empty_state_title")},emptyStateBodyProps:{body:a("srs.unauthorized_empty_state_body")},buttonProps:{title:a("srs.get_access_to_service_registry"),variant:s.ButtonVariant.primary,onClick:t}})))},p=function(e){var t=e.onCreateserviceRegistry,a=(0,o.useTranslation)().t;return i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoItems},titleProps:{title:a("srs.empty_state_registry_title")},emptyStateBodyProps:{body:a("srs.empty_state_registry_description")},buttonProps:{title:a("srs.create_service_registry"),variant:s.ButtonVariant.primary,onClick:t}}))},_=a(655),v=a(4550),L=a(5537),w=a(5451),C=a(1942),M=a(4564),y=function(e){var t=e.status,a=e.instanceName,n=(0,o.useTranslation)().t,r=function(){switch(null==t?void 0:t.toLowerCase()){case L.hm[0].value:return i().createElement(w.ZP,{className:"mk--instances__table--icon--completed"});case L.hm[1].value:return i().createElement(M.ZP,{className:"mk--instances__table--icon--failed"});case L.hm[2].value:return i().createElement(s.Spinner,{size:"md","aria-label":a,"aria-valuetext":"Creation in progress"});default:return i().createElement(C.ZP,null)}}();return i().createElement(s.Flex,null,r&&i().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},r),i().createElement(s.FlexItem,null,function(){var e,a=L.hm.filter((function(e){var a;return(null===(a=e.value)||void 0===a?void 0:a.toLowerCase())===(null==t?void 0:t.toLowerCase())}));return 1===a.length?n("common."+(null===(e=a[0].value)||void 0===e?void 0:e.toLowerCase())):n("common.creation_pending")}()))},f=function(e){var t=e.total,a=e.page,n=e.perPage,r=e.handleCreateModal,l=(0,o.useTranslation)().t,c=[{item:i().createElement(s.Button,{variant:"primary",onClick:r,"data-testid":"tableServiceRegistry-buttonCreateServiceRegistry"},l("srs.create_service_registry"))}];return t&&t>0&&c.length>0&&c.push({item:i().createElement(u.wu,{widgetId:"pagination-options-menu-top",itemCount:t,page:a,perPage:n,isCompact:!0,titles:{paginationTitle:l("common.minimal_pagination"),perPageSuffix:l("common.per_page_suffix"),toFirstPage:l("common.to_first_page"),toPreviousPage:l("common.to_previous_page"),toLastPage:l("common.to_last_page"),toNextPage:l("common.to_next_page"),optionsToggle:l("common.options_toggle"),currPage:l("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(u.L5,{toolbarProps:{id:"registry-instance-toolbar",clearAllFilters:function(){},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:c})},E=function(e){var t=e.serviceRegistryItems,a=e.onViewConnection,c=(e.refresh,e.registryDataLoaded),d=e.onDelete,m=(e.expectedTotal,e.orderBy),g=e.setOrderBy,p=e.isDrawerOpen,w=e.loggedInUser,C=(e.currentUserkafkas,e.total),M=void 0===C?0:C,E=e.page,S=e.perPage,T=e.handleCreateModal,x=(0,(0,l.useBasename)().getBasename)(),b=(0,o.useTranslation)().t,N=(0,n.useState)(),h=N[0],I=N[1],j=[{title:b("common.name")},{title:b("common.owner")},{title:b("common.status")},{title:b("common.time_created")}];(0,n.useEffect)((function(){p||I("")}),[p]);var D,P=function(e){var t=e.name,a=e.row;return i().createElement(r.Link,{to:x+"/t/"+(null==a?void 0:a.id),"data-testid":"tableRegistries-linkKafka"},t)},A=function(e,t,n){var i,r,o;"connect-instance"===n?(a(t),I(null==t?void 0:t.id)):"delete-instance"===n&&d(t);var s=null===(o=null===(r=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.previousSibling;null!=s&&s.focus()},k=function(e){switch(e.toLowerCase()){case"name":return 0;case"owner":return 1;case"status":return 2;case"created_at":return 3;default:return}},z=function(){var e=(null==m?void 0:m.split(" "))||[];if(e.length>1)return{index:k(e[0]),direction:e[1]===v.SortByDirection.asc?v.SortByDirection.asc:v.SortByDirection.desc}};return i().createElement(s.PageSection,{className:"registry--main-page__page-section--table pf-m-padding-on-xl",variant:s.PageSectionVariants.default,padding:{default:"noPadding"}},i().createElement(s.Card,null,i().createElement(f,{page:E,perPage:S,total:M,handleCreateModal:T}),i().createElement(u.wR,{tableProps:{cells:j,rows:(D=[],null==t||t.forEach((function(e){var t=e.name,a=e.created_at,n=e.status,r=e.owner;D.push({cells:[{title:(null==n?void 0:n.toLowerCase())!==L.O6.Available?t:P({name:t,row:e})},r,{title:i().createElement(y,{status:n,instanceName:t})},{title:a}],originalData:(0,_.__assign)((0,_.__assign)({},e),{rowId:null==e?void 0:e.id})})})),D),"aria-label":b("common.registry_instance_list"),actionResolver:function(e){var t,a,n,i=e.originalData;return[(0,_.__assign)((0,_.__assign)((t={title:b("srs.view_connection_information"),id:"connect-instance"},t["data-testid"]="tableRegistry-actionConnection",t.onClick=function(e){return A(e,i,"connect-instance")},t),n),{tooltipProps:{position:"left",content:b("common.no_permission_to_connect_registry")}}),(0,_.__assign)((0,_.__assign)((a={title:b("srs.delete_registry"),id:"delete-instance"},a["data-testid"]="tableRegistry-actionDelete",a.onClick=function(e){return A(e,i,"delete-instance")},a),n),{tooltipProps:{position:"left",content:b("common.no_permission_to_delete_service_registry")}})]},onSort:function(e,t,a,n){var i,r=a;(null===(i=z())||void 0===i?void 0:i.index)!==t&&"time-created"===n.property&&(r="desc"),g(function(e){switch(e){case 0:return"name";case 1:return"owner";case 2:return"status";case 3:return"created_at";default:return""}}(t)+" "+r)},sortBy:z(),hasDefaultCustomRowWrapper:!0},activeRow:h,onRowClick:function(e,t,n){var i,r,o=n.originalData,s=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.type,l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==s&&"a"!==(null==l?void 0:l.toLowerCase())&&(a(o),I(null==o?void 0:o.id))},rowDataTestId:"tableRegistry-row",loggedInUser:w}),t.length<1&&c&&i().createElement(u.C0,{emptyStateProps:{variant:u.jU.NoResult},titleProps:{title:b("common.no_results_found")},emptyStateBodyProps:{body:b("common.adjust_your_filters_and_try_again")}}),M>0&&i().createElement(u.wu,{widgetId:"pagination-options-menu-bottom",itemCount:M,variant:s.PaginationVariant.bottom,page:E,perPage:S,titles:{paginationTitle:b("common.full_pagination"),perPageSuffix:b("common.per_page_suffix"),toFirstPage:b("common.to_first_page"),toPreviousPage:b("common.to_previous_page"),toLastPage:b("common.to_last_page"),toNextPage:b("common.to_next_page"),optionsToggle:b("common.options_toggle"),currPage:b("common.curr_page")}})))}},2311:(e,t,a)=>{"use strict";a.d(t,{a:()=>l});var n=a(8121),i=a.n(n),r=a(8788),o=a(5351),s=a(5537),l=function(e){var t=e.isModalOpen,a=e.children,n=e.title,l=e.handleModalToggle,c=e.onCreate,u=e.isFormValid,d=e.isCreationInProgress,m=e.primaryButtonTitle,g=e.dataTestIdSubmit,p=e.dataTestIdCancel,_=e.id,v=void 0===_?"modalCreateKafka":_,L=(0,o.useTranslation)().t;return i().createElement(r.Modal,{id:v,variant:r.ModalVariant.medium,title:n,isOpen:t,onClose:l,appendTo:(0,s.wx)(),actions:[i().createElement(r.Button,{key:"create",variant:"primary",type:"submit",onClick:c,isDisabled:!u||d,spinnerAriaValueText:L("submitting_request"),isLoading:d,"data-testid":g},m),i().createElement(r.Button,{key:"cancel",variant:"link",onClick:l,"data-testid":p},L("cancel"))]},a)}},9441:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var n=a(655),i=a(8121),r=a.n(i),o=a(8788),s=a(5537),l=function(e){var t=e.isModalOpen,a=e.title,i=e.modalProps,l=e.confirmButtonProps,c=e.cancelButtonProps,u=e.handleModalToggle,d=e.textProps,m=e.children,g=e.selectedItemData,p=void 0===g?"":g,_=e.textInputProps,v=i||{},L=v.variant,w=void 0===L?o.ModalVariant.small:L,C=v.titleIconVariant,M=void 0===C?"warning":C,y=v["aria-label"],f=v.showClose,E=void 0===f||f,S=(0,n.__rest)(v,["variant","titleIconVariant","aria-label","showClose"]),T=l||{},x=T.id,b=void 0===x?"mas--confirm__button":x,N=T.key,h=void 0===N?"confirm-button":N,I=T.variant,j=void 0===I?o.ButtonVariant.danger:I,D=T.onClick,P=T.isDisabled,A=T.label,k=void 0===A?"Delete":A,z=T.isLoading,R=(0,n.__rest)(T,["id","key","variant","onClick","isDisabled","label","isLoading"]),B=c||{},V=B.id,Z=void 0===V?"mas--cancel__button":V,U=B.key,O=void 0===U?'"cancel-button':U,F=B.variant,G=void 0===F?o.ButtonVariant.link:F,Y=B.label,Q=void 0===Y?"Cancel":Y,H=(0,n.__rest)(B,["id","key","variant","label"]),W=d||{},K=W.className,J=void 0===K?"mas--delete-item__modal--text":K,X=W.description,q=(0,n.__rest)(W,["className","description"]),$=_||{},ee=$.label,te=void 0===ee?"":ee,ae=$.value,ne=$.onChange,ie=$.onKeyPress,re=$.showTextInput,oe=(0,n.__rest)($,["label","value","onChange","onKeyPress","showTextInput"]);return r().createElement(o.Modal,(0,n.__assign)({variant:w,isOpen:t,"aria-label":y,title:a,titleIconVariant:M,showClose:E,onClose:u,appendTo:(0,s.wx)(),actions:[r().createElement(o.Button,(0,n.__assign)({id:b,key:h,variant:j,onClick:function(){return D&&D(p)},isDisabled:P,isLoading:z},R),k),r().createElement(o.Button,(0,n.__assign)({id:Z,key:O,variant:G,onClick:u},H),Q)]},S),X&&r().createElement(o.Text,(0,n.__assign)({className:J,dangerouslySetInnerHTML:{__html:X||""}},q)),re&&r().createElement(r().Fragment,null,r().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:te}}),r().createElement(o.TextInput,(0,n.__assign)({id:"mas--name__input",name:"mas-name-input",type:"text",value:ae,onChange:ne,onKeyPress:ie,autoFocus:!0},oe))),m)}},3242:(e,t,a)=>{"use strict";a.d(t,{D:()=>l});var n=a(655),i=a(8121),r=a.n(i),o=a(8788),s=a(3494),l=function(e){var t=e.onClose,a=e.isLoading,i=void 0===a||a,l=e.drawerPanelContentProps,c=e.drawerHeaderProps,u=e.isExpanded,d=e.children,m=e.panelBodyContent,g=e.onExpand,p=e.notRequiredDrawerContentBackground,_=e["data-ouia-app-id"],v=e.inlineAlertMessage,L=l||{},w=L.widths,C=(0,n.__rest)(L,["widths"]),M=c||{},y=M.text,f=M.title,E=r().createElement(o.DrawerPanelContent,(0,n.__assign)({widths:w||{default:"width_50"}},C),i?r().createElement(s.yR,null):r().createElement(r().Fragment,null,r().createElement(o.DrawerHead,null,r().createElement(o.TextContent,null,(null==y?void 0:y.label)&&r().createElement(o.Text,{component:(null==y?void 0:y.component)||o.TextVariants.small,className:(null==y?void 0:y.className)||"pf-u-mb-0"},null==y?void 0:y.label),(null==f?void 0:f.value)&&r().createElement(o.Title,{headingLevel:(null==f?void 0:f.headingLevel)||"h2",size:(null==f?void 0:f.size)||o.TitleSizes.xl,className:(null==f?void 0:f.className)||"pf-u-mt-0"},null==f?void 0:f.value)),r().createElement(o.DrawerActions,null,r().createElement(o.DrawerCloseButton,{onClick:t}))),r().createElement(o.DrawerPanelBody,null,v,m)));return r().createElement(o.Drawer,{isExpanded:u,onExpand:g,"data-ouia-app-id":_},r().createElement(o.DrawerContent,{panelContent:E,className:p?"pf-m-no-background":""},r().createElement(o.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",d)))}},1140:(e,t,a)=>{"use strict";a.d(t,{C:()=>p,j:()=>m});var n=a(655),i=a(8121),r=a.n(i),o=a(8788),s=a(777),l=a(4558),c=a(5569),u=a(1070),d=a(4564);var m,g=a(3651);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(m||(m={}));var p=function(e){var t=e.titleProps,a=e.buttonProps,i=e.emptyStateIconProps,p=e.emptyStateProps,_=e.emptyStateBodyProps,v=e.children,L=a||{},w=L.variant,C=void 0===w?o.ButtonVariant.primary:w,M=L.onClick,y=(0,n.__rest)(L,["variant","onClick"]),f=t||{},E=f.title,S=(0,n.__rest)(f,["title"]),T=_||{},x=T.body,b=(0,n.__rest)(T,["body"]),N=p||{},h=N.variant,I=void 0===h?m.GettingStarted:h,j=N.className,D=(0,n.__rest)(N,["variant","className"]),P=function(){return r().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},A=function(){var e={};switch(I){case m.GettingStarted:e={variant:o.EmptyStateVariant.xl,icon:l.ZP,titleSize:o.TitleSizes["4xl"],headingLevel:"h1"};break;case m.NoAccess:e={variant:o.EmptyStateVariant.large,icon:c.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case m.NoItems:e={variant:o.EmptyStateVariant.large,icon:s.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case m.NoResult:e={variant:o.EmptyStateVariant.large,icon:u.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h2"};break;case m.UnexpectedError:e={variant:o.EmptyStateVariant.full,icon:d.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;case m.PageNotFound:e={variant:o.EmptyStateVariant.full,icon:P,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:I||o.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),k=A.variant,z=A.icon,R=A.titleSize,B=A.headingLevel;return r().createElement(o.EmptyState,(0,n.__assign)({variant:k,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",j)},D),r().createElement(o.EmptyStateIcon,(0,n.__assign)({icon:z},i)),E&&r().createElement(o.Title,(0,n.__assign)({headingLevel:B,size:R},S),E),x&&r().createElement(o.EmptyStateBody,(0,n.__assign)({},b),x),(null==a?void 0:a.title)&&r().createElement(o.Button,(0,n.__assign)({variant:C,onClick:M},y),null==a?void 0:a.title),v)}},6554:(e,t,a)=>{"use strict";a.d(t,{y:()=>s});var n=a(655),i=a(8121),r=a.n(i),o=a(8788),s=function(e){var t=e.bullseyeProps,a=e.spinnerProps;return r().createElement(o.Bullseye,(0,n.__assign)({},t),r().createElement(o.Spinner,(0,n.__assign)({},a)))}},6376:(e,t,a)=>{"use strict";a.d(t,{w:()=>l});var n=a(655),i=a(8121),r=a.n(i),o=a(6007),s=a(8788),l=function(e){var t=e.page,a=e.perPage,l=void 0===a?10:a,c=e.itemCount,u=e.variant,d=void 0===u?s.PaginationVariant.top:u,m=e.isCompact,g=e.titles,p=(0,n.__rest)(e,["page","perPage","itemCount","variant","isCompact","titles"]),_=(0,o.useHistory)(),v=(0,o.useLocation)(),L=new URLSearchParams(v.search),w=(0,i.useCallback)((function(e,t){L.set(e,t.toString())}),[L]),C=(0,i.useCallback)((function(e,t){w("page",t.toString()),_.push({search:L.toString()})}),[w,_,L]),M=(0,i.useCallback)((function(e,t){w("page","1"),w("perPage",t.toString()),_.push({search:L.toString()})}),[w,_,L]);return r().createElement(s.Pagination,(0,n.__assign)({itemCount:c,perPage:l,page:t,onSetPage:C,variant:d,onPerPageSelect:M,isCompact:m},p,{titles:g}))}},2067:(e,t,a)=>{"use strict";a.d(t,{w:()=>d});var n=a(655),i=a(8121),r=a.n(i),o=a(4550),s=a(3651),l=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),c=l.Provider,u=function(e){var t=(0,i.useContext)(l),a=t.activeRow,o=t.onRowClick,c=t.rowDataTestId,u=t.loggedInUser,d=e||{},m=d.trRef,g=d.className,p=d.rowProps,_=d.row,v=(0,n.__rest)(d,["trRef","className","rowProps","row"]),L=p.rowIndex,w=_.isExpanded,C=_.originalData;null==C||C.owner;return r().createElement("tr",(0,n.__assign)({"data-testid":c,tabIndex:0,ref:m,className:(0,s.css)(g,"pf-c-table-row__item",a&&a===(null==C?void 0:C.rowId)&&"pf-m-selected"),hidden:void 0!==w&&!w,onClick:function(e){return o&&o(e,L,_)}},v))},d=function(e){var t=e.tableProps,a=e.tableHeaderProps,i=e.tableBodyProps,l=e.children,d=e.activeRow,m=e.onRowClick,g=e.rowDataTestId,p=e.loggedInUser,_=t.cells,v=t.rows,L=t.actionResolver,w=t.onSort,C=t.sortBy,M=t["aria-label"],y=t.variant,f=t.className,E=t.hasDefaultCustomRowWrapper,S=void 0!==E&&E,T=(0,n.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return S&&(T.rowWrapper=u),r().createElement(c,{value:{activeRow:d,onRowClick:m,rowDataTestId:g,loggedInUser:p}},r().createElement(o.Table,(0,n.__assign)({className:(0,s.css)(S&&"mas--streams-table-view__table",f),cells:_,variant:y,rows:v,"aria-label":M,actionResolver:L,onSort:w,sortBy:C},T),r().createElement(o.TableHeader,(0,n.__assign)({},a)),r().createElement(o.TableBody,(0,n.__assign)({},i)),l))}},5642:(e,t,a)=>{"use strict";a.d(t,{L:()=>s});var n=a(655),i=a(8121),r=a.n(i),o=a(8788),s=function(e){var t=e.toolbarProps,a=e.toggleGroupProps,i=e.toolbarItems,s=e.toggleGroupItems,l=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,d=void 0===u?"md":u,m=t.inset,g=(0,n.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return r().createElement(r().Fragment,null,r().createElement(o.Toolbar,(0,n.__assign)({id:l,clearAllFilters:c,inset:m,collapseListedFiltersBreakpoint:d},g),r().createElement(o.ToolbarContent,null,a&&r().createElement(o.ToolbarToggleGroup,(0,n.__assign)({toggleIcon:a.toggleIcon,breakpoint:"md"},a),s),null==i?void 0:i.map((function(e,t){var a=e.key,i=void 0===a?"mas":a,s=e.variant,l=e.className,c=e.id,u=e.alignment,d=e.item,m=(0,n.__rest)(e,["key","variant","className","id","alignment","item"]);return r().createElement(o.ToolbarItem,(0,n.__assign)({key:i+"-"+t,variant:s,className:l,id:c,alignment:u},m),d)})))))}},9758:(e,t,a)=>{"use strict";a.d(t,{Ny:()=>_,OU:()=>C,QK:()=>w});var n,i=a(655),r=a(8121),o=a.n(r),s=a(8788),l=a(6279),c=function(){this.name="",this.description=""},u=a(3494),d=a(5351),m=a(5537),g=a(15),p=a(6007),_={CREATE_SERVICE_REGISTRY:"CREATE_SERVICE_REGISTRY",DELETE_SERVICE_REGISTRY:"DELETE_SERVICE_REGISTRY"},v=((n={})[_.CREATE_SERVICE_REGISTRY]=function(){var e=new c,t=(0,u.QK)(),a=t.store,n=t.hideModal,p=((null==a?void 0:a.modalProps)||{}).fetchServiceRegistries,_=(0,d.useTranslation)().t,v=(0,g.useAuth)(),L=(0,g.useConfig)().srs.apiBasePath,w=(0,g.useAlert)().addAlert,C=(0,r.useState)({fieldState:"default"}),M=C[0],y=C[1],f=(0,r.useState)({fieldState:"default"}),E=f[0],S=f[1],T=(0,r.useState)(e),x=T[0],b=T[1],N=(0,r.useState)(!0),h=N[0],I=N[1],j=(0,r.useState)(!1),D=j[0],P=j[1],A=function(){y({fieldState:"default"}),S({fieldState:"default"}),b(e),I(!0)};(0,r.useEffect)((function(){"error"!==M.fieldState&&"error"!==E.fieldState&&I(!0)}),[M.fieldState,E.fieldState]);var k,z,R,B,V,Z,U=function(e){b((0,i.__assign)((0,i.__assign)({},x),{name:e}));var t=!0;e&&!/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.trim())&&(t=!1),e&&e.length>m.xe?y({fieldState:"error",message:_("srs.service_registry_name_length_is_greater_than_expected",{maxLength:m.xe})}):t&&"error"===M.fieldState?y({fieldState:"default",message:""}):t||y({fieldState:"error",message:_("common.input_filed_invalid_helper_text")})},O=function(e){b((0,i.__assign)((0,i.__assign)({},x),{description:e}));var t=!0;e&&!/^[a-zA-Z0-9.,\-\s]*$/.test(e.trim())&&(t=!1),e&&e.length>m.YZ?S({fieldState:"error",message:_("srs.service_registry_description_length_is_greater_than_expected",{maxLength:m.YZ})}):t&&"error"===E.fieldState?S({fieldState:"default",message:""}):t||S({fieldState:"error",message:_("common.input_text_area_invalid_helper_text")})},F=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e,t,a,r;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return e=function(){var e=!0,t=x.name,a=x.description;return t&&""!==t.trim()?/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(t.trim())?/^[a-zA-Z0-9.,\-\s]*$/.test(a.trim())||(e=!1,S({fieldState:"error",message:_("common.input_text_area_invalid_helper_text")})):(e=!1,y({fieldState:"error",message:_("common.input_filed_invalid_helper_text")})):(e=!1,y({fieldState:"error",message:_("common.this_is_a_required_field")})),t.length>m.xe&&(e=!1,y({fieldState:"error",message:_("srs.service_registry_name_length_is_greater_than_expected",{maxLength:m.xe})})),a&&a.length>m.YZ&&(e=!1,S({fieldState:"error",message:_("srs.service_registry_desc_length_is_greater_than_expected",{maxLength:m.YZ})})),e}(),[4,null==v?void 0:v.srs.getToken()];case 1:if(t=i.sent(),!e)return I(!1),[2];if(!t)return[3,5];a=new l.RegistriesApi(new l.Configuration({accessToken:t,basePath:L})),i.label=2;case 2:return i.trys.push([2,4,,5]),P(!0),[4,a.createRegistry({name:x.name}).then((function(){n(),A(),w({title:_("srs.service_registry_creation_success_message"),variant:g.AlertVariant.success}),p&&p(),P(!1)}))];case 3:return i.sent(),[3,5];case 4:return r=i.sent(),P(!1),function(e){var t,a;(0,m.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason),w({title:_("something_went_wrong"),variant:g.AlertVariant.danger,description:a})}(r),[3,5];case 5:return[2]}}))}))},G=function(e){e.preventDefault(),F()};return o().createElement(u.a$,{id:"modalCreateSRegistry",isModalOpen:!0,title:_("srs.create_service_registry_instance"),handleModalToggle:function(){A(),n()},onCreate:F,isFormValid:h,primaryButtonTitle:"Create",isCreationInProgress:D,dataTestIdSubmit:"modalCreateServiceRegistry-buttonSubmit",dataTestIdCancel:"modalCreateServiceRegistry-buttonCancel"},(k=M.message,z=M.fieldState,R=x.name,B=x.description,V=E.message,Z=E.fieldState,o().createElement(s.Form,{onSubmit:G},!h&&o().createElement(s.FormAlert,null,o().createElement(s.Alert,{variant:"danger",title:_("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})),o().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:k,validated:z,helperText:_("common.input_filed_invalid_helper_text")},o().createElement(s.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:R,onChange:U,validated:z,autoFocus:!0})),o().createElement(s.FormGroup,{label:"Description",fieldId:"text-input-description",helperTextInvalid:V,validated:Z,helperText:_("common.input_text_area_invalid_helper_text")},o().createElement(s.TextArea,{id:"text-input-description",name:"text-input-description",value:B,onChange:O,validated:Z})))))},n[_.DELETE_SERVICE_REGISTRY]=function(){var e=(0,d.useTranslation)().t,t=(0,g.useAlert)().addAlert,a=(0,p.useHistory)(),n=(0,g.useAuth)(),s=(0,g.useConfig)().srs.apiBasePath,c=(0,g.useBasename)(),_=(0,u.QK)(),v=_.store,L=_.hideModal,w=(null==v?void 0:v.modalProps)||{},C=w.title,M=w.confirmButtonProps,y=w.cancelButtonProps,f=w.textProps,E=w.serviceRegistryStatus,S=w.selectedItemData,T=w.onClose,x=w.fetchRegistries,b=w.shouldRedirect,N=null==S?void 0:S.name,h=(0,r.useState)(),I=h[0],j=h[1],D=(0,r.useState)(!1),P=D[0],A=D[1],k=function(){return(null==E?void 0:E.toLowerCase())===m.O6.Available&&(null==I?void 0:I.toLowerCase())!==(null==N?void 0:N.toLowerCase())},z=function(){j(""),L(),T&&T()};return o().createElement(u.AX,{isModalOpen:!0,title:C,confirmButtonProps:(0,i.__assign)((0,i.__assign)({isDisabled:k(),"data-testid":"modalDeleteRegistry-buttonDelete"},M),{onClick:function(r){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var o,u,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return o=r.id,u=r.name,[4,null==n?void 0:n.srs.getToken()];case 1:return d=i.sent(),o?(A(!0),[4,new l.RegistriesApi(new l.Configuration({accessToken:d,basePath:s})).deleteRegistry(o).then((function(){A(!1),t({title:e("srs.service_registry_deletion_success_message",{name:u}),variant:g.AlertVariant.success}),b?a.push(c.getBasename()):x&&x(),z()})).catch((function(a){A(!1),function(a){var n,i;(0,m.G6)(a)&&(i=null===(n=a.response)||void 0===n?void 0:n.data.reason),t({title:e("common.something_went_wrong"),variant:g.AlertVariant.danger,description:i})}(a)}))]):[3,3];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},isLoading:P}),cancelButtonProps:y,handleModalToggle:z,textProps:f,selectedItemData:S,textInputProps:{showTextInput:(null==E?void 0:E.toLowerCase())===m.O6.Available,label:e("common.service_registry_name_label",{name:N}),value:I,onChange:function(e){j(e)},onKeyPress:function(e){"Enter"!==e.key||k()||(null==M?void 0:M.onClick)&&M.onClick(S)},autoFocus:!0}})},n),L=(0,r.createContext)({showModal:function(){},hideModal:function(){},store:{}}),w=function(){return(0,r.useContext)(L)},C=function(e){var t,a=e.children,n=(0,r.useState)(),s=n[0],l=n[1],c=s||{},u=c.modalType,d=c.modalProps;return o().createElement(L.Provider,{value:{store:s,showModal:function(e,t){void 0===t&&(t={}),l((0,i.__assign)((0,i.__assign)({},s),{modalType:e,modalProps:t}))},hideModal:function(){l((0,i.__assign)((0,i.__assign)({},s),{modalType:null,modalProps:{}}))}}},(t=v[u],u&&t?o().createElement(t,(0,i.__assign)({id:"global-modal"},d)):null),a)}},5537:(e,t,a)=>{"use strict";a.d(t,{YZ:()=>n.YZ,xe:()=>n.xe,O6:()=>n.O6,wx:()=>n.wx,G6:()=>i,hm:()=>n.hm});a(2519);var n=a(2648),i=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)}},8800:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(3287),i=a.n(n),r=a(5351),o=a(6486),s=a.n(o),l=a(1686),c=a.n(l),u=a(2578),d=a.n(u),m=a(3974),g=a.n(m),p=(a(6831),i().createInstance()),_="true"===new URLSearchParams(window.location.search).get("pseudolocalization");p.use(new(d())({enabled:_,wrapped:!0})).use(c()).use(s()).use(r.initReactI18next).init({backend:{loadPath:a.p+"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,a,n){return n=n||{},"number"===t?new Intl.NumberFormat(a).format(e):e instanceof Date?"fromNow"===t?g()(e).fromNow(!0===n.omitSuffix):g()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,a){}},(function(){g().locale(i().language)})),p.on("languageChanged",(function(e){g().locale(e)}));const v=p}}]);
//# sourceMappingURL=618.6a9f2563.js.map