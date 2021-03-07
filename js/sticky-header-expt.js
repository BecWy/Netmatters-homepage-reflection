//code adapted from:
// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
//I have edited the code (both JS (minor changes) and SCSS (more changes)), but it is very similar to the original

//currently the related css can be found in js.scss, under STICKY HEADER
const header = document.querySelector("header");
const body = document.querySelector("body");
const bodyCont = document.querySelector(".body-container");


//THIS SECTION WORKS WITH ADDING/REMOVING CLASSES ON SCROLL & SCROLL DIRECTION!!!!!!!!!! Just need to sort out the classes
scrollTop = bodyCont.scrollTop;
console.log(`This is the scroll top in pixels: ${scrollTop}`);


bodyCont.onscroll = function() {myFunction()};
let previous = 0;

function myFunction() {
//   if (bodyCont.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) {
    //header.className = "nav-hide";
    header.classList.remove("nav-show");
    header.classList.add("nav-hide");
  } else {
    //header.className = "nav-show";
    header.classList.remove("nav-hide");
    header.classList.add("nav-show");
  }
  previous = bodyCont.scrollTop;
}

