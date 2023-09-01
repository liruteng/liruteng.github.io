$(function(){
	$(".solution_frame").height($(".solution_frame_txt").height());
	$(".sc_scene_tab .sc_scene_li > ul li").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".sc_scene_cont > div").eq(index).addClass("active").siblings().removeClass("active");
		$(".solution_frame").eq(index).height($(".solution_frame_txt").eq(index).height());
	});
})

