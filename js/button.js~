$(function(){
    // 
    var duration = 500;

    // buttons2 ----------------------------------------
    $('#buttons2 button').each(function(index){
        
    })
    .on('mouseover', function(){
        var $btn = $(this).stop(true).animate({
            backgroundColor: '#191970',
			opacity:'0.7',
            color: '#000',
        }, duration);
        $btn.find('img:first-child').stop(true).animate({opacity: 0}, duration);
        $btn.find('img:nth-child(2)').stop(true).animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        var $btn = $(this).stop(true).animate({
            backgroundColor: '#191970',
			opacity:'0.7',
            color: '#01b169',
        }, duration);
        $btn.find('img:first-child').stop(true).animate({opacity: 1}, duration);
        $btn.find('img:nth-child(2)').stop(true).animate({opacity: 0}, duration);
    });


});


