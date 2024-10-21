const parallax = document.querySelector(".parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.3 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});