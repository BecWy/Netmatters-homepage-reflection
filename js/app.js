//This file imports all of my other JS files
//jQuery and plugins are separate to avoid any potential conflicts/issues.

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

// let bodyContWidth = document.querySelector(".body-container").clientWidth;
// console.log(`The bodyCont width is ${bodyContWidth}`);
// document.querySelector("header").style.width = `${bodyContWidth}px`;
// console.log(`The header width is ${bodyContWidth}`);



