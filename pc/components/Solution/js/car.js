var vm = new Vue({
    el:'#sc_app',
    data:{
        data:[[{
            "id":"01",
            "img":"img/car/dazhong.png",
//          "imgh":"img/car/dazhong.png"
        },{
            "id":"02",
            "img":"img/car/bentian.png",
//          "imgh":"img/car/bentian.png"
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