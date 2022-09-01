"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[7557],{97557:(e,t,s)=>{s.r(t),s.d(t,{DeleteServiceRegistry:()=>h,default:()=>m});var n=s(70655),a=s(85893),i=s(93264),r=s(73685),o=s(71236),l=s(28188),c=s(12096),d=s(50834),u=s(180),g=s(18377);const h=({title:e="",confirmButtonProps:t,status:s,registry:h,fetchServiceRegistries:m,shouldRedirect:_,renderDownloadArtifacts:p,hideModal:v})=>{const{t:b}=(0,o.useTranslation)(["service-registry","common"]),{addAlert:y}=(0,d.useAlert)(),f=(0,r.useHistory)(),x=(0,d.useAuth)(),{srs:{apiBasePath:w}}=(0,d.useConfig)(),k=(0,d.useBasename)(),C=null==h?void 0:h.name,[j,A]=(0,i.useState)(),[R,S]=(0,i.useState)(!1),[T,L]=(0,i.useState)(!1),[P,D]=(0,i.useState)(!1),O=()=>(null==s?void 0:s.toLowerCase())===c.RegistryStatusValue.Ready&&((null==j?void 0:j.toLowerCase())!==(null==C?void 0:C.toLowerCase())||!P),B=()=>{A(""),v()},I=e=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){const{id:t,name:s}=e,n=yield null==x?void 0:x.srs.getToken();if(t){S(!0);const e=new c.RegistriesApi(new c.Configuration({accessToken:n,basePath:w}));yield e.deleteRegistry(t).then((()=>{S(!1),y({title:b("service_registry_deletion_success_message",{name:s}),variant:d.AlertVariant.success}),_?f.push(k.getBasename()):m&&m(),B()})).catch((e=>{S(!1),(e=>{var t;let s;(0,g.G6)(e)&&(s=null===(t=e.response)||void 0===t?void 0:t.data.reason),y({title:b("common:something_went_wrong"),variant:d.AlertVariant.danger,description:s})})(e)}))}})),V=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.TextContent,Object.assign({className:"pf-u-mb-md pf-u-mb-xs"},{children:(0,a.jsx)(l.Text,Object.assign({component:l.TextVariants.p},{children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:b("delete_service_registry_description",{name:C})}})}))})),(0,a.jsx)(l.Alert,Object.assign({variant:"info",isInline:!0,className:"pf-u-mb-lg",title:b("delete_instance_alert_header"),actionLinks:(0,a.jsx)(l.AlertActionLink,Object.assign({onClick:()=>{L(!0)}},{children:p&&h&&p(h,b("download_artifacts"))}))},{children:b("delete_instance_alert_body")}))]});return(0,a.jsx)(u.AX,{isModalOpen:!0,title:e,confirmButtonProps:Object.assign(Object.assign({isDisabled:O(),"data-testid":"modalDeleteRegistry-buttonDelete"},t),{onClick:I,isLoading:R}),handleModalToggle:B,textProps:V,selectedItemData:h,textInputProps:{showTextInput:(null==s?void 0:s.toLowerCase())===c.RegistryStatusValue.Ready,label:b("service_registry_name_label",{name:C}),value:j,onChange:e=>{A(e)},onKeyPress:e=>{"Enter"===e.key&&!O()&&h&&I(h)},autoFocus:!0},checkboxProps:{id:"checkbox",isDownloaded:T,isChecked:P,onChange:()=>{D(!P)}}})},m=h}}]);
//# sourceMappingURL=7557.df2d0112.js.map