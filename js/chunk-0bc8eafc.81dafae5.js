(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc8eafc"],{"325d":function(t,e,n){},9248:function(t,e,n){"use strict";var a=n("325d"),o=n.n(a);o.a},d16a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("header",{staticClass:"layout-head"},[n("Row",{attrs:{type:"flex",justify:"space-between"}},[n("Tabs",{staticClass:"tabs-bar",on:{"on-click":t.navChange},model:{value:t.navActiveName,callback:function(e){t.navActiveName=e},expression:"navActiveName"}},t._l(t.tabNavs,(function(t){return n("TabPane",{key:t.route,attrs:{name:t.route,label:t.label,icon:t.icon}})})),1),n("Settings")],1)],1),n("Content",{staticClass:"f-h100 layout-content"},[n("transition",{attrs:{appear:"",mode:"out-in",name:"component-fade"}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},o=[],s=(n("d3b7"),function(){return n.e("chunk-63f523f2").then(n.bind(null,"1859"))}),i={name:"Index",components:{Settings:s},data:function(){return{navActiveName:"/form-design",tabNavs:[{label:"表单设计器",icon:"ios-construct",route:"/form-design"},{label:"JS",icon:"logo-nodejs",route:"/form-design/js-code"}]}},mounted:function(){this.navActiveName=this.$route.path},methods:{navChange:function(t){this.navActiveName=t,this.$router.push({path:t})}}},c=i,u=(n("9248"),n("2877")),r=Object(u["a"])(c,a,o,!1,null,"58ffe81a",null);e["default"]=r.exports}}]);