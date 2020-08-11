$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable1").click(function() {
    $("#aardvark-showing").toggle();
    $("#aardvark-hidden").toggle();
  });
});