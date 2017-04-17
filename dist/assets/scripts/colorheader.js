

$(document).ready(function(){

    $(window).resize(function(e){
        console.log(e);                   
    });

    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        console.log(sc);

        if(sc > 100){
            $('header .container .logo a span').css('background-position','top left');
            $('header #burger a .burger-icon .burger-bar').css('background','#046534');
        }else{
            $('header .container .logo a span').css('background-position','top right');
            $('header #burger a .burger-icon .burger-bar').css('background','#ffffff');
        }

    });

});
