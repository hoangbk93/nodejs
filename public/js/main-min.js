function fs_scroll(o){$("html, body").animate({scrollTop:$(o).offset().top},1e3)}$(document).ready(function(){AOS.init({once:!0,offset:0,easing:"ease-in-out-cubic",duration:"300"}),$(this).scrollTop()>=42?$(".header-nav").addClass("scrolled"):$(".header-nav").removeClass("scrolled"),$(window).on("load",function(){$(this).scrollTop()>=42?$(".header-nav").addClass("scrolled"):$(".header-nav").removeClass("scrolled")}),$(document).scroll(function(){$(this).scrollTop()>=42?$("#header").addClass("scrolled"):$("#header").removeClass("scrolled")}),$(".back-top").on("click",function(){$(".back-top").removeClass("active"),$("html, body").animate({scrollTop:0},1e3)}),$(".slide").slick({slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,fade:!1,nextArrow:".team__next",prevArrow:".team__prev",asNavFor:".slide-for",focusOnSelect:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:993,settings:{centerMode:!1,slidesToShow:3,slidesToScroll:1}},{breakpoint:769,settings:{centerMode:!1,slidesToShow:2,slidesToScroll:1}},{breakpoint:481,settings:{centerMode:!1,slidesToShow:1,slidesToScroll:1}}]}),$(".slide-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slide"}),$(".btn_menu").click(function(){$(this).toggleClass("active_menu"),$(".nav").toggleClass("active_nav_menu")}),$(this).scrollTop()>200&&$(".scroll_top").addClass("avtive_scroll"),$(this).scrollTop()>0?$("#header").addClass("scrolled"):$("#header").removeClass("scrolled"),$(document).scroll(function(){$(this).scrollTop()>200?$(".scroll_top").addClass("avtive_scroll"):$(".scroll_top").removeClass("avtive_scroll"),$(this).scrollTop()>0?$("#header").addClass("scrolled"):$("#header").removeClass("scrolled")}),$(".scroll_top").on("click",function(){$("html, body").animate({scrollTop:0},1e3)}),$(".check").click(function(){$(this).toggleClass("active_check")}),$(".send").click(function(){$(this).parents(".modal-body").toggleClass("active_login")})});