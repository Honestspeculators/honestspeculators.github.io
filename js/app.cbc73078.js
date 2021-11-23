(function(t){function e(e){for(var n,i,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var u=a[s];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"05db":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=a("6fc5");let o=class extends r.VuexModule{constructor(){super(...arguments),this.message="",this.active=!1,this.color="success"}setSnackbar(t){Object.assign(this,t)}setActive(t){this.active=t}setSnackbarError(t){this.message=t,this.active=!0,this.color="error"}setSnackbarSuccess(t){this.message=t,this.active=!0,this.color="success"}hideSnackbar(){this.active=!1}};n.__decorate([r.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[o]),n.__metadata("design:returntype",void 0)],o.prototype,"setSnackbar",null),n.__decorate([r.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[Boolean]),n.__metadata("design:returntype",void 0)],o.prototype,"setActive",null),n.__decorate([r.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[String]),n.__metadata("design:returntype",void 0)],o.prototype,"setSnackbarError",null),n.__decorate([r.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[String]),n.__metadata("design:returntype",void 0)],o.prototype,"setSnackbarSuccess",null),n.__decorate([r.Mutation,n.__metadata("design:type",Function),n.__metadata("design:paramtypes",[]),n.__metadata("design:returntype",void 0)],o.prototype,"hideSnackbar",null),o=n.__decorate([r.Module({namespaced:!0,name:"SnackbarStore"})],o),e.default=o},"0613":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("4d97")),o=n.__importDefault(a("05db")),i=n.__importDefault(a("dd9d")),s=n.__importDefault(a("2b0e")),u=n.__importDefault(a("2f62"));s.default.use(u.default);const c=new u.default.Store({modules:{AppStore:r.default,SnackbarStore:o.default},plugins:[i.default]});e.default=c},"0670":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importStar(a("bb71"));a("bf40"),r.default.use(o.default,{components:{VApp:o.VApp,VAppBar:o.VAppBar,VToolbarTitle:o.VToolbarTitle,VSpacer:o.VSpacer,VBtn:o.VBtn,VIcon:o.VIcon,VMenu:o.VMenu,VList:o.VList,VListItem:o.VListItem,VListItemTitle:o.VListItemTitle,VFlex:o.VFlex,VLayout:o.VLayout,VSnackbar:o.VSnackbar,VTextField:o.VTextField,VTextarea:o.VTextarea,VInput:o.VInput,VContainer:o.VContainer,VSlider:o.VSlider,VStepper:o.VStepper,VStepperContent:o.VStepperContent,VStepperItems:o.VStepperItems,VStepperStep:o.VStepperStep,VCard:o.VCard,VMain:o.VMain}}),e.default=new o.default({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#00349b"}}}})},"1a12":function(t,e,a){},"22b2":function(t,e,a){"use strict";a.r(e);var n=a("4a53"),r=a("6a01");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"3d48":function(t,e,a){"use strict";a.r(e);var n=a("7402"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"3dfd":function(t,e,a){"use strict";a.r(e);var n=a("66c6"),r=a("6f68");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"458f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},"46cd":function(t,e,a){"use strict";a.r(e);var n=a("e5f4"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},4720:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("2fe1"));let i=class extends r.default{};i=n.__decorate([o.default],i),e.default=i},"4a53":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-snackbar",{attrs:{app:"",timeout:4e3,top:"",color:t.color,flat:""},model:{value:t.safeActive,callback:function(e){t.safeActive=e},expression:"safeActive"}},[a("span",[t._v(t._s(t.text))]),a("v-btn",{attrs:{color:"white",text:""},on:{click:t.hideSnackbar}},[t._v(t._s(t.$t("close")))])],1)],1)},r=[]},"4d97":function(t,e,a){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0});const r=a("9ab4"),o=a("458f"),i=a("6fc5");let s=class extends i.VuexModule{constructor(){super(...arguments),this.user=void 0,this.language=void 0,this.dark=!1}setUser(t){this.user=t}setLanguage(t){this.language=t}setDark(t){this.dark=t}};r.__decorate([i.Mutation,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",["function"===typeof(n="undefined"!==typeof o.User&&o.User)?n:Object]),r.__metadata("design:returntype",void 0)],s.prototype,"setUser",null),r.__decorate([i.Mutation,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],s.prototype,"setLanguage",null),r.__decorate([i.Mutation,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Boolean]),r.__metadata("design:returntype",void 0)],s.prototype,"setDark",null),s=r.__decorate([i.Module({namespaced:!0,name:"AppStore"})],s),e.default=s},"5b65":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("d178")),i=n.__importDefault(a("22b2")),s=n.__importDefault(a("d2d0")),u=a("fe0b"),c=n.__importDefault(a("2fe1")),l=a("4bb5"),d=l.namespace("AppStore"),p=l.namespace("SnackbarStore");let f=class extends r.default{get style(){return{"background-color":this.dark?"#303030":"#fafafa"}}created(){this.$vuetify.theme.dark=this.dark;const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",this.dark?"#303030":"#fafafa"),this.hideSnackbar(),document.title=u.i18n.t("title")}get metaInfo(){return{title:u.i18n.t("title")}}};n.__decorate([d.State,n.__metadata("design:type",Boolean)],f.prototype,"dark",void 0),n.__decorate([p.Mutation,n.__metadata("design:type",Function)],f.prototype,"hideSnackbar",void 0),f=n.__decorate([c.default({components:{Navbar:o.default,CookieLaw:s.default,Snackbar:i.default}})],f),e.default=f},"5ced":function(t,e,a){},"5dfc":function(t,e,a){"use strict";a("1a12")},"66c6":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{class:t.$store.state.dark?"grey darken-4":"grey lighten-4",attrs:{dark:t.$store.state.dark}},[a("cookie-law",{attrs:{theme:"blood-orange",buttonText:t.$t("cookieButton"),message:t.$t("cookieMessage")}}),a("Snackbar"),a("v-main",[a("router-view")],1)],1)},r=[]},6821:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[a("h1",{staticClass:"h"},[t._v("Hello there!")]),a("v-container",{attrs:{"justify-left":""}},[a("h3",{staticClass:"t"},[t._v("there'll be:")]),a("p",{staticClass:"t"},[t._v("sliders"),a("v-slider",{attrs:{"thumb-label":"always"},model:{value:t.slider,callback:function(e){t.slider=e},expression:"slider"}})],1),a("p",{staticClass:"t"},[t._v("steppers"),a("v-stepper",{attrs:{vertical:""},model:{value:t.stepper,callback:function(e){t.stepper=e},expression:"stepper"}},[a("v-stepper-step",{attrs:{complete:t.stepper>1,step:"1"}},[t._v("Select an app"),a("small",[t._v("Summarize if needed")])]),a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.stepper=2}}},[t._v("Continue")]),a("v-btn",{attrs:{text:""}},[t._v("Cancel")])],1),a("v-stepper-step",{attrs:{complete:t.stepper>2,step:"2"}},[t._v("Configure analytics for this app")]),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.stepper=3}}},[t._v("Continue")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.stepper=1}}},[t._v("Cancel")])],1),a("v-stepper-step",{attrs:{complete:t.stepper>3,step:"3"}},[t._v("Select an ad format and name ad unit")]),a("v-stepper-content",{attrs:{step:"3"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.stepper=4}}},[t._v("Continue")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.stepper=2}}},[t._v("Cancel")])],1),a("v-stepper-step",{attrs:{step:"4"}},[t._v("View setup instructions")]),a("v-stepper-content",{attrs:{step:"4"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.stepper=1}}},[t._v("Continue")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.stepper=3}}},[t._v("Cancel")])],1)],1)],1),a("p",[t._v("and "),a("a",{attrs:{href:"https://www.imdb.com/title/tt0469494/"}},[t._v("blood")])])])],1)],1)},r=[]},"6a01":function(t,e,a){"use strict";a.r(e);var n=a("cd00"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"6f68":function(t,e,a){"use strict";a.r(e);var n=a("5b65"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"72aa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.messages=void 0,e.messages={ru:{title:"Темплейт фронтенда",notFound:"Страница не найдена"},en:{title:"Frontend template",notFound:"Page not found"}}},7402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("2fe1")),i=a("4bb5"),s=i.namespace("AppStore"),u=i.namespace("SnackbarStore");let c=class extends r.default{constructor(){super(...arguments),this.slider=45,this.stepper=1}};n.__decorate([s.Mutation,n.__metadata("design:type",Function)],c.prototype,"setUser",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setSnackbarError",void 0),c=n.__decorate([o.default({})],c),e.default=c},9703:function(t,e,a){"use strict";a.r(e);var n=a("fde4"),r=a("ed6f");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},b909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("8c4f")),i=n.__importDefault(a("bb51")),s=n.__importDefault(a("9703")),u=n.__importDefault(a("0613"));r.default.use(o.default);const c=new o.default({mode:"history",routes:[{path:"/",name:"home",component:i.default},{path:"*",name:"notFound",component:s.default}]});c.beforeEach((t,e,a)=>{const n=t.matched.some(t=>t.meta.requiresAuth),r=u.default.state.AppStore.user;n&&!r?a("/"):"/"===t.path&&r?a({name:"cabinet",query:t.query}):a()}),e.default=c},bb51:function(t,e,a){"use strict";a.r(e);var n=a("6821"),r=a("3d48");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("cccb");var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},cccb:function(t,e,a){"use strict";a("5ced")},cd00:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("2fe1")),i=a("fe0b"),s=a("4bb5"),u=s.namespace("SnackbarStore");let c=class extends r.default{get safeActive(){return this.active}set safeActive(t){this.setActive(t)}get text(){const t=this.message;return"string"===typeof t?"Internal Server Error"===t?i.i18n.t("errors.internal"):i.i18n.t(this.message.toString()):t[i.i18n.locale]}};n.__decorate([u.State,n.__metadata("design:type",Boolean)],c.prototype,"active",void 0),n.__decorate([u.State,n.__metadata("design:type",String)],c.prototype,"color",void 0),n.__decorate([u.State,n.__metadata("design:type",String)],c.prototype,"message",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"hideSnackbar",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setActive",void 0),c=n.__decorate([o.default],c),e.default=c},cd49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("3dfd")),i=n.__importDefault(a("b909")),s=n.__importDefault(a("0613")),u=a("fe0b"),c=n.__importDefault(a("0670"));r.default.config.productionTip=!0,new r.default({router:i.default,store:s.default,i18n:u.i18n,vuetify:c.default,render:t=>t(o.default)}).$mount("#app")},d178:function(t,e,a){"use strict";a.r(e);var n=a("d556"),r=a("46cd");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("5dfc");var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},d556:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{flat:"",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",[t._v(t._s(t.$t("title")))])]),a("v-spacer"),a("v-btn",{attrs:{text:"",icon:"",color:"grey"},on:{click:t.toggleMode}},[a("v-icon",{attrs:{small:""}},[t._v("brightness_2")])],1),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{text:"",icon:"",color:"grey"}},n),[t._v(t._s(t.currentLocale.icon))])]}}])},[a("v-list",t._l(t.locales,(function(e){return a("v-list-item",{key:e.code,on:{click:function(a){return t.changeLanguage(e.code)}}},[a("v-list-item-title",[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1)},r=[]},dd9d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("0e44"));e.default=r.default({paths:["AppStore.user","AppStore.language","AppStore.dark"]})},e5f4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("2fe1")),i=a("fe0b"),s=a("4bb5"),u=s.namespace("AppStore");let c=class extends r.default{get locales(){return[{icon:"🇺🇸",code:"en"},{icon:"🇷🇺",code:"ru"}]}get currentLocale(){for(const t of this.locales)if(t.code===i.i18n.locale)return t}toggleMode(){this.setDark(!this.dark),this.$vuetify.theme.dark=this.dark}changeLanguage(t){i.i18n.locale=t,this.setLanguage(t),document.title=i.i18n.t("strippedTitle")}};n.__decorate([u.State,n.__metadata("design:type",Boolean)],c.prototype,"dark",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setDark",void 0),n.__decorate([u.Mutation,n.__metadata("design:type",Function)],c.prototype,"setLanguage",void 0),c=n.__decorate([o.default],c),e.default=c},ed6f:function(t,e,a){"use strict";a.r(e);var n=a("4720"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},fde4:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-container pa-4"},[a("v-layout",{staticClass:"text-xs-center",attrs:{column:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("div",{staticClass:"headline pb-4"},[a("span",[t._v(t._s(t.$t("notFound")))])])])],1)],1)},r=[]},fe0b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.i18n=void 0;const n=a("9ab4"),r=n.__importDefault(a("2b0e")),o=n.__importDefault(a("a925")),i=a("72aa"),s=n.__importDefault(a("0613"));function u(){if(s.default.state.AppStore.language)return s.default.state.AppStore.language;{const t=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2),e=["en","ru"];return e.indexOf(t)>-1?t:"en"}}r.default.use(o.default),e.i18n=new o.default({locale:u(),fallbackLocale:"en",messages:i.messages})}});
//# sourceMappingURL=app.cbc73078.js.map