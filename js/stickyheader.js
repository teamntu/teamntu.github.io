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