// ative item
$(function() {
    $(".controls li").click(function () {
        $(".controls li").removeClass("active");
        $(this).addClass("active");
    })
})

$(function() {
// mixitup
//     $(window).trigger("resize");
    var containerEl = document.querySelector('.galery_container');
//     var mixer = mixitup(containerEl);
//     var mixer = mixitup('.galery_container');
    var mixer = mixitup(containerEl, {
        animation: {
            //enable: false, //отключение всей анимации
            //effects: 'fade translateZ(-100px)'
            //animateResizeContainer: false, //отмена изменения размеров контейнера
            //queueLimit: false,
            duration: 250,
            easing: 'ease-in-out'
    }
    });
})
$(function(func) {
    $('#container').sliphover({
    });
    setTimeout(func, 200)
})






