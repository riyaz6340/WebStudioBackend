var pxlCount = 0
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop() / 60;
    $('p.pxlCount > span').text(pxlCount);
    $(".background-image-top").css({"-webkit-filter": "blur(" + pxlCount + "px)", "-moz-filter": "blur(" + pxlCount + "px)", "filter": "blur(" + pxlCount + "px)"})
});
$(document).ready(function () {
    var temp;
    var temp2;
    var bol = true;
    $(".menu").click(function () {
        temp = this.id;
        if (temp != temp2) {
            $("#" + temp2 + "block").hide();
            $("#" + temp + "block").show();
        }
        if (temp == temp2)
        {
            $("#" + temp2 + "block").hide();
            temp = "";
        }
        temp2 = temp;
        
    });
$("body").click(function (e) {
        if (e.target.className != "menu" && e.target.className !== "header-block")
        {
            $(".header-block").hide();
        }
    });
});
