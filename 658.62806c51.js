"use strict";(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[658],{1495:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(75418),a=n.n(r),i=n(12561),s=n(70655),o=n(98068),c=n(84669),d=n(47483),u=n(9980),l=n(18271),f=n(33494),m=n(31151),g=function(e){var t=e.render,n=e.breadcrumbId,g=(0,i.useTranslation)().t,v=(0,u.useAuth)(),E=(0,u.useConfig)().srs.apiBasePath,b=(0,o.useParams)().tenantId,h=(0,f.QK)().showModal,w=((0,m.x)()||{}).renderDownloadArtifacts,P=(0,r.useState)(!1),I=P[0],R=P[1],_=(0,r.useState)(void 0),y=_[0],k=_[1],p=(0,r.useState)(!1),D=p[0],S=p[1];(0,r.useEffect)((function(){(0,s.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,null==v?void 0:v.srs.getToken()];case 1:return e=n.sent(),S(!0),t=new d.RegistriesApi(new d.Configuration({accessToken:e,basePath:E})),e&&b?[4,t.getRegistry(b).then((function(e){k(null==e?void 0:e.data),S(!1)})).catch((function(e){S(!1)}))]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}),[]);return D?a().createElement(c.PageSection,{variant:c.PageSectionVariants.light,padding:{default:"noPadding"}},a().createElement(f.yR,null)):a().createElement(l.OP,{isExpanded:I,isLoading:void 0===y,onClose:function(){R(!1)},registry:y},a().createElement(l.mt,{onConnectToRegistry:function(){R(!0)},onDeleteRegistry:function(e){var t=(e||{}).status;h(f.Ny.DELETE_SERVICE_REGISTRY,{shouldRedirect:!0,serviceRegistryStatus:t,selectedItemData:e,title:"".concat(g("common.delete_service_registry_title"),"?"),confirmButtonProps:{label:g("common.delete")},renderDownloadArtifacts:w})},breadcrumbId:n,serviceRegistryDetails:y}),t&&t(y))},v=n(78800);const E=function(e){var t=e.render,n=e.breadcrumbId,r=e.tokenEndPointUrl,s=e.artifactId,o=e.renderDownloadArtifacts;return a().createElement(i.I18nextProvider,{i18n:v.Z},a().createElement(f.OU,null,a().createElement(m.w.Provider,{value:{tokenEndPointUrl:r,artifactId:s,renderDownloadArtifacts:o}},a().createElement(g,{render:t,breadcrumbId:n}))))}}}]);
//# sourceMappingURL=658.62806c51.js.map