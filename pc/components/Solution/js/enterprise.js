var vm = new Vue({
    el:'#sc_app',
    data:{
        data:[[{
            "id":"01",
            "img":"img/enterprise/delo2.png",
//          "imgh":"img/enterprise/delo2.png"
        },{
            "id":"02",
            "img":"img/enterprise/huawei2.png",
//          "imgh":"img/enterprise/huawei2.png"
        },{
            "id":"02",
            "img":"img/enterprise/bentian2.png",
//          "imgh":"img/enterprise/bentian2.png"
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