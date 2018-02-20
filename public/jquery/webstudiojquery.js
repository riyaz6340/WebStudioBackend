var pxlCount = 0
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop()/60;
  	$('p.pxlCount > span').text(pxlCount);
    $(".background-image-top").css({"-webkit-filter": "blur("+pxlCount+"px)","-moz-filter": "blur("+pxlCount+"px)","filter": "blur("+pxlCount+"px)" })     
});