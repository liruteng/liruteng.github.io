var vm = new Vue({
    el:'#sc_app',
    data:{
        data:[[
            
        {
            "id":"04",
            "img":"img/bigMedia/sc_zhongyang_h.png",
//          "imgh":"img/bigMedia/sc_zhongyang_h.png"
        },{
            "id":"02",
            "img":"img/bigMedia/sc_guoji_h.png",
//          "imgh":"img/bigMedia/sc_guoji_h.png"
        },
        {
            "id":"01",
            "img":"img/bigMedia/xinhuaNet.png",
           /* "imgh":"img/bigMedia/sc_jiangsu_h.png"*/
        },{
            "id":"03",
            "img":"img/bigMedia/sc_yunnan_h.png",
//          "imgh":"img/bigMedia/sc_yunnan_h.png"
        },{
            "id":"03",
            "img":"img/bigMedia/shanXi.png",
//          "imgh":"img/bigMedia/sc_yunnan_h.png"
        }],[{
            "id":"06",
            "img":"img/bigMedia/sc_hubei_h.png",
//          "imgh":"img/bigMedia/sc_ningbo_h.png"
        },{
            "id":"07",
            "img":"img/bigMedia/xinjiang.png",
//          "imgh":"img/bigMedia/sc_guizhou_h.png"
        },{
            "id":"08",
            "img":"img/bigMedia/bingtuan.png",
//          "imgh":"img/bigMedia/sc_henan_h.png"
        },{
            "id":"09",
            "img":"img/bigMedia/jilin.png",
//          "imgh":"img/bigMedia/sc_chongqing_h.png"
        },{
            "id":"10",
            "img":"img/bigMedia/sc_beijing_h.png",
//          "imgh":"img/bigMedia/sc_tianjing_h.png"
        }],[{
            "id":"11",
            "img":"img/bigMedia/sc_jiangsu_h.png",
//          "imgh":"img/bigMedia/sc_neimeng_h.png"
        },{
            "id":"12",
            "img":"img/bigMedia/sc_neimeng_h.png",
//          "imgh":"img/bigMedia/sc_beijing_h.png"
        },{
            "id":"13",
            "img":"img/bigMedia/sc_chongqing_h.png",
//          "imgh":"img/bigMedia/sc_shanxi_h.png"
        },
        {
            "id":"14",
            "img":"img/bigMedia/gansu.png",
//          "imgh":"img/bigMedia/sc_shanxi_h.png"
        },{
            "id":"15",
            "img":"img/bigMedia/sc_anhui_h.png",
//          "imgh":"img/bigMedia/sc_anhui_h.png"
        }]]
    },
    mounted:function () {
        
    },
    methods:{
        hadeMoveIntoOver:function (ev) {
            var imgEv = $(ev.currentTarget).find("img");
            var himg = imgEv.attr("himg");
            imgEv.attr("src",himg);
        },
        hadeMoveIntoOut:function (ev) {
            var imgEv = $(ev.currentTarget).find("img");
            var yimg = imgEv.attr("yimg");
            imgEv.attr("src",yimg);
        }
    }
});