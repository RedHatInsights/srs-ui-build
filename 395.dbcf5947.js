(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[395],{7395:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{I18nContext:()=>w,I18nextProvider:()=>oe,Trans:()=>Y,Translation:()=>re,composeInitialProps:()=>I,date:()=>ue,getDefaults:()=>E,getI18n:()=>k,getInitialProps:()=>D,initReactI18next:()=>N,number:()=>fe,plural:()=>de,select:()=>pe,selectOrdinal:()=>ye,setDefaults:()=>P,setI18n:()=>x,time:()=>le,useSSR:()=>ie,useTranslation:()=>J,withSSR:()=>se,withTranslation:()=>ne});var a=t(5418),c=t.n(a),s=t(1739),u=t.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function f(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(u()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,y=Object.create(null);function g(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(g,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}const m={parse:function(e,n){n||(n={}),n.components||(n.components=y);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),y=s+c.length,g=e.charAt(y);if(p){var m=f(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=f(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!g||"<"===g||t.children.push({type:"text",content:e.slice(y,e.indexOf("<",y))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==g&&g)){u=-1===i?r:o[i].children;var h=e.indexOf("<",y),b=e.slice(y,-1===h?void 0:h);d.test(b)&&(b=" "),(h>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+g("",n)}),"")}};function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O,j={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},w=c().createContext();function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j=v(v({},j),e)}function E(){return j}var S=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t,r;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&h(n.prototype,t),r&&h(n,r),e}();function x(e){O=e}function k(){return O}var N={type:"3rdParty",init:function(e){P(e.options.react),x(e)}};function I(e){return function(n){return new Promise((function(t){var r=D();e.getInitialProps?e.getInitialProps(n).then((function(e){t(v(v({},e),r))})):t(r)}))}}function D(){var e=k(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function R(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var C={};function A(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&C[n[0]]||("string"==typeof n[0]&&(C[n[0]]=new Date),R.apply(void 0,n))}function T(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function z(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return A("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function L(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var B=["format"],U=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function W(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function F(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function H(e){return Array.isArray(e)?e:[e]}function M(e,n){if(!e)return"";var t="",i=H(e),a=n.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"==typeof e)t+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=M(l,n);t+="<".concat(i,">").concat(f,"</").concat(i,">")}else t+="<".concat(i,"></").concat(i,">")}else if(null===e)R("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===o(e)){var p=e.format,d=r(e,B),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];t+="{{".concat(g,"}}")}else R("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else R("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function $(e,n,t,r,i){if(""===n)return[];var a=r.transKeepBasicHtmlNodesFor||[],s=n&&new RegExp(a.join("|")).test(n);if(!e&&!s)return[n];var u={};!function e(n){H(n).forEach((function(n){"string"!=typeof n&&(W(n)?e(F(n)):"object"!==o(n)||c().isValidElement(n)||Object.assign(u,n))}))}(e);var l=m.parse("<0>".concat(n,"</0>")),f=K(K({},u),i);function p(e,n,t){var r=F(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,n,t,r,o){e.dummy&&(e.children=n),t.push(c().cloneElement(e,K(K({},e.props),{},{key:r}),o?void 0:n))}function y(n,i,u){var l=H(n);return H(i).reduce((function(n,i,g){var m,h,b,v=i.children&&i.children[0]&&i.children[0].content&&t.services.interpolator.interpolate(i.children[0].content,f,t.language);if("tag"===i.type){var O=l[parseInt(i.name,10)];!O&&1===u.length&&u[0][i.name]&&(O=u[0][i.name]),O||(O={});var j=0!==Object.keys(i.attrs).length?(m={props:i.attrs},(b=K({},h=O)).props=Object.assign(m.props,h.props),b):O,w=c().isValidElement(j),P=w&&W(i,!0)&&!i.voidElement,E=s&&"object"===o(j)&&j.dummy&&!w,S="object"===o(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof j){var x=t.services.interpolator.interpolate(j,f,t.language);n.push(x)}else if(W(j)||P){d(j,p(j,i,u),n,g)}else if(E){var k=y(l,i.children,u);n.push(c().cloneElement(j,K(K({},j.props),{},{key:g}),k))}else if(Number.isNaN(parseFloat(i.name))){if(S)d(j,p(j,i,u),n,g,i.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(i.name)>-1)if(i.voidElement)n.push(c().createElement(i.name,{key:"".concat(i.name,"-").concat(g)}));else{var N=y(l,i.children,u);n.push(c().createElement(i.name,{key:"".concat(i.name,"-").concat(g)},N))}else if(i.voidElement)n.push("<".concat(i.name," />"));else{var I=y(l,i.children,u);n.push("<".concat(i.name,">").concat(I,"</").concat(i.name,">"))}}else if("object"!==o(j)||w)1===i.children.length&&v?n.push(c().cloneElement(j,K(K({},j.props),{},{key:g}),v)):n.push(c().cloneElement(j,K(K({},j.props),{},{key:g})));else{var D=i.children[0]?v:null;D&&n.push(D)}}else if("text"===i.type){var R=r.transWrapTextNodes,C=t.services.interpolator.interpolate(i.content,f,t.language);R?n.push(c().createElement(R,{key:"".concat(i.name,"-").concat(g)},C)):n.push(C)}return n}),[])}return F(y([{dummy:!0,children:e}],l,H(e||[]))[0])}function Y(e){var n=e.children,t=e.count,o=e.parent,i=e.i18nKey,s=e.tOptions,u=void 0===s?{}:s,l=e.values,f=e.defaults,p=e.components,d=e.ns,y=e.i18n,g=e.t,m=r(e,U),h=(0,a.useContext)(w)||{},b=h.i18n,v=h.defaultNS,O=y||b||k();if(!O)return A("You will need to pass in an i18next instance by using i18nextReactModule"),n;var j=g||O.t.bind(O)||function(e){return e},P=K(K({},E()),O.options&&O.options.react),S=d||j.ns||v||O.options&&O.options.defaultNS;S="string"==typeof S?[S]:S||["translation"];var x=f||M(n,P)||P.transEmptyNodeValue||i,N=P.hashTransKey,I=i||(N?N(x):x),D=l?u.interpolation:{interpolation:K(K({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},R=K(K(K(K({},u),{},{count:t},l),D),{},{defaultValue:x,ns:S}),C=$(p||n,I?j(I,R):x,O,P,R),T=void 0!==o?o:P.defaultTransParent;return T?c().createElement(T,m,C):C}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(w)||{},o=r.i18n,i=r.defaultNS,c=t||o||k();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new S),!c){A("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&A("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=G(G(G({},E()),c.options.react),n),f=l.useSuspense,p=e||i||c.options&&c.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(p);var d=(c.isInitialized||c.initializedStoreOnce)&&p.every((function(e){return z(e,c,l)}));function y(){return c.getFixedT(null,"fallback"===l.nsMode?p:p[0])}var g=(0,a.useState)(y),m=Z(g,2),h=m[0],b=m[1],v=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){v.current&&b(y)}return v.current=!0,d||f||T(c,p,(function(){v.current&&b(y)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){v.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,p.join()]);var O=(0,a.useRef)(!0);(0,a.useEffect)((function(){v.current&&!O.current&&b(y),O.current=!1}),[c]);var j=[h,c,d];if(j.t=h,j.i18n=c,j.ready=d,d)return j;if(!d&&!f)return j;throw new Promise((function(e){T(c,p,(function(){e()}))}))}var Q=["forwardedRef"];function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ne(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function o(o){var i=o.forwardedRef,a=r(o,Q),s=Z(J(e,a),3),u=s[0],l=s[1],f=s[2],p=ee(ee({},a),{},{t:u,i18n:l,tReady:f});return n.withRef&&i?p.ref=i:!n.withRef&&i&&(p.forwardedRef=i),c().createElement(t,p)}o.displayName="withI18nextTranslation(".concat(L(t),")"),o.WrappedComponent=t;return n.withRef?c().forwardRef((function(e,n){return c().createElement(o,Object.assign({},e,{forwardedRef:n}))})):o}}var te=["ns","children"];function re(e){var n=e.ns,t=e.children,o=Z(J(n,r(e,te)),3),i=o[0],a=o[1],c=o[2];return t(i,{i18n:a,lng:a.language},c)}function oe(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,a.createElement)(w.Provider,{value:o},r)}function ie(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,o=(0,a.useContext)(w)||{},i=o.i18n,c=r||i||k();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),n&&!c.initializedLanguageOnce&&(c.changeLanguage(n),c.initializedLanguageOnce=!0))}var ae=["initialI18nStore","initialLanguage"];function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(){return function(e){function n(n){var t=n.initialI18nStore,o=n.initialLanguage,a=r(n,ae);return ie(t,o),c().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},a))}return n.getInitialProps=I(e),n.displayName="withI18nextSSR(".concat(L(e),")"),n.WrappedComponent=e,n}}var ue=function(){return""},le=function(){return""},fe=function(){return""},pe=function(){return""},de=function(){return""},ye=function(){return""}},1739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=395.dbcf5947.js.map