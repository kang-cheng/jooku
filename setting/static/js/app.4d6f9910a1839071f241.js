webpackJsonp([1],{100:function(e,t){},101:function(e,t){},104:function(e,t,n){n(216);var a=n(17)(n(180),n(241),null,null);e.exports=a.exports},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),i=n.n(a);t.default={data:function(){return{promotion:"..."}},created:function(){var e=this;i.a.database().ref("promotion").once("value").then(function(t){e.promotion=t.val()||"pizza"})},methods:{updatedPromotion:function(e){var t=e.target.value;this.promotion=t,i.a.database().ref("promotion/").set(t)}}}},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(33),i=n.n(a),r=n(32),o=n.n(r),s=n(14),c=n.n(s);t.default={data:function(){return{prices:null}},created:function(){var e=this;c.a.database().ref("drinks").once("value").then(function(t){e.prices=o()({},t.val()||{orange:1,apple:1,lemonade:1.5,cola:1.5})})},methods:{onChange:function(e,t){var n=parseFloat(e.target.value);this.prices=o()({},this.prices,i()({},t,n)),c.a.database().ref("drinks/"+t).set(n)}}}},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(33),i=n.n(a),r=n(32),o=n.n(r),s=n(14),c=n.n(s);t.default={data:function(){return{prices:null}},created:function(){var e=this;c.a.database().ref("menu1").once("value").then(function(t){e.prices=o()({},t.val()||{sandwich:3,hotdog:4,burger:3.5,bigBurger:4.5})})},methods:{onChange:function(e,t){var n=parseFloat(e.target.value);this.prices=o()({},this.prices,i()({},t,n)),c.a.database().ref("menu1/"+t).set(n)}}}},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(33),i=n.n(a),r=n(32),o=n.n(r),s=n(14),c=n.n(s);t.default={data:function(){return{prices:null}},created:function(){var e=this;c.a.database().ref("menu2").once("value").then(function(t){e.prices=o()({},t.val()||{fries:1.2,steak:6.5,pizza:5,salad:1})})},methods:{onChange:function(e,t){var n=parseFloat(e.target.value);this.prices=o()({},this.prices,i()({},t,n)),c.a.database().ref("menu2/"+t).set(n)}}}},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{prices:null,msg:"",url:""}},created:function(){var e=new instaScan.Scanner({video:document.getElementById("preview")});e.addListener("scan",function(e){console.log(e)}),instaScan.Camera.getCameras().then(function(t){t.length>0?e.start(t[0]):console.error("No cameras found.")}).catch(function(e){console.error(e)})},methods:{onDecode:function(e){this.msg="Opened URL: \n"+e+".",this.url=e,document.getElementById("link").click()}}}},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(33),i=n.n(a),r=n(32),o=n.n(r),s=n(14),c=n.n(s);t.default={data:function(){return{ofs:null}},created:function(){var e=this;c.a.database().ref("stock").once("value").then(function(t){e.ofs=o()({},t.val()||{pizza:!1,burger:!1,bidBurger:!1,sandwich:!1,hotdog:!1,drink:!1,salad:!1,steak:!1,fries:!1})})},methods:{onChange:function(e){var t=!this.ofs[e];this.ofs=o()({},this.ofs,i()({},e,t)),c.a.database().ref("stock/"+e).set(t)}}}},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(106),i=n(14),r=n.n(i),o=n(103),s=(n.n(o),n(102)),c=n.n(s),l=n(100),f=(n.n(l),n(99)),u=(n.n(f),n(101)),v=(n.n(u),n(98)),p=n(104),d=n.n(p),_=n(105);a.a.use(_.default),a.a.use(c.a);var h={apiKey:"AIzaSyBL9qLwyeg0DMSyI1EnQJjdwSVrcYEFErY",databaseURL:"https://jooku-5e3a7.firebaseio.com"};r.a.initializeApp(h),new a.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:v.a},components:{app:d.a}})},215:function(e,t){},216:function(e,t){},217:function(e,t){},236:function(e,t,n){var a=n(17)(n(181),n(242),null,null);e.exports=a.exports},237:function(e,t,n){var a=n(17)(n(182),n(245),null,null);e.exports=a.exports},238:function(e,t,n){var a=n(17)(n(183),n(244),null,null);e.exports=a.exports},239:function(e,t,n){n(217);var a=n(17)(n(184),n(243),"data-v-4877a5d8",null);e.exports=a.exports},240:function(e,t,n){var a=n(17)(n(185),n(246),null,null);e.exports=a.exports},241:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("f7-statusbar"),e._v(" "),n("f7-views",[n("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[e.$theme.ios?n("f7-navbar",[n("f7-nav-center",{attrs:{sliding:""}},[e._v("Jooku")])],1):e._e(),e._v(" "),n("f7-pages",[n("f7-page",[e.$theme.material?n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1),e._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[e._v("Jooku")]),e._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1):e._e(),e._v(" "),n("f7-block-title",[e._v("Promotion Screen")]),e._v(" "),n("f7-list",[n("f7-list-item",{attrs:{"smart-select":"",title:"Promoting",disabled:"..."===e.promotion}},[n("select",{attrs:{name:"Promotion Screen"},on:{change:function(t){e.updatedPromotion(t)}}},[n("option",{attrs:{value:"pizza"},domProps:{selected:"pizza"===e.promotion}},[e._v("Pizza")]),e._v(" "),n("option",{attrs:{value:"bigBurger"},domProps:{selected:"bigBurger"===e.promotion}},[e._v("Big Burger")]),e._v(" "),n("option",{attrs:{value:"hotdog"},domProps:{selected:"hotdog"===e.promotion}},[e._v("Hotdog")])])]),e._v(" "),n("f7-list-item",{attrs:{link:"/scan",title:"Scan"}})],1),e._v(" "),n("f7-block-title",[e._v("Stock")]),e._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/stock",title:"Mark items as in/out of stock here."}})],1),e._v(" "),n("f7-block-title",[e._v("Update Price")]),e._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/menu1",title:"Menu 1"}}),e._v(" "),n("f7-list-item",{attrs:{link:"/menu2",title:"Menu 2"}}),e._v(" "),n("f7-list-item",{attrs:{link:"/drinks",title:"Drinks"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},242:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",[n("f7-navbar",{attrs:{title:"Update Price","back-link":"Back",sliding:""}}),e._v(" "),n("f7-block-title",[e._v("Drinks")]),e._v(" "),e.prices?n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-label",[e._v("Orange")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.orange},on:{change:function(t){e.onChange(t,"orange")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Apple")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.apple},on:{change:function(t){e.onChange(t,"apple")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Lemonade")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.lemonade},on:{change:function(t){e.onChange(t,"lemonade")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Cola")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.cola},on:{change:function(t){e.onChange(t,"cola")}}})],1)],1):e._e()],1)},staticRenderFns:[]}},243:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",[n("f7-navbar",{attrs:{title:"Scan","back-link":"Back",sliding:""}}),e._v(" "),n("f7-block",{attrs:{inner:""}},[e._v("Scan QRCode to update promotion screen.")]),e._v(" "),n("f7-list",{attrs:{form:""}},[n("qrcode-reader",{staticClass:"qrcode-reader",on:{decode:e.onDecode}})],1),e._v(" "),n("f7-block",[e._v(e._s(e.msg))]),e._v(" "),n("a",{staticStyle:{opacity:"0"},attrs:{id:"link",href:e.url,target:"blank"}},[e._v("Hidden link")])],1)},staticRenderFns:[]}},244:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",[n("f7-navbar",{attrs:{title:"Update Price","back-link":"Back",sliding:""}}),e._v(" "),n("f7-block-title",[e._v("Menu 2")]),e._v(" "),e.prices?n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-label",[e._v("Fries")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.fries},on:{change:function(t){e.onChange(t,"fries")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Steak")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.steak},on:{change:function(t){e.onChange(t,"steak")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Pizza")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.pizaa},on:{change:function(t){e.onChange(t,"pizaa")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Salad")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.salad},on:{change:function(t){e.onChange(t,"salad")}}})],1)],1):e._e()],1)},staticRenderFns:[]}},245:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",[n("f7-navbar",{attrs:{title:"Update Price","back-link":"Back",sliding:""}}),e._v(" "),n("f7-block-title",[e._v("Menu 1")]),e._v(" "),e.prices?n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-label",[e._v("Sandwich")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.sandwich},on:{change:function(t){e.onChange(t,"sandwich")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Hotdog")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.hotdog},on:{change:function(t){e.onChange(t,"hotdog")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Burger")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.burger},on:{change:function(t){e.onChange(t,"burger")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Big Burger")]),e._v(" "),n("f7-input",{attrs:{type:"number",value:e.prices.bigBurger},on:{change:function(t){e.onChange(t,"bigBurger")}}})],1)],1):e._e()],1)},staticRenderFns:[]}},246:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",[n("f7-navbar",{attrs:{title:"Stock","back-link":"Back",sliding:""}}),e._v(" "),n("f7-block-title",[e._v("Stock")]),e._v(" "),e.ofs?n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-label",[e._v("Pizza")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.pizza},on:{change:function(t){e.onChange("pizza")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Sandwich")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.sandwich},on:{change:function(t){e.onChange("sandwich")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Salad")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.salad},on:{change:function(t){e.onChange("salad")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Burger")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.burger},on:{change:function(t){e.onChange("burger")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Hotdog")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.hotdog},on:{change:function(t){e.onChange("hotdog")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Steak")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.steak},on:{change:function(t){e.onChange("steak")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Big Burger")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.bigBurger},on:{change:function(t){e.onChange("bigBurger")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Drink")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.drink},on:{change:function(t){e.onChange("drink")}}})],1),e._v(" "),n("f7-list-item",[n("f7-label",[e._v("Fries")]),e._v(" "),n("f7-input",{attrs:{type:"switch",checked:e.ofs.fries},on:{change:function(t){e.onChange("fries")}}})],1)],1):e._e()],1)},staticRenderFns:[]}},98:function(e,t,n){"use strict";t.a=[{path:"/stock",component:n(240)},{path:"/menu1",component:n(237)},{path:"/menu2",component:n(238)},{path:"/drinks",component:n(236)},{path:"/scan",component:n(239)}]},99:function(e,t){}},[186]);
//# sourceMappingURL=app.4d6f9910a1839071f241.js.map