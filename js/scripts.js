$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").toggle();
    $("walrus-hidden").fadeIn();
  });
});