(function(t){function e(e){for(var i,o,r=e[0],l=e[1],u=e[2],h=0,m=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/minesweeper/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"112e":function(t,e,n){"use strict";n("69fa")},"29ff":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[t.game?n("Status",{attrs:{game:t.game}}):t._e(),t.game?n("Board",{attrs:{table:this.game.table.table,game:this.game}}):t._e()],1)])},a=[],o=(n("4de4"),n("4160"),n("159b"),n("d4ec")),r=n("bee2"),l=function(){function t(e,n,i){Object(o["a"])(this,t),this.game=e,this.row=n,this.column=i,this.hasBomb=!1,this.isOpen=!1,this.nearBombCount=0,this.flag=!1}return Object(r["a"])(t,[{key:"index",value:function(){return this.row+":"+this.column}},{key:"press",value:function(){this.isOpen||this.flag||(this.hasBomb&&this.game.explosion(),this.isOpen=!0)}},{key:"probe",value:function(){this.isOpen||this.hasBomb||this.press()}}]),t}(),u=function(){function t(e,n,i,s){Object(o["a"])(this,t),this.game=e,this.table=[],this.rows=n,this.columns=i,this.bombsCount=s,this.flagsCount=0;for(var a=0;a<n;a++){for(var r=[],u=0;u<i;u++)r.push(new l(e,a,u));this.table.push(r)}this.isInitialized=!1,this.buffer={}}return Object(r["a"])(t,[{key:"getCell",value:function(t,e){if(t<0||t>=this.table.length)return null;var n=this.table[t];return e<0||e>=n.length?null:this.table[t][e]}},{key:"getNeighbors",value:function(t){for(var e=[],n=[[-1,1],[-1,0],[-1,-1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],i=0;i<n.length;i++){var s=n[i],a=s[0],o=s[1],r=this.getCell(t.row+a,t.column+o);null!=r&&e.push(r)}return e}},{key:"getCellsList",value:function(){for(var t=[],e=0;e<this.table.length;e++)for(var n=this.table[e],i=0;i<n.length;i++){var s=n[i];t.push(s)}return t}},{key:"setBomb",value:function(t){console.log("set bomb for ".concat(t)),t.hasBomb=!0,this.getNeighbors(t).forEach((function(t){t.nearBombCount+=1}))}},{key:"checkInit",value:function(t){if(!this.isInitialized){console.log("started table initialization");var e=this.getCellsList().filter((function(e){return e!=t}));e.length<this.bombsCount&&alert("invalid game init: bombs count more then available cells");var n=[],i=function(){var t=Math.floor(Math.random()*e.length),i=e[t];n.push(i),e=e.filter((function(t){return t!=i}))};while(n.length<this.bombsCount)i();console.log("cells for set bomb: ".concat(n));for(var s=0;s<n.length;s++){var a=n[s];this.setBomb(a)}this.isInitialized=!0,console.log("table is initialized")}}},{key:"checkWinning",value:function(){var t=this.getCellsList().filter((function(t){return!t.isOpen}));t.length==this.bombsCount&&this.game.win()}},{key:"press",value:function(t,e){if(!this.game.isFinished){this.buffer={};var n=this.getCell(t,e);if(this.checkInit(n),!n.isOpen&&!n.flag){n.press(),this.buffer[n.index()]=!0;for(var i=this.getNeighbors(n),s=0;s<i.length;s++){var a=i[s];this.probe(a)}this.checkWinning()}}}},{key:"flag",value:function(t,e){if(!this.game.isFinished){var n=this.getCell(t,e);n.isOpen||(this.flagsCount!=this.bombsCount||n.flag)&&(n.flag?this.flagsCount-=1:this.flagsCount+=1,n.flag=!n.flag)}}},{key:"probe",value:function(t){if(t.probe(),t.index()in this.buffer||(this.buffer[t.index()]=!0),t.isOpen&&!t.nearBombCount)for(var e=this.getNeighbors(t),n=0;n<e.length;n++){var i=e[n];i.index()in this.buffer||this.probe(i)}}}]),t}(),c=function(){function t(){Object(o["a"])(this,t);var e=this.defaultValues();this.rows=e["rows"],this.columns=e["columns"],this.bombsCount=e["bombsCount"],this.init()}return Object(r["a"])(t,[{key:"defaultValues",value:function(){return window.innerHeight>window.innerWidth?{rows:10,columns:7,bombsCount:6}:{rows:10,columns:15,bombsCount:10}}},{key:"init",value:function(){this.isFinished=!1,this.isWin=!1,this.isFailed=!1,this.table=new u(this,this.rows,this.columns,this.bombsCount)}},{key:"explosion",value:function(){this.isFinished=!0,this.isFailed=!0}},{key:"win",value:function(){this.isFinished=!0,this.isWin=!0}}]),t}(),h=c,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.game.table.table,(function(e,i){return n("tr",{key:i,attrs:{index:i}},t._l(e,(function(e,i){return n("td",{key:i,attrs:{index:i}},[n("Cell",{attrs:{row:e.row,column:e.column,hasBomb:e.hasBomb,isOpen:e.isOpen,nearBombCount:e.nearBombCount,flag:e.flag,game:t.game}})],1)})),0)})),0)},f=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"my-touch",rawName:"v-my-touch:touchhold",value:t.clickFlag,expression:"clickFlag",arg:"touchhold"}],class:t.cellClass,on:{click:[function(e){return e.altKey?e.ctrlKey||e.shiftKey||e.metaKey?null:t.clickFlag(e):null},function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.click(e)}],contextmenu:function(e){return t.clickFlag(e)}}},[n("b",[t._v(" "+t._s(t.content)+" ")])])},g=[],p=(n("a9e3"),{props:{row:Number,column:Number,hasBomb:Boolean,isOpen:Boolean,flag:Boolean,nearBombCount:Number,game:h},methods:{click:function(){this.game.table.press(this.row,this.column)},clickFlag:function(){this.game.table.flag(this.row,this.column)}},computed:{cellClass:function(){var t=["cell"];return this.isOpen?(t.push("open"),t.push("disabled"),this.hasBomb?t.push("bomb"):0==this.nearBombCount?t.push("near_0"):1==this.nearBombCount?t.push("near_1"):2==this.nearBombCount?t.push("near_2"):this.nearBombCount>=3&&t.push("near_3_or_more")):t.push("closed"),t},content:function(){return this.flag?"+":this.isOpen&&!this.hasBomb&&0!=this.nearBombCount?this.nearBombCount:this.hasBomb&&this.isOpen?"!":this.game.isWin&&!this.game.isFailed&&this.hasBomb?"+":" "}}}),v=p,d=(n("5be7"),n("2877")),y=Object(d["a"])(v,b,g,!1,null,"ba143cc2",null),k=y.exports,C={props:["game"],components:{Cell:k}},w=C,_=(n("112e"),Object(d["a"])(w,m,f,!1,null,"f286736e",null)),x=_.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{absolute:"",dense:"",flat:"",dark:""}},[n("v-btn",{attrs:{small:"",color:"red",dark:""},on:{click:function(e){return t.game.init()}}},[t._v("Restart "),n("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-restart ")])],1),n("v-spacer"),n("h1",[t._v(t._s(t.count))]),n("h1",[t._v(t._s(t.status))]),n("v-spacer"),n("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{small:"",color:"primary",dark:""}},"v-btn",s,!1),i),[t._v(" Settings "),n("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-wrench ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v("Settings")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.init()}}},[t._v(" Save & restart ")])],1)],1),n("v-list",[n("v-list-item",[n("v-list-item-content",[n("v-btn",{on:{click:t.defaultValues}},[t._v("Default values")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-action",[n("v-slider",{staticClass:"align-center",attrs:{max:100,label:"Rows"},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{type:"number"},model:{value:t.game.rows,callback:function(e){t.$set(t.game,"rows",e)},expression:"game.rows"}})]},proxy:!0}]),model:{value:t.game.rows,callback:function(e){t.$set(t.game,"rows",e)},expression:"game.rows"}})],1)],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-action",[n("v-slider",{staticClass:"align-center",attrs:{max:100,label:"Columns"},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{type:"number"},model:{value:t.game.columns,callback:function(e){t.$set(t.game,"columns",e)},expression:"game.columns"}})]},proxy:!0}]),model:{value:t.game.columns,callback:function(e){t.$set(t.game,"columns",e)},expression:"game.columns"}})],1)],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-action",[n("v-slider",{staticClass:"align-center",attrs:{max:100,label:"Bombs"},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{type:"number"},model:{value:t.game.bombsCount,callback:function(e){t.$set(t.game,"bombsCount",e)},expression:"game.bombsCount"}})]},proxy:!0}]),model:{value:t.game.bombsCount,callback:function(e){t.$set(t.game,"bombsCount",e)},expression:"game.bombsCount"}})],1)],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.init()}}},[t._v(" Save & restart ")])],1)],1)],1)],1)],1)],1)},B=[],V={props:{game:{default:null}},data:function(){return{dialog:!1}},methods:{init:function(){this.dialog=!1,this.game.init()},defaultValues:function(){var t=this.game.defaultValues();this.game.rows=t["rows"],this.game.columns=t["columns"],this.game.bombsCount=t["bombsCount"]}},computed:{count:function(){return this.game.isFinished&&this.game.isWin?0:this.game.table.bombsCount-this.game.table.flagsCount},status:function(){return this.game.isFinished?this.game.isFailed?"☠️":this.game.isWin?"😎":"":"🤔"}}},j=V,F=n("6544"),S=n.n(F),$=n("40dc"),I=n("8336"),K=n("b0af"),N=n("169a"),T=n("132d"),W=n("8860"),L=n("da13"),P=n("1800"),M=n("5d23"),z=n("ba0d"),E=n("2fa4"),A=n("8654"),D=n("71d9"),J=n("2a7f"),R=Object(d["a"])(j,O,B,!1,null,null,null),H=R.exports;S()(R,{VAppBar:$["a"],VBtn:I["a"],VCard:K["a"],VDialog:N["a"],VIcon:T["a"],VList:W["a"],VListItem:L["a"],VListItemAction:P["a"],VListItemContent:M["a"],VSlider:z["a"],VSpacer:E["a"],VTextField:A["a"],VToolbar:D["a"],VToolbarItems:J["a"],VToolbarTitle:J["b"]});var q={name:"App",props:{},data:function(){return{game:null}},mounted:function(){this.init()},methods:{init:function(){this.game=new h}},components:{Board:x,Status:H}},G=q,Q=(n("034f"),n("7496")),U=Object(d["a"])(G,s,a,!1,null,null,null),X=U.exports;S()(U,{VApp:Q["a"]});var Y=n("f309");i["a"].use(Y["a"]);var Z=new Y["a"]({}),tt=n("0086"),et=n.n(tt);i["a"].use(et.a,{namespace:"my-touch"}),i["a"].config.productionTip=!1,new i["a"]({vuetify:Z,render:function(t){return t(X)}}).$mount("#app")},"5be7":function(t,e,n){"use strict";n("29ff")},"69fa":function(t,e,n){},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.9f62e0f3.js.map