(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[623],{41768:()=>{},59786:(e,t,n)=>{"use strict";n(75418),n(98068),n(69020),n(84669)},55623:(e,t,n)=>{"use strict";n(75418),n(84669),n(69020),n(76814)},12773:(e,t,n)=>{"use strict";var r=n(75418),a=n.n(r),o=(n(98068),n(84669),n(69020),n(5746),n(9980),n(59786),n(55623),a().memo((function(e){var t=e.renderSchema,n=e.registry;return t&&n&&t(n)||a().createElement(a().Fragment,null)})));o.displayName="Schemas"},58684:(e,t,n)=>{"use strict";n(75418),n(69020),n(12773),n(78800)},52247:(e,t,n)=>{"use strict";n.d(t,{o:()=>l});var r=n(75418),a=n.n(r),o=n(69020),i=n(84669),c=n(98068),u=n(33494),l=function(){var e=(0,o.useTranslation)().t;return a().createElement(i.PageSection,{padding:{default:"noPadding"},isFilled:!0},a().createElement(u.C0,{emptyStateProps:{variant:u.jU.PageNotFound},titleProps:{title:e("404_page_does_not_exist")},emptyStateBodyProps:{body:e("we_cannot_find_the_page_you_are_looking_for")}},a().createElement((function(){var t=(0,c.useHistory)();return a().createElement(i.Button,{onClick:function(){t.push("/")}},e("return_to_home_page"))}),null)))}},33494:(e,t,n)=>{"use strict";n.d(t,{uZ:()=>c,sw:()=>l,a$:()=>S.a,AX:()=>s.A,D5:()=>g.D,C0:()=>d.C,jU:()=>d.j,tV:()=>p,yR:()=>_.y,wu:()=>E.wu,wR:()=>h.w,L5:()=>y.L,Ny:()=>w.Ny,bN:()=>E.bN,OU:()=>w.OU,h0:()=>E.h0,QK:()=>w.QK});var r=n(70655),a=n(75418),o=n.n(a),i=n(9980),c=function(e){var t=e.children,n=(0,a.useState)([]),c=n[0],u=n[1],s=(0,a.useState)([]),d=s[0],f=s[1];(0,a.useEffect)((function(){var e=d.map((function(e){return e.key})),t=c.filter((function(t){return!e.includes(null==t?void 0:t.id)})).map((function(e){var t=e.id,n=void 0===t?"":t,r=setTimeout((function(){return m(n)}),8e3);return{key:e.id,timeOut:r}}));return f((0,r.__spreadArray)((0,r.__spreadArray)([],d,!0),t,!0)),function(){return d.forEach((function(e){return(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)}))}}),[c]);var m=function(e){u((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.id!==e})),!0)})),f((function(t){return(0,r.__spreadArray)([],t.filter((function(t){return t.key===e})),!0)}))};return o().createElement(i.AlertContext.Provider,{value:{addAlert:function(e){var t=(new Date).getTime().toString();u((0,r.__spreadArray)((0,r.__spreadArray)([],c,!0),[(0,r.__assign)((0,r.__assign)({},e),{id:t})],!1))}}},o().createElement(l,{alerts:c,onCloseAlert:m}),t)},u=n(84669),l=function(e){var t=e.alerts,n=e.onCloseAlert;return o().createElement(u.AlertGroup,{isToast:!0},t.map((function(e){var t=e.id,a=e.variant,i=e.title,c=e.description,l=e.dataTestId,s=(0,r.__rest)(e,["id","variant","title","description","dataTestId"]);return o().createElement(u.Alert,(0,r.__assign)({key:t,isLiveRegion:!0,variant:u.AlertVariant[a],variantLabel:"",title:i,actionClose:o().createElement(u.AlertActionCloseButton,{title:i,onClose:function(){return n(t)}}),"data-testid":l},s),c)})))},s=n(79441),d=n(91098),f=n(98068),m=n(69020),v=(n(87502),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t.onClickButton=function(){var e=t.props.history;t.setState({hasError:!1}),e&&e.push("/")},t}return(0,r.__extends)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){console.error("error:",e,t)},t.prototype.render=function(){var e=this.props.t;return this.state.hasError?o().createElement(u.PageSection,{padding:{default:"noPadding"},isFilled:!0},o().createElement(d.C,{emptyStateProps:{variant:d.j.UnexpectedError},emptyStateIconProps:{className:"icon-color"},titleProps:{title:e("common.something_went_wrong")},emptyStateBodyProps:{body:e("unexpected_error")}},o().createElement(u.Button,{onClick:this.onClickButton},e("common.go_to_kafka_instances")))):this.props.children},t}(a.Component)),p=(0,f.withRouter)((0,m.withTranslation)()(v)),_=n(76554),g=n(53242),E=n(86376),h=n(42067),y=n(45642),S=(n(52247),n(52311)),w=n(78496)},31151:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var r=n(75418),a=n.n(r)().createContext(void 0),o=function(){return(0,r.useContext)(a)}},78261:(e,t,n)=>{"use strict";n.d(t,{G:()=>a,S:()=>r});var r,a=function(e){var t;return void 0!==(null===(t=e.response)||void 0===t?void 0:t.data.code)};!function(e){e.USER_ALREADY_HAVE_TRIAL_INSTANCE="SRS-MGMT-13",e.INSUFFICIENT_QUOTA="SRS-MGMT-14",e.INSUFFICIENT_STANDARD_QUOTA="SRS-MGMT-7",e.FAILED_TO_CHECK_QUOTA="SRS-MGMT-11"}(r||(r={}))},82519:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var r=n(75418);function a(e){r.useEffect((function(){var t=document.title;return document.title=e,function(){document.title=t}}),[e])}},52648:(e,t,n)=>{"use strict";n.d(t,{mh:()=>a,wx:()=>i,xe:()=>c,hm:()=>u,L0:()=>l,ik:()=>o});var r=n(31803);function a(){return window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)}var o,i=function(){return document.getElementById("chrome-app-render-root")||document.body},c=32,u=[{value:"ready",label:"Ready"},{value:"failed",label:"Failed"},{value:"accepted",label:"Creation pending"},{value:"provisioning",label:"Creation in progress"},{value:"preparing",label:"Creation in progress"},{value:"deprovision",label:"Deletion in progress"},{value:"deleting",label:"Deletion in progress"}],l=function(e,t){return e="string"==typeof e?new Date(e):e,(0,r.formatDistance)(e,new Date)+" "+t};!function(e){e.eval="eval",e.standard="standard"}(o||(o={}))},65224:(e,t,n)=>{"use strict";n.r(t);var r=n(75418),a=n.n(r),o=n(66235),i=n.n(o),c=n(70655),u=n(98068),l=n(69020),s=(n(41768),n(84669)),d=n(52648),f=n(52247),m=n(82519),v=n(19581),p=n(5746),_=n(9980),g=n(18271),E=n(33494);var h,y=n(75381),S=n(31151),w=function(){var e=(0,l.useTranslation)().t,t=(0,_.useAuth)(),n=((0,_.useConfig)()||{srs:{apiBasePath:""}}).srs.apiBasePath,o=(0,E.QK)().showModal,i=(0,S.x)()||{},u=i.preCreateInstance,d=i.shouldOpenCreateModal,f=i.renderDownloadArtifacts,m=(0,E.h0)()||{},v=m.page,h=void 0===v?1:v,w=m.perPage,b=void 0===w?10:w,k=(0,r.useState)(!1),C=k[0],A=k[1],P=(0,r.useState)(void 0),R=P[0],T=P[1],N=(0,r.useState)(!1),I=N[0],x=(N[1],(0,r.useState)(void 0)),D=x[0],B=x[1],L=(0,r.useState)(void 0),U=L[0],O=L[1],F=(0,r.useState)(void 0),M=F[0],V=F[1],G=(0,r.useState)("name asc"),j=G[0],H=G[1],Q=null==U?void 0:U.some((function(e){return(null==e?void 0:e.instance_type)===(null===y.ik||void 0===y.ik?void 0:y.ik.eval)&&e.owner===M}));(0,r.useEffect)((function(){q()}),[]),(0,r.useEffect)((function(){null==t||t.getUsername().then((function(e){return V(e)}))}),[t]),(0,r.useEffect)((function(){Y()}),[U]),(0,r.useEffect)((function(){(0,c.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return(e=d)?[4,d()]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&$(),[2]}}))}))}),[d]),(0,r.useEffect)((function(){q()}),[h,b]);var K,Z,z,Y=function(){if(U&&(null==U?void 0:U.length)>0){var e=null==U?void 0:U.filter((function(e){return(null==e?void 0:e.id)===(null==R?void 0:R.id)}))[0],t=(0,c.__assign)((0,c.__assign)({},R),e);e&&T(t)}},q=function(){return(0,c.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.srs.getToken()];case 1:return e=r.sent(),n&&e?[4,new p.RegistriesApi(new p.Configuration({accessToken:e,basePath:n})).getRegistries(h,b).then((function(e){var t=null==e?void 0:e.data;B(t),O(null==t?void 0:t.items)})).catch((function(e){}))]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))};K=function(){return q()},Z=5e3,z=(0,r.useRef)(),(0,r.useEffect)((function(){z.current=K}),[K]),(0,r.useEffect)((function(){if(null!==Z){var e=setTimeout((function(){z.current()}),Z);return function(){clearInterval(e)}}}),[K,Z]);var W=function(e){A(!0),T(e)},X=function(t){var n=(t||{}).status;o(E.Ny.DELETE_SERVICE_REGISTRY,{serviceRegistryStatus:n,selectedItemData:t,fetchRegistries:q,title:"".concat(e("common.delete_service_registry_title"),"?"),confirmButtonProps:{label:e("common.delete")},renderDownloadArtifacts:f})},$=function(){o(E.Ny.CREATE_SERVICE_REGISTRY,{fetchServiceRegistries:q,hasUserTrialInstance:Q})},J=function(){return(0,c.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return u?[4,u(!0)]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return e&&$(),[2]}}))}))};return void 0===U?a().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(E.yR,null)):(null==U?void 0:U.length)?a().createElement(g.OP,{isExpanded:C,isLoading:void 0===R,notRequiredDrawerContentBackground:I,onClose:function(){A(!1)},registry:R},a().createElement("main",{className:"pf-c-page__main"},a().createElement(g.mt,{onConnectToRegistry:W,onDeleteRegistry:X,serviceRegistryDetails:R}),a().createElement(g.UW,{page:h,perPage:b,serviceRegistryItems:U,total:null==D?void 0:D.total,onViewConnection:W,onDelete:X,expectedTotal:0,orderBy:j,setOrderBy:H,loggedInUser:M,currentUserRegistries:U,handleCreateModal:J,refresh:q,registryDataLoaded:!1,isDrawerOpen:C}))):a().createElement(a().Fragment,null,a().createElement(g.mt,null),a().createElement(g.EG,{onCreateserviceRegistry:J}))},b=[{component:function(){return a().createElement(w,null)},exact:!0,label:"Service Registry",path:"/",title:"Service Registry"}],k=function(e){var t=e.component,n=e.isAsync,r=void 0!==n&&n,o=e.title,i=(0,c.__rest)(e,["component","isAsync","title"]);return function(e){var t=(0,v.useLastLocation)();a().useEffect((function(){return e||null===t||(h=(0,d.mh)()),function(){window.clearTimeout(h)}}),[e,t])}(r),(0,m.j)(o),a().createElement(u.Route,(0,c.__assign)({render:function(e){return a().createElement(t,(0,c.__assign)({},i,e))}},i))},C=function(e){var t=e.title;return(0,m.j)(t),a().createElement(u.Route,{component:f.o})},A=b.reduce((function(e,t){return(0,c.__spreadArray)((0,c.__spreadArray)([],e,!0),t.routes?t.routes:[t],!0)}),[]),P=function(){return a().createElement(v.LastLocationProvider,null,a().createElement(u.Switch,null,A.map((function(e,t){var n=e.path,r=e.exact,o=e.component,i=e.title,u=e.isAsync,l=(0,c.__rest)(e,["path","exact","component","title","isAsync"]);return a().createElement(k,(0,c.__assign)({path:n,exact:r,component:o,key:t,title:i,isAsync:u},l))})),a().createElement(C,{title:"404 Page Not Found"})))};const R=n.p+"f940137c.svg";var T,N,I=function(e){var t=e.children,n=r.useState(!0),a=n[0],o=n[1],i=r.useState(!0),c=i[0],l=i[1],d=r.useState(!1),f=d[0],m=d[1];var v=r.createElement(s.PageHeader,{logo:r.createElement((function(){var e=(0,u.useHistory)();return r.createElement("img",{src:R,onClick:function(){e.push("/")},alt:"PatternFly Logo"})}),null),showNavToggle:!0,isNavOpen:a,onNavToggle:c?function(){m(!f)}:function(){o(!a)}}),p=(0,u.useLocation)(),_=function(e,t){return r.createElement(s.NavItem,{key:"".concat(e.label,"-").concat(t),id:"".concat(e.label,"-").concat(t)},r.createElement(u.NavLink,{exact:e.exact,to:e.path,activeClassName:"pf-m-current"},e.label))},g=r.createElement(s.Nav,{id:"nav-primary-simple",theme:"dark"},r.createElement(s.NavList,{id:"nav-list-simple"},b.map((function(e,t){return e.label&&(e.routes?(n=e,a=t,r.createElement(s.NavExpandable,{key:"".concat(n.label,"-").concat(a),id:"".concat(n.label,"-").concat(a),title:n.label,isActive:n.routes.some((function(e){return e.path===p.pathname}))},n.routes.map((function(e,t){return e.label&&_(e,t)})))):_(e,t));var n,a})))),E=r.createElement(s.PageSidebar,{theme:"dark",nav:g,isNavOpen:c?f:a}),h="primary-app-container",y=r.createElement(s.SkipToContent,{onClick:function(e){e.preventDefault();var t=document.getElementById(h);t&&t.focus()},href:"#".concat(h)},"Skip to Content");return r.createElement(s.Page,{mainContainerId:h,header:v,sidebar:E,onPageResize:function(e){l(e.mobileView)},skipToContent:y},t)},x=n(78800),D=n(45434),B=n.n(D),L=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return T?[3,2]:[4,U()];case 1:e.sent(),e.label=2;case 2:return[2,T]}}))}))},U=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(T=B()())?[4,T.init({onLoad:"login-required"})]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return e.sent(),T=void 0,console.warn("Auth: Unable to initialize keycloak. Client side will not be configured to use authentication"),[3,4];case 4:return[2]}}))}))},O=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==T?void 0:T.updateToken(50)];case 1:return e.sent(),(null==T?void 0:T.token)?[2,T.token]:(console.error("No keycloak token available"),[2,"foo"])}}))}))},F=function(){return(0,c.__awaiter)(void 0,void 0,Promise,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,null==T?void 0:T.updateToken(50)];case 1:return e.sent(),(null==T?void 0:T.tokenParsed)?[2,T.tokenParsed]:(console.error("No keycloak token available"),[2,{}])}}))}))},M=a().createContext({keycloak:void 0}),V=function(e){var t={srs:{getToken:O},getUsername:function(){return F().then((function(e){return e.username}))},isOrgAdmin:function(){return F().then((function(e){return e.is_org_admin}))}};return a().createElement(_.AuthContext.Provider,{value:t},e.children)};const G=function(){var e=a().useState(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){(0,c.__awaiter)(void 0,void 0,void 0,(function(){return(0,c.__generator)(this,(function(e){switch(e.label){case 0:return[4,L()];case 1:return N=e.sent(),n(!0),[2]}}))}))}),[]),t?a().createElement(_.ConfigContext.Provider,{value:{srs:{apiBasePath:__BASE_PATH__}}},a().createElement(_.BasenameContext.Provider,{value:{getBasename:function(){return""}}},a().createElement(l.I18nextProvider,{i18n:x.Z},a().createElement(E.uZ,null,a().createElement(M.Provider,{value:{keycloak:N,profile:null==N?void 0:N.profile}},a().createElement(V,null,a().createElement(u.BrowserRouter,null,a().createElement(a().Suspense,{fallback:a().createElement(E.yR,null)},a().createElement(E.tV,null,a().createElement(E.OU,null,a().createElement(E.bN,null,a().createElement(I,null,a().createElement(P,null))))))))))))):a().createElement(E.yR,null)};i().render(a().createElement(G,null),document.getElementById("root"))},78800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(32281),a=n.n(r),o=n(69020),i=n(16486),c=n.n(i),u=n(73337),l=n.n(u),s=n(32578),d=n.n(s),f=n(86369),m=n.n(f),v=(n(76831),a().createInstance()),p="true"===new URLSearchParams(window.location.search).get("pseudolocalization");v.use(new(d())({enabled:p,wrapped:!0})).use(l()).use(c()).use(o.initReactI18next).init({backend:{loadPath:"".concat(n.p,"locales/{{lng}}/{{ns}}.json")},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,r){return r=r||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?m()(e).fromNow(!0===r.omitSuffix):m()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,n){}},(function(){m().locale(a().language)})),v.on("languageChanged",(function(e){m().locale(e)}));const _=v}}]);
//# sourceMappingURL=623.4013d422.js.map