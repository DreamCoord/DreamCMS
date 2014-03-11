// JavaScript Document

// 删除重复js引用
$(function () {
    var screen_w = window.screen.width;
    if (screen_w <= 1024) {
        $(".tool-btns").addClass("tool-btns_1024");
    }

    $("#home-page").show();

    /* 流量统计 */
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = "http://s6.cnzz.com/stat.php?id=5270246&web_id=5270246";
    var s_d = $("<div style='display:none'></div>").append(oScript);
    $("body").append(s_d);


    $("script[src]").each(function () {
        var src = $(this).attr("src").toLowerCase();
        var isdel = src.indexOf("jquery.mousewheel.js") > -1 || src.indexOf("jquery.rollbar.min.js") > -1 || src.indexOf("judgment_access_sources.js") > -1;
        if (isdel) {
            $(this).remove();
        }
    });
});



/* jquery.mousewheel.js */

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function ($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function () {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta / 120; }
        if (orgEvent.detail) { delta = -orgEvent.detail / 3; }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY / 120; }
        if (orgEvent.wheelDeltaX !== undefined) { deltaX = -1 * orgEvent.wheelDeltaX / 120; }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);




/* jquery.rollbar.min.js */
/*
  RollBar - jQuery ScrollBar Plugin
  -----------------------------------------------
  
  @author   flGravity
  @created  4.4.12
  @version  1.3
  @site     http://codecanyon.net/user/flGravity
  
*/
(function (a) { function b(b, c) { this.container = a(b), this.settings = c, this.timer = 0, this.before = { v: 0, h: 0 }, this.touch = {}, this.pressed = 0, this.vslider = a("<div/>", { "class": "rollbar-handle" }), this.vpath = a("<div/>", { "class": "rollbar-path-vertical" }), this.hslider = a("<div/>", { "class": "rollbar-handle" }), this.hpath = a("<div/>", { "class": "rollbar-path-horizontal" }), this.sliders = this.vslider.add(this.hslider), this.container.css({ overflow: "hidden", position: "absolute" }).contents().filter(this.settings.contentFilter).wrapAll('<div class="rollbar-content"></div>'), this.content = this.container.children(".rollbar-content").css({ top: 0, left: 0, position: "relative" }), "horizontal" == this.settings.scroll ? this.container.prepend(this.hpath.append(this.hslider)) : "vertical" == this.settings.scroll ? this.container.prepend(this.vpath.append(this.vslider)) : this.container.prepend(this.vpath.append(this.vslider), this.hpath.append(this.hslider)), this.vpath.add(this.hpath).css({ "z-index": this.settings.zIndex, display: "none" }), this.vslider.css({ height: this.settings.sliderSize, opacity: this.settings.sliderOpacity }), this.hslider.css({ width: this.settings.sliderSize, opacity: this.settings.sliderOpacity }), this.settings.sliderOpacity && this.sliders.hover(this.fixFn(function () { this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1) }), this.fixFn(function () { this.pressed || this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) })), this.init(), this.pathSize(), this.bindEvent(a(window), "load", function () { setTimeout(this.fixFn(this.checkScroll), 10) }), this.settings.lazyCheckScroll > 0 && setInterval(this.fixFn(function () { this.checkScroll(), this.pathSize() }), this.settings.lazyCheckScroll) } b.prototype.checkScroll = function () { this.vtrack = this.vpath.height() - this.vslider.height(), this.htrack = this.hpath.width() - this.hslider.width(), this.vdiff = this.content.height() - this.container.height(), this.hdiff = this.content.width() - this.container.width(), this.settings.autoHide && (this.vdiff > 0 ? this.vpath.fadeIn(this.settings.autoHideTime) : this.vpath.fadeOut(this.settings.autoHideTime), this.hdiff > 0 ? this.hpath.fadeIn(this.settings.autoHideTime) : this.hpath.fadeOut(this.settings.autoHideTime)) }, b.prototype.pathSize = function () { var a = parseInt(this.settings.pathPadding, 10); this.vpath.css({ top: a + "px", height: this.container.height() - 2 * a + "px" }), this.hpath.css({ left: a + "px", width: this.container.width() - 2 * a + "px" }) }, b.prototype.scroll = function (a, b, c) { var d = 0, e = 0; 0 > a && (a = 0), a > this.vtrack && (a = this.vtrack), this.vslider.css("top", a + "px"), 0 > b && (b = 0), b > this.htrack && (b = this.htrack), this.hslider.css("left", b + "px"), this.vdiff > 0 && (e = a / this.vtrack, this.content.css("top", Math.round(-this.vdiff * e)), c && a && a != this.vtrack && (c.stopPropagation(), c.preventDefault())), this.hdiff > 0 && (d = b / this.htrack, this.content.css("left", Math.round(-this.hdiff * d)), c && b && b != this.htrack && (c.stopPropagation(), c.preventDefault())), (this.before.v != e || this.before.h != d) && ("function" == typeof this.settings.onscroll && this.settings.onscroll.call(this.container.get(0), e, d), this.before.v = e, this.before.h = d) }, b.prototype.easeScroll = function (b, c) { var d = 0, e = Math.floor(this.settings.scrollTime / this.settings.scrollInterval), f = this.vslider.position().top, g = this.hslider.position().left, h = a.easing[this.settings.scrollEasing] || a.easing.linear; this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1), window.clearInterval(this.timer), this.timer = window.setInterval(this.fixFn(function () { this.scroll(f + h(d / e, d, 0, 1, e) * b, g + h(d / e, d, 0, 1, e) * c), ++d > e && (window.clearInterval(this.timer), this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity)) }), this.settings.scrollInterval) }, b.prototype.fixFn = function (a, b) { var c = this; return function () { a.apply(b || c, Array.prototype.slice.call(arguments)) } }, b.prototype.bindEvent = function (a, b, c, d) { return a.bind(b, this.fixFn(c, d)) }, b.prototype.init = function () { var b = a(window.document); this.bindEvent(this.sliders, "mousedown", function (a) { this.pressed = a.target === this.vslider.get(0) ? 1 : 2; var c = a.pageX, d = a.pageY, e = this.vslider.position().top, f = this.hslider.position().left; this.bindEvent(b, "mousemove", function (a) { 1 == this.pressed ? this.scroll(e + (a.pageY - d), f) : this.scroll(e, f + (a.pageX - c)) }), this.bindEvent(b, "selectstart", function (a) { a.preventDefault() }) }), this.bindEvent(b, "mouseup", function (a) { 1 == this.pressed && a.target !== this.vslider.get(0) ? this.vslider.fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) : 2 == this.pressed && a.target !== this.hslider.get(0) && this.hslider.fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity), this.pressed = 0, b.unbind("mousemove"), b.unbind("selectstart") }), this.bindEvent(this.container, "touchstart", function (a) { var b = a.originalEvent, c = b.changedTouches[0]; this.touch.sx = c.pageX, this.touch.sy = c.pageY, this.touch.sv = this.vslider.position().top, this.touch.sh = this.hslider.position().left, this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1), this.settings.blockGlobalScroll && (this.vdiff || this.hdiff) && b.stopPropagation() }), this.bindEvent(this.container, "touchmove", function (a) { var b = a.originalEvent, c = b.targetTouches[0]; this.scroll(this.touch.sv + (this.touch.sy - c.pageY) * this.settings.touchSpeed, this.touch.sh + (this.touch.sx - c.pageX) * this.settings.touchSpeed, a), this.settings.blockGlobalScroll && (this.vdiff || this.hdiff) && (b.preventDefault(), b.stopPropagation()) }), this.bindEvent(this.container, "touchend touchcancel", function (a) { var b = a.originalEvent; b.changedTouches[0], this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity), this.settings.blockGlobalScroll && (this.vdiff || this.hdiff) && b.stopPropagation() }); var c = this.vpath.height(), d = this.hpath.width(); this.bindEvent(a(window), "resize", function () { this.pathSize(), this.checkScroll(), 0 >= this.vdiff && this.content.css("top", 0), 0 >= this.hdiff && this.content.css("left", 0), this.scroll(Math.round(parseInt(this.vslider.css("top"), 10) * this.vpath.height() / c), Math.round(parseInt(this.hslider.css("left"), 10) * this.hpath.width() / d)), c = this.vpath.height(), d = this.hpath.width() }), this.bindEvent(this.container, "mousewheel", function (a, b, c, d) { this.scroll(this.vslider.position().top - this.settings.wheelSpeed * d, this.hslider.position().left + this.settings.wheelSpeed * c, a), this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1), window.clearTimeout(this.timer), this.timer = window.setTimeout(this.fixFn(function () { this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) }), this.settings.sliderOpacityDelay), this.settings.blockGlobalScroll && (this.vdiff || this.hdiff) && (a.preventDefault(), a.stopPropagation()) }), this.bindEvent(b, "keydown", function (a) { var b = 0, c = 0; c = 38 == a.keyCode ? -this.settings.keyScroll : c, c = 40 == a.keyCode ? this.settings.keyScroll : c, b = 37 == a.keyCode ? -this.settings.keyScroll : b, b = 39 == a.keyCode ? this.settings.keyScroll : b, (c || b) && this.easeScroll(c, b) }), this.bindEvent(this.container, "dragstart", function (a) { a.preventDefault() }), this.bindEvent(this.container, "rollbar", function (a, b, c, d) { return a.stopPropagation(), "reset" === b ? (this.container.find(".rollbar-content, .rollbar-handle").css({ top: 0, left: 0 }), void 0) : (b = b || 0, c = c || 0, /^[-\d\.]+$/.test(b) && (b = parseFloat(b), 1 >= Math.abs(b) && !d ? b *= this.vtrack : b += b * (this.vtrack / this.vdiff - 1)), /^[-\d\.]+$/.test(c) && (c = parseFloat(c), 1 >= Math.abs(c) && !d ? c *= this.htrack : c += c * (this.htrack / this.hdiff - 1)), this.easeScroll(b, c), void 0) }) }, a.fn.rollbar = function (c) { var d = { scroll: "both", autoHide: !0, autoHideTime: "fast", lazyCheckScroll: 1e3, blockGlobalScroll: !1, contentFilter: "*", sliderSize: "30%", sliderOpacity: 1, sliderOpacityTime: 200, sliderOpacityDelay: 1e3, wheelSpeed: 20, touchSpeed: .3, pathPadding: "0", keyScroll: 100, scrollTime: 500, scrollInterval: 15, scrollEasing: "swing", zIndex: 100, onscroll: function () { } }; return a.extend(d, c), this.each(function () { new b(this, d) }) } })(jQuery);





/* 设备类型 */
var client = function () {
    //呈现引擎
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        //完整的版本号
        ver: null
    };

    //浏览器
    var browser = {
        //主要浏览器
        ie: 0,
        firefox: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        safari: 0,

        //具体的版本号
        ver: null
    };

    //平台、设备和操作系统
    var system = {
        win: false,
        mac: false,
        xll: false,

        //移动设备
        iphone: false,
        ipad: false,
        ipod: false,
        android: false,
        nokiaN: false,
        winMobile: false,
        macMobile: false,

        //游戏设备
        wii: false,
        ps: false
    };
    //检测呈现引擎和浏览器
    var ua = navigator.userAgent;
    if (window.opera) {
        engine.ver = browser.ver = window.opera.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
    } else if (/AppleWebKit\/(\S+)/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);

        //确定是Chrome还是Safari
        if (/Chrome\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.chrome = parseFloat(browser.ver);
        } else if (/Version\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.safari = parseFloat(browser.ver);
        } else {
            //近似地确定版本号
            var safariVersion = 1;
            if (engine.webkit < 100) {
                safariVersion = 1;
            } else if (engine.webkit < 312) {
                safariVersion = 1.2;
            } else if (engine.webkit < 412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            }
            browser.safari = browser.ver = safariVersion;
        }
    } else if (/KHTML\/(\S+)/.test(ua) || /Konquersor\/([^;]+)/.test(ua)) {
        engine.ver = browser.ver = RegExp["$1"];
        engine.khtml = browser.kong = paresFloat(engine.ver);
    } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
        engine.ver = RegExp["$1"]
        engine.gecko = parseFloat(engine.ver);
        //确定是不是Firefox
        if (/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.firefox = parseFloat(browser.ver);
        }
    } else if (/MSIE([^;]+)/.test(ua)) {
        browser.ver = RegExp["$1"];
        browser.firefox = parseFloat(browser.ver);
    }
    //检测浏览器
    browser.ie = engine.ie;
    browser.opera = engine.opera;
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    //检测Windows操作系统
    if (system.win) {
        if (/Win(?:doms)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
            if (RegExp["$1"] == "NT") {
                switch (RegExp["$2"]) {
                    case "5.0":
                        system.win = "2000";
                        break;
                    case "5.1":
                        system.win = "XP";
                        break;
                    case "6.0":
                        system.win = "Vista";
                        break;
                    default:
                        system.win = "NT";
                        break;
                }
            } else if (RegExp["$1"]) {
                system.win = "ME";
            } else {
                system.win = RegExp["$1"];
            }
        }
    }
    //移动设备
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipod = ua.indexOf("iPod") > -1;
    system.ipad = ua.indexOf("iPad") > -1;
    system.android = ua.indexOf("Android") > -1;
    system.nokiaN = ua.indexOf("NokiaN") > -1;
    system.winMobile = (system.win == "CE");
    system.macMobile = (system.iphone || system.ipod);
    //游戏系统
    system.wii = ua.indexOf("Wii") > -1;
    system.ps = /playstation/i.test(ua);
    //返回这些对象
    return {
        engine: engine,
        browser: browser,
        system: system
    };
}();






(function ($) {
    $(document).ready(function () {

        /*   暂时停用 导航 动画效果 2013-1-4
        if (!$("#home-page").length) {
        $("#navigation a").hover(function () {
        var $overlay = $(this).prev(".overlay");
        if ($overlay.height() < 152) {
        $overlay.stop().animate({ height: 152 }, 300);
        $(this).addClass("current");
        }
        }, function () {
        var $overlay = $(this).prev(".overlay");
        if ($(this).hasClass("current")) {
        $overlay.stop().animate({ height: 0 });
        $(this).removeClass("current");
        }
        });
        }
        */

        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".back-top-btn a").css({ visibility: "visible" });
            } else {
                $(".back-top-btn a").css({ visibility: "hidden" });
            }
        });

        $(".tool-btns li a").unbind("click");
        $(".back-top-btn a").click(function () {
            $("html, body").animate({ scrollTop: 0 })
        });

        hoverBgColor = function (obj) {
            $(obj).hover(function () {
                $(this).addClass("hover");
            }, function () {
                $(this).removeClass("hover");
            });
        }

        hoverContentShow = function (obj) {
            $(obj).hover(function () {
                $(this).addClass("hover");
            }, function () {
                $(this).removeClass("hover");
            });
        }

        accordion = function (title, content) {
            $(title).eq(0).addClass("selected");
            $(content).eq(0).show();
            $(title).unbind("click");
            $(title).click(function () {
                var $this = $(this);
                if ($this.next().find(".inner").is(":hidden")) {
                    $this.siblings("*.selected").removeClass("selected").end().siblings().children(".inner:visible").slideUp();
                    $this.addClass("selected").next().find(".inner").slideDown();
                }
            });
        }

        if ($(".exh-activity-list").length > 0) {
            var $title = $(".exh-activity-list").find("h3");
            var $text = $(".exh-activity-list").find(".inner");
            $text.eq(0).show();
            $title.unbind("click");
            $title.click(function () {
                if ($(this).next().find(".inner").is(":hidden")) {
                    $(this).siblings().children(".inner:visible").slideUp();
                    $(this).next().find(".inner").slideDown();
                } else {
                    $(this).next().find(".inner").slideUp();
                }
            });
        }

        $(".date-btn").click(function () {
            if ($("#ui-datepicker-div").is(":hidden")) {
                $(this).prev("input").focus();
            } else {
                $(this).prev("input").blur();
            }
        });

        hoverMask = function (obj) {
            $(obj).hover(function () {
                var top = $(this).offset().top;
                var left = $(this).offset().left;
                var width = $(this).find("a:first img:first").width();
                var height = $(this).find("a:first img:first").height();

                var mask = $('.mask');
                mask.remove();
                $(this).find("a:first").append('<span class="mask"></span>');
                mask = $('.mask');
                mask.css({ "width": width, "height": height, "top": 0, "left": 0 });
                mask.fadeTo(100, 0.4);
            }, function () {
                $(".mask").hide();
            });
        }

        hoverArrow = function (obj) {
            $(".arrow-left, .arrow-right").remove();
            $(obj).hover(function () {
                $(this).css("position", "relative");
                $(this).prepend('<em class="arrow-left"></em>').append('<em class="arrow-right"></em>');
            }, function () {
                $(this).removeAttr("style");
                $(this).find(".arrow-left, .arrow-right").remove();
            });
        }


        //var links_select = ".links-select-box";
        if ($(".option-box").find(".top").length == 0) {
            $(".select-box").next(".option-box").rollbar({ zIndex: 80, wheelSpeed: 20 });
        }

        $(".select-box").unbind("click");
        $(".select-box").bind("click", function () {
            if ($(this).next(".option-box").is(":hidden")) {
                $(".option-box").hide();
                $(this).next(".option-box").show();
                if ($(this).next(".option-box").height() > 400) {
                    $(this).next(".option-box").css({ "height": 400 });
                    //$(this).next(".option-box").css({ "height": 240}).rollbar({zIndex:80,wheelSpeed:20}); 
                }
                $(this).parent().css("z-index", "99");
            } else {
                $(this).next(".option-box").hide();
            }
            $(this).parent().removeAttr("style");
        });

        $(".years-box .input-text").focus(function () {
            $(".option-box").hide();
            $(this).next(".option-box").show();
        });

        $("body").unbind("click");
        $(".select-box, .option-box, .years-box .input-text").mouseenter(function () {
            $("body").unbind("click");
        });

        $(".select-box, .option-box, .years-box .input-text").mouseleave(function () {
            $("body").bind("click", function () {
                $(".option-box").hide();
            });
        });

        $(".option-box li").click(function () {
            if (!$(this).children("a").length) {
                if ($(this).parents(".option-box").prev().is(".select-box")) {
                    $(this).parents(".option-box").prev(".select-box").find("a").html($(this).html());
                } else {
                    $(this).parents(".option-box").prev(".input-text").val($(this).html());
                }
            }
            $(this).parents(".option-box").hide();
        });

        var g_s = ".g-s-w";
        var date_pop = ".tool-btns .date-pop";
        var g_btn = ".tool-btns li a"
        var g_s_b = ".search-btn a";
        var d_b = ".tool-btns .date-btn a";

        hoverBgColor(".g-s-w .option-box li, .tool-btns li a");

        $(g_s_b + ", " + d_b).bind("click", function () {
            var $btn = $(this);
            if (!$btn.hasClass("selected")) {
                otherBoxHide();
                $btn.addClass("selected");
                if ($btn.parent().hasClass("search-btn")) {
                    $(g_s).show().animate({ width: $(g_s).children().outerWidth() }, function () {
                        $(this).css("overflow", "visible");
                    });
                } else {
                    $(date_pop).show().animate({ width: $(date_pop).children().children().outerWidth() });
                }
            } else {
                otherBoxHide();
            }
        });

        var hover_btn = g_s + ", " + g_s_b + ", " + date_pop + ", " + d_b
        $(hover_btn).mouseenter(function () {
            $("body").unbind("click");
        });

        $(hover_btn).mouseleave(function () {
            $("body").bind("click", function () {
                otherBoxHide();
            });
        });

        otherBoxHide = function () {
            $(g_btn).parent().parent().siblings("div:visible").css("overflow", "hidden").animate({ "width": 0 }, function () {
                $(this).hide();
                $(g_btn + ".selected").removeClass("selected");
            })
        }

        $(".date-pop .inner").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            dateFormat: 'yy.mm.dd',
            onSelect: function (dateText, inst) {
                window.location = "/was5/web/search?channelid=288623&date=" + dateText;
            }
        });

        tabs = function (obj) {
            $(obj).each(function () {
                var nav = ".tabs-nav",
					  multiple = ".tabs-multiple",
					  panel = ".tabs-panel",
					  $this = $(this),
					  $tabs_nav = $this.find(nav),
					  $tabs_li = $tabs_nav.children("ul").length ? $tabs_nav.children().children("li:not([key='online-booking'])") : $tabs_nav.children("li:not([key='online-booking'])");
                if ($this.find(multiple).length) {
                    var double_num = $this.find(multiple).children(panel).length / 2,
						  $tabs_panel = $this.find(multiple).children(panel);
                    $tabs_panel.first().show().end().eq(double_num).show();
                } else {
                    var $tabs_panel = $this.find(panel);
                    $tabs_panel.first().show();
                }
                $tabs_li.first().addClass("current");

                $tabs_li.click(function () {
                    var this_index = $(this).index();
                    $(this).addClass("current").siblings().removeClass("current");
                    if ($this.find(multiple).length) {
                        $tabs_panel.hide()
                        $tabs_panel.eq(this_index).show().end().eq(this_index + double_num).show();
                    } else {
                        $tabs_panel.eq(this_index).show().siblings(panel).hide();
                    }
                    if ($(this).attr("key")) {
                        window.location.hash = "#" + $(this).attr("key");
                        return false;
                    } else {
                        window.location.hash = "#_";
                        return false;
                    }
                });
            });
            $("[key='online-booking']").click(function () {
                var $this = $(this);
                $this.addClass("current").siblings().removeClass("current");
            });
        }
        inputValReset = function (obj, val_begin, val_end) {
            $(obj).blur(function () {
                if ($(this).val().length == 0) {
                    if ($(this).index() == 0) {
                        $(this).val(val_begin);
                    } else {
                        $(this).val(val_end);
                    }
                }
            });
        }

        /* 登录注册按钮弹出 */
        var account_pop_btn = ".share-login .login-btn, .share-login .register-btn, .account-pop .register-btn, .account-pop .forget-btn, .account-pop .pact-next-btn, .account-pop .forget-next-btn, .account-pop  .back-btn",
			  a_overlay = ".account-overlay",
			  a_pop = ".account-pop"



        $(".date-box .input-text").each(function () {
            if ($(this).val() != 0) {
                $(this).next("label.clew").hide();
            }
        });

        $("textarea, input:text, input:password").focus(function () {
            $(this).next("label.clew").addClass("light-color");
            if ($(this).val() > 0) {
                $(this).next("label.clew").hide();
            }
        });

        $("textarea, input:text, input:password").blur(function () {
            if ($(this).val() == 0) {
                $(this).next("label.clew").show().removeClass("light-color");
            } else {
                $(this).next("label.clew").hide();
            }
        });
        var notKeyCode = "16,17,18,9,27,45,46,112,113,114,115,116,117,118,119,120,121,122,123,33,34,35,36,37,38,39,40,";
        $("textarea, input:text, input:password").keydown(function (e) {
            if ($(this).val().length == 0) {
                var kc = e.keyCode;
                if (notKeyCode.indexOf(kc + ',') == -1) {
                    $(this).next("label.clew").hide();
                    return;
                }
            }
            if ($(this).val().length != 0) {
                $(this).next("label.clew").hide();
            } else {
                $(this).next("label.clew").show().addClass("light-color");
            }
        });

        $("textarea, input:text, input:password").keyup(function () {
            if ($(this).val().length != 0) {
                $(this).next("label.clew").hide();
            } else {
                $(this).next("label.clew").show().addClass("light-color");
            }
        });

        $("label.clew").click(function () {
            $(this).addClass();
            $(this).prev().focus();
        });


        /* 美术百科 A-Z 滚动 */
        $(".retrieval-wrap .nav [key]").click(function () {
            var key = $(this).attr("key");
            if (key && key.length > 0) {
                var toKey = $(".retrieval-wrap .artist-list [key='" + key + "']:first");
                if (toKey.length > 0) {
                    var animatePx = toKey.offset().top;
                    if (animatePx && animatePx > 50) {
                        $('html,body').animate(
                            { scrollTop: (animatePx - 50) + 'px' }, 600
                        );
                        return false;
                    }
                }
            }
        });
        /* 美术百科 A-Z 滚动 End */

        /* 全文搜索 滚动 */
        $(".search-all .sub-nav a[key]").click(function () {
            var key = $(this).attr("key");
            if (key && key.length > 0) {
                var toKey = $(this).parents(".search-all").find("#content ." + key + ":first");
                if (toKey.length > 0) {
                    var animatePx = toKey.offset().top;
                    if (animatePx && animatePx > 50) {
                        $('html,body').animate(
                            { scrollTop: (animatePx - 50) + 'px' }, 600
                        );
                        return false;
                    }
                }
            }
        });
        /* 全文搜索 滚动 End */


        var $hall_exh_list = $(".hall-exh-list");
        var $hall_exh_list_settime;
        var mobile_devices = client.system.iphone || client.system.ipod || client.system.ipad || client.system.android || client.system.nokiaN || client.system.winMobile || client.system.macMobile || client.system.wii || client.system.ps;
        $.extend({
            init_text_slide: function ($overview_about, $overview_slide, max_overview_about_height, up_class, down_class) {
                /*var $overview_about = $(".overview-about");
                var $overview_slide = $(".overview-slide");*/

                up_class = up_class || "overview-slide-up-btn";
                down_class = down_class || "overview-slide-down-btn";
                max_overview_about_height = max_overview_about_height || 92;
                var overview_about_height = $overview_about.height();
                if (overview_about_height > max_overview_about_height) {
                    $overview_slide.css("display", "block");
                    $overview_about.css({ "height": max_overview_about_height, "visibility": "visible" });
                    $overview_slide.click(function () {
                        if ($(this).hasClass(up_class)) {
                            $overview_about.animate({ height: max_overview_about_height }, 500, function () {
                                $overview_slide.attr("title", "展开");
                                $overview_slide.find("a").text("更多");
                                $overview_slide.removeClass(up_class);
                                $overview_slide.addClass(down_class);
                            });
                        } else {
                            $overview_about.animate({ height: overview_about_height }, 500, function () {
                                $overview_slide.attr("title", "收起");
                                $overview_slide.find("a").text("收起");
                                $overview_slide.addClass(up_class);
                                $overview_slide.removeClass(down_class);
                            });

                        }
                        return false;
                    });
                }
            },
            s_t: function (time) {
                time = time || 5000;

                setTimeout(function () {
                    var t = time || 5000;
                    if ($(".online-booking-table .f_d").hasClass("f_d_s")) {
                        $(".online-booking-table .f_d").removeClass("f_d_s");
                        t = 5000;
                    } else {
                        $(".online-booking-table .f_d").addClass("f_d_s");
                        t = 500;
                    }
                    if ($(".online-booking-table .f_c").hasClass("f_c_s")) {
                        $(".online-booking-table .f_c").removeClass("f_c_s");
                    } else {
                        $(".online-booking-table .f_c").addClass("f_c_s");
                    }

                    $.s_t(t);
                }, time);
            },
            log_show_fun: function (selector, c_class) {
                $(".account-overlay:hidden").fadeTo(500, 0.6);
                $(".account-pop:hidden").fadeTo(600, 1);
                $(selector).attr("class", c_class);
            },
            log_hide_fun: function () {
                $(".account-overlay:visible, .account-pop:visible").fadeOut(500, function () {
                    $(".account-pop").attr("class", "account-pop");
                });
            },
            hall_exh_hide: function () {
                $hall_exh_list_settime = setTimeout(function () {
                    $hall_exh_list.hide();
                }, 300);
            },
            hall_exh_show: function ($this, e) {
                if ($hall_exh_list_settime) {
                    clearTimeout($hall_exh_list_settime);
                }

                var $class = $this.attr("class");
                var $hall = $class.substring($class.indexOf("hall-") + 5);
                var i = $hall.substring(0, ($hall.indexOf(' ') > -1 ? $hall.indexOf(' ') : $hall.length));
                if (i && i.length > 0) {
                    $hall_exh_list.find("li:not([hall='" + i + "'])").hide();
                    var $this_hall_exh = $hall_exh_list.find("li[hall='" + i + "']");
                    if ($this_hall_exh.not(".hall-title").length > 0) {
                        $hall_exh_list.find(".not-exh").hide();
                        $this_hall_exh.show();
                    } else {
                        $hall_exh_list.find(".not-exh, [hall='" + i + "']").show();
                    }
                }

                setTimeout(function () {
                    var x = e.pageX;
                    var y = e.pageY + 5;
                    if (mobile_devices) {
                        x = x + $hall_exh_list.width() > 960 ? 960 - $hall_exh_list.width() : x - 90;
                    } else {
                        var img = $("img[usemap='#" + $this.parent().attr("name") + "']:first");
                        x = x + $hall_exh_list.width() > img.offset().left + img.width() ? img.offset().left + img.width() - $hall_exh_list.width() : x - 90
                    }

                    $hall_exh_list.css({ "top": y + "px", "left": x + "px" });
                    $hall_exh_list.show();
                }, 200);


            }
        });


        if ($("#home-page").length > 0) {
            if (!mobile_devices) {
                $("#navigation > li > a").mouseover(function () {
                    if ($(this).next().length)
                        $(this).parent().addClass("hover");
                });
                $("#navigation > li").mouseleave(function () {
                    if ($(this).hasClass("hover"))
                        $(this).removeClass("hover");
                });
            } else {
                $("#navigation > li > a").click(function () {
                    var $this = $(this);
                    if ($this.next().find("li").length > 0 && !$this.parent().hasClass("hover")) {
                        $this.parent("li").siblings("li").removeClass("hover");
                        $this.parent().addClass("hover");
                        return false;
                    }
                });

                $("#navigation > li > a, #navigation > li > ul").mouseenter(function () {
                    $("body").unbind("click");
                });
                $("#navigation > li > a, #navigation > li > ul").mouseleave(function () {
                    $("body").bind("click", function () {
                        $("#navigation > li").removeClass("hover");
                    });
                });
            }
        }

        if ($(".not-pop-login").length == 0) {
            $(".account-overlay, .account-pop .close-btn").click(function () {
                $.log_hide_fun();
            });
            $(".share-login .login-btn, .account-pop .back-btn").click(function () {
                $.log_show_fun(".account-pop", "account-pop login-pop");
            });

            $(".account-pop .register-btn, .share-login .register-btn").click(function () {
                $.log_show_fun(".account-pop", "account-pop pact-pop");
            });

            $(".account-pop .pact-wrap .pact-next-btn").click(function () {
                if ($(".pact-wrap input:radio[name='accept']:checked").val() == "accept") {
                    $.log_show_fun(".account-pop", "account-pop register-pop");
                } else {
                    alert("拒绝注册条款协议,您不具备注册资格!");
                }
            });


            $(".account-pop .forget-btn").click(function () {
                $.log_show_fun(".account-pop", "account-pop forget-pop");
            });

            $(".share-login .edit-user-btn").click(function () {
                $.log_show_fun(".account-pop", "account-pop edit-user-pop");
            });

            $(".account-pop .edit-user-pwd-btn").click(function () {
                $.log_show_fun(".account-pop", "account-pop edit-user-pwd-pop");
            });

            // 注册协议滚动
            $(".account-pop .pact-wrap .pact-box").rollbar({ zIndex: 80 });
        }



        var $hall_exh_list = $(".hall-exh-list");
        var $hall_exh_list_settime;
        $("[name*='first-layer-'] [class*='hall-']").hover(function (e) {
            var $this = $(this);
            $.hall_exh_show($this, e);
        }, function () {
            $.hall_exh_hide();
        });

        $hall_exh_list.hover(function () {
            if ($hall_exh_list_settime) {
                clearTimeout($hall_exh_list_settime);
            }
            $hall_exh_list.show();
        }, function () {
            $.hall_exh_hide();
        });

        /* 网上预约 */
        $(".online-booking .forgot-password-btn").click(function () {
            $(".reserve, .register").hide();
            $(".forgot-password").show();

        });
        $(".online-booking .register-btn").click(function () {
            $(".reserve, .forgot-password").hide();
            $(".register").show();
        });
        $(".online-booking .back-btn").click(function () {
            $(".forgot-password, .register").hide();
            $(".reserve").show();
        });
        /* 网上预约 end */


        /* 藏品 详细页*/
        /*
        if($(".collection-details").length > 0) {
            var ioffset = $(".image-details").offset();
            var offset = $(".image-details img").offset();
            if($.browser.msie && $.browser.version == 6) {
             $(".image-details .work-large-icon").css({"left": (offset.left - ioffset.left + 5) + "px", "top": (offset.top - ioffset.top - 5 - $(".image-details .work-large-icon").height() +  $(".image-details img").height() ) +"px"});
            }else{
             $(".image-details .work-large-icon").css("left", (offset.left - ioffset.left + 5) + "px");
            }
            $(".image-details .work-large-icon").show();
        }
        */
        /* 藏品 详细页 end */


        /* 新闻 详细页面 内容 */
        //$(".news-details-wrap .details-wrap [clas='countPage'] p").css("text-indent", "10px");
        /* 新闻 详细页面 内容 end */

    });
})(jQuery);