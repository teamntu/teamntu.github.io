$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.page-main').outerHeight();

    $(window).scroll(function() {
        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu < header_yuksekligi){$('.page-main').addClass('header2');} 
        else {$('.page-main').removeClass('header');}

        if (kaydirma_cubugu < cubuk_seviye){$('.page-main').removeClass('gizle');} 
        else {$('.page-main').addClass('gizle');}				

        cubuk_seviye = $(document).scrollTop();	
     });
});


/*$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.mobilenav').outerHeight();

    $(window).scroll(function() {
        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu < header_yuksekligi){$('.mobilenav').addClass('header2');} 
        else {$('.mobilenav').removeClass('header');}

        if (kaydirma_cubugu < cubuk_seviye){$('.mobilenav').removeClass('gizle');} 
        else {$('.mobilenav').addClass('gizle');}				

        cubuk_seviye = $(document).scrollTop();	
     });
});*/
