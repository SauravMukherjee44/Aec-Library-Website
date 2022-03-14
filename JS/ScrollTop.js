$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 40) {
        $('#topBtn').css({
          "opacity": "1", "pointer-events": "auto"
        });
      } else {
        $('#topBtn').css({
          "opacity": "0", "pointer-events": "none"
        });
      }
    });

    $("#topBtn").click(function () {
      $('html ,body').animate({ scrollTop: 0 }, 400);
    });
  });