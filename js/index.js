$(function() {
    $('.visual').slick({
        dots:true,  autoplay: true, autoplaySpeed: 5000
    });

})

//header 고정
$(window).scroll(function() {
    if($(this).scrollTop() > 0){
       $('header').addClass('active'); 
    }   
    if($(this).scrollTop() == 0){
        $('header').removeClass('active'); 
    }   
})


