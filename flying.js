$( "span" ).hover(function() {
  $(this).css('margin-left', function (index, curValue) {
    if (parseInt(curValue, 10) < $("body").width() - 500) {
    console.log(parseInt(curValue, 10))
    return parseInt(curValue, 10) + 50 + 'px';}
    else {return 0 + 'px';}
});

});
