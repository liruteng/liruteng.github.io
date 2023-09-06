/*
 * 阳光云视官网
 * 2018年9月8日09:30:14
 * zsj
 * */
jQuery.YSContent = {
    //指定div中加载相应的页面
    openAppoint: function (o, url) {
        var $o = $(o);
        $o.load(url);
    }
};
var scMethod = scMethod || {};
scMethod.agreeUrl = "https";
scMethod.someTool = (function () {
    try {
        scMethod.agreeUrl = window.location.href.split(":")[0]
    } catch (e) {
        scMethod.agreeUrl = "https";
        console.log(e);
    }
    console.log(scMethod.agreeUrl);
    var index = scMethod.agreeUrl + "://" + window.location.host + "/index.html";
    var customerCase = scMethod.agreeUrl + "://" + window.location.host + "/components/customerCase/customerCase.html";
    var news = scMethod.agreeUrl + "://" + window.location.host + "/components/newsInformation/news.html";
    var aboutUs = scMethod.agreeUrl + "://" + window.location.host + "/components/aboutUs/aboutUs.html";
    var getShowStr = function (str) {
        if (typeof (str) == 'undefined' || null == str || 'null' == str) {
            return '';
        }
        return str;
    };
    var loadHeader = function () {
        var logoImg = scMethod.agreeUrl + "://" + window.location.host + "/common/images/logo.png"
        $("#header-wrap").html(
            '<div class="content-w header-cont"><a href="'+ index +'" class="logo"></a><div class="nav-wrapper"><a href="' + index + '" class="nav-item">首页</a></div></div>'
        )
        // $("#header-wrap").html('<div class="navbar fixed-top"> <div class = "maxWidth" >' +
        //     <!--Mobile navbar start-->
        //     '<div class = "m-navbar">' +
        //     '<div class = "m-navbar-btn">' +
        //     '<span class = "m-nav-icon-bar"></span><span class = "m-nav-icon-bar"></span><span class = "m-nav-icon-bar" ></span>' +
        //     '</div>' +
        //     '<ul class = "m-navbar-menu">' +
        //     '<li>' +
        //     '<a href = "' + index + '" target = "_self" >首页 </a></li><li class = "dropdown">' +
        //     '<a>产品服务</a>' +
        //     '<div class = "dropdown-menu">' +
        //     '<a href = "https://onair.yunshicloud.com/console/materil" target = "_blank">视频云 </a>' +
        //     '<a href = "https://onairsaas.yunshicloud.com/" target = "_blank">智能云媒资</a>' +
        //     '</div></li>' +
        //     '<li>' +
        //     '<a href="' + customerCase + '" target = "_self" >客户案例 </a></li> <li><a href = "' + news + '" target = "_self">新闻动态 </a>' +
        //     '</li>' +
        //     '<li>' +
        //     '<a href = "' + aboutUs + '" target = "_self">关于我们</a>' +
        //     '</li>' +
        //     '</ul></div>' +
        //     <!--Mobile navbar end-->
        //     '<a class ="navbar-logo" href="' + index + '"><img src = "' + logoImg + '" alt = "远见者赢未来"></a>' +
        //     '<ul class = "navbar-menu clearfix" >' +
        //     '<li>' +
        //     '<a href = "' + index + '" target = "_self" >首页</a></li><li class = "dropdown">' +
        //     '<a>产品服务 </a><div class = "dropdown-menu" >' +
        //     '<a href = "/components/onairPass/onairPass.html" class="sc_tab_font" target = "_blank">ONAIR PAAS 3.0</a> ' +
        //     '<a href = "https://onairsaas.yunshicloud.com/" target = "_blank" >媒体云</a>' +
        //     '<a href = "https://onairsaas.yunshicloud.com/inte_cloud_media.html" target = "_blank">智能云媒资</a> ' +
        //     '<a href = "https://onairsaas.yunshicloud.com/onsite.html" target = "_blank">互动直播</a> ' +
        //     '<a href = "/components/hearCloud/hearCloud.html" target = "_blank">听鉴云</a> ' +
        //     '<a href = "/components/onairPass/newAgeCivilization.html" >新时代文明实践中心</a>' +
        //     '</div></li>' +
        //     '<li>' +
        //     '<a href = "' + customerCase + '" target = "_self">客户案例 </a> </li> <li>' +
        //     '<a href = "' + news + '" target = "_self">新闻动态 </a> </li> <li>' +
        //     '<a href = "' + aboutUs + '" target = "_self" >关于我们 </a></li></ul></div></div>')
    };
    var loadFooter = function () {
        $("#footer-wrap").html(
            '<div class="top"><div class="title">联系我们</div><div class="cont">北京总部<br/>办公地址:北京市昌平区半壁街9号<br/>电话:010-62977026/400-900-7025<br/>邮编:100085<br/> 邮箱:mkt@yunshicloud.com<br/>中南办事处(武汉)<br/>办公地址:武汉市武昌区中北路姚家岭114号景天楼1-9-2<br/>联系电话:027-68874905<br/>邮编:430071</div></div>'+
            '<div class="copyright">版权所有©北京阳光云视科技有限公司&nbsp;2020&nbsp;&nbsp;&nbsp;<a class="record" style="margin-left: 10px;" target="_blank" href="http://beian.miit.gov.cn">京ICP备17015824号-4</a><div class="police"></div><a class="record" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802031184">京公网安备11010802031184</a></div>')
    };
    return {
        getShowStr: getShowStr,
        loadHeader: loadHeader,
        loadFooter: loadFooter
    }
})();

$(function () {
    scMethod.someTool.loadHeader();
    scMethod.someTool.loadFooter();


});