// setup nav
const navBtn = document.getElementById("burguer-btn");
const navbar = document.getElementById("nav-menu");
const navbar2 = document.getElementById("nav-menu2");
const navExit = document.getElementById("exit-btn")
// const navClose = document.getElementById(".burguer-btn");
// show nav
navBtn.addEventListener("click", function () {
    navbar.classList.toggle("show-links");
    navbar2.classList.toggle("show-links");
});

// navExit.