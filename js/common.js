/* main visual banner */
$(function () {
	var slider = $('#mainBanner').bxSlider({
		mode: 'fade',
		speed: 1300,
		pager: false,
		controls: false,
		auto: true
	});
});
/* main visual banner */

/* gnb action */
$(function() {
	$(".gnb li a").click(function(e) {
		e.preventDefault();
		var cont_id = $(this).attr("class");
		$("html, body").animate({ scrollTop:$("#" + cont_id).offset().top - 80 }, 'slow');
	});
	
	$("h1 a").click(function(e){
		e.preventDefault();
		$("body, html").animate({"scrollTop":"0"}, 600);
		return false;
		});
});					

$(function() {
	var position = [];
    
    $('.content_block').each(function(){
        position.push(Math.abs($(this).position().top))
    })

    $(window).scroll( function() {        
        var value = $(this).scrollTop() + $('#menu').height();        
        $.each(position, function(i){
            if(this > value){
                $('.active').removeClass('active');
                $("#menu li").eq(i).addClass('active');
                return false;
            }
        })
    });
});
/* gnb action */

/* project action */
$(function() {
	$(".project_cont ul li").mouseenter(function() {
		$(this).find(".portfolio_img").animate( {"opacity":"1" }, 400);
		}).mouseleave(function() {
		$(this).find(".portfolio_img").animate( {"opacity":"0.7" }, 400);
	});
});
/* project action */

/* image alternate tag script */
$(function() {
	var project_list = $('.project_cont > ul > li');
	
	for(i = 0; i < project_list.length; i++) {
		var project_title = $('.project_cont > ul > li:eq("' + i + '") .project_title').text();
		var project_img = $('.project_cont > ul > li:eq("' + i + '") a > img');
		project_img.attr('alt', project_title);
	}
	return false;
});
/* image alternate tag script */