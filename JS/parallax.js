$(document).ready(function () {
  $(window).scroll(function () {
    let windowWidth = $(document).width();

    if (windowWidth > 820) {
      let scroll = $(window).scrollTop();

      $("header .textos").css({
        transform: "translate(0px," + scroll / 2 + "%)",
      });

      $(".acerca-de article").css({
        transform: "translate(0px, -" + scroll / 4 + "%)",
      });
    }
  });

  $(window).resize(function () {
    let windowWidth = $(document).width();
    if (windowWidth < 820) {
      $(".acerca-de article").css({
        transform: "translate(0px, 0px)",
      });
    }
  });
});
