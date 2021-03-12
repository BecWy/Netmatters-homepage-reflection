//This file imports all of my other JS files
//jQuery and plugins are separate to avoid any potential conflicts/issues.

import { cookiesJS } from "./cookies.js"
import { searchbarJS } from "./searchbar.js"
import { stickyHeader } from "./sticky-header.js"
import { burgerMenuJS } from "./burger-menu.js"
import stickybits from "stickybits"

const app = () => {
    burgerMenuJS();
    cookiesJS();
    stickyHeader();
    searchbarJS();
}

app();

//stickybits(document.querySelector("header"), { scrollEl: document.querySelector(".body-container") });

////////////////////////////////////////////////////////////////////////////////////////////
//I need to find a way to make the display update whenever the viewport is resized. 
//Or something along those lines.

// //doesn't work
// window.onresize = app();

// //doesn't work
// window.addEventListener('resize', () => {
//     stickyHeader();
//     burgerMenuJS();
// });
      
// //doesn't work
//window.addEventListener('resize', app);
