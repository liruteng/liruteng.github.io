/*
author:yh
date:2018.05.21
*/
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

    // our plugin constructor
    var OnePageNav = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };

    // the plugin prototype
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },

        init: function() {
            // Introduce defaults that can be extended either
            // globally or using an object literal.
            this.config = $.extend({}, this.defaults, this.options, this.metadata);

            this.$nav = this.$elem.find(this.config.navItems);

            //Filter any links out of the nav
            if(this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }

            //Handle clicks on the nav
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

            //Get the section positions
            this.getPositions();

            //Handle scroll changes
            this.bindInterval();

            //Update the positions on resize too
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

            return this;
        },

        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },

        bindInterval: function() {
            var self = this;
            var docHeight;

            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });

            self.t = setInterval(function() {
                docHeight = self.$doc.height();

                //If it was scrolled
                if(self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }

                //If the document height changes
                if(docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },

        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },

        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;

            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);

                if($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },

        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

            for(var section in this.sections) {
                if((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }

            return returnValue;
        },

        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);

            if(!$parent.hasClass(self.config.currentClass)) {
                //Start callback
                if(self.config.begin) {
                    self.config.begin();
                }

                //Change the highlighted nav item
                self.adjustNav(self, $parent);

                //Removing the auto-adjust on scroll
                self.unbindInterval();

                //Scroll to the correct position
                self.scrollTo(newLoc, function() {
                    //Do we need to change the hash?
                    if(self.config.changeHash) {
                        window.location.hash = newLoc;
                    }

                    //Add the auto-adjust on scroll back in
                    self.bindInterval();

                    //End callback
                    if(self.config.end) {
                        self.config.end();
                    }
                });
            }

            e.preventDefault();
        },

        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;

            //If the position is set
            if(position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

                //If it's not already the current section
                if(!$parent.hasClass(this.config.currentClass)) {
                    //Change the highlighted nav item
                    this.adjustNav(this, $parent);

                    //If there is a scrollChange callback
                    if(this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },

        scrollTo: function(target, callback) {
            var offset = $(target).offset().top;

            $('html, body').animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },

        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };

    OnePageNav.defaults = OnePageNav.prototype.defaults;

    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };

})( jQuery, window , document );

var isIE = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined;

// init current menu for nav
function restNavCurrent() {
    $(".comsideNav").each(function(index, element) {
        var items = $(element).find('a'),
            url = window.location.href,
            elem;
        items.each(function() {
            $(this).parent().removeClass('cur');

            if ( url.indexOf($(this).attr("data-flag")) > -1 ) {
                elem = $(this);
            }
        });
        if ( elem && elem.length > 0 ) {
            elem.parent().addClass('cur');
        }
    });

};
/**
 * nav scroll init
 */
function navIscroll() {
    if ( isIE && isIE < 10 ) { return false };
    if ( $(".sideNaveUlM").length < 1 ) { return false };
    var $elem = $(".sideNaveUlM");

    setNavWidth();
    $(window).on("resize", function() {
        //widthChange();
        setNavWidth();
    });
    // init
    new IScroll($elem[0], {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false,
        click: true,
        mouseWheel: true
    });

    // get width
    function setNavWidth() {
        var _width=0;
        $elem.find("li").each(function(index, element) {
            _width += $(element).outerWidth(true);
            return _width;
        });
        $elem.find("ul").css("width", (_width+2)+"px");

    };

};
//int
function init(){
    //
    navIscroll();
    // init current menu for nav
    restNavCurrent();



    resizesInit();
    window.addEventListener("orientationchange", resizesInit);
    window.addEventListener("resize", resizesInit);

    function resizesInit(){
        var innerWidth = document.documentElement.clientWidth;

        if(innerWidth<=900){

            if($('.owl-carousel2').length>0){
                var owl2 = $('.owl-carousel2');
                owl2.owlCarousel({
                    center: true,
                    nav: true,
                    loop: true,
                    items: 1
                })
            }
        };
    };



    //subnavbar
    if($(".subnavbar").length>0){
        $('.subnavbar-menu').onePageNav();
    }


    //导航
    if($('.navbar-menu').length>0){
        $(".navbar-menu .dropdown").hover(function(){
            $(this).addClass('cur');
            $(this).find('.dropdown-menu').show();
        },function(){
            $(this).removeClass('cur');
            $(this).find('.dropdown-menu').hide();
        });
    }
    if($('.m-navbar-menu').length>0){
        $(".m-navbar-menu .dropdown").click(function(){
            $(this).addClass('cur');
            $(this).find('.dropdown-menu').toggle();
        });

        $('.m-navbar-btn').click(function(){
            $('.m-navbar-menu').toggle();
        });
    }

    //首页焦点图
    if($('.focus-slide').length>0){
        $('.focus-slide').bxSlider({
            adaptiveHeight:true,
            mode:'fade',
            controls:false,
            auto:true,
            startSlides:0,
            slideMargin:0
        });
    }


    //owl-carousel1
    if($('.owl-carousel1').length>0){
        $('.owl-carousel1').owlCarousel({
            loop:false,
            margin:0,
            nav:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });
    }


    //owl-carousel3
    if($('.owl-carousel3').length>0){
        $('.owl-carousel3').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });
    }

    //owl-carousel4
    if($('.owl-carousel4').length>0){
        $('.owl-carousel4').owlCarousel({
            loop:true,
            margin:5,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                900:{
                    items:4
                },
                1200:{
                    items:5
                }
            }
        });
    }



    //service
    if($('.service-control').length>0){
        $(".service-control li").click(function(){
            var _index=$(this).index();
            $(".service-control li").removeClass('cur');
            $(this).addClass('cur');
            $(".service-item-box").hide();
            $(".service-item-box").eq(_index).show();
        });
    }


    //service-buy
    if($('.service-buy-control').length>0){
        $(".service-buy-control li").click(function(){
            var _index=$(this).index();
            $(".service-buy-control li").removeClass('cur');
            $(this).addClass('cur');
            $(".service-buy-item").hide();
            $(".service-buy-item").eq(_index).show();
        });
    }


    //时间样式设置
    if($('.news-item').length>0){
        $('.news-item .date').each(function(index, element) {
            var num=$(element).html();
            var dNum=num.substr(8,2);
            var yNum=num.substr(0,7);
            $(element).html('<strong>'+dNum+'</strong>'+yNum);
        });
    }

    // 内容页文章发布时间设置
    if($('.article-type .article-type-item-time').length>0){
        var detail_article_time = $('.article-type .article-type-item-time').text();
        var detail_article_time_filtration = detail_article_time.substr(0,10);
        $('.article-type .article-type-item-time').text(''+detail_article_time_filtration+'');
    }

    if($('.news-item-trends').length>0){
        $('.news-item-trends .date').each(function(index, element) {
            var num=$(element).html();
            var dNum=num.substr(8,2);
            var mNum = num.substr(5,2);
            var m_dNum = ''+mNum+'.'+dNum+'';
            var yNum=num.substr(0,4);
            $(element).html('<strong>'+m_dNum+'</strong>'+yNum);
        });
    }


    //
    /*	var newsTab = {
         getRecommend: function() {
        var c = $("#newsTab");
        c.attr("data-load", 1);
        c.slide({
            switchLoad: "data-original",
            titOnClassName: "cur",
            trigger: "click",
            startFun: function(a, b, d, e, f, g, w, l) {
                                                    //c.attr("data-load") ? c.removeAttr("data-load") : $(document).scrollTop(c.offset().top+62);
            },
            endFun: function(a) {
                                                }
        })
    }
}*/

    //newsTab.getRecommend();

    //功能描述
    if($('.service-fun-item-drop').length>0){
        $(".service-fun-item-drop").click(function(){
            var $index = $(this).index();
            $(this).addClass("cur").siblings().removeClass("cur");
            /*if($(this).hasClass("cur")){
                        $(this).removeClass("cur");
            }else{
                $(this).addClass("cur").siblings().removeClass("cur");
            }*/
        });
    }

    //solution-case-blur
    if($('.solution-case-blur').length>0){
        $('.solution-case-blur li').hover(function(){
            $(this).addClass('hover');
        },function(){
            $(this).removeClass('hover');
        });
    }
    //
    /*var mySwiper = new Swiper('#navTab', {
                        paginationClickable: true,
                        slidesPerView: 5,
                        prevButton:'.nav-prev',
                        nextButton:'.nav-next',
    });*/

};


$(document).ready(function() {
    init();
});
