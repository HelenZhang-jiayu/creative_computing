
$(".main_img").hover(function(){
	$(".main_img > img").attr('src','bird2.jpg');
	$(".sub_vid").addClass("additionalClass");
},function(){
	$(".main_img > img").attr('src','bird.jpg');
	$(".sub_vid").removeClass("additionalClass");
});
