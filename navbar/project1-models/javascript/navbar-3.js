// setup nav
const navBtn = document.getElementById("burguer-btn");
const navbar = document.getElementById("nav-menu");
const navShadow = document.querySelector("nav");
const navbar2 = document.getElementById("nav-menu2");
const navExit = document.getElementById("exit-btn")

// show nav
navBtn.addEventListener("click", function () {
    navbar.classList.toggle("show-links");
    navbar2.classList.toggle("show-links");
     navShadow.classList.toggle("remove-shadow");
   
});

// navExit.