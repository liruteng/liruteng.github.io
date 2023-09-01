var vm = new Vue({
        el:'#sc_app',
        data:{
            currentPage4: 1,
            datas:[],
            curPage:1,
            curSize:20,
            curTotal:'',
            newdatas:[]
        },
        mounted: function () {
            $(".sc_tip").height($(window).height() - $(".fixed-top").height() - $(".news_trends_banner").height());
            this.obtainData();
        },methods: {
            handleSizeChange:function(val) {
                //console.log(`每页 ${val} 条`);
                this.curSize=val;
            },
            handleCurrentChange:function(val) {
                //console.log(`当前页: ${val}`);
                this.curPage=val;
                this.obtainData();
            },
            obtainData:function(){
                var then = this;
                $.ajax({
                    url:'../../config/newsData1.json',
                    dataType:'json',
                    success:function (data) {
                        then.datas = data.data;
                        var data = data.data;
                        if(then.curPage*then.curSize>data.length){//不够20条
                            if(then.curPage==1){
                                then.newdatas =  data.slice((then.curPage-1)*then.curSize);
                            }else {
                                then.newdatas =  data.slice((then.curPage-1)*then.curSize-1,data.length-1);
                            }
                        }else {
                            then.newdatas=  data.slice((then.curPage-1)*then.curSize,then.curPage*then.curSize)
                        }
                        console.log(then.newdatas)
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            },
            interceptAddress:function (str) {
                var strArr = str.split("com/");
                return strArr[1]
            }
        }
    });