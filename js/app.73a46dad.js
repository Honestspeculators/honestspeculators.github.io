(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"034f":function(t,e,i){"use strict";i("85ec")},"0670":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=s.__importStar(i("bb71"));i("bf40"),a.default.use(n.default,{components:{VApp:n.VApp,VAppBar:n.VAppBar,VToolbarTitle:n.VToolbarTitle,VSpacer:n.VSpacer,VBtn:n.VBtn,VIcon:n.VIcon,VMenu:n.VMenu,VList:n.VList,VListItem:n.VListItem,VListItemTitle:n.VListItemTitle,VFlex:n.VFlex,VLayout:n.VLayout,VSnackbar:n.VSnackbar,VTextField:n.VTextField,VTextarea:n.VTextarea,VInput:n.VInput,VContainer:n.VContainer,VStepper:n.VStepper,VStepperStep:n.VStepperStep,VStepperContent:n.VStepperContent,VCard:n.VCard,VCardTitle:n.VCardTitle,VCardText:n.VCardText,VDialog:n.VDialog,VProgressLinear:n.VProgressLinear,VSlider:n.VSlider,VOtpInput:n.VOtpInput,VFooter:n.VFooter,VTimePicker:n.VTimePicker,VTimePickerClock:n.VTimePickerClock,VTimePickerTitle:n.VTimePickerTitle,VDivider:n.VDivider,VImg:n.VImg,VCol:n.VCol,VRow:n.VRow,VForm:n.VForm,VSkeletonLoader:n.VSkeletonLoader,VMain:n.VMain}}),e.default=new n.default({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#00349B"}}}})},"3d48":function(t,e,i){"use strict";i.r(e);var s=i("7402"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"3dfd":function(t,e,i){"use strict";i.r(e);var s=i("c111"),a=i("6f68");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("034f");var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},4720:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=s.__importDefault(i("2fe1"));let r=class extends a.default{};r=s.__decorate([n.default],r),e.default=r},"5b65":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=i("fe0b"),r=s.__importDefault(i("2fe1"));let o=class extends a.default{created(){document.title=n.i18n.t("title")}get metaInfo(){return{title:n.i18n.t("title")}}};o=s.__decorate([r.default({})],o),e.default=o},"5ced":function(t,e,i){},"6f68":function(t,e,i){"use strict";i.r(e);var s=i("5b65"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"72aa":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.messages=void 0,e.messages={ru:{title:"Бронирование парковки | Честные спекулянты",notFound:"Страница не найдена",header:"Бронирование парковки",disclaimer:"Сайт является прототипом, в этих окнах можно вписать любые символы",description:"Включите геопозицию, и мы покажем вам ближайшие парковочные места",stepper:{h1:"Выберите место парковки, отмеченное красной меткой",d1:"",h2:"Укажите время стоянки",d2:"Тарифы могут отличаться для разных паркингов",h2T:"Введите номер талона",d2T:"Вы его получили сразу после оплаты",h3:"Оплатите стоянку",d3:"Apple Pay и Google Pay также поддерживаются",h4:"Оплата прошла успешно",d4:"Чек и номер заказа будут доступны по этой ссылке"},moreTime:"Продлить время стоянки",booking:"Забронировать стоянку",dialog2:"Загружаем информацию о загруженности и о тарифах..."},en:{title:"Frontend template",notFound:"Page not found"}}},7402:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=s.__importDefault(i("2fe1")),r=i("4bb5"),o=s.__importStar(i("755e")),l=i("755e"),c=r.namespace("AppStore"),p=r.namespace("SnackbarStore");a.default.use(o,{load:{key:"AIzaSyAsz01tpf6457QfiOR9f7YLslf1noHFnwE",v:"3.47"},installComponents:!1}),a.default.component("google-map",o.Map),a.default.component("gmap-info-window",o.InfoWindow),a.default.component("gmap-marker",o.Marker);let d=class extends a.default{constructor(){super(...arguments),this.slider_price=300,this.display_price=360,this.slider_time=3,this.time="12:20",this.maxSteps=12,this.interval=!1,this.isTimePicker=!1,this.form=!1,this.attrs={class:"pa-0",boilerplate:!1,elevation:0},this.nameRules=[t=>!!t||"Обязательное поле"],this.emailRules=[t=>!!t||"Обязательное поле",t=>/.+@.+/.test(t)||"E-mail введен некорректно"],this.stepper=1,this.transition2secondDialog=!1,this.transition2secondTimeDialog=!1,this.transition2fourthDialog=!1,this.colorTransition2fourth=!1,this.otp="123456",this.isLoadingOTP=!1,this.mapCenter={lat:59.95,lng:30.3},this.mapZoom=12,this.infoOptions={content:"",pixelOffset:{width:0,height:-35}},this.infoOptionsM={content:""},this.infoWindowPos=null,this.infoWinOpenMine=!1,this.infoWinOpen=!1,this.currentMidx=null,this.currentInfo=void 0,this.isBooking=!0,this.isInfoWindowOpened=!1,this.rawMarkers=[{lat:59.917173,lng:30.349131,label:"Тюшина, 9/7"},{lat:59.9132451,lng:30.2810058,label:"Рижский, 46"},{lat:59.9223964,lng:30.3053673,label:"Большая Подьяческая, 24/63"},{lat:59.9697757,lng:30.3849397,label:"Кондратьевский проспект, 40 к10"},{lat:59.8534572,lng:30.2442293,label:"Стачек проспект, 172"}],this.markers=[{position:{lat:59.917173,lng:30.349131},infoText:"<button class='h' onclick=\"window.open()\">Тюшина, 9/7</button><br/><h6>Нажмите на адрес, чтобы построить маршрут</h6>"}]}ready(){this.display_price=this.slider_price?this.slider_price:0}get isMobile(){return window.innerWidth<600}get newTime(){return(parseInt(this.time.slice(0,2))+this.slider_time)%24+this.time.slice(2,5)}get google(){return l.gmapApi}closeInfoWindow(){this.isInfoWindowOpened=!1,console.log("closed")}toggleInfoWindow(t,e){this.infoWindowPos=t.position,this.infoOptions.content=t.infoText,this.isInfoWindowOpened=!0,this.currentMidx==e?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=e),this.$vuetify.goTo("#to2",{duration:500,offset:25,easing:"easeOutCubic"})}transition2second(t){if(this.isBooking=t,this.transition2secondDialog=t,this.transition2secondTimeDialog=!t,!t)return this.transition2secondDialog=!1,this.transition2secondTimeDialog=!1,this.stepper=2,this.isInfoWindowOpened=!1,this.otp="",void setTimeout(()=>this.$refs.otp.$refs.input[0].focus());let e=new Date;this.time=(1===e.getHours().toString().length?"0"+e.getHours():e.getHours().toString())+":"+(1===e.getMinutes().toString().length?"0"+e.getMinutes():e.getMinutes().toString()),setTimeout(()=>{this.transition2secondDialog=!1,this.transition2secondTimeDialog=!1,this.stepper=2,this.isInfoWindowOpened=!1},1500)}RandomNumString(){let t="";for(let e=0;e<6;e++)t+=Math.floor(10*Math.random()).toString();return t}transition2third(){this.stepper=3,this.isBooking&&setTimeout(()=>this.$refs.name.$refs.input.focus())}transition2fourth(){this.transition2fourthDialog=!0,this.otp=this.RandomNumString(),setTimeout(()=>{this.colorTransition2fourth=!0,setTimeout(()=>{this.transition2fourthDialog=!1,this.stepper=4},750)},750)}SliderChange(){this.slider_price=60*this.slider_time*2,this.number()}number(){clearInterval(this.interval),this.slider_price!=this.display_price&&(this.interval=window.setInterval(()=>{if(this.display_price!=this.slider_price){var t=(this.slider_price-this.display_price)/10;t=t>=0?Math.ceil(t):Math.floor(t),this.display_price=this.display_price+t}},20))}isActiveOTP(){return 6===this.otp.length}FinishedOTP(){this.isLoadingOTP=!0,setTimeout(()=>{this.isLoadingOTP=!1},1500)}mounted(){let t=[],e=/iPad|iPhone|iPod/.test(navigator.platform),i=/Android|Linux armv5tej|Linux armv6l|Linux armv7l|Linux armv8l/.test(navigator.platform);this.rawMarkers.forEach(s=>{let a=s.lat.toString()+","+s.lng.toString(),n="";if(e)n="maps://?q="+a;else if(i){let t=encodeURI(s.label);n="geo:0,0?q="+a+"("+t+")"}else n="https://www.google.co.in/maps?q="+a;t.push({position:{lat:s.lat,lng:s.lng},infoText:"<button class='h' onclick=\"window.open('"+n+"')\">"+s.label+"</button><br/><h6>Нажмите на адрес, чтобы построить маршрут</h6>"})}),this.markers=t}};s.__decorate([c.Mutation,s.__metadata("design:type",Function)],d.prototype,"setUser",void 0),s.__decorate([p.Mutation,s.__metadata("design:type",Function)],d.prototype,"setSnackbarError",void 0),d=s.__decorate([n.default({})],d),e.default=d},"7d61":function(t,e,i){t.exports=i.p+"img/applepay.313a7aaa.png"},"85ec":function(t,e,i){},9703:function(t,e,i){"use strict";i.r(e);var s=i("fde4"),a=i("ed6f");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},a4b0:function(t,e,i){t.exports=i.p+"img/gpay.146e612b.png"},b909:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=s.__importDefault(i("8c4f")),r=s.__importDefault(i("bb51")),o=s.__importDefault(i("9703"));a.default.use(n.default);const l=new n.default({mode:"history",routes:[{path:"/",name:"home",component:r.default},{path:"*",name:"notFound",component:o.default}]});e.default=l},bb51:function(t,e,i){"use strict";i.r(e);var s=i("fdf6"),a=i("3d48");for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("cccb");var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},c111:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",[i("router-view"),i("v-footer",{staticClass:"pt-4 pb-4",staticStyle:{"margin-top":"18vh"}},[i("v-layout",{staticStyle:{color:"#333"},attrs:{"align-center":"","justify-center":"",row:""}},[i("h6",{staticClass:"pr-1"},[t._v("Made with ")]),i("h6",{staticClass:"pr-1",staticStyle:{color:"red"}},[t._v(" ❤")]),i("h6",[t._v("by ")]),i("h6",[i("a",{staticClass:"pl-1",attrs:{href:"https://kniazevgeny.github.io"}},[t._v("kniazevgeny,")])]),i("h6",[i("a",{staticClass:"pl-1",attrs:{href:"https://github.com/Honestspeculators/Honestspeculators/tree/master"}},[t._v("open source")])])])],1)],1)],1)},a=[]},ca49:function(t,e,i){t.exports=i.p+"img/sberpay.25a1ae33.png"},cccb:function(t,e,i){"use strict";i("5ced")},cd49:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=s.__importDefault(i("3dfd")),r=s.__importDefault(i("b909")),o=i("fe0b"),l=s.__importDefault(i("0670"));a.default.config.productionTip=!0,new a.default({router:r.default,i18n:o.i18n,vuetify:l.default,render:t=>t(n.default)}).$mount("#app")},ed6f:function(t,e,i){"use strict";i.r(e);var s=i("4720"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},fde4:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-container pa-4"},[i("v-layout",{staticClass:"text-xs-center",attrs:{column:"","justify-center":"","align-center":""}},[i("v-flex",{attrs:{xs12:"",md10:""}},[i("div",{staticClass:"headline pb-4"},[i("span",[t._v(t._s(t.$t("notFound")))])])])],1)],1)},a=[]},fdf6:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-container pa-md-4 pt-xs-2 pl-xs-0 pr-xs-0",staticStyle:{padding:"0 !important"}},[s("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[s("v-container",{attrs:{"justify-left":""}},[s("h1",{staticClass:"h mt-md-12 pt-sm-2 pt-xs-2"},[t._v(t._s(t.$t("header")))]),s("h3",{staticClass:"t pt-8",staticStyle:{"font-weight":"600"}},[t._v(t._s(t.$t("description")))]),s("br"),s("h6",{staticClass:"t"},[t._v(t._s(t.$t("disclaimer")))]),s("v-stepper",{staticClass:"mt-4",attrs:{id:"to2",vertical:"",color:"primary"},model:{value:t.stepper,callback:function(e){t.stepper=e},expression:"stepper"}},[s("v-stepper-step",{attrs:{complete:t.stepper>1,step:"1"}},[t._v(t._s(t.$t("stepper.h1"))),s("small",[t._v(t._s(t.$t("stepper.d1")))])]),s("v-stepper-content",{staticStyle:{margin:"0",padding:"0 !important"},attrs:{id:"stepper1",step:"1"}},[s("v-card",{staticClass:"mb-12",attrs:{flat:"",color:"grey lighten-1",height:"70vh"}},[s("div",[t.google?s("google-map",{ref:"mapRef",staticStyle:{height:"70vh",width:"100vw","z-index":"1"},attrs:{id:"map",center:t.mapCenter,zoom:t.mapZoom}},[s("gmap-info-window",{attrs:{position:t.infoWindowPos,opened:t.infoWinOpen,options:t.infoOptions},on:{closeclick:function(e){t.infoWinOpen=!1,t.closeInfoWindow()}}}),t._l(t.markers,(function(e,i){return s("gmap-marker",{key:i,attrs:{position:t.google&&e.position,clickable:!0},on:{click:function(s){return t.toggleInfoWindow(e,i)}}})}))],2):t._e()],1)])],1),s("transition",{staticStyle:{"z-index":"10001"},attrs:{name:"slide-fade",mode:"in-out"}},[t.isInfoWindowOpened?s("v-layout",{staticStyle:{position:"absolute !important","margin-top":"-10vh","z-index":"100",width:"100%"},attrs:{"justify-center":"","align-center":"",column:t.isMobile}},[s("v-spacer"),s("v-btn",{staticClass:"ma-2 mt-0",staticStyle:{"z-index":"1"},attrs:{"x-large":!t.isMobile,loading:t.transition2secondTimeDialog,color:"white"},on:{click:function(e){return t.transition2second(!1)}}},[t._v(t._s(t.$t("moreTime")))]),s("v-btn",{staticClass:"ma-2 mt-0",attrs:{"x-large":"",color:"primary",loading:t.transition2secondDialog},on:{click:function(e){return t.transition2second(!0)}}},[t._v(t._s(t.$t("booking")))]),s("v-spacer")],1):t._e()],1),s("v-dialog",{staticClass:"mt-12",attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.transition2secondDialog,callback:function(e){t.transition2secondDialog=e},expression:"transition2secondDialog"}},[s("v-card",{attrs:{flat:"",color:"primary",dark:""}},[s("v-card-text",[s("h5",{staticClass:"pt-4 mb-2",staticStyle:{"line-height":"85%"}},[t._v(t._s(t.$t("dialog2")))]),s("v-progress-linear",{attrs:{indeterminate:"",color:"white"}})],1)],1)],1),s("v-stepper-step",{attrs:{complete:t.stepper>2,step:"2"}},[t._v(t._s(t.isBooking?t.$t("stepper.h2"):t.$t("stepper.h2T"))),s("small",[t._v(t._s(t.isBooking?t.$t("stepper.d2"):t.$t("stepper.d2T")))])]),t.isBooking?s("v-stepper-content",{staticClass:"pr-0",staticStyle:{margin:"0",padding:"0"},attrs:{step:"2"}},[s("v-card",{staticClass:"mb-12 pb-12 pa-md-8 pa-xs-2 pt-4 pb-2",attrs:{flat:"",height:"380px"}},[s("v-layout",{staticClass:"pt-3 pr-3",attrs:{column:t.isMobile}},[s("span",{staticClass:"t",staticStyle:{"min-width":"260px","align-self":"center","z-index":"1"}},[s("span",[t._v("Время прибытия (приблизительно)")]),s("br"),s("small",{staticClass:"t"},[t._v("Чтобы к вашему приезду точно было свободное место")])]),s("v-spacer",{attrs:{"v-if":t.isMobile}}),s("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"mt-3 mb-3",staticStyle:{"z-index":"0"},attrs:{outlined:"",color:"primary"},domProps:{textContent:t._s(t.time)}},"v-btn",a,!1),i))]}}],null,!1,667785052),model:{value:t.isTimePicker,callback:function(e){t.isTimePicker=e},expression:"isTimePicker"}},[s("v-card",[s("v-time-picker",{attrs:{format:"24hr","allowed-minutes":function(t){return t%15===0},"full-width":"",color:"primary"},on:{"click:minute":function(e){t.isTimePicker=!1}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1),s("v-divider",{staticClass:"mr-3",staticStyle:{"z-index":"1"}}),s("v-layout",{staticClass:"pt-6 pr-md-6",attrs:{column:t.isMobile}},[s("span",{staticClass:"t",style:t.isMobile?"min-width: 200px; align-self: baseline; z-index: 1":"min-width: 200px; align-self: center; z-index: 1"},[s("span",[t._v("Время парковки (часы)")]),s("br"),s("small",{staticClass:"t"},[t._v("Сдвиньте ползунок для регулировки")])]),s("v-container",{staticClass:"mt-4",staticStyle:{padding:"0"},attrs:{row:""}},[s("v-slider",{staticClass:"mt-8",attrs:{"thumb-label":"always",step:"1",max:t.maxSteps,min:1,ticks:"always","tick-size":"2",color:"primary"},on:{change:function(e){return t.SliderChange()}},model:{value:t.slider_time,callback:function(e){t.slider_time=e},expression:"slider_time"}}),s("v-btn",{staticStyle:{"align-self":"center"},attrs:{icon:"",color:"primary",disabled:24===t.maxSteps},on:{click:function(e){t.maxSteps=24}}},[s("v-icon",[t._v("mdi-plus")])],1)],1)],1),s("v-divider",{staticClass:"mr-3",staticStyle:{"z-index":"1"}}),s("v-layout",{staticClass:"mt-6"},[s("v-spacer"),s("span",{staticClass:"t",staticStyle:{"min-width":"100px","align-self":"center"}},[t._v("Итого")]),s("h3",{staticClass:"h pr-3",staticStyle:{"font-weight":"600","min-width":"170px","text-align":"right"}},[t._v(t._s(t.display_price)+" ₽, "+t._s(t.time)+"→"+t._s(t.newTime))])],1),s("v-layout",[s("v-btn",{staticClass:"ma-2 mt-3 ml-0",attrs:{outlined:"","x-large":""},on:{click:function(e){t.stepper=1}}},[t._v("Назад")]),s("v-spacer"),s("v-btn",{staticClass:"ma-2 mt-3 ml-0",attrs:{color:"primary","x-large":""},on:{click:t.transition2third}},[t._v("К оплате")])],1),s("br"),s("br")],1)],1):s("v-stepper-content",{staticClass:"mt-1",staticStyle:{margin:"0"},attrs:{step:"2"}},[s("v-card",{staticClass:"mb-12 pb-12 pa-md-8 pa-xs-2 pb-2",attrs:{id:"otp",flat:"",height:"380px"}},[s("v-layout",{staticClass:"pr-md-6",attrs:{column:t.isMobile}},[s("span",{staticClass:"t",style:t.isMobile?"min-width: 200px; align-self: baseline; z-index: 1":"min-width: 200px; align-self: center; z-index: 1"},[s("span",[t._v("Введите номер парковочного талона")])]),s("v-spacer",{attrs:{"v-if":t.isMobile}}),s("v-otp-input",{ref:"otp",staticStyle:{"max-width":"260px"},attrs:{id:"otp",length:"6",type:"number",disabled:t.isLoadingOTP,color:"primary"},on:{finish:function(e){return t.FinishedOTP()}},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}})],1),s("v-layout",{staticClass:"pt-6 pr-md-6",attrs:{column:t.isMobile}},[s("span",{staticClass:"t",style:t.isMobile?"min-width: 200px; align-self: baseline; z-index: 1":"min-width: 200px; align-self: center; z-index: 1"},[s("span",[t._v("На сколько продлить время парковки (часы)")])]),s("v-container",{staticClass:"mt-4",staticStyle:{padding:"0"},attrs:{row:""}},[s("v-slider",{staticClass:"mt-8",attrs:{"thumb-label":"always",step:"1",max:8,min:1,ticks:"always","tick-size":"2",color:"primary",disabled:!t.isActiveOTP()},on:{change:function(e){return t.SliderChange()}},model:{value:t.slider_time,callback:function(e){t.slider_time=e},expression:"slider_time"}},[s("v-icon",[t._v("mdi-plus")])],1)],1)],1),s("v-divider",{staticClass:"mr-3",staticStyle:{"z-index":"1"}}),s("v-layout",{staticClass:"mt-6"},[s("v-spacer"),s("span",{staticClass:"t",staticStyle:{"min-width":"100px","align-self":"center"}},[t._v("Итого")]),t.isActiveOTP()&&!t.isLoadingOTP?s("h3",{staticClass:"h pr-3",staticStyle:{"font-weight":"600","min-width":"170px","text-align":"right"}},[t._v(t._s(t.display_price)+" ₽, "+t._s(t.time)+"→"+t._s(t.newTime))]):s("v-skeleton-loader",t._b({staticClass:"pr-3",staticStyle:{"font-weight":"600","min-width":"170px","text-align":"right"},attrs:{type:"actions"}},"v-skeleton-loader",t.attrs,!1))],1),s("v-layout",[s("v-btn",{staticClass:"ma-2 mt-3 ml-0",attrs:{outlined:"","x-large":""},on:{click:function(e){t.stepper=1}}},[t._v("Назад")]),s("v-spacer"),s("v-btn",{staticClass:"ma-2 mt-3 ml-0",attrs:{disabled:!t.isActiveOTP(),loading:t.isLoadingOTP,"x-large":"",color:"primary"},on:{click:t.transition2third}},[t._v(t._s(t.isActiveOTP()&&!t.isLoadingOTP?"К оплате":"Далее"))])],1)],1)],1),s("v-stepper-step",{attrs:{complete:t.stepper>3,step:"3"}},[t._v(t._s(t.$t("stepper.h3"))),s("small",[t._v(t._s(t.$t("stepper.d3")))])]),s("v-stepper-content",{staticClass:"pr-0",staticStyle:{margin:"0"},attrs:{step:"3"}},[s("v-card",{staticClass:"mb-12 pb-12 pa-md-8 pa-xs-2 pt-4 pb-2",attrs:{flat:"",height:"400px"}},[t.isBooking?s("v-form",{model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[s("v-container",[s("v-row",[s("v-col",{staticClass:"pl-0 pt-0",attrs:{cols:"12",md:"4"}},[s("v-text-field",{ref:"name",attrs:{rules:t.nameRules,label:"Имя",required:""}})],1)],1),s("v-row",[s("v-col",{staticClass:"pl-0 pt-0 mt-0",attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{rules:t.nameRules,label:"E-mail",placeholder:"Пишите, что пожелаете",required:""}})],1)],1)],1)],1):t._e(),s("v-layout",{staticClass:"pb-3",style:t.isMobile?"":"max-width: 350px"},[s("h3",{staticClass:"h pr-3",staticStyle:{"font-weight":"600","min-width":"80px","text-align":"left"}},[t._v(t._s(t.time)+"→"+t._s(t.newTime))]),s("v-spacer"),s("h3",{staticClass:"h pr-3",staticStyle:{"font-weight":"600","min-width":"80px","text-align":"right"}},[t._v(t._s(t.display_price)+" ₽")])],1),s("v-container",{staticClass:"pl-0",style:t.form||!t.isBooking?"filter: none":"filter: grayscale(1)",attrs:{id:"pay"}},[s("v-btn",{staticClass:"pl-0",staticStyle:{width:"100%","max-width":"min(350px, 85vw)"},attrs:{icon:"",disabled:!t.form&&t.isBooking},on:{click:t.transition2fourth}},[s("v-img",{staticStyle:{width:"100%","max-width":"min(350px, 85vw)"},attrs:{src:i("ca49")}})],1),s("br"),s("v-btn",{staticClass:"mt-8 mt-md-12 pl-0",staticStyle:{width:"100%","max-width":"min(350px, 85vw)"},attrs:{icon:"",disabled:!t.form&&t.isBooking},on:{click:t.transition2fourth}},[s("v-img",{staticStyle:{width:"100%","max-width":"min(350px, 85vw)"},attrs:{src:i("a4b0")}})],1),s("br"),s("v-btn",{staticClass:"mt-8 mt-md-12 pl-0",staticStyle:{width:"100%","max-width":"min(350px, 85vw)"},attrs:{icon:"",disabled:!t.form&&t.isBooking},on:{click:t.transition2fourth}},[s("v-img",{staticStyle:{width:"100%","max-width":"min(350px, 85vw)"},attrs:{src:i("7d61")}})],1),s("br"),s("br"),s("small",[t._v("Нажимайте, не стесняйтесь")])],1)],1),s("v-layout",{staticClass:"pt-12"},[s("v-btn",{attrs:{outlined:""},on:{click:function(e){t.stepper=2}}},[t._v("Назад")]),s("v-spacer")],1),s("br"),s("br"),s("br")],1),s("v-dialog",{staticClass:"mt-12",attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.transition2fourthDialog,callback:function(e){t.transition2fourthDialog=e},expression:"transition2fourthDialog"}},[s("v-card",{staticStyle:{"transition-duration":"500ms",transition:"500ms ease-out"},attrs:{flat:"",color:t.colorTransition2fourth?"primary":"black",dark:""}},[s("v-card-text",[s("h5",{staticClass:"pt-4 mb-2",staticStyle:{"line-height":"85%"}},[t._v("Производится оплата...")]),s("v-progress-linear",{attrs:{indeterminate:"",color:"white"}})],1)],1)],1),s("v-stepper-step",{attrs:{color:"green",step:"4"}},[t._v(t._s(t.$t("stepper.h4"))),s("small",[t._v(t._s(t.$t("stepper.d4")))])]),s("v-stepper-content",{staticClass:"pr-0",staticStyle:{margin:"0"},attrs:{step:"4"}},[s("v-card",{staticClass:"mb-12 pb-12 pa-md-8 pa-xs-2 pt-4 pb-2",attrs:{flat:"",height:"200px"}},[s("h3",{staticClass:"h"},[t._v("Номер заказа")]),s("v-otp-input",{staticStyle:{"max-width":"260px"},attrs:{length:"6",type:"number",readonly:""},model:{value:t.otp,callback:function(e){t.otp=e},expression:"otp"}}),t.isBooking?s("h5",{staticClass:"t pt-2"},[t._v("Ждем вас к "+t._s(t.time)+". Время считается с момента приезда")]):s("h5",{staticClass:"t pt-2"},[t._v("Время стоянки успешно продлено до "+t._s(t.newTime))])],1)],1),s("br"),s("br"),s("br"),s("br")],1)],1)],1)],1)},a=[]},fe0b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.i18n=void 0;const s=i("9ab4"),a=s.__importDefault(i("2b0e")),n=s.__importDefault(i("a925")),r=i("72aa");function o(){return"ru"}a.default.use(n.default),e.i18n=new n.default({locale:o(),fallbackLocale:"en",messages:r.messages})}});
//# sourceMappingURL=app.73a46dad.js.map