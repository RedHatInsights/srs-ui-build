(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[240,15],{2247:(e,t,n)=>{"use strict";n.d(t,{o:()=>c});var r=n(8121),a=n.n(r),i=n(5351),o=n(8788),u=n(6007),l=n(3494),c=function(){var e=(0,i.useTranslation)().t;return a().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(l.C0,{emptyStateProps:{variant:l.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,u.useHistory)();return a().createElement(o.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},3494:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>u,sw:()=>c,a$:()=>k.a,AX:()=>s.A,D5:()=>g.D,C0:()=>d.C,jU:()=>d.j,tV:()=>p,yR:()=>_.y,wu:()=>E.w,wR:()=>h.w,L5:()=>y.L,Ny:()=>P.Ny,OU:()=>P.OU,QK:()=>P.QK});var r=n(655),a=n(8121),i=n.n(a),o=n(15),u=function(e){var t=e.children,n=(0,a.useState)([]),u=n[0],l=n[1],s=(0,a.useState)([]),d=s[0],m=s[1];(0,a.useEffect)((function(){var e=d.map((function(e){return e.key})),t=u.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return f(n)}),8e3);return{key:e.id,timeOut:r}}));return m((0,r.__spreadArray)((0,r.__spreadArray)([],d),t)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[u]);var f=function(e){l((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})))})),m((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return i().createElement(o.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();l((0,r.__spreadArray)((0,r.__spreadArray)([],u),[(0,r.__assign)((0,r.__assign)({},e),{id:t})]))}}},i().createElement(c,{alerts:u,onCloseAlert:f}),t)},l=n(8788),c=function(e){var t=e.alerts,n=e.onCloseAlert;return i().createElement(l.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,o=e.title,u=e.description,c=e.dataTestId,s=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return i().createElement(l.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:l.AlertVariant[a],variantLabel:"",title:o,actionClose:i().createElement(l.AlertActionCloseButton,{title:o,onClose:function(){return n(t)}}),"data-testid":c},s),u)})))},s=n(9441),d=n(1140),m=n(6007),f=n(5351),v=(n(7502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?i().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(d.C,{emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},i().createElement(l.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(a.Component)),p=(0,m.withRouter)((0,f.withTranslation)()(v)),_=n(6554),g=n(3242),E=n(6376),h=n(2067),y=n(5642),k=(n(2247),n(2311)),P=n(9758)},2519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(8121);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},2648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>r,wx:()=>i,xe:()=>o,YZ:()=>u,O6:()=>a,hm:()=>l});n(8289);function r(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}var a,i=function(){return document.querySelector("#qs-content")||document.body},o=50,u=255;!function(e){e.Provisioning="provisioning",e.Available="available",e.Unavailable="unavailable"}(a||(a={}));var l=[{value:"available",label:"Ready"},{value:"unavailable",label:"Failed"},{value:"provisioning",label:"Creation in progress"}]},9139:(e,t,n)=>{"use strict";n.r(t);var r=n(8121),a=n.n(r),i=n(1568),o=n.n(i),u=n(655),l=n(6007),c=n(5351),s=(n(7668),n(1869),n(4651),n(9521),n(5202),n(6594),n(4694),n(8788)),d=n(2648),m=n(2247),f=n(2519),v=n(9581),p=n(6279),_=n(15),g=n(6280),E=n(3494);var h,y=function(){var e=(0,c.useTranslation)().t,t=(0,_.useAuth)(),n=(0,_.useConfig)().srs.apiBasePath,i=(0,E.QK)().showModal,o=(0,l.useLocation)(),d=new URLSearchParams(o.search),m=parseInt(d.get("page")||"",10)||1,f=parseInt(d.get("perPage")||"",10)||10,v=(0,r.useState)(!1),h=v[0],y=v[1],k=(0,r.useState)(void 0),P=k[0],b=k[1],w=(0,r.useState)(!1),C=w[0],S=(w[1],(0,r.useState)(!1)),A=S[0],R=(S[1],(0,r.useState)(void 0)),T=R[0],x=R[1],B=(0,r.useState)(void 0),I=B[0],N=B[1],L=(0,r.useState)(void 0),D=L[0],U=L[1],O=(0,r.useState)("name asc"),F=O[0],V=O[1];(0,r.useEffect)((function(){Z()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return U(e)}))}),[t]),(0,r.useEffect)((function(){H()}),[I]);var j,q,G,H=function(){if(I&&(null==I?void 0:I.length)>0){var e=null==I?void 0:I.filter((function(e){return(null==e?void 0:e.id)===(null==P?void 0:P.id)}))[0],t=(0,u.__assign)((0,u.__assign)({},P),e);e&&b(t)}},Z=function(){return(0,u.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),[4,new p.RegistriesApi(new p.Configuration({accessToken:e,basePath:n})).getRegistries().then((function(e){var t=null==e?void 0:e.data;x(t),N(null==t?void 0:t.items)})).catch((function(e){}))];case 2:return r.sent(),[2]}}))}))};j=function(){return Z()},q=5e3,G=(0,r.useRef)(),(0,r.useEffect)((function(){G.current=j}),[j]),(0,r.useEffect)((function(){if(null!==q){var e=setTimeout((function(){G.current()}),q);return function(){clearInterval(e)}}}),[j,q]);var K=function(e){y(!0),b(e)},Q=function(t){var n=t||{},r=n.name,a=n.status;i(E.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:a,selectedItemData:t,fetchRegistries:Z,title:e("common.delete_service_registry_title")+"?",confirmButtonProps:{label:e("common.delete")},textProps:{description:e("common.delete_service_registry_description",{name:r})}})},Y=function(){i(E.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:Z})};return A?a().createElement(g.nA,{getAccessToServiceRegistry:function(){}}):void 0===I?a().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(E.yR,null)):(null==I?void 0:I.length)?a().createElement(g.OP,{isExpanded:h,isLoading:void 0===P,notRequiredDrawerContentBackground:C,onClose:function(){y(!1)},registry:P},a().createElement(g.mt,{onConnectToRegistry:K,onDeleteRegistry:Q,serviceRegistryDetails:P}),a().createElement(g.UW,{page:m,perPage:f,serviceRegistryItems:I,total:null==T?void 0:T.total,onViewConnection:K,onDelete:Q,expectedTotal:0,orderBy:F,setOrderBy:V,loggedInUser:D,currentUserkafkas:I,handleCreateModal:Y,refresh:Z,registryDataLoaded:!1,isDrawerOpen:h})):a().createElement(a().Fragment,null,a().createElement(g.mt,null),a().createElement(g.EG,{onCreateserviceRegistry:Y}))},k=[{component:function(){return a().createElement(y,{render:function(){return a().createElement(a().Fragment,null)}})},exact:!0,label:"Service Registry",path:"/",title:"Service Registry"}],P=function(e){var t=e.component,n=e.isAsync,r=void 0!==n&&n,i=e.title,o=(0,u.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,v.useLastLocation)();a().useEffect((function(){return e||null===t||(h=(0,d.mh)()),function(){window.clearTimeout(h)}}),[e,t])}(r),(0,f.j)(i),a().createElement(l.Route,(0,u.__assign)({render:function(e){return a().createElement(t,(0,u.__assign)({},o,e))}},o))},b=function(e){var t=e.title;return(0,f.j)(t),a().createElement(l.Route,{component:m.o})},w=k.reduce((function(e,t){return(0,u.__spreadArray)((0,u.__spreadArray)([],e),t.routes?t.routes:[t])}),[]),C=function(){return a().createElement(v.LastLocationProvider,null,a().createElement(l.Switch,null,w.map((function(e,t){var n=e.path,r=e.exact,i=e.component,o=e.title,l=e.isAsync,c=(0,u.__rest)(e,["path","exact","component","title","isAsync"]);return a().createElement(P,(0,u.__assign)({path:n,exact:r,component:i,key:t,title:o,isAsync:l},c))})),a().createElement(b,{title:"404 Page Not Found"})))};const S=n.p+"f940137c.svg";var A,R,T=function(e){var t=e.children,n=r.useState(!0),a=n[0],i=n[1],o=r.useState(!0),u=o[0],c=o[1],d=r.useState(!1),m=d[0],f=d[1];var v=r.createElement(s.PageHeader,{logo:r.createElement((function(){var e=(0,l.useHistory)();return r.createElement("img",{src:S,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:a,onNavToggle:u?function(){f(!m)}:function(){i(!a)}}),p=(0,l.useLocation)(),_=function(e,t){return r.createElement(s.NavItem,{key:e.label+"-"+t,id:e.label+"-"+t},r.createElement(l.NavLink,{exact:e.exact,to:e.path,activeClassName:"pf-m-current"},e.label))},g=r.createElement(s.Nav,{id:"nav-primary-simple",theme:"dark"},r.createElement(s.NavList,{id:"nav-list-simple"},k.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(s.NavExpandable,{key:n.label+"-"+a,id:n.label+"-"+a,title:n.label,isActive:n.routes.some((function(e){return e.path===p.pathname}))},n.routes.map((function(e,t){return e.label&&_(e,t)})))):_(e,t));var n,a})))),E=r.createElement(s.PageSidebar,{theme:"dark",nav:g,isNavOpen:u?m:a}),h="primary-app-container",y=r.createElement(s.SkipToContent,{onClick:function(e){e.preventDefault();var t=document.getElementById(h);t&&t.focus()},href:"#"+h},"Skip to Content");return r.createElement(s.Page,{mainContainerId:h,header:v,sidebar:E,onPageResize:function(e){c(e.mobileView)},skipToContent:y},t)},x=n(8800),B=n(5434),I=n.n(B),N=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return A?[3,2]:[4,L()];case 1:e.sent(),e.label=2;case 2:return[2,A]}}))}))},L=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(A=I()())?[4,A.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),A=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},D=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==A?void 0:A.updateToken(50)];case 1:return e.sent(),(null==A?void 0:A.token)?[2,A.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},U=a().createContext({keycloak:void 0}),O=function(e){var t={srs:{getToken:D},getUsername:function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==A?void 0:A.updateToken(50)];case 1:return e.sent(),(null==A?void 0:A.tokenParsed)?[2,A.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))})).then((function(e){return e.username}))}};return a().createElement(_.AuthContext.Provider,{value:t},e.children)};const F=function(){var e=a().useState(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){(0,u.__awaiter)(void 0,void 0,void 0,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,N()];case 1:return R=e.sent(),n(!0),[2]}}))}))}),[]),t?a().createElement(_.ConfigContext.Provider,{value:{srs:{apiBasePath:__BASE_PATH__}}},a().createElement(_.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(c.I18nextProvider,{i18n:x.Z},a().createElement(E.uZ,null,a().createElement(U.Provider,{value:{keycloak:R,profile:null==R?void 0:R.profile}},a().createElement(O,null,a().createElement(l.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(E.yR,null)},a().createElement(E.tV,null,a().createElement(E.OU,null,a().createElement(T,null,a().createElement(C,null)))))))))))):a().createElement(E.yR,null)};o().render(a().createElement(F,null),document.getElementById("root"))}}]);
//# sourceMappingURL=240.9852799f.js.map