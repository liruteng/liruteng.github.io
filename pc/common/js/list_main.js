// list  swiper
if(document.body.offsetWidth >= 1024){
/*    var css_style = '<link rel="stylesheet" type="text/css" href="http://www.yunshicloud.com/css/swiper-4.1.0.min.css">';
    $(css_style).insertAfter($('.css_style'));*/
    var mySwiper = new Swiper ('.list_content_container', {
        direction: 'horizontal',
        slidesPerView: 4,
        slidesPerColumn : 2,
        slidesPerColumnFill : 'column',
        spaceBetween : 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }, 
    }) 
}