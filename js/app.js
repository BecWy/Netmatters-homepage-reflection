//////////////////////////////////////////////////////////////////////////////////////////
//all document query selectors
//////////////////////////////////////////////////////////////////////////////////////////////

// //General
// const menuButton = document.querySelector("#menu");
// const header = document.querySelector("header");
// const burgerMenu = document.querySelector(".burger-menu");
// const burgerMenuCont = document.querySelector(".burger-menu-container");
// const body = document.querySelector("body");
// const main = document.querySelector("main");
// const menuOverlay = document.querySelector(".menu-open-overlay");
// const footer = document.querySelector("footer");

// //specifically for the cookies popup
// const myStorage = window.localStorage;
// const cookies = document.querySelector(".cookies");
// const cookiesButton = document.querySelector("#cookies-button");
// const cookiesOverlay = document.querySelector(".cookies-open-overlay");
// const cookiesOuter = document.querySelector(".cookies-outer-container");

// //specifically for the search bar toggle
// const searchBar = document.querySelector("#search-bar");
// const searchButton = document.querySelector("#search-button");
// const searchInput = document.querySelector("#search-bar-input");
// const supportButton = document.querySelector("#support-button");
// const contactButton = document.querySelector("#contact-button");

import { cookiesJS } from "./cookies.js"
import { searchbarJS } from "./searchbar.js"
import { stickyHeader } from "./sticky-header.js"
import { burgerMenuJS } from "./burger-menu.js"

const app = () => {
    burgerMenuJS();
    cookiesJS();
    stickyHeader();
    searchbarJS();
}

app();



// //not working properly
// window.onresize = app();

//not working properly
// window.addEventListener('resize', () => {
//     stickyHeader();
//     burgerMenuJS();
// });
      
//not working properly
//window.addEventListener('resize', app);
