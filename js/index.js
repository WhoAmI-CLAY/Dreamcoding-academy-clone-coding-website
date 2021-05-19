$(function(){
    $('.visual').slick({
        //3초에 한번씩 자동으로 슬라이드가 작동한다.
        dots: true , autoplay: true, autoplaySpeed: 3000
    });
    $('.visual').find(".slick-prev").remove()
    $('.visual').find(".slick-next").remove()
    $('.movie').slick({
        dots: true
    })
    $('.movie').find(".slick-prev").remove()
    $('.movie').find(".slick-next").remove()

    $(window).scroll(function() { 
       console.log($(this).scrollTop())
        if($(this).scrollTop() > 0) {
            $('header').addClass('active')
        }
        else{
            $('header').removeClass('active')
        }
    })
})

