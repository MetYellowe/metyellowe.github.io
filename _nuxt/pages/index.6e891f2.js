(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return f}));var r=n(353),o=n(0),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),v=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},370:function(t,e,n){"use strict";n(11),n(10),n(56),n(29),n(30);var r=n(2),o=(n(42),n(352),n(51),n(5),n(3),n(9),n(19),n(225),n(1)),c=n(70),l=n(0);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=d.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),k=d.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(k)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var v in n)l+=String(n[v]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var r=n[t],o=y(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},376:function(t,e,n){var content=n(377);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("63c9496b",content,!0,{sourceMap:!1})},377:function(t,e,n){(e=n(13)(!1)).push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=e},380:function(t,e,n){"use strict";n(11),n(10);var r=n(2),o=(n(42),n(352),n(51),n(5),n(3),n(9),n(29),n(30),n(225),n(1)),c=n(70),l=n(0);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return d.reduce((function(n,r){return n[t+Object(l.x)(r)]=e(),n}),{})}var k=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:k}})),y=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:O}})),x={align:Object.keys(_),justify:Object.keys(w),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k}},_),{},{justify:{type:String,default:null,validator:y}},w),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var v in n)l+=String(n[v]);var f=$.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},425:function(t,e,n){"use strict";n(29),n(30);var r=n(2),o=(n(19),n(376),n(60)),c=n(25),l=n(27),v=n(38),f=n(68),d=n(6),h=n(0),m=n(8);e.a=Object(d.a)(o.a,c.a,v.a,Object(f.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(h.f)(n+footer+r),paddingLeft:this.app?Object(h.f)(o):void 0,paddingRight:this.app?Object(h.f)(c):void 0,paddingTop:Object(h.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(h.n)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(h.n)(this)])},genWrapper:function(){var data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},436:function(t,e,n){"use strict";n.r(e);var r={middleware:["auth","management"],data:function(t){var e=t.$auth;return{info:e.$storage.getUniversal("metaData").userMetaData.info,img:e.$storage.getUniversal("metaData").userMetaData.cloudData,snackbar:!1,message:"",email:e.$storage.getUniversal("user").email}},computed:{username:function(t){return t.$auth.$storage.getUniversal("metaData").appMetaData.username.toUpperCase()}},mounted:function(){var t=this.$route.query.message;t&&"leftChat"===t&&(this.message="You left the Yellowe Chat."),this.snackbar=!!this.message}},o=n(43),c=n(48),l=n.n(c),v=n(179),f=n(353),d=n(351),h=n(370),m=n(363),k=n(380),_=n(425),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-container",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{color:"#385F73",dark:""}},[n("v-snackbar",{attrs:{timeout:6e3,top:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v("\n                        Close\n                    ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n                "+t._s(t.message)+"\n                ")]),t._v(" "),n("v-card-title",{staticClass:"headline"},[t._v("\n              "+t._s(t.username)+"\n            ")]),t._v(" "),n("v-card-subtitle",{directives:[{name:"show",rawName:"v-show",value:!t.$auth.loggedIn,expression:"!$auth.loggedIn"}]},[t._v("Hello, let's go to Log in!")]),t._v(" "),n("v-card-subtitle",{directives:[{name:"show",rawName:"v-show",value:t.$auth.loggedIn,expression:"$auth.loggedIn"}]},[t._v("\n                You are on the right track. Now, click button\n                "),n("v-btn",[n("nuxt-link",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{to:"/roomChoose"}},[t._v("\n                          In Chat\n                      ")])],1),t._v("\n                and go to fun!\n            ")],1),t._v(" "),n("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:t.$auth.loggedIn,expression:"$auth.loggedIn"}]},[n("v-card-title",[t._v(t._s(t.info?"Or let's go to Profile":"Or first"))]),t._v(" "),n("v-btn",[n("nuxt-link",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{to:"/profile"}},[t._v("\n                    "+t._s(t.info||0!=t.img?"Your Profile":"Create your profile")+"\n                  ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:f.a,VCardActions:d.a,VCardSubtitle:d.b,VCardTitle:d.d,VCol:h.a,VContainer:m.a,VRow:k.a,VSnackbar:_.a})}}]);