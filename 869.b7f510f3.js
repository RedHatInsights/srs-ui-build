(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[869],{1143:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(8121),i=n.n(r),a=n(59),o=n(655),s=n(6007),c=n(8788),l=n(7822),u=n(15),d=n(6280),f=n(3494);var g=function(){var e=(0,a.useTranslation)().t,t=(0,u.useAuth)(),n=(0,u.useConfig)().srs.apiBasePath,g=(0,f.QK)().showModal,p=(0,s.useLocation)(),v=new URLSearchParams(p.search),m=parseInt(v.get("page")||"",10)||1,E=parseInt(v.get("perPage")||"",10)||10,h=(0,r.useState)(!1),y=h[0],_=h[1],R=(0,r.useState)(void 0),S=R[0],C=R[1],w=(0,r.useState)(!1),P=w[0],D=(w[1],(0,r.useState)(!1)),b=D[0],k=(D[1],(0,r.useState)(void 0)),I=k[0],T=k[1],U=(0,r.useState)(void 0),x=U[0],B=U[1],L=(0,r.useState)(void 0),A=L[0],N=L[1],O=(0,r.useState)("name asc"),F=O[0],V=O[1];(0,r.useEffect)((function(){Q()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return N(e)}))}),[t]),(0,r.useEffect)((function(){K()}),[x]);var j,q,G,K=function(){if(x&&(null==x?void 0:x.length)>0){var e=null==x?void 0:x.filter((function(e){return(null==e?void 0:e.id)===(null==S?void 0:S.id)}))[0],t=(0,o.__assign)((0,o.__assign)({},S),e);e&&C(t)}},Q=function(){return(0,o.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,o.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),[4,new l.RegistriesApi(new l.Configuration({accessToken:e,basePath:n})).getRegistries().then((function(e){var t=null==e?void 0:e.data;T(t),B(null==t?void 0:t.items)})).catch((function(e){}))];case 2:return r.sent(),[2]}}))}))};j=function(){return Q()},q=5e3,G=(0,r.useRef)(),(0,r.useEffect)((function(){G.current=j}),[j]),(0,r.useEffect)((function(){if(null!==q){var e=setTimeout((function(){G.current()}),q);return function(){clearInterval(e)}}}),[j,q]);var Y=function(e){_(!0),C(e)},M=function(t){var n=t||{},r=n.name,i=n.status;g(f.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:i,selectedItemData:t,fetchRegistries:Q,title:e("common.delete_service_registry_title")+"?",confirmButtonProps:{label:e("common.delete")},textProps:{description:e("common.delete_service_registry_description",{name:r})}})},Z=function(){g(f.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:Q})};return b?i().createElement(d.nA,{getAccessToServiceRegistry:function(){}}):void 0===x?i().createElement(c.PageSection,{variant:c.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(f.yR,null)):(null==x?void 0:x.length)?i().createElement(d.OP,{isExpanded:y,isLoading:void 0===S,notRequiredDrawerContentBackground:P,onClose:function(){_(!1)},registry:S},i().createElement("main",{className:"pf-c-page__main"},i().createElement(d.mt,{onConnectToRegistry:Y,onDeleteRegistry:M,serviceRegistryDetails:S}),i().createElement(d.UW,{page:m,perPage:E,serviceRegistryItems:x,total:null==I?void 0:I.total,onViewConnection:Y,onDelete:M,expectedTotal:0,orderBy:F,setOrderBy:V,loggedInUser:A,currentUserRegistries:x,handleCreateModal:Z,refresh:Q,registryDataLoaded:!1,isDrawerOpen:y}))):i().createElement(i().Fragment,null,i().createElement(d.mt,null),i().createElement(d.EG,{onCreateserviceRegistry:Z}))},p=n(8800);const v=function(){return i().createElement(a.I18nextProvider,{i18n:p.Z},i().createElement(f.OU,null,i().createElement(g,null)))}},2247:(e,t,n)=>{"use strict";n(8121),n(59),n(8788),n(6007),n(3494)},3494:(e,t,n)=>{"use strict";n.d(t,{a$:()=>E.a,AX:()=>o.A,D5:()=>g.D,C0:()=>s.C,jU:()=>s.j,yR:()=>f.y,wu:()=>p.w,wR:()=>v.w,L5:()=>m.L,Ny:()=>h.Ny,OU:()=>h.OU,QK:()=>h.QK});var r=n(8121),i=n.n(r),a=(n(15),n(8788)),o=n(9441),s=n(1140),c=n(655),l=n(6007),u=n(59),d=(n(7502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,c.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?i().createElement(a.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(s.C,{emptyStateProps:{variant:s.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},i().createElement(a.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(r.Component)),f=((0,l.withRouter)((0,u.withTranslation)()(d)),n(6554)),g=n(3242),p=n(6376),v=n(2067),m=n(5642),E=(n(2247),n(2311)),h=n(9758)},2519:(e,t,n)=>{"use strict";n(8121)},2648:(e,t,n)=>{"use strict";n.d(t,{wx:()=>i,xe:()=>a,YZ:()=>o,hm:()=>s,L0:()=>c});var r=n(8289);var i=function(){return document.querySelector("#qs-content")||document.body},a=50,o=255,s=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t}}}]);
//# sourceMappingURL=869.b7f510f3.js.map