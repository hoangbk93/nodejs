$(document).ready(function () {
    if ($(this).scrollTop() > 200) {
        $(".backTop").addClass("displayBlock");

    }
    $(document).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".back-top").addClass("displayBlock");

        } else {
            $(".back-top").removeClass("displayBlock");
        }
    })
    
     $(".back-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
  
    $(document).ready(function() {
            $(".ImagesFrameCrop").each(function() {
                $(this).removeClass("wide")
                $(this).removeClass("tall")
                if ($(this).width() / $(this).height() > $(this).parent().width() / $(this).parent().height()) {
                    $(this).addClass("wide");
                } else {
                    $(this).addClass("tall");
                }
            });
            $(".ImagesFrameCrop").children("img").each(function() {
                $(this).removeClass("wide")
                $(this).removeClass("tall")
                if ($(this).width() / $(this).height() > $(this).parent().width() / $(this).parent().height()) {
                    $(this).addClass("wide");
                } else {
                    $(this).addClass("tall");
                }
            });


            $(".ImagesFrameCrop1").each(function() {
                $(this).removeClass("wide")
                $(this).removeClass("tall")
                if ($(this).width() / $(this).height() > $(this).parent().width() / $(this).parent().height()) {
                    $(this).addClass("wide");
                } else {
                    $(this).addClass("tall");
                }
            });
            $(".ImagesFrameCrop1").children("img").each(function() {
                $(this).removeClass("wide")
                $(this).removeClass("tall")
                if ($(this).width() / $(this).height() > $(this).parent().width() / $(this).parent().height()) {
                    $(this).addClass("wide");
                } else {
                    $(this).addClass("tall");
                }
            });


            $(".ImagesFrameCrop0").each(function() {
                $(this).removeClass("wide")
                $(this).removeClass("tall")
                if ($(this).width() / $(this).height() > $(this).parent().width() / $(this).parent().height()) {
                    $(this).addClass("wide");
                } else {
                    $(this).addClass("tall");
                }
            });
            $(".ImagesFrameCrop0").children("img").each(function() {
                $(this).removeClass("wide")
                $(this).removeClass("tall")
                if ($(this).width() / $(this).height() > $(this).parent().width() / $(this).parent().height()) {
                    $(this).addClass("wide");
                } else {
                    $(this).addClass("tall");
                }
            });
        });
        $(".menu-toggler").click(function(){
            $(".page-header-fixed").toggleClass("mobile");
           
        });

})
