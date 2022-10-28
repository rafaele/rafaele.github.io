$(document).foundation();
$(document).ready(function(){
	$.jribbble.getShotsByPlayerId('rafaele', LoadDribbbleShots);
	$('.banner-slider').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 10000,              //  The delay between slide animations (in milliseconds)
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true 
	});
});
function LoadDribbbleShots(playerShots){
	
	var html = [];

    $.each(playerShots.shots, function (i, shot) {
    	if(i<12){
    		html.push('<li><a href="' + shot.url + '" target="_blank">');
	        html.push('<img src="' + shot.image_teaser_url + '" ');
	        html.push('alt="' + shot.title + '"></a></li>');	
    	}
        
    });

    $('#shotsByRafaele').html(html.join(''));
}