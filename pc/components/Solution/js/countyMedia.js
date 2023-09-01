var vm = new Vue({
    el:'#sc_app',
    data:{
        data:[[{
            "id":"01",
            "img":"img/countyMedia/chunanTV.png",
//          "imgh":"img/countyMedia/chunanTV.png"
        },{
            "id":"02",
            "img":"img/countyMedia/lijiangTV.png",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },{
            "id":"03",
            "img":"img/countyMedia/cixiTV.jpg",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },{
            "id":"04",
            "img":"img/countyMedia/guangdeTV.jpg",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },{
            "id":"05",
            "img":"img/countyMedia/hexianTV.jpg",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },{
            "id":"06",
            "img":"img/countyMedia/zongyangTV.jpg",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },
        {
            "id":"07",
            "img":"img/countyMedia/jiayu.png",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },
        {
            "id":"08",
            "img":"img/countyMedia/wutai.png",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },
        {
            "id":"09",
            "img":"img/countyMedia/pingyaoTV.png",
//          "imgh":"img/countyMedia/lijiangTV.png"
        },
        {
            "id":"10",
            "img":"img/countyMedia/lingchuanTV.png",
//          "imgh":"img/countyMedia/lijiangTV.png"
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