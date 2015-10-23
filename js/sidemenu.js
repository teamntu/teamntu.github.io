$(function(){

	var duration = 300;

	var $aside = $('.page-main > aside');
	var $asideButton = $aside.find('button')
		.on('click', function(){
			$aside.toggleClass('open');
			if($aside.hasClass('open')){
				$aside.stop(true).animate({
					left:'0px'
				}, duration, 'easeOutBack');

				$asidButton.find('img')
					.attr('src', 'img/btn_open.png');
			}else{
				$aside.stop(true).animate({
					left: '-220px'
				}, duration, 'easeInBack');
				$asidButton.find('img')
					.attr('src', 'img/btn_close.png');
			};
		});
});
