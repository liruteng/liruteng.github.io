var vm = new Vue({
    //对象对应的DOM作用域
    el: '#news-div',
    //数据模型
    data: {
        datas: []
    },
    mounted: function () {
        this.init();
    }, methods: {
        //初始化方法
        init: function () {
            var then = this;
            $.ajax({
                url: 'config/newsData1.json',
                dataType: 'json',
                success: function (result) {
                    //模型赋值
                    then.datas = result.data.slice(0, 3);
                    then.datas.forEach(function (e) {
                        e.yearMouth = e.day.substring(0, 7);
                        e.day = e.day.substring(8);
                        e.url = "components/newsInformation/" + e.contentHtml.split("com/")[1];
                    })
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    }
});
$(function () {
    Echo.init({

        offset: 0,

        throttle: 0

    });
});