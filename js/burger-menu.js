//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

const menuButton = document.querySelector("#menu");
const burgerMenu = document.querySelector(".burger-menu");
const pageContent = document.querySelector("body");
const main = document.querySelector("main");
const overlay = document.querySelector(".menu-open-overlay");

menuButton.addEventListener('click', () => {
    menuToggle();
})

overlay.addEventListener('click', () => {
    menuToggle();
})

const menuToggle = () => {
    burgerMenu.classList.toggle("menu-hide"); //default setting is hide, already added to the html
    if (burgerMenu.classList.contains("menu-hide")) {
        closeNav();
    } else {
        openNav();
    }
}



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    burgerMenu.style.width = "238px";
    pageContent.style.marginLeft = "-238px";
    overlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    burgerMenu.style.width = "0";
    pageContent.style.marginLeft = "0";
    overlay.style.backgroundColor = "rgba(0,0,0, 0)";
  }



//CSS///////////////////////////////////////////////////////////////////////////////////////////
//looks like i need to set the width of the menu to 0 inititally
//   width: 0; /* 0 width - change this with JavaScript */
// overflow-x: hidden; /* Disable horizontal scroll */
// transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
// #main {
//     transition: margin-left .5s;
//     padding: 20px;
//   }



/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
// @media screen and (max-height: 450px) {
//     .sidenav {padding-top: 15px;}
//     .sidenav a {font-size: 18px;}
//   }



