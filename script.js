const hamburger = document.querySelector(".hamburger");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const bgOverlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    bgOverlay.classList.toggle("bg-overlay");
})

menuClose.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    bgOverlay.classList.toggle("bg-overlay");
})

// hamburger.addEventListener("click", function () { //adds an event listener that makes the menu tab appear
//     menu.classList.toggle("hidden"); //the toggle method removes the ".hidden" class from the MENU classList
//     bgOverlay.classList.toggle("bg-overlay"); //the toggle method removes the ".hidden" class from the MENU classList
// })

// menuClose.addEventListener("click", function () { //adds an event listener that makes the menu tab disappear
//     menu.classList.toggle("hidden"); //the toggle method adds the ".hidden" class to the MENU classList
//     bgOverlay.classList.toggle("bg-overlay"); //the toggle method removes the ".hidden" class from the MENU classList
// })