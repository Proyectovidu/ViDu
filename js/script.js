// Close hamb when scroll down
$(".nav-item").click(() => {
    $(".navbar-toggler").addClass("collapsed")
    $(".navbar-collapse").removeClass("show");
})

// Nav hideshow
var prevScrollpos = window.pageYOffset;
$(window).scroll(() => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".navbar").slideDown(600);
  } else {
    $(".navbar").fadeOut(200);
    $(".navbar-collapse").removeClass("show");
  }
  prevScrollpos = currentScrollPos;
});