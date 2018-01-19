// ative item
$(".controls li").click(function () {
    $(".controls li").removeClass("active");
    $(this).addClass("active");
})

// mixitup
$(window).trigger("resize");
var containerEl = document.querySelector('.galery_container');
var mixer = mixitup(containerEl);



