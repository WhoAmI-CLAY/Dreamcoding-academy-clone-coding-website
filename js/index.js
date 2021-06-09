$(function() {
    $('.visual').slick({
        dots:true
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


