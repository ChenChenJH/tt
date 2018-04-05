/**左侧联系栏的js*/
 $(function() {
	//QQ移上去显示和隐藏
	$('.qq_shows').hover(function(){
		$('.qq_hides').show();
		$(this).hide();
	});
	$('.qq_hides').mouseout(function(){
		$('.qq_shows').show();
		$(this).hide();
	});

	//电话移上去显示和隐藏
	$('.tel_shows').hover(function(){
		$('.tel_hides').show();
		$(this).hide();
	});
	$('.tel_hides').mouseout(function(){
		$('.tel_shows').show();
		$(this).hide();
	});

	//顶部图标移上去显示和隐藏
	$('.top_shows').hover(function(){
		$('.top_hides').show();
		$(this).hide();
		$('.top_hides').animate({marginLeft: '0px'},500);
	});
	$('.top_hides').mouseout(function(){
		$('.top_shows').show();
		$(this).hide();
	});
    //返回顶部
    $("#top_btn").click(function() {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    //右侧导航 - 二维码
    $(".weixin_area").hover(function() {
        $(this).children(".weixin").show();
    },function(){
        $(this).children(".weixin").hide();
    })
});