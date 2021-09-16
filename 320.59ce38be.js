"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[320],{7364:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(5418),a=n.n(r),o=n(1593),i=n(655),s=n(4669),l=n(2979),c=n(5216),u=n(6280),d=n(3494);var v=a().createContext(void 0),f=function(){var e=(0,o.useTranslation)().t,t=(0,c.useAuth)(),n=(0,c.useConfig)().srs.apiBasePath,f=(0,d.QK)().showModal,p=(0,r.useContext)(v)||{},g=p.preCreateInstance,m=p.shouldOpenCreateModal,h=(0,d.h0)()||{},E=h.page,_=void 0===E?1:E,y=h.perPage,C=void 0===y?10:y,R=(0,r.useState)(!1),w=R[0],S=R[1],b=(0,r.useState)(void 0),P=b[0],D=b[1],I=(0,r.useState)(!1),k=I[0],T=(I[1],(0,r.useState)(!1)),x=T[0],B=(T[1],(0,r.useState)(void 0)),N=B[0],O=B[1],U=(0,r.useState)(void 0),A=U[0],L=U[1],M=(0,r.useState)(void 0),F=M[0],V=M[1],j=(0,r.useState)("name asc"),q=j[0],G=j[1];(0,r.useEffect)((function(){W()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return V(e)}))}),[t]),(0,r.useEffect)((function(){Z()}),[A]),(0,r.useEffect)((function(){(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return(e=m)?[4,m()]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&z(),[2]}}))}))}),[m]);var K,Q,Y,Z=function(){if(A&&(null==A?void 0:A.length)>0){var e=null==A?void 0:A.filter((function(e){return(null==e?void 0:e.id)===(null==P?void 0:P.id)}))[0],t=(0,i.__assign)((0,i.__assign)({},P),e);e&&D(t)}},W=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),[4,new l.RegistriesApi(new l.Configuration({accessToken:e,basePath:n})).getRegistries(_,C).then((function(e){var t=null==e?void 0:e.data;O(t),L(null==t?void 0:t.items)})).catch((function(e){}))];case 2:return r.sent(),[2]}}))}))};K=function(){return W()},Q=5e3,Y=(0,r.useRef)(),(0,r.useEffect)((function(){Y.current=K}),[K]),(0,r.useEffect)((function(){if(null!==Q){var e=setTimeout((function(){Y.current()}),Q);return function(){clearInterval(e)}}}),[K,Q]);var X=function(e){S(!0),D(e)},$=function(t){var n=t||{},r=n.name,a=n.status;f(d.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:a,selectedItemData:t,fetchRegistries:W,title:e("common.delete_service_registry_title")+"?",confirmButtonProps:{label:e("common.delete")},textProps:{description:e("common.delete_service_registry_description",{name:r})}})},z=function(){f(d.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:W})},H=function(){return(0,i.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return g?[4,g(!0)]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&z(),[2]}}))}))};return x?a().createElement(u.nA,{getAccessToServiceRegistry:function(){}}):void 0===A?a().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(d.yR,null)):(null==A?void 0:A.length)?a().createElement(u.OP,{isExpanded:w,isLoading:void 0===P,notRequiredDrawerContentBackground:k,onClose:function(){S(!1)},registry:P},a().createElement("main",{className:"pf-c-page__main"},a().createElement(u.mt,{onConnectToRegistry:X,onDeleteRegistry:$,serviceRegistryDetails:P}),a().createElement(u.UW,{page:_,perPage:C,serviceRegistryItems:A,total:null==N?void 0:N.total,onViewConnection:X,onDelete:$,expectedTotal:0,orderBy:q,setOrderBy:G,loggedInUser:F,currentUserRegistries:A,handleCreateModal:H,refresh:W,registryDataLoaded:!1,isDrawerOpen:w}))):a().createElement(a().Fragment,null,a().createElement(u.mt,null),a().createElement(u.EG,{onCreateserviceRegistry:H}))},p=n(8800);const g=function(e){var t=e.preCreateInstance,n=e.shouldOpenCreateModal;return a().createElement(o.I18nextProvider,{i18n:p.Z},a().createElement(v.Provider,{value:{preCreateInstance:t,shouldOpenCreateModal:n}},a().createElement(d.OU,null,a().createElement(d.bN,null,a().createElement(f,null)))))}},2247:(e,t,n)=>{n(5418),n(1593),n(4669),n(8068),n(3494)},3494:(e,t,n)=>{n.d(t,{a$:()=>h.a,AX:()=>i.A,D5:()=>f.D,C0:()=>s.C,jU:()=>s.j,yR:()=>v.y,wu:()=>p.wu,wR:()=>g.w,L5:()=>m.L,Ny:()=>E.Ny,bN:()=>p.bN,OU:()=>E.OU,h0:()=>p.h0,QK:()=>E.QK});var r=n(5418),a=n.n(r),o=(n(5216),n(4669)),i=n(9441),s=n(1098),l=n(655),c=n(8068),u=n(1593),d=(n(7502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,l.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?a().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(s.C,{emptyStateProps:{variant:s.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},a().createElement(o.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(r.Component)),v=((0,c.withRouter)((0,u.withTranslation)()(d)),n(6554)),f=n(3242),p=n(6376),g=n(2067),m=n(5642),h=(n(2247),n(2311)),E=n(9758)},2519:(e,t,n)=>{n(5418)},2648:(e,t,n)=>{n.d(t,{wx:()=>a,xe:()=>o,YZ:()=>i,hm:()=>s,L0:()=>l});var r=n(4683);var a=function(){return document.querySelector("#qs-content")||document.body},o=32,i=255,s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],l=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t}}}]);
//# sourceMappingURL=320.59ce38be.js.map