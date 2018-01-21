
// ative item
$(function() {
    $(".controls li").click(function () {
        $(".controls li").removeClass("active");
        $(this).addClass("active");
    })
})
//==============================================
// mixitup
$(function() {
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
//====================================================================================
//sliphover
$(function(func) {
    $('#container').sliphover({
        backgroundColor: 'rgba(40, 199, 0,.5)',
        textAlign: 'center',
        verticalMiddle: 'true',
        fontColor: '$portfoliotext',
        withLink: 'true'
    });
    setTimeout(func, 200)


})






