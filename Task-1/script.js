// 8th code goes, writing the code for sticky navabar
const header = document.querySelector("header");
function stickyNavbar() {
    header.classList.toggle("scrolled", window.scrollY > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
// --end--

// 11th code continues here, adding the scroll reveal animation
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});
sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", {origin: "left", delay: 700});

