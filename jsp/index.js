$(function(){
    let ip = true;
    $('.IP').click(function(){
        if(ip == true){
            ip = false;
            $('.IP img').attr('src', 'images/off.png')
            $('.IP img').css({"width":"24px", "height":"10px"})
        }
        else{
            ip = true;
            $('.IP img').attr('src', 'images/on.png')
            $('.IP img').css({"width":"24px", "height":"10px"})
        }
    })

    $('#id').click(function(){
        $('#id').css({"border-color":"#5a94fd"})
        $('#pw').css({"border-color":"#d6d6d6"})
    })
    $('#pw').click(function(){
        $('#id').css({"border-color":"#d6d6d6"})
        $('#pw').css({"border-color":"#5a94fd"})
    })

    $('html').click(function(e) { if(!$(e.target).hasClass("read")) { 
        $('#id').css({"border-color":"#d6d6d6"})
        $('#pw').css({"border-color":"#d6d6d6"})
     } });

})