"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[999],{87502:()=>{},18271:(e,t,n)=>{n.d(t,{OP:()=>_,EG:()=>v,mt:()=>u,UW:()=>S});var a=n(75418),i=n.n(a),r=n(98068),o=n(69020),s=n(84669),l=n(9980),c=n(31151),u=function(e){var t=e.onConnectToRegistry,n=e.onDeleteRegistry,u=e.breadcrumbId,m=e.serviceRegistryDetails,d=(0,o.useTranslation)().t,g=!1,_=(0,a.useState)(),p=_[0],v=_[1],L=((0,l.useBasename)()||{}).getBasename,E=L&&L();null!=u&&(g=!0,d(u));var f=((0,c.x)()||{}).artifactId,y=[i().createElement(s.DropdownItem,{key:"connect-registry",onClick:function(){return t&&t(m)}},d("srs.view_connection_information")),i().createElement(s.DropdownItem,{key:"delete-registry",onClick:function(){return n&&n(m)}},d("srs.delete_registry"))];return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},g?i().createElement(s.Breadcrumb,null,i().createElement(s.BreadcrumbItem,null,i().createElement(r.Link,{to:"".concat(E)||"/"}," ",d("srs.service_registry_breadcrumb"))),i().createElement(s.BreadcrumbItem,{isActive:!0},f?i().createElement(r.Link,{to:"".concat(E,"/t/").concat(null==m?void 0:m.id)},null==m?void 0:m.name):null==m?void 0:m.name),f&&i().createElement(s.BreadcrumbItem,null,f)):i().createElement(s.TextContent,null,i().createElement(s.Text,{component:"h1"}," ",d("srs.service_registry")))),i().createElement(s.PageSection,{variant:s.PageSectionVariants.light},u&&i().createElement(s.Level,null,i().createElement(s.Title,{headingLevel:"h1"},null==m?void 0:m.name),i().createElement(s.Dropdown,{onSelect:function(){v(!p)},toggle:i().createElement(s.KebabToggle,{onToggle:function(e){v(e)},id:"toggle-service-registry"}),isOpen:p,isPlain:!0,dropdownItems:y,position:s.DropdownPosition.right}))))},m=n(33494),d=n(70251),g=function(e){var t=e.registryApisUrl,n=e.registryInstance,a=((0,c.x)()||{}).tokenEndPointUrl,u=(0,o.useTranslation)().t,m=((0,l.useBasename)()||{}).getBasename,g=m&&m(),_=[{title:u("srs.connection_content_1"),code:"".concat(t,"/apis/registry/v2")},{title:u("srs.connection_content_2"),code:"".concat(t,"/apis/ccompat/v6")},{title:u("srs.connection_content_3"),code:"".concat(t,"/apis/cncf/v0")}],p=(0,l.useModal)().showModal;return i().createElement("div",{className:"mas--details__drawer--tab-content"},i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Title,{headingLevel:"h2",size:s.TitleSizes.lg},u("common.connection"))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.small},u("srs.connection_title_info"))),i().createElement(s.Form,null,null==_?void 0:_.map((function(e,n){var a=e.title,r=e.code;return t?i().createElement(s.FormGroup,{label:a,fieldId:"copy-clipboard-".concat(n),key:"".concat(r,"'-'").concat(n)},i().createElement(s.ClipboardCopy,{id:"copy-clipboard-".concat(n),hoverTip:u("common.copy_clipboard"),clickTip:u("common.copy_clipboard_successfully"),textAriaLabel:a,isReadOnly:!0},r)):i().createElement(s.Skeleton,{fontSize:"2xl"})}))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h3,className:"pf-u-mt-xl"},u("srs.service_accounts_small")),i().createElement(s.Text,{component:s.TextVariants.small},u("srs.create_service_account_to_generate_credentials")," ",i().createElement(r.Link,{to:"/service-accounts","data-testid":"tableStreams-linkKafka"},u("srs.service_accounts"))," ",u("common.page"),".")),i().createElement(s.Button,{variant:"secondary",onClick:function(){p(l.ModalType.KasCreateServiceAccount,{})},"data-testid":"drawerStreams-buttonCreateServiceAccount",isInline:!0},u("srs.create_service_account")),i().createElement(s.TextContent,{className:"pf-u-pt-sm"},i().createElement(s.Text,{component:s.TextVariants.small},i().createElement(o.Trans,{i18nKey:"srs.current_instance",components:[i().createElement(r.Link,{to:"".concat(g,"/t/").concat(null==n?void 0:n.id,"/roles"),key:"tableRegistries-linkKafka"})]}))),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h3,className:"pf-u-mt-xl"},u("srs.authentication_method")),i().createElement(s.Text,{component:s.TextVariants.h4,className:"pf-u-mt-md"},u("srs.oauth")," ",i().createElement(s.Label,{color:"green"},u("srs.recommended")),i().createElement(s.Popover,{"aria-label":u("srs.oauth"),bodyContent:i().createElement("div",null,u("srs.oauth_popover_content"))},i().createElement(s.Button,{variant:s.ButtonVariant.plain,"aria-label":u("more_info_about_oauth")},i().createElement(d.HelpIcon,null)))),i().createElement(s.Text,{component:s.TextVariants.small},u("srs.oauth_description")),i().createElement(s.Text,{component:s.TextVariants.h6,className:"pf-u-mt-md"},u("srs.token_endpoint_url")),i().createElement(s.ClipboardCopy,{isReadOnly:!0},a)),i().createElement(s.TextContent,{className:"pf-u-pb-sm"},i().createElement(s.Text,{component:s.TextVariants.h4,className:"pf-u-mt-md"},u("srs.http_basic")),i().createElement(s.Text,{component:s.TextVariants.small},u("srs.http_basic_description"))))},_=function(e){var t=e.isExpanded,n=e.isLoading,a=e.onClose,r=e["data-ouia-app-id"],s=e.children,l=e.notRequiredDrawerContentBackground,c=e.registry,u=(0,o.useTranslation)().t,d=c||{},_=d.registryUrl,p=d.name,v=i().createElement(g,{registryApisUrl:_,registryInstance:c});return i().createElement(m.D5,{isExpanded:t,isLoading:n,onClose:a,panelBodyContent:v,drawerHeaderProps:{text:{label:u("srs.service_registry_instance_name")},title:{value:p,headingLevel:"h1"}},"data-ouia-app-id":r,notRequiredDrawerContentBackground:l},s)},p=n(10069),v=function(e){var t=e.onCreateserviceRegistry,n=(0,o.useTranslation)().t,a=i().useContext(p.QuickStartContext);return i().createElement(s.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(m.C0,{emptyStateProps:{variant:m.jU.NoItems},titleProps:{title:n("srs.empty_state_registry_title")},emptyStateBodyProps:{body:i().createElement(i().Fragment,null,i().createElement(o.Trans,{i18nKey:"srs.empty_state_registry_description",components:[i().createElement(s.Button,{variant:s.ButtonVariant.link,isSmall:!0,isInline:!0,key:"btn-quick-start",onClick:function(){return a.setActiveQuickStart&&a.setActiveQuickStart("getting-started-service-registry")}})]}))},buttonProps:{title:n("srs.create_service_registry"),variant:s.ButtonVariant.primary,onClick:t}}))},L=n(70655),E=n(27577),f=n(98502),y=n(75381),C=n(35451),T=n(41942),w=n(84564),x=function(e){var t=e.status,n=e.instanceName,a=(0,o.useTranslation)().t,r=function(){switch(null==t?void 0:t.toLowerCase()){case y.hm[0].value:return i().createElement(C.ZP,{className:"mk--instances__table--icon--completed"});case y.hm[1].value:return i().createElement(w.ZP,{className:"mk--instances__table--icon--failed"});case y.hm[2].value:return i().createElement(T.ZP,null);case y.hm[3].value:case y.hm[4].value:return i().createElement(s.Spinner,{size:"md","aria-label":n,"aria-valuetext":"Creation in progress"});case y.hm[5].value:case y.hm[6].value:return;default:return i().createElement(T.ZP,null)}}();return i().createElement(s.Flex,null,r&&i().createElement(s.FlexItem,{spacer:{default:"spacerSm"}},r),i().createElement(s.FlexItem,null,function(){var e,n=y.hm.filter((function(e){var n;return(null===(n=e.value)||void 0===n?void 0:n.toLowerCase())===(null==t?void 0:t.toLowerCase())}));return 1===n.length?a("common.".concat(null===(e=n[0].value)||void 0===e?void 0:e.toLowerCase())):a("common.creation_pending")}()))},M=function(e){var t=e.total,n=e.page,a=e.perPage,r=e.handleCreateModal,l=(0,o.useTranslation)().t,c=[{item:i().createElement(s.Button,{variant:"primary",onClick:r,"data-testid":"tableServiceRegistry-buttonCreateServiceRegistry"},l("srs.create_service_registry"))}];return t&&t>0&&c.length>0&&c.push({item:i().createElement(m.wu,{widgetId:"pagination-options-menu-top",itemCount:t,page:n,perPage:a,isCompact:!0,titles:{paginationTitle:l("common.minimal_pagination"),perPageSuffix:l("common.per_page_suffix"),toFirstPage:l("common.to_first_page"),toPreviousPage:l("common.to_previous_page"),toLastPage:l("common.to_last_page"),toNextPage:l("common.to_next_page"),optionsToggle:l("common.options_toggle"),currPage:l("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(m.L5,{toolbarProps:{id:"registry-instance-toolbar",clearAllFilters:function(){},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:c})},S=function(e){var t=e.serviceRegistryItems,n=e.onViewConnection,c=(e.refresh,e.registryDataLoaded),u=e.onDelete,d=(e.expectedTotal,e.orderBy),g=e.setOrderBy,_=e.isDrawerOpen,p=e.loggedInUser,v=e.currentUserRegistries,C=e.total,T=void 0===C?0:C,w=e.page,S=e.perPage,b=e.handleCreateModal,h=((0,l.useAlert)()||{}).addAlert,I=((0,l.useBasename)()||{}).getBasename,N=I&&I(),D=(0,o.useTranslation)().t,k=(0,l.useAuth)(),A=(0,a.useState)(),j=A[0],P=A[1],R=(0,a.useState)([]),V=R[0],z=R[1],B=(0,a.useState)([]),F=B[0],Q=B[1],U=(0,a.useState)(),O=U[0],G=U[1],Z=[{title:D("common.name")},{title:D("common.owner")},{title:D("common.status")},{title:D("common.time_created")}];(0,a.useEffect)((function(){_||P("")}),[_]),(0,a.useEffect)((function(){null==k||k.isOrgAdmin().then((function(e){return G(e)}))}),[k]);var Y=function(){if(v){var e=v.filter((function(e){return e.status===f.RegistryStatusValue.Deprovision||e.status===f.RegistryStatusValue.Deleting})).filter((function(e){return V.findIndex((function(t){return t===e.name}))<0})).map((function(e){return e.name||""})),t=(0,L.__spreadArray)((0,L.__spreadArray)([],V,!0),e,!0);z(t),t.forEach((function(e){(null==v?void 0:v.findIndex((function(t){return t.name===e})))<0&&(!function(e){var t=V.findIndex((function(t){return t===e}));if(t>-1){var n=Object.assign([],V);n.splice(t,1),z(n)}}(e),h&&h({title:D("srs.service_registry_successfully_deleted",{name:e}),variant:l.AlertVariant.success}))}))}};(0,a.useEffect)((function(){Y(),function(){var e=JSON.parse(JSON.stringify(F));if(F&&F.length>0){var n=Object.assign([],t).filter((function(e){return e.status===f.RegistryStatusValue.Ready||e.status===f.RegistryStatusValue.Failed}));e.forEach((function(e){var t=n.filter((function(t){return e.id===t.id}));if(t&&t.length>0){var a=t[0],r=a.status,o=a.name;r===f.RegistryStatusValue.Ready?h&&h({title:D("srs.registry_successfully_created"),variant:l.AlertVariant.success,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:D("srs.registry_success_message",{name:o})}}),dataTestId:"toastCreateRegistry-success"}):r===f.RegistryStatusValue.Failed&&h&&h({title:D("srs.registry_not_created"),variant:l.AlertVariant.danger,description:i().createElement("span",{dangerouslySetInnerHTML:{__html:D("srs.registry_failed_message",{name:o})}}),dataTestId:"toastCreateRegistry-failed"})}}))}var a=Object.assign([],null==t?void 0:t.filter((function(e){return e.status===f.RegistryStatusValue.Provisioning||e.status===f.RegistryStatusValue.Accepted})));Q(a)}()}),[w,S,t,v]);var H,W=function(e){var t=e.name,n=e.row;return i().createElement(r.Link,{to:"".concat(N,"/t/").concat(null==n?void 0:n.id),"data-testid":"tableRegistries-linkKafka"},t)},K=function(e,t,a){var i,r,o;"connect-instance"===a?(n(t),P(null==t?void 0:t.id)):"delete-instance"===a&&u(t);var s=null===(o=null===(r=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.previousSibling;null!=s&&s.focus()},J=function(e){switch(e.toLowerCase()){case"name":return 0;case"owner":return 1;case"status":return 2;case"created_at":return 3;default:return}},q=function(){var e=(null==d?void 0:d.split(" "))||[];if(e.length>1)return{index:J(e[0]),direction:e[1]===E.SortByDirection.asc?E.SortByDirection.asc:E.SortByDirection.desc}};return i().createElement(s.PageSection,{className:"registry--main-page__page-section--table pf-m-padding-on-xl",variant:s.PageSectionVariants.default},i().createElement(s.Card,null,i().createElement(M,{page:w,perPage:S,total:T,handleCreateModal:b}),i().createElement(m.wR,{tableProps:{cells:Z,rows:(H=[],null==t||t.forEach((function(e){var t=e.name,n=e.created_at,a=e.status,r=e.owner,o=e.instance_type;H.push({cells:[{title:(null==a?void 0:a.toLowerCase())!==f.RegistryStatusValue.Ready?t:W({name:t,row:e})},r,{title:i().createElement(x,{status:a,instanceName:t})},{title:i().createElement(i().Fragment,null,(0,y.L0)(n,D("ago")),i().createElement("br",null),o===(null===y.ik||void 0===y.ik?void 0:y.ik.eval)&&"2-month duration")}],originalData:(0,L.__assign)((0,L.__assign)({},e),{rowId:null==e?void 0:e.id})})})),H),"aria-label":D("common.registry_instance_list"),actionResolver:function(e){var t,n,a,i=e.originalData,r=i.owner===p||O;return r||(a={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}}),[(0,L.__assign)((0,L.__assign)((t={title:D("srs.view_connection_information"),id:"connect-instance"},t["data-testid"]="tableRegistry-actionConnection",t.onClick=function(e){return K(e,i,"connect-instance")},t),a),{tooltipProps:{position:"left",content:D("common.no_permission_to_connect_registry")}}),(0,L.__assign)((0,L.__assign)((n={title:D("srs.delete_registry"),id:"delete-instance"},n["data-testid"]="tableRegistry-actionDelete",n.onClick=function(e){return r&&K(e,i,"delete-instance")},n),a),{tooltipProps:{position:"left",content:D("common.no_permission_to_delete_service_registry")}})]},onSort:function(e,t,n,a){var i,r=n;(null===(i=q())||void 0===i?void 0:i.index)!==t&&"time-created"===a.property&&(r="desc"),g("".concat(function(e){switch(e){case 0:return"name";case 1:return"owner";case 2:return"status";case 3:return"created_at";default:return""}}(t)," ").concat(r))},sortBy:q(),hasDefaultCustomRowWrapper:!0},activeRow:j,onRowClick:function(e,t,a){var i,r,o=a.originalData,s=null===(i=null==e?void 0:e.target)||void 0===i?void 0:i.type,l=null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.tagName;"button"!==s&&"a"!==(null==l?void 0:l.toLowerCase())&&(n(o),P(null==o?void 0:o.id))},rowDataTestId:"tableRegistry-row",loggedInUser:p}),t.length<1&&c&&i().createElement(m.C0,{emptyStateProps:{variant:m.jU.NoResult},titleProps:{title:D("common.no_results_found")},emptyStateBodyProps:{body:D("common.adjust_your_filters_and_try_again")}}),T>0&&i().createElement(m.wu,{widgetId:"pagination-options-menu-bottom",itemCount:T,variant:s.PaginationVariant.bottom,page:w,perPage:S,titles:{paginationTitle:D("common.full_pagination"),perPageSuffix:D("common.per_page_suffix"),toFirstPage:D("common.to_first_page"),toPreviousPage:D("common.to_previous_page"),toLastPage:D("common.to_last_page"),toNextPage:D("common.to_next_page"),optionsToggle:D("common.options_toggle"),currPage:D("common.curr_page")}})))};n(12773),n(59786),n(58684),n(55623)},52311:(e,t,n)=>{n.d(t,{a:()=>l});var a=n(75418),i=n.n(a),r=n(84669),o=n(69020),s=n(75381),l=function(e){var t=e.isModalOpen,n=e.children,a=e.title,l=e.handleModalToggle,c=e.onCreate,u=e.isFormValid,m=e.isCreationInProgress,d=e.primaryButtonTitle,g=e.dataTestIdSubmit,_=e.dataTestIdCancel,p=e.id,v=void 0===p?"modalCreateKafka":p,L=e.isDisabledButton,E=(0,o.useTranslation)().t;return i().createElement(r.Modal,{id:v,variant:r.ModalVariant.medium,title:a,isOpen:t,onClose:l,appendTo:(0,s.wx)(),actions:[i().createElement(r.Button,{key:"create",variant:"primary",type:"submit",onClick:c,isDisabled:!u||m||L,spinnerAriaValueText:E("submitting_request"),isLoading:m,"data-testid":g},d),i().createElement(r.Button,{key:"cancel",variant:"link",onClick:l,"data-testid":_},E("common.cancel"))]},n)}},79441:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(70655),i=n(75418),r=n.n(i),o=n(84669),s=n(75381),l=n(69020),c=function(e){var t=e.isModalOpen,n=e.title,i=e.modalProps,c=e.confirmButtonProps,u=e.cancelButtonProps,m=e.handleModalToggle,d=e.textProps,g=e.children,_=e.selectedItemData,p=void 0===_?"":_,v=e.textInputProps,L=e.checkboxProps,E=(0,l.useTranslation)().t,f=i||{},y=f.variant,C=void 0===y?o.ModalVariant.small:y,T=f.titleIconVariant,w=void 0===T?"warning":T,x=f["aria-label"],M=f.showClose,S=void 0===M||M,b=(0,a.__rest)(f,["variant","titleIconVariant","aria-label","showClose"]),h=c||{},I=h.id,N=void 0===I?"mas--confirm__button":I,D=h.key,k=void 0===D?"confirm-button":D,A=h.variant,j=void 0===A?o.ButtonVariant.danger:A,P=h.onClick,R=h.isDisabled,V=h.label,z=void 0===V?"Delete":V,B=h.isLoading,F=(0,a.__rest)(h,["id","key","variant","onClick","isDisabled","label","isLoading"]),Q=u||{},U=Q.id,O=void 0===U?"mas--cancel__button":U,G=Q.key,Z=void 0===G?'"cancel-button':G,Y=Q.variant,H=void 0===Y?o.ButtonVariant.link:Y,W=Q.label,K=void 0===W?"Cancel":W,J=(0,a.__rest)(Q,["id","key","variant","label"]),q=L||{},X=(q.id,q.isDownloaded),$=q.isChecked,ee=q.onChange,te=(d||{}).description,ne=v||{},ae=ne.label,ie=void 0===ae?"":ae,re=ne.value,oe=ne.onChange,se=ne.onKeyPress,le=ne.showTextInput,ce=(0,a.__rest)(ne,["label","value","onChange","onKeyPress","showTextInput"]);return r().createElement(o.Modal,(0,a.__assign)({variant:C,isOpen:t,"aria-label":x,title:n,titleIconVariant:w,showClose:S,onClose:m,appendTo:(0,s.wx)(),actions:[r().createElement(o.Button,(0,a.__assign)({id:N,key:k,variant:j,onClick:function(){return P&&P(p)},isDisabled:R,isLoading:B},F),z),r().createElement(o.Button,(0,a.__assign)({id:O,key:Z,variant:H,onClick:m},J),K)]},b),te,le&&r().createElement(o.Form,null,r().createElement(o.FormGroup,{fieldId:"text-input"},r().createElement("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:ie}}),r().createElement(o.TextInput,(0,a.__assign)({id:"mas--name__input",name:"mas-name-input",type:"text",value:re,onChange:oe,onKeyPress:se,autoFocus:!0},ce))),r().createElement(o.FormGroup,{fieldId:"checkbox"},r().createElement(o.Checkbox,{label:E(X?"common.checkbox_label_after_the_download_click":"common.checkbox_label_before_the_download_click"),"aria-label":"uncontrolled checkbox example",id:N,className:"pf-u-font-size-sm",isChecked:$,onChange:ee}))),g)}},53242:(e,t,n)=>{n.d(t,{D:()=>l});var a=n(70655),i=n(75418),r=n.n(i),o=n(84669),s=n(33494),l=function(e){var t=e.onClose,n=e.isLoading,i=void 0===n||n,l=e.drawerPanelContentProps,c=e.drawerHeaderProps,u=e.isExpanded,m=e.children,d=e.panelBodyContent,g=e.onExpand,_=e.notRequiredDrawerContentBackground,p=e["data-ouia-app-id"],v=e.inlineAlertMessage,L=l||{},E=L.widths,f=(0,a.__rest)(L,["widths"]),y=c||{},C=y.text,T=y.title,w=r().createElement(o.DrawerPanelContent,(0,a.__assign)({widths:E||{default:"width_50"}},f),i?r().createElement(s.yR,null):r().createElement(r().Fragment,null,r().createElement(o.DrawerHead,null,r().createElement(o.TextContent,null,(null==C?void 0:C.label)&&r().createElement(o.Text,{component:(null==C?void 0:C.component)||o.TextVariants.small,className:(null==C?void 0:C.className)||"pf-u-mb-0"},null==C?void 0:C.label),(null==T?void 0:T.value)&&r().createElement(o.Title,{headingLevel:(null==T?void 0:T.headingLevel)||"h2",size:(null==T?void 0:T.size)||o.TitleSizes.xl,className:(null==T?void 0:T.className)||"pf-u-mt-0"},null==T?void 0:T.value)),r().createElement(o.DrawerActions,null,r().createElement(o.DrawerCloseButton,{onClick:t}))),r().createElement(o.DrawerPanelBody,null,v,d)));return r().createElement(o.Drawer,{isExpanded:u,onExpand:g,"data-ouia-app-id":p},r().createElement(o.DrawerContent,{panelContent:w,className:_?"pf-m-no-background":""},r().createElement(o.DrawerContentBody,{className:"pf-u-display-flex pf-u-flex-direction-column"}," ",m)))}},91098:(e,t,n)=>{n.d(t,{C:()=>_,j:()=>d});var a=n(70655),i=n(75418),r=n.n(i),o=n(84669),s=n(20777),l=n(34558),c=n(5569),u=n(71070),m=n(84564);var d,g=n(76814);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(d||(d={}));var _=function(e){var t=e.titleProps,n=e.buttonProps,i=e.emptyStateIconProps,_=e.emptyStateProps,p=e.emptyStateBodyProps,v=e.children,L=n||{},E=L.variant,f=void 0===E?o.ButtonVariant.primary:E,y=L.onClick,C=(0,a.__rest)(L,["variant","onClick"]),T=t||{},w=T.title,x=(0,a.__rest)(T,["title"]),M=p||{},S=M.body,b=(0,a.__rest)(M,["body"]),h=_||{},I=h.variant,N=void 0===I?d.GettingStarted:I,D=h.className,k=(0,a.__rest)(h,["variant","className"]),A=function(){return r().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"})},j=function(){var e={};switch(N){case d.GettingStarted:e={variant:o.EmptyStateVariant.xl,icon:l.ZP,titleSize:o.TitleSizes["4xl"],headingLevel:"h1"};break;case d.NoAccess:e={variant:o.EmptyStateVariant.large,icon:c.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case d.NoItems:e={variant:o.EmptyStateVariant.large,icon:s.ZP,titleSize:o.TitleSizes.xl,headingLevel:"h2"};break;case d.NoResult:e={variant:o.EmptyStateVariant.large,icon:u.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h2"};break;case d.UnexpectedError:e={variant:o.EmptyStateVariant.full,icon:m.ZP,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;case d.PageNotFound:e={variant:o.EmptyStateVariant.full,icon:A,titleSize:o.TitleSizes.lg,headingLevel:"h1"};break;default:e={variant:N||o.EmptyStateVariant.full,icon:null==i?void 0:i.icon,titleSize:null==t?void 0:t.size,headingLevel:null==t?void 0:t.headingLevel}}return e}(),P=j.variant,R=j.icon,V=j.titleSize,z=j.headingLevel;return r().createElement(o.EmptyState,(0,a.__assign)({variant:P,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",D)},k),r().createElement(o.EmptyStateIcon,(0,a.__assign)({icon:R},i)),w&&r().createElement(o.Title,(0,a.__assign)({headingLevel:z,size:V},x),w),S&&r().createElement(o.EmptyStateBody,(0,a.__assign)({},b),S),(null==n?void 0:n.title)&&r().createElement(o.Button,(0,a.__assign)({variant:f,onClick:y},C),null==n?void 0:n.title),v)}},76554:(e,t,n)=>{n.d(t,{y:()=>s});var a=n(70655),i=n(75418),r=n.n(i),o=n(84669),s=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return r().createElement(o.Bullseye,(0,a.__assign)({},t),r().createElement(o.Spinner,(0,a.__assign)({},n)))}},86376:(e,t,n)=>{n.d(t,{wu:()=>u,bN:()=>c,h0:()=>l});var a=n(70655),i=n(75418),r=n.n(i),o=n(84669),s=(0,i.createContext)(void 0),l=function(){return(0,i.useContext)(s)},c=function(e){var t=e.children,n=(0,i.useState)(1),a=n[0],o=n[1],l=(0,i.useState)(10),c=l[0],u=l[1];return r().createElement(s.Provider,{value:{page:a,perPage:c,setPage:o,setPerPage:u}},t)},u=function(e){var t=e.itemCount,n=e.variant,s=void 0===n?o.PaginationVariant.top:n,c=e.isCompact,u=e.titles,m=(0,a.__rest)(e,["itemCount","variant","isCompact","titles"]),d=l()||{},g=d.setPage,_=d.setPerPage,p=d.perPage,v=d.page,L=(0,i.useCallback)((function(e,t){g&&g(t)}),[]),E=(0,i.useCallback)((function(e,t){g&&g(1),_&&_(t)}),[]);return r().createElement(o.Pagination,(0,a.__assign)({itemCount:t,perPage:p,page:v,onSetPage:L,variant:s,onPerPageSelect:E,isCompact:c},m,{titles:u}))}},42067:(e,t,n)=>{n.d(t,{w:()=>d});var a=n(70655),i=n(75418),r=n.n(i),o=n(27577),s=n(76814),l=n(98502),c=(0,i.createContext)({activeRow:"",onRowClick:function(){},loggedInUser:""}),u=c.Provider,m=function(e){var t=(0,i.useContext)(c),n=t.activeRow,o=t.onRowClick,u=t.rowDataTestId,m=t.loggedInUser,d=e||{},g=d.trRef,_=d.className,p=d.rowProps,v=d.row,L=(0,a.__rest)(d,["trRef","className","rowProps","row"]),E=p.rowIndex,f=v.isExpanded,y=v.originalData,C=(null==y?void 0:y.status)===l.RegistryStatusValue.Deprovision||(null==y?void 0:y.status)===l.RegistryStatusValue.Deleting,T=m===(null==y?void 0:y.owner),w=C||!T;return r().createElement("tr",(0,a.__assign)({"data-testid":u,tabIndex:w?void 0:0,ref:g,className:(0,s.css)(_,"pf-c-table-row__item",C?"pf-m-disabled":T&&"pf-m-selectable",!w&&n&&n===(null==y?void 0:y.rowId)&&"pf-m-selected"),hidden:void 0!==f&&!f,onClick:function(e){return!w&&o&&o(e,E,v)}},L))},d=function(e){var t=e.tableProps,n=e.tableHeaderProps,i=e.tableBodyProps,l=e.children,c=e.activeRow,d=e.onRowClick,g=e.rowDataTestId,_=e.loggedInUser,p=t.cells,v=t.rows,L=t.actionResolver,E=t.onSort,f=t.sortBy,y=t["aria-label"],C=t.variant,T=t.className,w=t.hasDefaultCustomRowWrapper,x=void 0!==w&&w,M=(0,a.__rest)(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper"]);return x&&(M.rowWrapper=m),r().createElement(u,{value:{activeRow:c,onRowClick:d,rowDataTestId:g,loggedInUser:_}},r().createElement(o.Table,(0,a.__assign)({className:(0,s.css)(x&&"mas--streams-table-view__table",T),cells:p,variant:C,rows:v,"aria-label":y,actionResolver:L,onSort:E,sortBy:f},M),r().createElement(o.TableHeader,(0,a.__assign)({},n)),r().createElement(o.TableBody,(0,a.__assign)({},i)),l))}},45642:(e,t,n)=>{n.d(t,{L:()=>s});var a=n(70655),i=n(75418),r=n.n(i),o=n(84669),s=function(e){var t=e.toolbarProps,n=e.toggleGroupProps,i=e.toolbarItems,s=e.toggleGroupItems,l=t.id,c=t.clearAllFilters,u=t.collapseListedFiltersBreakpoint,m=void 0===u?"md":u,d=t.inset,g=(0,a.__rest)(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return r().createElement(r().Fragment,null,r().createElement(o.Toolbar,(0,a.__assign)({id:l,clearAllFilters:c,inset:d,collapseListedFiltersBreakpoint:m},g),r().createElement(o.ToolbarContent,null,n&&r().createElement(o.ToolbarToggleGroup,(0,a.__assign)({toggleIcon:n.toggleIcon,breakpoint:"md"},n),s),null==i?void 0:i.map((function(e,t){var n=e.key,i=void 0===n?"mas":n,s=e.variant,l=e.className,c=e.id,u=e.alignment,m=e.item,d=(0,a.__rest)(e,["key","variant","className","id","alignment","item"]);return r().createElement(o.ToolbarItem,(0,a.__assign)({key:"".concat(i,"-").concat(t),variant:s,className:l,id:c,alignment:u},d),m)})))))}},78496:(e,t,n)=>{n.d(t,{Ny:()=>E,OU:()=>T,QK:()=>C});var a,i=n(70655),r=n(75418),o=n.n(r),s=n(84669),l=n(98502),c=function(){this.name="",this.description=""},u=n(33494),m=n(69020),d=n(75381),g=n(9980),_=function(e){var t=e.quota,n=e.hasServiceRegistryCreationFailed,a=e.loadingQuota,i=e.hasUserTrialInstance,r=(0,m.useTranslation)().t,l=t||{},c=l.data,u=l.isServiceDown,d=null==c?void 0:c.get(null===g.QuotaType||void 0===g.QuotaType?void 0:g.QuotaType.srs);if(void 0===t||a)return o().createElement(s.Alert,{className:"pf-u-mb-md",variant:s.AlertVariant.info,title:r("common.instance_checking_message"),"aria-live":"polite",isInline:!0,customIcon:o().createElement(s.Spinner,{size:"md","aria-valuetext":"Checking service registry availability"})});var _="",p="",v=s.AlertVariant.danger;return!d&&i?(_="common.trial_service_registry_title",v=s.AlertVariant.warning,p="common.deploy_one_instance_alert_message"):d||i?d&&0===(null==d?void 0:d.remaining)&&(v=s.AlertVariant.warning,_="common.standard_service_registry_alert_title",p="common.standard_service_registry_alert_message"):(v=s.AlertVariant.info,_="common.trial_quota_service_registry_title"),n&&(v=s.AlertVariant.danger,_="common.service_registry_creation_failed_alert_title",p=d?"common.standard_service_registry_creation_failed_alert_message":"common.trial_service_registry_creation_failed_alert_message"),u&&(_="common.something_went_wrong",v=s.AlertVariant.danger,p="common.ams_service_down_message"),o().createElement(o().Fragment,null,_&&o().createElement(s.Alert,{className:"pf-u-mb-md",variant:v,title:r(_),"aria-live":"polite",isInline:!0},r(p)))},p=n(10069),v=function(e){var t=e.isSrsTrial,n=(0,m.useTranslation)().t,a=o().useContext(p.QuickStartContext);return o().createElement(s.TextContent,null,o().createElement(s.Text,{component:s.TextVariants.h3},n("common.instance_information")),o().createElement(s.TextList,{component:s.TextListVariants.dl},o().createElement(s.Grid,{sm:6,lg:12,hasGutter:!0},t&&o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},n("common.duration")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},n("common.duration_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},n("common.artifact_versions")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},n("common.artifact_versions_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},n("common.artifact_size")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},n("common.artifact_size_value"))),o().createElement(s.GridItem,null,o().createElement(s.TextListItem,{component:s.TextListItemVariants.dt},n("common.request_rate")),o().createElement(s.TextListItem,{component:s.TextListItemVariants.dd},n("common.request_rate_value")))),o().createElement(s.Button,{isSmall:!0,isInline:!0,variant:s.ButtonVariant.link,style:{marginTop:"20px"},onClick:function(){return a.setActiveQuickStart&&a.setActiveQuickStart("getting-started-service-registry")}},n("common.quick_start_guide_message"))))},L=n(98068),E={CREATE_SERVICE_REGISTRY:"CREATE_SERVICE_REGISTRY",DELETE_SERVICE_REGISTRY:"DELETE_SERVICE_REGISTRY"},f=((a={})[E.CREATE_SERVICE_REGISTRY]=function(){var e,t=new c,n=(0,u.QK)(),a=n.store,p=n.hideModal,L=(null==a?void 0:a.modalProps)||{},E=L.fetchServiceRegistries,f=L.hasUserTrialInstance,y=(0,m.useTranslation)().t,C=(0,g.useAuth)(),T=(0,g.useConfig)().srs.apiBasePath,w=((0,g.useAlert)()||{}).addAlert,x=((0,g.useQuota)()||{}).getQuota,M=(0,r.useState)({fieldState:"default"}),S=M[0],b=M[1],h=(0,r.useState)(t),I=h[0],N=h[1],D=(0,r.useState)(!0),k=D[0],A=D[1],j=(0,r.useState)(!1),P=j[0],R=j[1],V=(0,r.useState)(),z=V[0],B=V[1],F=(0,r.useState)(!1),Q=F[0],U=F[1],O=null===(e=null==z?void 0:z.data)||void 0===e?void 0:e.get(null===g.QuotaType||void 0===g.QuotaType?void 0:g.QuotaType.srs),G=void 0===(null==z?void 0:z.loading)||(null==z?void 0:z.loading),Z=!O,Y=G||f||Q||O&&0===(null==O?void 0:O.remaining),H=function(){b({fieldState:"default"}),N(t),A(!0)};(0,r.useEffect)((function(){(0,i.__awaiter)(void 0,void 0,void 0,(function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return x?[4,x().then((function(e){B(e)}))]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[]),(0,r.useEffect)((function(){"error"!==S.fieldState&&A(!0)}),[S]);var W,K,J,q=function(e){N((0,i.__assign)((0,i.__assign)({},I),{name:e}));var t=!0;e&&!/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(e.trim())&&(t=!1),e&&e.length>d.xe?b({fieldState:"error",message:y("srs.service_registry_name_length_is_greater_than_expected",{maxLength:d.xe})}):t&&"error"===S.fieldState?b({fieldState:"default",message:""}):t||b({fieldState:"error",message:y("common.input_filed_invalid_helper_text")})},X=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e,t,n,a;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return e=function(){var e=!0,t=I.name;return t&&""!==t.trim()?/^[a-z]([-a-z0-9]*[a-z0-9])?$/.test(t.trim())||(e=!1,b({fieldState:"error",message:y("common.input_filed_invalid_helper_text")})):(e=!1,b({fieldState:"error",message:y("common.this_is_a_required_field")})),t.length>d.xe&&(e=!1,b({fieldState:"error",message:y("srs.service_registry_name_length_is_greater_than_expected",{maxLength:d.xe})})),e}(),[4,null==C?void 0:C.srs.getToken()];case 1:if(t=i.sent(),!e)return A(!1),[2];if(!t)return[3,5];n=new l.RegistriesApi(new l.Configuration({accessToken:t,basePath:T})),i.label=2;case 2:return i.trys.push([2,4,,5]),R(!0),[4,n.createRegistry({name:I.name}).then((function(){p(),H(),E&&E(),R(!1)}))];case 3:return i.sent(),[3,5];case 4:return a=i.sent(),R(!1),function(e){var t,n,a,i;(0,d.G6)(e)&&(a=null===(t=e.response)||void 0===t?void 0:t.data.reason,i=null===(n=e.response)||void 0===n?void 0:n.data.code),i===d.SM.FAILED_TO_CHECK_QUOTA||i===d.SM.USER_ALREADY_HAVE_TRIAL_INSTANCE||i===d.SM.INSUFFICIENT_QUOTA||i===d.SM.INSUFFICIENT_STANDARD_QUOTA?U(!0):w&&w({title:y("something_went_wrong"),variant:g.AlertVariant.danger,description:a})}(a),[3,5];case 5:return[2]}}))}))},$=function(e){e.preventDefault(),X()};return o().createElement(u.a$,{id:"modalCreateSRegistry",isModalOpen:!0,title:y("srs.create_service_registry_instance"),handleModalToggle:function(){H(),p()},onCreate:X,isFormValid:k,primaryButtonTitle:"Create",isCreationInProgress:P,dataTestIdSubmit:"modalCreateServiceRegistry-buttonSubmit",dataTestIdCancel:"modalCreateServiceRegistry-buttonCancel",isDisabledButton:Y},o().createElement(_,{quota:z,hasServiceRegistryCreationFailed:Q,loadingQuota:G,hasUserTrialInstance:f}),o().createElement(s.Flex,{direction:{default:"column",lg:"row"}},o().createElement(s.FlexItem,{flex:{default:"flex_2"}}," ",(W=S.message,K=S.fieldState,J=I.name,o().createElement(s.Form,{onSubmit:$},!k&&o().createElement(s.FormAlert,null,o().createElement(s.Alert,{variant:"danger",title:y("common.form_invalid_alert"),"aria-live":"polite",isInline:!0})),o().createElement(s.FormGroup,{label:"Name",isRequired:!0,fieldId:"text-input-name",helperTextInvalid:W,validated:K,helperText:y("common.input_filed_invalid_helper_text")},o().createElement(s.TextInput,{isRequired:!0,type:"text",id:"text-input-name",name:"text-input-name",value:J,onChange:q,validated:K,autoFocus:!0}))))),o().createElement(s.Divider,{isVertical:!0}),o().createElement(s.FlexItem,{flex:{default:"flex_1"},className:"mk--create-instance-modal__sidebar--content"},o().createElement(v,{isSrsTrial:Z}))))},a[E.DELETE_SERVICE_REGISTRY]=function(){var e=(0,m.useTranslation)().t,t=(0,g.useAlert)().addAlert,n=(0,L.useHistory)(),a=(0,g.useAuth)(),c=(0,g.useConfig)().srs.apiBasePath,_=(0,g.useBasename)(),p=(0,u.QK)(),v=p.store,E=p.hideModal,f=(null==v?void 0:v.modalProps)||{},y=f.title,C=f.confirmButtonProps,T=f.cancelButtonProps,w=f.textProps,x=f.serviceRegistryStatus,M=f.selectedItemData,S=f.onClose,b=f.fetchRegistries,h=f.shouldRedirect,I=f.renderDownloadArtifacts,N=null==M?void 0:M.name,D=(0,r.useState)(),k=D[0],A=D[1],j=(0,r.useState)(!1),P=j[0],R=j[1],V=(0,r.useState)(!1),z=V[0],B=V[1],F=(0,r.useState)(!1),Q=F[0],U=F[1],O=function(){return(null==x?void 0:x.toLowerCase())===l.RegistryStatusValue.Ready&&((null==k?void 0:k.toLowerCase())!==(null==N?void 0:N.toLowerCase())||!Q)},G=function(){A(""),E(),S&&S()},Z=o().createElement(o().Fragment,null,o().createElement(s.TextContent,{className:"pf-u-mb-md pf-u-mb-xs"},o().createElement(s.Text,{component:s.TextVariants.p},o().createElement("span",{dangerouslySetInnerHTML:{__html:e("common.delete_service_registry_description",{name:N})}}))),o().createElement(s.Alert,{variant:"info",isInline:!0,className:"pf-u-mb-lg",title:e("common.delete_instance_alert_header"),actionLinks:o().createElement(s.AlertActionLink,{onClick:function(){B(!0)}},I&&I(M,e("common.download_artifacts")))},e("common.delete_instance_alert_body"))),Y=(0,i.__assign)((0,i.__assign)({},w),{description:Z});return o().createElement(u.AX,{isModalOpen:!0,title:y,confirmButtonProps:(0,i.__assign)((0,i.__assign)({isDisabled:O(),"data-testid":"modalDeleteRegistry-buttonDelete"},C),{onClick:function(r){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var o,s,u;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return o=r.id,s=r.name,[4,null==a?void 0:a.srs.getToken()];case 1:return u=i.sent(),o?(R(!0),[4,new l.RegistriesApi(new l.Configuration({accessToken:u,basePath:c})).deleteRegistry(o).then((function(){R(!1),t({title:e("srs.service_registry_deletion_success_message",{name:s}),variant:g.AlertVariant.success}),h?n.push(_.getBasename()):b&&b(),G()})).catch((function(n){R(!1),function(n){var a,i;(0,d.G6)(n)&&(i=null===(a=n.response)||void 0===a?void 0:a.data.reason),t({title:e("common.something_went_wrong"),variant:g.AlertVariant.danger,description:i})}(n)}))]):[3,3];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},isLoading:P}),cancelButtonProps:T,handleModalToggle:G,textProps:Y,selectedItemData:M,textInputProps:{showTextInput:(null==x?void 0:x.toLowerCase())===l.RegistryStatusValue.Ready,label:e("common.service_registry_name_label",{name:N}),value:k,onChange:function(e){A(e)},onKeyPress:function(e){"Enter"!==e.key||O()||(null==C?void 0:C.onClick)&&C.onClick(M)},autoFocus:!0},checkboxProps:{id:"checkbox",isDownloaded:z,isChecked:Q,onChange:function(){U(!Q)}}})},a),y=(0,r.createContext)({showModal:function(){},hideModal:function(){},store:{}}),C=function(){return(0,r.useContext)(y)},T=function(e){var t,n=e.children,a=(0,r.useState)(),s=a[0],l=a[1],c=s||{},u=c.modalType,m=c.modalProps;return o().createElement(y.Provider,{value:{store:s,showModal:function(e,t){void 0===t&&(t={}),l((0,i.__assign)((0,i.__assign)({},s),{modalType:e,modalProps:t}))},hideModal:function(){l((0,i.__assign)((0,i.__assign)({},s),{modalType:null,modalProps:{}}))}}},(t=f[u],u&&t?o().createElement(t,(0,i.__assign)({id:"global-modal"},m)):null),n)}},75381:(e,t,n)=>{n.d(t,{ik:()=>a.ik,xe:()=>a.xe,L0:()=>a.L0,wx:()=>a.wx,hm:()=>a.hm,SM:()=>i.S,G6:()=>i.G});n(82519);var a=n(52648),i=n(78261)}}]);
//# sourceMappingURL=999.24e34cae.js.map