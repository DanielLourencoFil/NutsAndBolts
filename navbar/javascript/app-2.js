// setup nav
const navBtn = document.getElementById("burguer-btn");
const navbar = document.getElementById("navside-center");
const navExit = document.getElementById("exit-btn")
// const navClose = document.getElementById(".burguer-btn");
// show nav
navBtn.addEventListener("click", function () {
    navbar.classList.add("shown-navside-center");
})

navExit.addEventListener("click", function () {
    navbar.classList.remove("shown-navside-center");
})