$(function () {
    $(".sc_eagle_li ul li").on("click",function () {
        var thenIndex = $(this).index();
        $(".sc_eagle_li ul li").removeClass("sc_eagle_li_active");
        $(this).addClass("sc_eagle_li_active");
        $(".sc_scene_cont .sc_scene_cont_main").addClass("hide");
        $(".sc_scene_cont .sc_scene_cont_main").eq(thenIndex).removeClass("hide");
    });
});