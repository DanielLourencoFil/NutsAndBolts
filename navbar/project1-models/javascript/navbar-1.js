// setup nav
const navBtn = document.getElementById("burguer-btn");
const navbar = document.getElementById("menu-links");
const navExit = document.getElementById("exit-btn")
// const navClose = document.getElementById(".burguer-btn");
// show nav
navBtn.addEventListener("click", function () {
    navbar.classList.toggle("show-links");
});

// navExit.