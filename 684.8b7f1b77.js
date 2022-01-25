/*! For license information please see 684.8b7f1b77.js.LICENSE.txt */
(self.webpackChunksrs_ui=self.webpackChunksrs_ui||[]).push([[684,655,230,512],{35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(70655),a=r.__importStar(n(75418));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:c=0,width:l,height:s,svgPath:u}){var f;return f=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:o,color:i,title:f,noVerticalAlign:p}=e,m=r.__rest(e,["size","color","title","noVerticalAlign"]),d=Boolean(f),y=t.getSize(o),h=-.125*Number.parseFloat(y),_=p?null:{verticalAlign:`${h}em`},v=[n,c,l,s].join(" ");return a.createElement("svg",Object.assign({style:_,fill:i,height:y,width:y,viewBox:v,"aria-labelledby":d?this.id:null,"aria-hidden":!d||null,role:"img"},m),d&&a.createElement("title",{id:this.id},f),a.createElement("path",{d:u}))}},f.displayName=e,f.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},f}},5634:(e,t,n)=>{"use strict";t.Ws={name:"ArrowRightIcon",height:512,width:448,svgPath:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",yOffset:0,xOffset:0},t.LZ=n(35183).createIcon(t.Ws),t.ZP=t.LZ},2112:(e,t,n)=>{"use strict";t.MS={name:"WrenchIcon",height:512,width:512,svgPath:"M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z",yOffset:0,xOffset:0},t.R0=n(35183).createIcon(t.MS),t.R0},76831:function(e,t,n){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return n.default.locale(r,null,!0),r}(n(86369))},59786:(e,t,n)=>{"use strict";n.d(t,{u:()=>u});var r=n(75418),a=n.n(r),o=n(98068),i=n(69020),c=n(84669),l=n(2112),s=n(5634),u=function(e){var t=e.topicName,n=e.basename,r=(0,i.useTranslation)().t;return a().createElement(c.EmptyState,{className:"pf-u-pt-2xl pf-u-pt-3xl-on-md"},a().createElement(c.EmptyStateIcon,{icon:l.R0}),a().createElement(c.Title,{headingLevel:"h2",size:"lg"},r("srs.empty_state_title")),a().createElement(c.EmptyStateBody,null,r("srs.empty_state_body")),a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(c.ClipboardCopy,{isReadOnly:!0,hoverTip:"Copy",clickTip:"Copied",className:"pf-u-w-25"},t+"-value")),a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(c.ClipboardCopy,{isReadOnly:!0,hoverTip:"Copy",clickTip:"Copied",className:"pf-u-w-25"},t+"-key")),a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(o.Link,{to:n},r("srs.go_to_service_registry_instance_helper_text")," ",a().createElement(s.LZ,null))))}},55623:(e,t,n)=>{"use strict";n.d(t,{g:()=>l});var r=n(75418),a=n.n(r),o=n(84669),i=n(69020),c=n(76814),l=function(){var e=(0,i.useTranslation)().t;return a().createElement(o.EmptyState,{className:(0,c.css)("pf-u-pt-2xl pf-u-pt-3xl-on-md")},a().createElement(o.EmptyStateSecondaryActions,null,a().createElement(o.Bullseye,null,a().createElement(o.Spinner,{size:"xl"}))),a().createElement(o.EmptyStateSecondaryActions,null,a().createElement(o.TextContent,null,a().createElement(o.Text,{component:o.TextVariants.h1},e("srs.schema_loading")))))}},12773:(e,t,n)=>{"use strict";n.d(t,{G:()=>d});var r=n(70655),a=n(75418),o=n.n(a),i=n(98068),c=n(84669),l=n(69020),s=n(3577),u=n(9980),f=n(59786),p=n(55623),m=o().memo((function(e){var t=e.renderSchema,n=e.registry;return t&&n&&t(n)||o().createElement(o().Fragment,null)}));m.displayName="Schemas";var d=function(e){var t=e.renderSchema,n=e.basename,d=e.topicName,y=(0,l.useTranslation)().t,h=(0,u.useAuth)(),_=((0,u.useConfig)()||{srs:{apiBasePath:""}}).srs.apiBasePath,v=(0,a.useState)(void 0),b=v[0],w=v[1],g=(0,a.useState)(),S=g[0],E=g[1],O=(0,a.useState)(!1),x=O[0],P=O[1],Y=(0,a.useState)(),j=Y[0],T=Y[1];(0,a.useEffect)((function(){k()}),[]),(0,a.useEffect)((function(){var e=null==b?void 0:b.filter((function(e){return e.name===S}))[0];T(e)}),[S]);var k=function(){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var e;return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return[4,null==h?void 0:h.srs.getToken()];case 1:return e=t.sent(),[4,new s.RegistriesApi(new s.Configuration({accessToken:e,basePath:_})).getRegistries().then((function(e){var t=null==e?void 0:e.data;w(null==t?void 0:t.items)})).catch((function(e){}))];case 2:return t.sent(),[2]}}))}))};return void 0===b?o().createElement(p.g,null):(null==b?void 0:b.length)?o().createElement(c.Stack,{hasGutter:!0},o().createElement(c.StackItem,null,o().createElement(c.Card,null,o().createElement(c.CardTitle,{component:"h2"},y("srs.service_registry_instance")),o().createElement(c.CardBody,null,o().createElement(c.Grid,{hasGutter:!0,rowSpan:2},o().createElement(c.GridItem,null," ",o().createElement(c.Select,{id:"registry-mapping-select",variant:c.SelectVariant.typeahead,typeAheadAriaLabel:y("srs.select_instance"),placeholderText:y("srs.select_instance"),onToggle:function(e){P(e)},onSelect:function(e,t){null==e||e.preventDefault(),E(t),P(!1)},selections:S,isOpen:x,width:600,onClear:function(){E(void 0)}},null==b?void 0:b.map((function(e){return o().createElement(c.SelectOption,{key:e.id,value:e.name})})))),o().createElement(c.GridItem,null,o().createElement(i.Link,{to:n},y("srs.create_service_registry_helper_text"))))))),o().createElement(c.StackItem,null,o().createElement(m,{renderSchema:t,registry:j}))):o().createElement(f.u,{topicName:d,basename:n})}},58684:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(75418),a=n.n(r),o=n(69020),i=n(12773),c=n(78800);const l=function(e){var t=e.renderSchema,n=e.basename,r=e.topicName;return a().createElement(o.I18nextProvider,{i18n:c.Z},a().createElement(i.G,{renderSchema:t,basename:n,topicName:r}))}},78800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(69078),a=n.n(r),o=n(69020),i=n(32143),c=n.n(i),l=n(27592),s=n.n(l),u=n(32578),f=n.n(u),p=n(86369),m=n.n(p),d=(n(76831),a().createInstance()),y="true"===new URLSearchParams(window.location.search).get("pseudolocalization");d.use(new(f())({enabled:y,wrapped:!0})).use(s()).use(c()).use(o.initReactI18next).init({backend:{loadPath:"".concat(n.p,"locales/{{lng}}/{{ns}}.json")},fallbackLng:"en",load:"all",debug:!1,detection:{caches:[]},contextSeparator:"~",ns:["public"],defaultNS:"public",nsSeparator:":",keySeparator:".",postProcess:["pseudo"],interpolation:{format:function(e,t,n,r){return r=r||{},"number"===t?new Intl.NumberFormat(n).format(e):e instanceof Date?"fromNow"===t?m()(e).fromNow(!0===r.omitSuffix):m()(e).format(t):e},escapeValue:!1},react:{useSuspense:!0,wait:!0},saveMissing:!0,missingKeyHandler:function(e,t,n){}},(function(){m().locale(a().language)})),d.on("languageChanged",(function(e){m().locale(e)}));const h=d},70655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__extends:()=>a,__assign:()=>o,__rest:()=>i,__decorate:()=>c,__param:()=>l,__metadata:()=>s,__awaiter:()=>u,__generator:()=>f,__createBinding:()=>p,__exportStar:()=>m,__values:()=>d,__read:()=>y,__spread:()=>h,__spreadArrays:()=>_,__spreadArray:()=>v,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>g,__asyncValues:()=>S,__makeTemplateObject:()=>E,__importStar:()=>x,__importDefault:()=>P,__classPrivateFieldGet:()=>Y,__classPrivateFieldSet:()=>j});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function c(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function l(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var p=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||p(t,e,n)}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)r[a]=o[i];return r}function v(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),o=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){a[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=a[e](t)).value instanceof b?Promise.resolve(n.value.v).then(l,s):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function l(e){c("next",e)}function s(e){c("throw",e)}function u(e,t){e(t),o.shift(),o.length&&c(o[0][0],o[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:a?a(t):t}:a}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=d(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,a,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&p(t,e,n);return O(t,e),t}function P(e){return e&&e.__esModule?e:{default:e}}function Y(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function j(e,t,n,r,a){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?a.call(e,n):a?a.value=n:t.set(e,n),n}}}]);
//# sourceMappingURL=684.8b7f1b77.js.map