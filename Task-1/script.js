// 8th code goes, writing the code for sticky navabar
const header = document.querySelector("header");
function stickyNavbar() {
    header.classList.toggle("scrolled", window.scrollY > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
