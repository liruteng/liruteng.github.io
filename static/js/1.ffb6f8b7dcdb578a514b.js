webpackJsonp([1],{EVLh:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("4YfN"),n=s.n(i),c=s("2bvH"),e={data:function(){return{data:{},show:[!1,!1,!1]}},methods:n()({},Object(c.c)({playList1:"playList",curIndex1:"curIndex",curSong1:"curSong"}),{returnpage:function(){this.$router.go(-1)},getclass:function(t){return t<3?"icon"+(t+1):void 0},tiao:function(t,a){this.playList1(this.data.data.data),this.curIndex1(a),this.curSong1(t),this.$router.push({path:"/play"})},tiao2:function(t,a){this.playList1(this.data.data.data.list),this.curIndex1(a),this.curSong1(t),this.$router.push({path:"/play"})}}),mounted:function(){var t=this;this.data=this.$route.params,this.show[this.$route.params.show]=!0,this.data.data.data.list.forEach(function(a){var s={images:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+a.musicData.albummid+".jpg?max_age=2592000",url:"http://audio04.dmhmusic.com/71_53_T10051194776_128_4_1_0_sdk-cpm/cn/0311/M00/26/F4/ChAKC113eE2ACpDZACG2YOBaUN8185.mp3?xcode=e23d93368f2b8d3d54199ac07c46c6ac547e127"};t.$set(a.musicData,"newData",s)}),console.log(this.data.data.data.list)}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"details"},[s("div",{staticClass:"top"},[s("i",{staticClass:"icon9",on:{click:function(a){return t.returnpage()}}},[t._v("<")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),s("p",{staticClass:"btn"},[t._v("随机播放全部")]),t._v(" "),s("img",{attrs:{src:t.data.imgurl,alt:""}})]),t._v(" "),t.data.data?s("ul",{staticClass:"list"},[t._l(t.data.data.data,function(a,i){return t.show[0]?s("li",{on:{click:function(s){return t.tiao(a,i)}}},[s("p",{staticClass:"sing"},[t._v(t._s(a.albumname))]),t._v(" "),s("p",{staticClass:"singer"},[t._v(t._s(a.songname))])]):t._e()}),t._v(" "),t._l(t.data.data.data.list,function(a,i){return t.show[1]?s("li",{on:{click:function(s){return t.tiao2(a,i)}}},[s("p",{staticClass:"sing"},[t._v(t._s(a.musicData.songname))]),t._v(" "),s("p",{staticClass:"singer"},[t._v(t._s(t.data.data.data.singer_name))])]):t._e()}),t._v(" "),t._l(t.data.data.data.tracks,function(a,i){return t.show[2]?s("li",{on:{click:function(s){return t.tiao(a,i)}}},[s("div",{staticClass:"icon",class:t.getclass(i)},[i>2?s("span",[t._v(t._s(i+1))]):t._e()]),t._v(" "),s("div",{staticClass:"xi"},[s("p",{staticClass:"song"},[t._v(t._s(a.name))]),t._v(" "),s("p",{staticClass:"sing"},t._l(a.singer,function(a,i){return s("span",[t._v(t._s(a.name)+"  ")])}),0)])]):t._e()})],2):t._e()])},staticRenderFns:[]};var o=s("C7Lr")(e,r,!1,function(t){s("kRr+")},"data-v-109b4201",null);a.default=o.exports},"kRr+":function(t,a){}});
//# sourceMappingURL=1.ffb6f8b7dcdb578a514b.js.map