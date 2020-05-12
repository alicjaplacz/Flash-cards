

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll > 50) {
    $("#myHeader").addClass("header-small");
    $("#myTitle").addClass("header-small");
    $("#myBelowTitle").addClass("belowtitle-small");
  } else {
    $("#myHeader").removeClass("header-small");
    $("#myTitle").removeClass("header-small");
    $("#myBelowTitle").removeClass("belowtitle-small");
  }
});
