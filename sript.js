// Grab the navbar element
const navbarNav = document.querySelector(".navbar-nav");

// Grab the hamburger menu button

// Check if the hamburger menu exists before adding the event listener
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik di luar sidebar untuk  menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
