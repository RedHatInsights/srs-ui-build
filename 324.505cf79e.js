"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[324],{71143:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(75418),a=n.n(r),o=n(11593),i=n(70655),s=n(84669),l=n(72979),u=n(62308),c=n(26280),d=n(33494);var v=n(75381),f=n(31151),p=function(){var e=(0,o.useTranslation)().t,t=(0,u.useAuth)(),n=((0,u.useConfig)()||{srs:{apiBasePath:""}}).srs.apiBasePath,p=(((0,u.useAlert)()||{}).addAlert,(0,d.QK)().showModal),g=(0,f.x)()||{},m=g.preCreateInstance,E=g.shouldOpenCreateModal,h=(g.tokenEndPointUrl,(0,d.h0)()||{}),_=h.page,S=void 0===_?1:_,C=h.perPage,y=void 0===C?10:C,R=(0,r.useState)(!1),w=R[0],T=R[1],I=(0,r.useState)(void 0),b=I[0],P=I[1],D=(0,r.useState)(!1),A=D[0],k=(D[1],(0,r.useState)(!1)),U=k[0],N=(k[1],(0,r.useState)(void 0)),x=N[0],M=N[1],O=(0,r.useState)(void 0),B=O[0],F=O[1],L=(0,r.useState)(void 0),G=L[0],Q=L[1],V=(0,r.useState)("name asc"),K=V[0],j=V[1],q=null==B?void 0:B.some((function(e){return(null==e?void 0:e.instance_type)===(null===v.ik||void 0===v.ik?void 0:v.ik.eval)}));(0,r.useEffect)((function(){Z()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return Q(e)}))}),[t]),(0,r.useEffect)((function(){X()}),[B]),(0,r.useEffect)((function(){(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return(e=E)?[4,E()]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&J(),[2]}}))}))}),[E]);var Y,H,W,X=function(){if(B&&(null==B?void 0:B.length)>0){var e=null==B?void 0:B.filter((function(e){return(null==e?void 0:e.id)===(null==b?void 0:b.id)}))[0],t=(0,i.__assign)((0,i.__assign)({},b),e);e&&P(t)}},Z=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),n&&e?[4,new l.RegistriesApi(new l.Configuration({accessToken:e,basePath:n})).getRegistries().then((function(e){var t=null==e?void 0:e.data;M(t),F(null==t?void 0:t.items)})).catch((function(e){}))]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))};Y=function(){return Z()},H=5e3,W=(0,r.useRef)(),(0,r.useEffect)((function(){W.current=Y}),[Y]),(0,r.useEffect)((function(){if(null!==H){var e=setTimeout((function(){W.current()}),H);return function(){clearInterval(e)}}}),[Y,H]);var $=function(e){T(!0),P(e)},z=function(t){var n=t||{},r=n.name,a=n.status;p(d.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:a,selectedItemData:t,fetchRegistries:Z,title:e("common.delete_service_registry_title")+"?",confirmButtonProps:{label:e("common.delete")},textProps:{description:e("common.delete_service_registry_description",{name:r})}})},J=function(){p(d.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:Z,hasUserTrialInstance:q})},ee=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return m?[4,m(!0)]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&J(),[2]}}))}))};return U?a().createElement(c.nA,{getAccessToServiceRegistry:function(){}}):void 0===B?a().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(d.yR,null)):(null==B?void 0:B.length)?a().createElement(c.OP,{isExpanded:w,isLoading:void 0===b,notRequiredDrawerContentBackground:A,onClose:function(){T(!1)},registry:b},a().createElement("main",{className:"pf-c-page__main"},a().createElement(c.mt,{onConnectToRegistry:$,onDeleteRegistry:z,serviceRegistryDetails:b}),a().createElement(c.UW,{page:S,perPage:y,serviceRegistryItems:B,total:null==x?void 0:x.total,onViewConnection:$,onDelete:z,expectedTotal:0,orderBy:K,setOrderBy:j,loggedInUser:G,currentUserRegistries:B,handleCreateModal:ee,refresh:Z,registryDataLoaded:!1,isDrawerOpen:w}))):a().createElement(a().Fragment,null,a().createElement(c.mt,null),a().createElement(c.EG,{onCreateserviceRegistry:ee}))},g=n(78800);const m=function(e){var t=e.preCreateInstance,n=e.shouldOpenCreateModal,r=e.tokenEndPointUrl;return a().createElement(o.I18nextProvider,{i18n:g.Z},a().createElement(f.w.Provider,{value:{preCreateInstance:t,shouldOpenCreateModal:n,tokenEndPointUrl:r}},a().createElement(d.OU,null,a().createElement(d.bN,null,a().createElement(p,null)))))}},52247:(e,t,n)=>{n(75418),n(11593),n(84669),n(98068),n(33494)},33494:(e,t,n)=>{n.d(t,{a$:()=>E.a,AX:()=>i.A,D5:()=>f.D,C0:()=>s.C,jU:()=>s.j,yR:()=>v.y,wu:()=>p.wu,wR:()=>g.w,L5:()=>m.L,Ny:()=>h.Ny,bN:()=>p.bN,OU:()=>h.OU,h0:()=>p.h0,QK:()=>h.QK});var r=n(75418),a=n.n(r),o=(n(62308),n(84669)),i=n(79441),s=n(91098),l=n(70655),u=n(98068),c=n(11593),d=(n(87502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,l.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?a().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(s.C,{emptyStateProps:{variant:s.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},a().createElement(o.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(r.Component)),v=((0,u.withRouter)((0,c.withTranslation)()(d)),n(76554)),f=n(53242),p=n(86376),g=n(42067),m=n(45642),E=(n(52247),n(52311)),h=n(78496)},31151:(e,t,n)=>{n.d(t,{w:()=>a,x:()=>o});var r=n(75418),a=n.n(r)().createContext(void 0),o=function(){return(0,r.useContext)(a)}},78261:(e,t,n)=>{n.d(t,{G:()=>a,S:()=>r});var r,a=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.USER_ALREADY_HAVE_TRIAL_INSTANCE="SRS-MGMT-13",e.INSUFFICIENT_QUOTA="SRS-MGMT-14",e.INSUFFICIENT_STANDARD_QUOTA="SRS-MGMT-7",e.FAILED_TO_CHECK_QUOTA="SRS-MGMT-11"}(r||(r={}))},82519:(e,t,n)=>{n(75418)},52648:(e,t,n)=>{n.d(t,{wx:()=>o,xe:()=>i,hm:()=>s,L0:()=>l,ik:()=>a});var r=n(23574);var a,o=function(){return document.querySelector("#qs-content")||document.body},i=32,s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],l=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t};!function(e){e.eval="eval",e.standard="standard"}(a||(a={}))}}]);
//# sourceMappingURL=324.505cf79e.js.map