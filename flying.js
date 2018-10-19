var jetsOverTheSideCount = 0

$(".planes").hover(function() {
  $(this).css('margin-left', function (index, curValue) {
    if (parseInt(curValue, 10) < $("body").width() - 300) {
    console.log($(this).attr('id'), "is at", parseInt(curValue, 10) +"px")
    return parseInt(curValue, 10) + Math.floor(50 + Math.random()*(70 + 1 - 50)) + 'px';}
    else {
	jetsOverTheSideCount += 1;
	$("#jetsOverTheSide").text(jetsOverTheSideCount);
	return "10px";}
});

});
