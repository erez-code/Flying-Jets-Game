$( "span" ).hover(function() {
  $(this).css('margin-left', function (index, curValue) {
    if (parseInt(curValue, 10) < 800) {
    console.log(parseInt(curValue, 10))
    return parseInt(curValue, 10) + 10 + 'px';}
});

});