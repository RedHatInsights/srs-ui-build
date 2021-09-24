(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[472,734],{41768:()=>{},52247:(e,t,n)=>{"use strict";n.d(t,{o:()=>c});var r=n(75418),a=n.n(r),i=n(11593),o=n(84669),u=n(98068),l=n(33494),c=function(){var e=(0,i.useTranslation)().t;return a().createElement(o.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(l.C0,{emptyStateProps:{variant:l.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,u.useHistory)();return a().createElement(o.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},33494:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>u,sw:()=>c,a$:()=>S.a,AX:()=>s.A,D5:()=>g.D,C0:()=>d.C,jU:()=>d.j,tV:()=>p,yR:()=>_.y,wu:()=>E.wu,wR:()=>h.w,L5:()=>y.L,Ny:()=>k.Ny,bN:()=>E.bN,OU:()=>k.OU,h0:()=>E.h0,QK:()=>k.QK});var r=n(70655),a=n(75418),i=n.n(a),o=n(42589),u=function(e){var t=e.children,n=(0,a.useState)([]),u=n[0],l=n[1],s=(0,a.useState)([]),d=s[0],f=s[1];(0,a.useEffect)((function(){var e=d.map((function(e){return e.key})),t=u.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return v(n)}),8e3);return{key:e.id,timeOut:r}}));return f((0,r.__spreadArray)((0,r.__spreadArray)([],d,!0),t,!0)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[u]);var v=function(e){l((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})),!0)})),f((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})),!0)}))};return i().createElement(o.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();l((0,r.__spreadArray)((0,r.__spreadArray)([],u,!0),[(0,r.__assign)((0,r.__assign)({},e),{id:t})],!1))}}},i().createElement(c,{alerts:u,onCloseAlert:v}),t)},l=n(84669),c=function(e){var t=e.alerts,n=e.onCloseAlert;return i().createElement(l.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,o=e.title,u=e.description,c=e.dataTestId,s=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return i().createElement(l.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:l.AlertVariant[a],variantLabel:"",title:o,actionClose:i().createElement(l.AlertActionCloseButton,{title:o,onClose:function(){return n(t)}}),"data-testid":c},s),u)})))},s=n(79441),d=n(91098),f=n(98068),v=n(11593),m=(n(87502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?i().createElement(l.PageSection,{padding:{default:"noPadding"},isFilled:!0},i().createElement(d.C,{emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},i().createElement(l.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(a.Component)),p=(0,f.withRouter)((0,v.withTranslation)()(m)),_=n(76554),g=n(53242),E=n(86376),h=n(42067),y=n(45642),S=(n(52247),n(52311)),k=n(78496)},78261:(e,t,n)=>{"use strict";n.d(t,{G:()=>a,S:()=>r});var r,a=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.USER_ALREADY_HAVE_TRIAL_INSTANCE="SRS-MGMT-13",e.INSUFFICIENT_QUOTA="SRS-MGMT-14",e.INSUFFICIENT_STANDARD_QUOTA="SRS-MGMT-7",e.FAILED_TO_CHECK_QUOTA="SRS-MGMT-11"}(r||(r={}))},82519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(75418);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>a,wx:()=>o,xe:()=>u,hm:()=>l,L0:()=>c,ik:()=>i});var r=n(23574);function a(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}var i,o=function(){return document.querySelector("#qs-content")||document.body},u=32,l=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],c=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t};!function(e){e.eval="eval",e.standard="standard"}(i||(i={}))},87242:(e,t,n)=>{"use strict";n.r(t);var r=n(75418),a=n.n(r),i=n(66235),o=n.n(i),u=n(70655),l=n(98068),c=n(11593),s=(n(41768),n(84669)),d=n(52648),f=n(52247),v=n(82519),m=n(19581),p=n(72979),_=n(42589),g=n(26280),E=n(33494);var h,y=n(75381),S=a().createContext(void 0),k=function(){var e=(0,c.useTranslation)().t,t=(0,_.useAuth)(),n=((0,_.useConfig)()||{srs:{apiBasePath:""}}).srs.apiBasePath,i=(((0,_.useAlert)()||{}).addAlert,(0,E.QK)().showModal),o=(0,r.useContext)(S)||{},l=o.preCreateInstance,d=o.shouldOpenCreateModal,f=o.tokenEndPointUrl,v=(0,E.h0)()||{},m=v.page,h=void 0===m?1:m,k=v.perPage,C=void 0===k?10:k,b=(0,r.useState)(!1),w=b[0],A=b[1],P=(0,r.useState)(void 0),R=P[0],T=P[1],N=(0,r.useState)(!1),I=N[0],x=(N[1],(0,r.useState)(!1)),D=x[0],B=(x[1],(0,r.useState)(void 0)),U=B[0],L=B[1],O=(0,r.useState)(void 0),F=O[0],M=O[1],G=(0,r.useState)(void 0),V=G[0],j=G[1],H=(0,r.useState)("name asc"),Q=H[0],q=H[1],K=null==F?void 0:F.some((function(e){return(null==e?void 0:e.instance_type)===(null===y.ik||void 0===y.ik?void 0:y.ik.eval)}));(0,r.useEffect)((function(){X()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return j(e)}))}),[t]),(0,r.useEffect)((function(){W()}),[F]),(0,r.useEffect)((function(){(0,u.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return(e=d)?[4,d()]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&ee(),[2]}}))}))}),[d]);var Y,Z,z,W=function(){if(F&&(null==F?void 0:F.length)>0){var e=null==F?void 0:F.filter((function(e){return(null==e?void 0:e.id)===(null==R?void 0:R.id)}))[0],t=(0,u.__assign)((0,u.__assign)({},R),e);e&&T(t)}},X=function(){return(0,u.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,u.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),n&&e?[4,new p.RegistriesApi(new p.Configuration({accessToken:e,basePath:n})).getRegistries().then((function(e){var t=null==e?void 0:e.data;L(t),M(null==t?void 0:t.items)})).catch((function(e){}))]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))};Y=function(){return X()},Z=5e3,z=(0,r.useRef)(),(0,r.useEffect)((function(){z.current=Y}),[Y]),(0,r.useEffect)((function(){if(null!==Z){var e=setTimeout((function(){z.current()}),Z);return function(){clearInterval(e)}}}),[Y,Z]);var $=function(e){A(!0),T(e)},J=function(t){var n=t||{},r=n.name,a=n.status;i(E.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:a,selectedItemData:t,fetchRegistries:X,title:e("common.delete_service_registry_title")+"?",confirmButtonProps:{label:e("common.delete")},textProps:{description:e("common.delete_service_registry_description",{name:r})}})},ee=function(){i(E.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:X,hasUserTrialInstance:K})},te=function(){return(0,u.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return l?[4,l(!0)]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&ee(),[2]}}))}))};return D?a().createElement(g.nA,{getAccessToServiceRegistry:function(){}}):void 0===F?a().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(E.yR,null)):(null==F?void 0:F.length)?a().createElement(g.OP,{isExpanded:w,isLoading:void 0===R,notRequiredDrawerContentBackground:I,onClose:function(){A(!1)},registry:R,tokenEndPointUrl:f},a().createElement("main",{className:"pf-c-page__main"},a().createElement(g.mt,{onConnectToRegistry:$,onDeleteRegistry:J,serviceRegistryDetails:R}),a().createElement(g.UW,{page:h,perPage:C,serviceRegistryItems:F,total:null==U?void 0:U.total,onViewConnection:$,onDelete:J,expectedTotal:0,orderBy:Q,setOrderBy:q,loggedInUser:V,currentUserRegistries:F,handleCreateModal:te,refresh:X,registryDataLoaded:!1,isDrawerOpen:w}))):a().createElement(a().Fragment,null,a().createElement(g.mt,null),a().createElement(g.EG,{onCreateserviceRegistry:te}))},C=[{component:function(){return a().createElement(k,null)},exact:!0,label:"Service Registry",path:"/",title:"Service Registry"}],b=function(e){var t=e.component,n=e.isAsync,r=void 0!==n&&n,i=e.title,o=(0,u.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,m.useLastLocation)();a().useEffect((function(){return e||null===t||(h=(0,d.mh)()),function(){window.clearTimeout(h)}}),[e,t])}(r),(0,v.j)(i),a().createElement(l.Route,(0,u.__assign)({render:function(e){return a().createElement(t,(0,u.__assign)({},o,e))}},o))},w=function(e){var t=e.title;return(0,v.j)(t),a().createElement(l.Route,{component:f.o})},A=C.reduce((function(e,t){return(0,u.__spreadArray)((0,u.__spreadArray)([],e,!0),t.routes?t.routes:[t],!0)}),[]),P=function(){return a().createElement(m.LastLocationProvider,null,a().createElement(l.Switch,null,A.map((function(e,t){var n=e.path,r=e.exact,i=e.component,o=e.title,l=e.isAsync,c=(0,u.__rest)(e,["path","exact","component","title","isAsync"]);return a().createElement(b,(0,u.__assign)({path:n,exact:r,component:i,key:t,title:o,isAsync:l},c))})),a().createElement(w,{title:"404 Page Not Found"})))};const R=n.p+"f940137c.svg";var T,N,I=function(e){var t=e.children,n=r.useState(!0),a=n[0],i=n[1],o=r.useState(!0),u=o[0],c=o[1],d=r.useState(!1),f=d[0],v=d[1];var m=r.createElement(s.PageHeader,{logo:r.createElement((function(){var e=(0,l.useHistory)();return r.createElement("img",{src:R,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:a,onNavToggle:u?function(){v(!f)}:function(){i(!a)}}),p=(0,l.useLocation)(),_=function(e,t){return r.createElement(s.NavItem,{key:e.label+"-"+t,id:e.label+"-"+t},r.createElement(l.NavLink,{exact:e.exact,to:e.path,activeClassName:"pf-m-current"},e.label))},g=r.createElement(s.Nav,{id:"nav-primary-simple",theme:"dark"},r.createElement(s.NavList,{id:"nav-list-simple"},C.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(s.NavExpandable,{key:n.label+"-"+a,id:n.label+"-"+a,title:n.label,isActive:n.routes.some((function(e){return e.path===p.pathname}))},n.routes.map((function(e,t){return e.label&&_(e,t)})))):_(e,t));var n,a})))),E=r.createElement(s.PageSidebar,{theme:"dark",nav:g,isNavOpen:u?f:a}),h="primary-app-container",y=r.createElement(s.SkipToContent,{onClick:function(e){e.preventDefault();var t=document.getElementById(h);t&&t.focus()},href:"#"+h},"Skip to Content");return r.createElement(s.Page,{mainContainerId:h,header:m,sidebar:E,onPageResize:function(e){c(e.mobileView)},skipToContent:y},t)},x=n(78800),D=n(45434),B=n.n(D),U=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return T?[3,2]:[4,L()];case 1:e.sent(),e.label=2;case 2:return[2,T]}}))}))},L=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(T=B()())?[4,T.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),T=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},O=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==T?void 0:T.updateToken(50)];case 1:return e.sent(),(null==T?void 0:T.token)?[2,T.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},F=function(){return(0,u.__awaiter)(void 0,void 0,Promise,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==T?void 0:T.updateToken(50)];case 1:return e.sent(),(null==T?void 0:T.tokenParsed)?[2,T.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},M=a().createContext({keycloak:void 0}),G=function(e){var t={srs:{getToken:O},getUsername:function(){return F().then((function(e){return e.username}))},isOrgAdmin:function(){return F().then((function(e){return e.is_org_admin}))}};return a().createElement(_.AuthContext.Provider,{value:t},e.children)};const V=function(){var e=a().useState(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){(0,u.__awaiter)(void 0,void 0,void 0,(function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,U()];case 1:return N=e.sent(),n(!0),[2]}}))}))}),[]),t?a().createElement(_.ConfigContext.Provider,{value:{srs:{apiBasePath:__BASE_PATH__}}},a().createElement(_.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(c.I18nextProvider,{i18n:x.Z},a().createElement(E.uZ,null,a().createElement(M.Provider,{value:{keycloak:N,profile:null==N?void 0:N.profile}},a().createElement(G,null,a().createElement(l.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(E.yR,null)},a().createElement(E.tV,null,a().createElement(E.OU,null,a().createElement(E.bN,null,a().createElement(I,null,a().createElement(P,null))))))))))))):a().createElement(E.yR,null)};o().render(a().createElement(V,null),document.getElementById("root"))}}]);
//# sourceMappingURL=472.a941bda9.js.map