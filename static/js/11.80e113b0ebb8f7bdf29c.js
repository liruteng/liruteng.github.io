webpackJsonp([11],{"TXD+":function(t,e){},h59L:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"register"},[s("form",[s("h2",[t._v("用户注册")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"regist"},[s("p",{staticClass:"left"},[t._v("兴趣爱好:")]),t._v(" "),t._l(t.arr,function(e,a){return s("div",{key:a,staticClass:"a"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.hobby,expression:"hobby"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.hobby)?t._i(t.hobby,e)>-1:t.hobby},on:{change:function(s){var a=t.hobby,r=s.target,i=!!r.checked;if(Array.isArray(a)){var c=e,n=t._i(a,c);r.checked?n<0&&(t.hobby=a.concat([c])):n>-1&&(t.hobby=a.slice(0,n).concat(a.slice(n+1)))}else t.hobby=i}}}),t._v(t._s(e)+"\n          ")])})],2),t._v(" "),s("p",{staticClass:"everconfirmed"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.off,expression:"off"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.off)?t._i(t.off,null)>-1:t.off},on:{change:function(e){var s=t.off,a=e.target,r=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.off=s.concat([null])):i>-1&&(t.off=s.slice(0,i).concat(s.slice(i+1)))}else t.off=r}}}),t._v("条款以阅读\n\t\t\t\t")]),t._v(" "),s("p",{staticClass:"btn"},[s("input",{class:{on:t.off},attrs:{type:"button",disabled:"disabled",value:"注册"}})]),t._v(" "),s("p",{staticClass:"login"},[s("span",[s("router-link",{attrs:{to:"/login"}},[t._v("已有账号，去登录")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"regist"},[e("input",{staticClass:"username",attrs:{type:"text",placeholder:"用户名"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"regist"},[e("input",{staticClass:"password",attrs:{type:"password",placeholder:"密码"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"regist"},[e("input",{staticClass:"password",attrs:{type:"password",placeholder:"确认密码"}})])}]};var r=s("C7Lr")({name:"register",data:function(){return{hobby:[],arr:["打球","睡觉","听音乐","看电影"],off:!1}}},a,!1,function(t){s("TXD+")},"data-v-31e08f8f",null);e.default=r.exports}});
//# sourceMappingURL=11.80e113b0ebb8f7bdf29c.js.map