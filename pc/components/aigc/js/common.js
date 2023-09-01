$(function() {
    init()
    // 点击锚点导航
    $(".anchor-item").click(function() {
        var self = $(this);
        // self.addClass("active").siblings().removeClass("active")
        var hookId = self.attr("data-hook");
        $("html, body").stop().animate({
            scrollTop: $(hookId).offset().top - 220
        }, 'slow') 
    })
    // 锚点导航固定
    var bannerH = $("#bannerHook").height() - 40;
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top >= bannerH && !$(".top-banner .banner-anchor").hasClass("fixed")) {
            $(".top-banner .banner-anchor").addClass("fixed")
        }
        if (top < bannerH && $(".top-banner .banner-anchor").hasClass("fixed")) {
            $(".top-banner .banner-anchor").removeClass("fixed")
        }
        var commonBlocks = $(".common_block_hook");
        var currBlock;
        commonBlocks.each(function() {
            var divPosition = $(this).offset().top;  // 获取到当前内容块具体页面顶部的距离
            if((divPosition - 400) <= top){  //  通过条件判断匹配到当前滚动内容块
                currBlock = $(this);
            }
        })
        if(top > 300){
            var id = currBlock.attr('menu-id');
            $((`#${id}`)).addClass("active").siblings().removeClass("active");
        }
    })
})
function init() {
    var hash = window.location.hash
    if (hash && $(hash)) {
        $("html, body").stop().animate({
            scrollTop: $(hash).offset().top - 220
        }, 'slow') 
    }
    var bannerH = $("#bannerHook").height() + 40;
    var top = $(document).scrollTop();
     if (top >= bannerH) {
        $(".top-banner .banner-anchor").addClass("fixed")
     }
}