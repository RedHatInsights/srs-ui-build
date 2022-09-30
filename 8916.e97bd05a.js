"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[8916],{62426:()=>{},87807:(e,t,a)=>{a.d(t,{OP:()=>p,EG:()=>x,mt:()=>d,UW:()=>D});var s=a(85893),n=a(93264),i=a(73685),r=a(71236),o=a(28188),l=a(50834),c=a(67822);const d=({onConnectToRegistry:e,onDeleteRegistry:t,breadcrumbId:a,serviceRegistryDetails:d})=>{const{t:u}=(0,r.useTranslation)(["service-registry"]);let g=!1;const[m,p]=(0,n.useState)(),{getBasename:j}=(0,l.useBasename)()||{},x=j&&j(),{artifactId:v}=(0,c.x)()||{};null!=a&&(g=!0);const b=[(0,s.jsx)(o.DropdownItem,Object.assign({onClick:()=>e&&e(d)},{children:u("view_connection_information")}),"connect-registry"),(0,s.jsx)(o.DropdownItem,Object.assign({onClick:()=>t&&t(d)},{children:u("delete_registry")}),"delete-registry")];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:g?(0,s.jsxs)(o.Breadcrumb,{children:[(0,s.jsx)(o.BreadcrumbItem,{children:(0,s.jsxs)(i.Link,Object.assign({to:`${x}`||"/"},{children:[" ",u("service_registry_breadcrumb")]}))}),(0,s.jsx)(o.BreadcrumbItem,Object.assign({isActive:!0},{children:v?(0,s.jsx)(i.Link,Object.assign({to:`${x}/t/${null==d?void 0:d.id}`},{children:null==d?void 0:d.name})):null==d?void 0:d.name})),v&&(0,s.jsx)(o.BreadcrumbItem,{children:v})]}):(0,s.jsx)(o.TextContent,{children:(0,s.jsxs)(o.Text,Object.assign({component:"h1"},{children:[" ",u("service_registry_instances")]}))})})),(0,s.jsx)(o.PageSection,Object.assign({variant:o.PageSectionVariants.light},{children:a&&(0,s.jsxs)(o.Level,{children:[(0,s.jsx)(o.Title,Object.assign({headingLevel:"h1"},{children:null==d?void 0:d.name})),(0,s.jsx)(o.Dropdown,{onSelect:()=>{p(!m)},toggle:(0,s.jsx)(o.KebabToggle,{onToggle:e=>{p(e)},id:"toggle-service-registry"}),isOpen:m,isPlain:!0,dropdownItems:b,position:o.DropdownPosition.right})]})}))]})};var u=a(180),g=a(3965);const m=({registryApisUrl:e,registryInstance:t})=>{const{tokenEndPointUrl:a}=(0,c.x)()||{},{t:d}=(0,r.useTranslation)(["service-registry"]),{getBasename:u}=(0,l.useBasename)()||{},m=u&&u(),{showModal:p}=(0,l.useModal)(),j=[{title:d("connection_content_1"),code:`${e}/apis/registry/v2`},{title:d("connection_content_2"),code:`${e}/apis/ccompat/v6`},{title:d("connection_content_3"),code:`${e}/apis/cncf/v0`}],x=(0,n.useCallback)((()=>{p(l.ModalType.KasCreateServiceAccount,{})}),[p]);return(0,s.jsxs)("div",Object.assign({className:"mas--details__drawer--tab-content"},{children:[(0,s.jsx)(o.TextContent,Object.assign({className:"pf-u-pb-sm"},{children:(0,s.jsx)(o.Title,Object.assign({headingLevel:"h2",size:o.TitleSizes.lg},{children:d("common:connection")}))})),(0,s.jsx)(o.TextContent,Object.assign({className:"pf-u-pb-sm"},{children:(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.small},{children:d("connection_title_info")}))})),(0,s.jsx)(o.Form,{children:null==j?void 0:j.map((({title:t,code:a},n)=>e?(0,s.jsx)(o.FormGroup,Object.assign({label:t,fieldId:`copy-clipboard-${n}`},{children:(0,s.jsx)(o.ClipboardCopy,Object.assign({id:`copy-clipboard-${n}`,hoverTip:d("common:copy_clipboard"),clickTip:d("common:copy_clipboard_successfully"),textAriaLabel:t,isReadOnly:!0},{children:a}))}),`${a}'-'${n}`):(0,s.jsx)(o.Skeleton,{fontSize:"2xl"})))}),(0,s.jsxs)(o.TextContent,Object.assign({className:"pf-u-pb-sm"},{children:[(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h3,className:"pf-u-mt-xl"},{children:d("service_accounts_small")})),(0,s.jsxs)(o.Text,Object.assign({component:o.TextVariants.small},{children:[d("create_service_account_to_generate_credentials")," ",(0,s.jsx)(i.Link,Object.assign({to:"/service-accounts","data-testid":"tableStreams-linkKafka"},{children:d("service_accounts")}))," ",d("common:page"),"."]}))]})),(0,s.jsx)(o.Button,Object.assign({variant:"secondary",onClick:x,"data-testid":"drawerStreams-buttonCreateServiceAccount",isInline:!0},{children:d("create_service_account")})),(0,s.jsx)(o.TextContent,Object.assign({className:"pf-u-pt-sm"},{children:(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.small},{children:(0,s.jsx)(r.Trans,{ns:"service-registry",i18nKey:"current_instance",components:[(0,s.jsx)(i.Link,{to:`${m}/t/${null==t?void 0:t.id}/roles`},"tableRegistries-linkKafka")]})}))})),(0,s.jsxs)(o.TextContent,Object.assign({className:"pf-u-pb-sm"},{children:[(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h3,className:"pf-u-mt-xl"},{children:d("authentication_method")})),(0,s.jsxs)(o.Text,Object.assign({component:o.TextVariants.h4,className:"pf-u-mt-md"},{children:[d("oauth")," ",(0,s.jsx)(o.Label,Object.assign({color:"green"},{children:d("recommended")})),(0,s.jsx)(o.Popover,Object.assign({"aria-label":d("oauth"),bodyContent:(0,s.jsx)("div",{children:d("oauth_popover_content")})},{children:(0,s.jsx)(o.Button,Object.assign({variant:o.ButtonVariant.plain,"aria-label":d("more_info_about_oauth")},{children:(0,s.jsx)(g.HelpIcon,{})}))}))]})),(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.small},{children:d("oauth_description")})),(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h6,className:"pf-u-mt-md"},{children:d("token_endpoint_url")})),(0,s.jsx)(o.ClipboardCopy,Object.assign({isReadOnly:!0},{children:a}))]})),(0,s.jsxs)(o.TextContent,Object.assign({className:"pf-u-pb-sm"},{children:[(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.h4,className:"pf-u-mt-md"},{children:d("http_basic")})),(0,s.jsx)(o.Text,Object.assign({component:o.TextVariants.small},{children:d("http_basic_description")}))]}))]}))},p=({isExpanded:e,isLoading:t,onClose:a,"data-ouia-app-id":n,children:i,notRequiredDrawerContentBackground:o,registry:l})=>{const{t:c}=(0,r.useTranslation)("service-registry"),{registryUrl:d,name:g}=l||{},p=(0,s.jsx)(m,{registryApisUrl:d,registryInstance:l});return(0,s.jsx)(u.D5,Object.assign({isExpanded:e,isLoading:t,onClose:a,panelBodyContent:p,drawerHeaderProps:{text:{label:c("service_registry_instance_name")},title:{value:g,headingLevel:"h1"}},"data-ouia-app-id":n,notRequiredDrawerContentBackground:o},{children:i}))};var j=a(10069);const x=({onCreateserviceRegistry:e})=>{const{t}=(0,r.useTranslation)("service-registry"),a=(0,n.useContext)(j.QuickStartContext);return(0,s.jsx)(o.PageSection,Object.assign({padding:{default:"noPadding"},isFilled:!0},{children:(0,s.jsx)(u.C0,{emptyStateProps:{variant:u.jU.NoItems},titleProps:{title:t("empty_state_registry_title")},emptyStateBodyProps:{body:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Trans,{ns:"service-registry",i18nKey:"empty_state_registry_description",components:[(0,s.jsx)(o.Button,{variant:o.ButtonVariant.link,isSmall:!0,isInline:!0,onClick:()=>a.setActiveQuickStart&&a.setActiveQuickStart("getting-started-service-registry")},"btn-quick-start")]})})},buttonProps:{title:t("create_service_registry"),variant:o.ButtonVariant.primary,onClick:e,"data-testid":"emptyServiceRegistry-buttonCreateServiceRegistry"}})}))};var v=a(19576),b=a(12096),L=a(18377),y=a(35451),C=a(41942),w=a(84564);const h=({status:e,instanceName:t})=>{const{t:a}=(0,r.useTranslation)(["common"]),n=(()=>{switch(null==e?void 0:e.toLowerCase()){case L.hm[0].value:return(0,s.jsx)(y.ZP,{className:"mk--instances__table--icon--completed"});case L.hm[1].value:return(0,s.jsx)(w.ZP,{className:"mk--instances__table--icon--failed"});case L.hm[2].value:return(0,s.jsx)(C.ZP,{});case L.hm[3].value:case L.hm[4].value:return(0,s.jsx)(o.Spinner,{size:"md","aria-label":t,"aria-valuetext":"Creation in progress"});case L.hm[5].value:case L.hm[6].value:return;default:return(0,s.jsx)(C.ZP,{})}})();return(0,s.jsxs)(o.Flex,{children:[n&&(0,s.jsx)(o.FlexItem,Object.assign({spacer:{default:"spacerSm"}},{children:n})),(0,s.jsx)(o.FlexItem,{children:(()=>{var t;const s=L.hm.filter((t=>{var a;return(null===(a=t.value)||void 0===a?void 0:a.toLowerCase())===(null==e?void 0:e.toLowerCase())}));return 1===s.length?a(`common:${null===(t=s[0].value)||void 0===t?void 0:t.toLowerCase()}`):a("common:creation_pending")})()})]})},M=({total:e,page:t,perPage:a,handleCreateModal:n})=>{const{t:i}=(0,r.useTranslation)(["service-registry","common"]),l=[{item:(0,s.jsx)(o.Button,Object.assign({variant:"primary",onClick:n,"data-testid":"tableServiceRegistry-buttonCreateServiceRegistry"},{children:i("create_service_registry")}))}];return e&&e>0&&l.length>0&&l.push({item:(0,s.jsx)(u.wu,{widgetId:"pagination-options-menu-top",itemCount:e,page:t,perPage:a,isCompact:!0,titles:{paginationTitle:i("common:minimal_pagination"),perPageSuffix:i("common:per_page_suffix"),toFirstPage:i("common:to_first_page"),toPreviousPage:i("common:to_previous_page"),toLastPage:i("common:to_last_page"),toNextPage:i("common:to_next_page"),optionsToggle:i("common:options_toggle"),currPage:i("common:curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,s.jsx)(u.L5,{toolbarProps:{id:"registry-instance-toolbar",clearAllFilters:()=>{},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toolbarItems:l})};var T=a(31803),_=a(79141),N=a(72901);function S(e){return{name:e.name,status:e.status}}const D=({serviceRegistryItems:e,onViewConnection:t,registryDataLoaded:a,onDelete:c,orderBy:d,setOrderBy:g,isDrawerOpen:m,loggedInUser:p,total:j=0,page:x,perPage:y,handleCreateModal:C})=>{const{getBasename:w}=(0,l.useBasename)()||{},D=w&&w(),{t:f}=(0,r.useTranslation)(["service-registry","common"]),I=(0,l.useAuth)(),[k,O]=(0,n.useState)(),[P,z]=(0,n.useState)();!function(e){const{t}=(0,r.useTranslation)(["service-registry"]),{addAlert:a}=(0,l.useAlert)()||{},{isVisible:i}=(0,N.d9)(),c=(0,n.useRef)(),d=(0,n.useRef)([]),u=(0,n.useRef)([]),g=(0,n.useCallback)((e=>{a({title:t("registry_successfully_created"),variant:o.AlertVariant.success,description:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t("registry_success_message",{name:e})}}),dataTestId:"toastCreateRegistry-success"})}),[a,t]),m=(0,n.useCallback)((e=>{a({title:t("service_registry_successfully_deleted",{name:e}),variant:o.AlertVariant.success})}),[a,t]),p=(0,n.useCallback)((e=>{a({title:t("registry_not_created"),variant:o.AlertVariant.danger,description:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:t("registry_failed_message",{name:e})}}),dataTestId:"toastCreateRegistry-failed"})}),[a,t]);(0,n.useEffect)((function(){if(e){const t=void 0===c.current,a=c.current||[],s=a.map((e=>`${e.id}:${e.status}`)),n=e.map((e=>`${e.id}:${e.status}`));if(JSON.stringify(s)!==JSON.stringify(n)){const s=(e,s)=>t?[]:e.filter((e=>e.status===s&&!a.find((t=>t.id===e.id&&e.status===s)))),n=s(e,b.RegistryStatusValue.Ready),i=s(e,b.RegistryStatusValue.Failed),[r,o]=d.current.reduce((([t,a],s)=>void 0===e.find((e=>e.id===s.id))?[[...t,s],a]:[t,[...a,s]]),[[],[]]),l=e.filter((e=>[b.RegistryStatusValue.Deleting,b.RegistryStatusValue.Deprovision].includes(e.status)&&void 0===o.find((t=>t.id===e.id))));d.current=[...o,...l],u.current=[...u.current,...n.map(S),...i.map(S),...r.map(S)],c.current=e}}}),[e]),(0,N.Yz)((0,n.useCallback)((function(){if(i)for(;u.current.length>0;){const e=u.current.shift();switch(e.status){case b.RegistryStatusValue.Ready:g(e.name);break;case b.RegistryStatusValue.Failed:p(e.name);break;case b.RegistryStatusValue.Deprovision:case b.RegistryStatusValue.Deleting:m(e.name)}}}),[i,m,p,g]),1e3)}(null==e?void 0:e.filter((e=>e.owner===p)));const A=[{title:f("common:name")},{title:f("common:owner")},{title:f("common:status")},{title:f("common:time_created")}];(0,n.useEffect)((()=>{m||O("")}),[m]),(0,n.useEffect)((()=>{var e;null===(e=null==I?void 0:I.isOrgAdmin())||void 0===e||e.then((e=>z(e)))}),[I]);const E=(e,t)=>(0,s.jsx)(i.Link,Object.assign({to:`${D}/t/${null==t?void 0:t.id}`,"data-testid":"tableRegistries-linkKafka"},{children:e})),B=(e,a,s)=>{var n,i,r;"connect-instance"===s?(t(a),O(null==a?void 0:a.id)):"delete-instance"===s&&c(a);const o=null===(r=null===(i=null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.parentElement)||void 0===r?void 0:r.previousSibling;null!=o&&o.focus()},R=e=>{switch(e.toLowerCase()){case"name":return 0;case"owner":return 1;case"status":return 2;case"created_at":return 3;default:return}},V=()=>{const e=(null==d?void 0:d.split(" "))||[];if(e.length>1)return{index:R(e[0]),direction:e[1]===v.SortByDirection.asc?v.SortByDirection.asc:v.SortByDirection.desc}};return(0,s.jsx)(o.PageSection,Object.assign({className:"registry--main-page__page-section--table pf-m-padding-on-xl",variant:o.PageSectionVariants.default},{children:(0,s.jsxs)(o.Card,{children:[(0,s.jsx)(M,{page:x,perPage:y,total:j,handleCreateModal:C}),(0,s.jsx)(u.wR,{tableProps:{cells:A,rows:(()=>{const t=[];return null==e||e.forEach((e=>{const{name:a,created_at:n,status:i,owner:o,instance_type:l}=e;t.push({cells:[{title:(null==i?void 0:i.toLowerCase())!==b.RegistryStatusValue.Ready?a:E(a,e)},o,{title:(0,s.jsx)(h,{status:i,instanceName:a})},{title:(0,s.jsxs)(s.Fragment,{children:[(0,L.L0)(n,f("ago")),(0,s.jsx)("br",{}),l===(null===L.ik||void 0===L.ik?void 0:L.ik.eval)&&(0,s.jsx)(r.Trans,{ns:"service-registry",i18nKey:"expires_in",components:{time:(0,s.jsx)(_.FormatDate,{date:(0,T.add)(new Date(n),{months:2}),format:"expiration"})}})]})}],originalData:Object.assign(Object.assign({},e),{rowId:null==e?void 0:e.id})})})),t})(),"aria-label":f("registry_instance_list"),actionResolver:e=>{const t=e.originalData,a=t.owner===p||P;let s;a||(s={tooltip:!0,isDisabled:!0,style:{pointerEvents:"auto",cursor:"default"}});return[{title:f("view_connection_information"),id:"connect-instance","data-testid":"tableRegistry-actionConnection",onClick:e=>B(e,t,"connect-instance")},Object.assign(Object.assign({title:f("delete_registry"),id:"delete-instance","data-testid":"tableRegistry-actionDelete",onClick:e=>a&&B(e,t,"delete-instance")},s),{tooltipProps:{position:"left",content:f("no_permission_to_delete_service_registry")}})]},onSort:(e,t,a,s)=>{var n;let i=a;(null===(n=V())||void 0===n?void 0:n.index)!==t&&"time-created"===s.property&&(i="desc"),g(`${(e=>{switch(e){case 0:return"name";case 1:return"owner";case 2:return"status";case 3:return"created_at";default:return""}})(t)} ${i}`)},sortBy:V(),hasDefaultCustomRowWrapper:!0},activeRow:k,onRowClick:(e,a,s)=>{const{originalData:n}=s||{};if(e.target instanceof HTMLElement){const t=e.target.tagName.toLowerCase();if("button"===t||"a"===t)return}t(n),O(null==n?void 0:n.id)},rowDataTestId:"tableRegistry-row",loggedInUser:p}),e.length<1&&a&&(0,s.jsx)(u.C0,{emptyStateProps:{variant:u.jU.NoResult},titleProps:{title:f("no_results_found")},emptyStateBodyProps:{body:f("adjust_your_filters_and_try_again")}}),j>0&&(0,s.jsx)(u.wu,{widgetId:"pagination-options-menu-bottom",itemCount:j,variant:o.PaginationVariant.bottom,page:x,perPage:y,titles:{paginationTitle:f("common:full_pagination"),perPageSuffix:f("common:per_page_suffix"),toFirstPage:f("common:to_first_page"),toPreviousPage:f("common:to_previous_page"),toLastPage:f("common:to_last_page"),toNextPage:f("common:to_next_page"),optionsToggle:f("common:options_toggle"),currPage:f("common:curr_page")}})]})}))};a(47615),a(9019),a(28354),a(53002)},93262:(e,t,a)=>{a.d(t,{a:()=>o});var s=a(85893),n=a(28188),i=a(71236),r=a(18377);const o=({isModalOpen:e,children:t,title:a,handleModalToggle:o,onCreate:l,isFormValid:c,isCreationInProgress:d,primaryButtonTitle:u,dataTestIdSubmit:g,dataTestIdCancel:m,id:p="modalCreateKafka",isDisabledButton:j})=>{const{t:x}=(0,i.useTranslation)();return(0,s.jsx)(n.Modal,Object.assign({id:p,variant:n.ModalVariant.medium,title:a,isOpen:e,onClose:o,appendTo:(0,r.wx)(),actions:[(0,s.jsx)(n.Button,Object.assign({variant:"primary",type:"submit",onClick:l,isDisabled:!c||d||j,spinnerAriaValueText:x("submitting_request"),isLoading:d,"data-testid":g},{children:u}),"create"),(0,s.jsx)(n.Button,Object.assign({variant:"link",onClick:o,"data-testid":m},{children:x("common:cancel")}),"cancel")]},{children:t}))}},5956:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(70655),n=a(85893),i=a(28188),r=a(18377),o=a(71236);const l=({isModalOpen:e,title:t,modalProps:a,confirmButtonProps:l,cancelButtonProps:c,handleModalToggle:d,textProps:u,children:g,selectedItemData:m="",textInputProps:p,checkboxProps:j})=>{const{t:x}=(0,o.useTranslation)("service-registry"),v=a||{},{variant:b=i.ModalVariant.small,titleIconVariant:L="warning","aria-label":y,showClose:C=!0}=v,w=(0,s.__rest)(v,["variant","titleIconVariant","aria-label","showClose"]),h=l||{},{id:M="mas--confirm__button",key:T="confirm-button",variant:_=i.ButtonVariant.danger,onClick:N,isDisabled:S,label:D="Delete",isLoading:f}=h,I=(0,s.__rest)(h,["id","key","variant","onClick","isDisabled","label","isLoading"]),k=c||{},{id:O="mas--cancel__button",key:P='"cancel-button',variant:z=i.ButtonVariant.link,label:A="Cancel"}=k,E=(0,s.__rest)(k,["id","key","variant","label"]),{isDownloaded:B,isChecked:R,onChange:V}=j||{},{description:F}=u||{},U=p||{},{label:Z="",value:H,onChange:Q,onKeyPress:G,showTextInput:Y}=U,W=(0,s.__rest)(U,["label","value","onChange","onKeyPress","showTextInput"]);return(0,n.jsxs)(i.Modal,Object.assign({variant:b,isOpen:e,"aria-label":y,title:t,titleIconVariant:L,showClose:C,onClose:d,appendTo:(0,r.wx)(),actions:[(0,n.jsx)(i.Button,Object.assign({id:M,variant:_,onClick:()=>N&&N(m),isDisabled:S,isLoading:f},I,{children:D}),T),(0,n.jsx)(i.Button,Object.assign({id:O,variant:z,onClick:d},E,{children:A}),P)]},w,{children:[F,Y&&(0,n.jsxs)(i.Form,Object.assign({onSubmit:e=>e.preventDefault()},{children:[(0,n.jsxs)(i.FormGroup,Object.assign({fieldId:"text-input"},{children:[(0,n.jsx)("label",{htmlFor:"mas-name-input",dangerouslySetInnerHTML:{__html:Z}}),(0,n.jsx)(i.TextInput,Object.assign({id:"mas--name__input",name:"mas-name-input",type:"text",value:H,onChange:Q,onKeyPress:G,autoFocus:!0},W))]})),(0,n.jsx)(i.FormGroup,Object.assign({fieldId:"checkbox"},{children:(0,n.jsx)(i.Checkbox,{label:x(B?"checkbox_label_after_the_download_click":"checkbox_label_before_the_download_click"),"aria-label":"uncontrolled checkbox example",id:M,className:"pf-u-font-size-sm",isChecked:R,onChange:V})}))]})),g]}))}},78834:(e,t,a)=>{a.d(t,{D:()=>o});var s=a(70655),n=a(85893),i=a(28188),r=a(180);const o=({onClose:e,isLoading:t=!0,drawerPanelContentProps:a,drawerHeaderProps:o,isExpanded:l,children:c,panelBodyContent:d,onExpand:u,notRequiredDrawerContentBackground:g,"data-ouia-app-id":m,inlineAlertMessage:p})=>{const j=a||{},{widths:x}=j,v=(0,s.__rest)(j,["widths"]),{text:b,title:L}=o||{},y=(0,n.jsx)(i.DrawerPanelContent,Object.assign({widths:x||{default:"width_50"}},v,{children:t?(0,n.jsx)(r.yR,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.DrawerHead,{children:[(0,n.jsxs)(i.TextContent,{children:[(null==b?void 0:b.label)&&(0,n.jsx)(i.Text,Object.assign({component:(null==b?void 0:b.component)||i.TextVariants.small,className:(null==b?void 0:b.className)||"pf-u-mb-0"},{children:null==b?void 0:b.label})),(null==L?void 0:L.value)&&(0,n.jsx)(i.Title,Object.assign({headingLevel:(null==L?void 0:L.headingLevel)||"h2",size:(null==L?void 0:L.size)||i.TitleSizes.xl,className:(null==L?void 0:L.className)||"pf-u-mt-0"},{children:null==L?void 0:L.value}))]}),(0,n.jsx)(i.DrawerActions,{children:(0,n.jsx)(i.DrawerCloseButton,{onClick:e})})]}),(0,n.jsxs)(i.DrawerPanelBody,{children:[p,d]})]})}));return(0,n.jsx)(i.Drawer,Object.assign({isExpanded:l,onExpand:u,"data-ouia-app-id":m},{children:(0,n.jsx)(i.DrawerContent,Object.assign({panelContent:y,className:g?"pf-m-no-background":""},{children:(0,n.jsxs)(i.DrawerContentBody,Object.assign({className:"pf-u-display-flex pf-u-flex-direction-column"},{children:[" ",c]}))}))}))}},15825:(e,t,a)=>{a.d(t,{C:()=>m,j:()=>u});var s=a(70655),n=a(85893),i=a(28188),r=a(20777),o=a(34558),l=a(5569),c=a(71070),d=a(84564);var u,g=a(76814);!function(e){e.GettingStarted="GettingStarted",e.NoAccess="NoAccess",e.NoResult="NoResult",e.NoItems="NoItems",e.UnexpectedError="UnexpectedError",e.PageNotFound="PageNotFound"}(u||(u={}));const m=({titleProps:e,buttonProps:t,emptyStateIconProps:a,emptyStateProps:m,emptyStateBodyProps:p,children:j})=>{const x=t||{},{variant:v=i.ButtonVariant.primary,onClick:b}=x,L=(0,s.__rest)(x,["variant","onClick"]),y=e||{},{title:C}=y,w=(0,s.__rest)(y,["title"]),h=p||{},{body:M}=h,T=(0,s.__rest)(h,["body"]),_=m||{},{variant:N=u.GettingStarted,className:S}=_,D=(0,s.__rest)(_,["variant","className"]),f=()=>(0,n.jsx)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTA5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzZBNkU3MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTozLDU7fQoJLnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiM2QTZFNzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojNkE2RTczO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLjUsOTYuNWMzLTMzLDE3LjQtMzUuOCwzOC0yNGMxOS4xLDExLDM2LTguMSwyMS0yN2MtMTUuNC0xOS40LTgtMjMtOC0yMyIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTMsMjV2NTAgTTI3LjgsNzEuOFYxMDQgTTI3LjgsMTV2NDcuNiBNNDIuNiw3NHYzNCBNNDIuNiwxMHY1NC4yIE01Ny40LDc5LjJWMTA4IE01Ny40LDMydjM4IE03Mi4yLDc3djI3CgkgTTcyLjIsNTQuOHY5LjUgTTcyLjIsMjl2MTAuMiBNODcsMjV2NjggTTU2LDIyLjVsLTQwLTAuMiBNNTkuNiwzNy4xTDUsMzcuMSBNNTkuNiwzNy4xIE05NSwzNy4xbC0yNC4xLDAgTTcwLjQsNTEuOUwxLDUxLjkKCSBNNzAuNCw1MS45IE04MC44LDUxLjkgTTk5LDUxLjlsLTE4LjIsMCBNMTguNiw2Ni42TDEsNjYuNiBNNzAuNCw2Ni42bC0yMS45LDAgTTk5LDY2LjZsLTE3LjksMCBNMTAuNSw4MS40SDYgTTk1LDgxLjRsLTc1LDAKCSBNODQsOTYuMmwtNjcsMCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04MS4zLDE1LjdjLTAuOSwxLjUtMi4xLDIuNy0zLjYsMy42Yy0xLjUsMC45LTMuMiwxLjMtNSwxLjNzLTMuNC0wLjQtNS0xLjNjLTEuNS0wLjktMi43LTIuMS0zLjYtMy42CgkJYy0wLjktMS41LTEuMy0zLjItMS4zLTVzMC40LTMuNCwxLjMtNWMwLjktMS41LDIuMS0yLjcsMy42LTMuNmMxLjUtMC45LDMuMi0xLjMsNS0xLjNzMy40LDAuNCw1LDEuM2MxLjUsMC45LDIuNywyLjEsMy42LDMuNgoJCWMwLjksMS41LDEuMywzLjIsMS4zLDVTODIuMiwxNC4yLDgxLjMsMTUuN3ogTTcwLjMsNC44Yy0wLjcsMC40LTEuNCwxLTEuOSwxLjljLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMSwwLjIsMC4yLDAuMwoJCWwxLjQsMWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMWMwLjEsMCwwLjItMC4xLDAuMy0wLjJjMC40LTAuNSwwLjgtMC45LDEtMWMwLjQtMC4zLDAuOC0wLjQsMS4zLTAuNGMwLjUsMCwwLjksMC4xLDEuMywwLjQKCQljMC40LDAuMywwLjYsMC42LDAuNiwwLjljMCwwLjMtMC4xLDAuNS0wLjQsMC44Yy0wLjIsMC4xLTAuNSwwLjMtMC45LDAuNmwtMC4xLDBjLTAuNywwLjQtMS4xLDAuNy0xLjQsMWMtMC41LDAuNS0wLjcsMS4xLTAuNywxLjgKCQl2MC4yYzAsMC4xLDAsMC4yLDAuMSwwLjNjMC4xLDAuMSwwLjIsMC4xLDAuMywwLjFoMi4yYzAuMSwwLDAuMiwwLDAuMy0wLjFjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjN2MGMwLTAuMiwwLjEtMC40LDAuMy0wLjYKCQljMC4xLTAuMSwwLjQtMC4zLDAuOC0wLjVjMC43LTAuNCwxLjItMC44LDEuNS0xLjFjMC41LTAuNiwwLjgtMS4zLDAuOC0yLjFjMC0wLjctMC4yLTEuNC0wLjctMi4xcy0xLTEuMS0xLjgtMS41cy0xLjUtMC41LTIuMi0wLjUKCQlDNzIsNC4yLDcxLjEsNC40LDcwLjMsNC44eiBNNzEuNSwxNC42Yy0wLjQsMC40LTAuNSwwLjgtMC41LDEuM3MwLjIsMC45LDAuNSwxLjNzMC44LDAuNSwxLjMsMC41czAuOS0wLjIsMS4zLTAuNXMwLjUtMC44LDAuNS0xLjMKCQlzLTAuMi0wLjktMC41LTEuM3MtMC44LTAuNS0xLjMtMC41UzcxLjgsMTQuMiw3MS41LDE0LjZ6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Not found page",width:"128px"}),{variant:I,icon:k,titleSize:O,headingLevel:P}=(()=>{let t={};switch(N){case u.GettingStarted:t={variant:i.EmptyStateVariant.xl,icon:o.ZP,titleSize:i.TitleSizes["4xl"],headingLevel:"h1"};break;case u.NoAccess:t={variant:i.EmptyStateVariant.large,icon:l.ZP,titleSize:i.TitleSizes.xl,headingLevel:"h2"};break;case u.NoItems:t={variant:i.EmptyStateVariant.large,icon:r.ZP,titleSize:i.TitleSizes.xl,headingLevel:"h2"};break;case u.NoResult:t={variant:i.EmptyStateVariant.large,icon:c.ZP,titleSize:i.TitleSizes.lg,headingLevel:"h2"};break;case u.UnexpectedError:t={variant:i.EmptyStateVariant.full,icon:d.ZP,titleSize:i.TitleSizes.lg,headingLevel:"h1"};break;case u.PageNotFound:t={variant:i.EmptyStateVariant.full,icon:f,titleSize:i.TitleSizes.lg,headingLevel:"h1"};break;default:t={variant:N||i.EmptyStateVariant.full,icon:null==a?void 0:a.icon,titleSize:null==e?void 0:e.size,headingLevel:null==e?void 0:e.headingLevel}}return t})();return(0,n.jsxs)(i.EmptyState,Object.assign({variant:I,className:(0,g.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md",S)},D,{children:[(0,n.jsx)(i.EmptyStateIcon,Object.assign({icon:k},a)),C&&(0,n.jsx)(i.Title,Object.assign({headingLevel:P,size:O},w,{children:C})),M&&(0,n.jsx)(i.EmptyStateBody,Object.assign({},T,{children:M})),(null==t?void 0:t.title)&&(0,n.jsx)(i.Button,Object.assign({variant:v,onClick:b},L,{children:null==t?void 0:t.title})),j]}))}},22336:(e,t,a)=>{a.d(t,{y:()=>i});var s=a(85893),n=a(28188);const i=({bullseyeProps:e,spinnerProps:t})=>(0,s.jsx)(n.Bullseye,Object.assign({},e,{children:(0,s.jsx)(n.Spinner,Object.assign({},t))}))},73251:(e,t,a)=>{a.d(t,{wu:()=>d,bN:()=>c,h0:()=>l});var s=a(70655),n=a(85893),i=a(93264),r=a(28188);const o=(0,i.createContext)(void 0),l=()=>(0,i.useContext)(o),c=({children:e})=>{const[t,a]=(0,i.useState)(1),[s,r]=(0,i.useState)(10);return(0,n.jsx)(o.Provider,Object.assign({value:{page:t,perPage:s,setPage:a,setPerPage:r}},{children:e}))},d=e=>{var{itemCount:t,variant:a=r.PaginationVariant.top,isCompact:o,titles:c}=e,d=(0,s.__rest)(e,["itemCount","variant","isCompact","titles"]);const{setPage:u,setPerPage:g,perPage:m,page:p}=l()||{},j=(0,i.useCallback)(((e,t)=>{u&&u(t)}),[u]),x=(0,i.useCallback)(((e,t)=>{u&&u(1),g&&g(t)}),[g,u]);return(0,n.jsx)(r.Pagination,Object.assign({itemCount:t,perPage:m,page:p,onSetPage:j,variant:a,onPerPageSelect:x,isCompact:o},d,{titles:c}))}},76506:(e,t,a)=>{a.d(t,{w:()=>g});var s=a(70655),n=a(85893),i=a(19576),r=a(76814),o=a(93264),l=a(12096);const c=(0,o.createContext)({activeRow:"",onRowClick:()=>{},loggedInUser:""}),d=c.Provider,u=e=>{var t,a;const{activeRow:i,onRowClick:d,rowDataTestId:u,loggedInUser:g}=(0,o.useContext)(c),{trRef:m,className:p,rowProps:j,row:x}=e,v=(0,s.__rest)(e,["trRef","className","rowProps","row"]),{originalData:b}=x||{},L=(null==b?void 0:b.status)===l.RegistryStatusValue.Deprovision||(null==b?void 0:b.status)===l.RegistryStatusValue.Deleting,y=g===(null===(t=null==x?void 0:x.originalData)||void 0===t?void 0:t.owner),C=L||!y,w=void 0===m?void 0:m;return(0,n.jsx)("tr",Object.assign({"data-testid":u,tabIndex:C?void 0:0,ref:w,className:(0,r.css)(p,"pf-c-table-row__item",L?"pf-m-disabled":"pf-m-selectable",!L&&i&&i===(null===(a=null==x?void 0:x.originalData)||void 0===a?void 0:a.rowId)&&"pf-m-selected"),hidden:void 0!==(null==x?void 0:x.isExpanded)&&!(null==x?void 0:x.isExpanded)},v,{onClick:e=>{L||d&&d(e,null==j?void 0:j.rowIndex,x)}}))},g=({tableProps:e,tableHeaderProps:t,tableBodyProps:a,children:o,activeRow:l,onRowClick:c,rowDataTestId:g,loggedInUser:m})=>{const{cells:p,rows:j,actionResolver:x,onSort:v,sortBy:b,"aria-label":L,variant:y,className:C,hasDefaultCustomRowWrapper:w=!1,ouiaId:h}=e,M=(0,s.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","hasDefaultCustomRowWrapper","ouiaId"]);return w&&(M.rowWrapper=u),(0,n.jsx)(d,Object.assign({value:{activeRow:l,onRowClick:c,rowDataTestId:g,loggedInUser:m}},{children:(0,n.jsxs)(i.Table,Object.assign({className:(0,r.css)(w&&"mas--streams-table-view__table",C),cells:p,variant:y,rows:j,"aria-label":L,actionResolver:x,onSort:v,sortBy:b,ouiaId:h},M,{children:[(0,n.jsx)(i.TableHeader,Object.assign({},t)),(0,n.jsx)(i.TableBody,Object.assign({},a)),o]}))}))}},58883:(e,t,a)=>{a.d(t,{L:()=>r});var s=a(70655),n=a(85893),i=a(28188);const r=({toolbarProps:e,toggleGroupProps:t,toolbarItems:a,toggleGroupItems:r})=>{const{id:o,clearAllFilters:l,collapseListedFiltersBreakpoint:c="md",inset:d}=e,u=(0,s.__rest)(e,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Toolbar,Object.assign({id:o,clearAllFilters:l,inset:d,collapseListedFiltersBreakpoint:c},u,{children:(0,n.jsxs)(i.ToolbarContent,{children:[t&&(0,n.jsx)(i.ToolbarToggleGroup,Object.assign({},t,{toggleIcon:t.toggleIcon,breakpoint:"md"},{children:r})),null==a?void 0:a.map(((e,t)=>{const{key:a="mas",variant:r,className:o,id:l,alignment:c,item:d}=e,u=(0,s.__rest)(e,["key","variant","className","id","alignment","item"]);return(0,n.jsx)(i.ToolbarItem,Object.assign({variant:r,className:o,id:l,alignment:c},u,{children:d}),`${a}-${t}`)}))]})}))})}},45094:(e,t,a)=>{a.d(t,{DY:()=>c.D,w8:()=>o.w,r3:()=>l,dd:()=>d.d});var s=a(85893),n=a(93264),i=a(71236),r=a(180),o=a(22931);const l=()=>{const{registerModals:e}=(0,r.dd)();return e((()=>{const{t:e}=(0,i.useTranslation)(["service-registry"]);return{[o.w.CreateServiceRegistry]:{lazyComponent:(0,n.lazy)((()=>a.e(9483).then(a.bind(a,9483)))),variant:"medium"},[o.w.DeleteServiceRegistry]:{lazyComponent:(0,n.lazy)((()=>a.e(7557).then(a.bind(a,97557)))),variant:"medium",title:`${e("delete_service_registry_title")}?`}}})()),(0,s.jsx)(s.Fragment,{})};var c=a(91635),d=a(90806)},67822:(e,t,a)=>{a.d(t,{w:()=>n,x:()=>i});var s=a(93264);const n=(0,s.createContext)(void 0),i=()=>(0,s.useContext)(n)},72901:(e,t,a)=>{a.d(t,{Yz:()=>n,d9:()=>r});var s=a(93264);function n(e,t){const a=(0,s.useRef)();(0,s.useEffect)((()=>{a.current=e}),[e]),(0,s.useEffect)((()=>{if(null!==t){const e=setInterval((function(){a.current&&a.current()}),t);return()=>{clearInterval(e)}}}),[t])}function i(){const e=function(){const e=document;return void 0!==e.hidden?"hidden":void 0!==e.msHidden?"msHidden":void 0!==e.webkitHidden?"webkitHidden":void 0}();return void 0!==e&&!document[e]}function r(){const[e,t]=(0,s.useState)(i()),a=()=>t(i());return(0,s.useEffect)((()=>{const e=function(){const e=document;return void 0!==e.hidden?"visibilitychange":void 0!==e.msHidden?"msvisibilitychange":void 0!==e.webkitHidden?"webkitvisibilitychange":""}();return document.addEventListener(e,a,!1),()=>{document.removeEventListener(e,a)}}),[]),{isVisible:e,setIsVisible:t}}},18377:(e,t,a)=>{a.d(t,{SM:()=>c.S,ik:()=>l,xe:()=>i,L0:()=>o,wx:()=>n,G6:()=>c.G,hm:()=>r});a(31973);var s=a(31803);const n=()=>document.getElementById("chrome-app-render-root")||document.body,i=32,r=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],o=(e,t)=>(e="string"==typeof e?new Date(e):e,(0,s.formatDistance)(e,new Date)+" "+t);var l;!function(e){e.eval="eval",e.standard="standard"}(l||(l={}));var c=a(11551)}}]);
//# sourceMappingURL=8916.e97bd05a.js.map