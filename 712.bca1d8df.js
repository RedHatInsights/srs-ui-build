(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[712,481],{1768:()=>{},2247:(e,t,n)=>{"use strict";n.d(t,{o:()=>c});var r=n(5418),a=n.n(r),i=n(4532),o=n(8788),u=n(6007),l=n(3494),c=function(){var e=(0,i.useTranslation)().t;return a().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(l.C0,{emptyStateProps:{variant:l.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,u.useHistory)();return a().createElement(o.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},3494:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>u,sw:()=>c,a$:()=>k.a,AX:()=>s.A,D5:()=>_.D,C0:()=>d.C,jU:()=>d.j,tV:()=>p,yR:()=>g.y,wu:()=>E.w,wR:()=>h.w,L5:()=>y.L,Ny:()=>w.Ny,OU:()=>w.OU,QK:()=>w.QK});var r=n(655),a=n(5418),i=n.n(a),o=n(5216),u=function(e){var t=e.children,n=(0,a.useState)([]),u=n[0],l=n[1],s=(0,a.useState)([]),d=s[0],m=s[1];(0,a.useEffect)((function(){var e=d.map((function(e){return e.key})),t=u.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return f(n)}),8e3);return{key:e.id,timeOut:r}}));return m((0,r.__spreadArray)((0,r.__spreadArray)([],d),t)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[u]);var f=function(e){l((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})))})),m((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})))}))};return i().createElement(o.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();l((0,r.__spreadArray)((0,r.__spreadArray)([],u),[(0,r.__assign)((0,r.__assign)({},e),{id:t})]))}}},i().createElement(c,{alerts:u,onCloseAlert:f}),t)},l=n(8788),c=function(e){var t=e.alerts,n=e.onCloseAlert;return i().createElement(l.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,o=e.title,u=e.description,c=e.dataTestId,s=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return i().createElement(l.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:l.AlertVariant[a],variantLabel:"",title:o,actionClose:i().createElement(l.AlertActionCloseButton,{title:o,onClose:function(){return n(t)}}),"data-testid":c},s),u)})))},s=n(9441),d=n(1098),m=n(6007),f=n(4532),v=(n(7502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?i().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(d.C,{emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},i().createElement(l.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(a.Component)),p=(0,m.withRouter)((0,f.withTranslation)()(v)),g=n(6554),_=n(3242),E=n(6376),h=n(2067),y=n(5642),k=(n(2247),n(2311)),w=n(9758)},2519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(5418);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},2648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>a,wx:()=>i,xe:()=>o,YZ:()=>u,hm:()=>l,L0:()=>c});var r=n(4683);function a(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}var i=function(){return document.querySelector("#qs-content")||document.body},o=32,u=255,l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t}},7892:(e,t,n)=>{"use strict";n.r(t);var r=n(5418),a=n.n(r),i=n(6235),o=n.n(i),u=n(655),l=n(6007),c=n(4532),s=(n(1768),n(8788)),d=n(2648),m=n(2247),f=n(2519),v=n(9581),p=n(7806),g=n(5216),_=n(6280),E=n(3494);var h,y=function(){var e=(0,c.useTranslation)().t,t=(0,g.useAuth)(),n=(0,g.useConfig)().srs.apiBasePath,i=(0,E.QK)().showModal,o=(0,l.useLocation)(),d=new URLSearchParams(o.search),m=parseInt(d.get("page")||"",10)||1,f=parseInt(d.get("perPage")||"",10)||10,v=(0,r.useState)(!1),h=v[0],y=v[1],k=(0,r.useState)(void 0),w=k[0],C=k[1],P=(0,r.useState)(!1),S=P[0],b=(P[1],(0,r.useState)(!1)),R=b[0],A=(b[1],(0,r.useState)(void 0)),T=A[0],x=A[1],B=(0,r.useState)(void 0),N=B[0],D=B[1],I=(0,r.useState)(void 0),L=I[0],U=I[1],O=(0,r.useState)("name asc"),F=O[0],V=O[1];(0,r.useEffect)((function(){Z()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return U(e)}))}),[t]),(0,r.useEffect)((function(){H()}),[N]);var j,q,G,H=function(){if(N&&(null==N?void 0:N.length)>0){var e=null==N?void 0:N.filter((function(e){return(null==e?void 0:e.id)===(null==w?void 0:w.id)}))[0],t=(0,u.__assign)((0,u.__assign)({},w),e);e&&C(t)}},Z=function(){return(0,u.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),[4,new p.RegistriesApi(new p.Configuration({accessToken:e,basePath:n})).getRegistries().then((function(e){var t=null==e?void 0:e.data;x(t),D(null==t?void 0:t.items)})).catch((function(e){}))];case 2:return r.sent(),[2]}}))}))};j=function(){return Z()},q=5e3,G=(0,r.useRef)(),(0,r.useEffect)((function(){G.current=j}),[j]),(0,r.useEffect)((function(){if(null!==q){var e=setTimeout((function(){G.current()}),q);return function(){clearInterval(e)}}}),[j,q]);var K=function(e){y(!0),C(e)},Q=function(t){var n=t||{},r=n.name,a=n.status;i(E.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:a,selectedItemData:t,fetchRegistries:Z,title:e("common.delete_service_registry_title")+"?",confirmButtonProps:{label:e("common.delete")},textProps:{description:e("common.delete_service_registry_description",{name:r})}})},Y=function(){i(E.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:Z})};return R?a().createElement(_.nA,{getAccessToServiceRegistry:function(){}}):void 0===N?a().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(E.yR,null)):(null==N?void 0:N.length)?a().createElement(_.OP,{isExpanded:h,isLoading:void 0===w,notRequiredDrawerContentBackground:S,onClose:function(){y(!1)},registry:w},a().createElement("main",{className:"pf-c-page__main"},a().createElement(_.mt,{onConnectToRegistry:K,onDeleteRegistry:Q,serviceRegistryDetails:w}),a().createElement(_.UW,{page:m,perPage:f,serviceRegistryItems:N,total:null==T?void 0:T.total,onViewConnection:K,onDelete:Q,expectedTotal:0,orderBy:F,setOrderBy:V,loggedInUser:L,currentUserRegistries:N,handleCreateModal:Y,refresh:Z,registryDataLoaded:!1,isDrawerOpen:h}))):a().createElement(a().Fragment,null,a().createElement(_.mt,null),a().createElement(_.EG,{onCreateserviceRegistry:Y}))},k=[{component:function(){return a().createElement(y,null)},exact:!0,label:"Service Registry",path:"/",title:"Service Registry"}],w=function(e){var t=e.component,n=e.isAsync,r=void 0!==n&&n,i=e.title,o=(0,u.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,v.useLastLocation)();a().useEffect((function(){return e||null===t||(h=(0,d.mh)()),function(){window.clearTimeout(h)}}),[e,t])}(r),(0,f.j)(i),a().createElement(l.Route,(0,u.__assign)({render:function(e){return a().createElement(t,(0,u.__assign)({},o,e))}},o))},C=function(e){var t=e.title;return(0,f.j)(t),a().createElement(l.Route,{component:m.o})},P=k.reduce((function(e,t){return(0,u.__spreadArray)((0,u.__spreadArray)([],e),t.routes?t.routes:[t])}),[]),S=function(){return a().createElement(v.LastLocationProvider,null,a().createElement(l.Switch,null,P.map((function(e,t){var n=e.path,r=e.exact,i=e.component,o=e.title,l=e.isAsync,c=(0,u.__rest)(e,["path","exact","component","title","isAsync"]);return a().createElement(w,(0,u.__assign)({path:n,exact:r,component:i,key:t,title:o,isAsync:l},c))})),a().createElement(C,{title:"404 Page Not Found"})))};const b=n.p+"f940137c.svg";var R,A,T=function(e){var t=e.children,n=r.useState(!0),a=n[0],i=n[1],o=r.useState(!0),u=o[0],c=o[1],d=r.useState(!1),m=d[0],f=d[1];var v=r.createElement(s.PageHeader,{logo:r.createElement((function(){var e=(0,l.useHistory)();return r.createElement("img",{src:b,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:a,onNavToggle:u?function(){f(!m)}:function(){i(!a)}}),p=(0,l.useLocation)(),g=function(e,t){return r.createElement(s.NavItem,{key:e.label+"-"+t,id:e.label+"-"+t},r.createElement(l.NavLink,{exact:e.exact,to:e.path,activeClassName:"pf-m-current"},e.label))},_=r.createElement(s.Nav,{id:"nav-primary-simple",theme:"dark"},r.createElement(s.NavList,{id:"nav-list-simple"},k.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(s.NavExpandable,{key:n.label+"-"+a,id:n.label+"-"+a,title:n.label,isActive:n.routes.some((function(e){return e.path===p.pathname}))},n.routes.map((function(e,t){return e.label&&g(e,t)})))):g(e,t));var n,a})))),E=r.createElement(s.PageSidebar,{theme:"dark",nav:_,isNavOpen:u?m:a}),h="primary-app-container",y=r.createElement(s.SkipToContent,{onClick:function(e){e.preventDefault();var t=document.getElementById(h);t&&t.focus()},href:"#"+h},"Skip to Content");return r.createElement(s.Page,{mainContainerId:h,header:v,sidebar:E,onPageResize:function(e){c(e.mobileView)},skipToContent:y},t)},x=n(8800),B=n(5434),N=n.n(B),D=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return R?[3,2]:[4,I()];case 1:e.sent(),e.label=2;case 2:return[2,R]}}))}))},I=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(R=N()())?[4,R.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),R=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},L=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==R?void 0:R.updateToken(50)];case 1:return e.sent(),(null==R?void 0:R.token)?[2,R.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},U=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==R?void 0:R.updateToken(50)];case 1:return e.sent(),(null==R?void 0:R.tokenParsed)?[2,R.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},O=a().createContext({keycloak:void 0}),F=function(e){var t={srs:{getToken:L},getUsername:function(){return U().then((function(e){return e.username}))},isOrgAdmin:function(){return U().then((function(e){return e.is_org_admin}))}};return a().createElement(g.AuthContext.Provider,{value:t},e.children)};const V=function(){var e=a().useState(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){(0,u.__awaiter)(void 0,void 0,void 0,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,D()];case 1:return A=e.sent(),n(!0),[2]}}))}))}),[]),t?a().createElement(g.ConfigContext.Provider,{value:{srs:{apiBasePath:__BASE_PATH__}}},a().createElement(g.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(c.I18nextProvider,{i18n:x.Z},a().createElement(E.uZ,null,a().createElement(O.Provider,{value:{keycloak:A,profile:null==A?void 0:A.profile}},a().createElement(F,null,a().createElement(l.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(E.yR,null)},a().createElement(E.tV,null,a().createElement(E.OU,null,a().createElement(T,null,a().createElement(S,null)))))))))))):a().createElement(E.yR,null)};o().render(a().createElement(V,null),document.getElementById("root"))}}]);
//# sourceMappingURL=712.bca1d8df.js.map