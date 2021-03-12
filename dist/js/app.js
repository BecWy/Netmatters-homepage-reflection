/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookiesJS": function() { return /* binding */ cookiesJS; }
/* harmony export */ });
var myStorage = window.localStorage;
var cookies = document.querySelector(".cookies");
var cookiesButton = document.querySelector("#cookies-button");
var cookiesOuter = document.querySelector(".cookies-outer-container");
var cookiesJS = function cookiesJS() {
  //re-activate when switch back to the app js file after testing
  //const cookiesJS = () => { // this line is for testing only
  document.addEventListener("DOMContentLoaded", function () {
    var cookiesSaved = localStorage.getItem('cookiesAccepted'); //Checks if cookies are saved. Decides whether to display the cookies popup or not.

    if (cookiesSaved === 'yes') {
      cookies.style.display = "none";
      cookiesOuter.style.display = "none"; //console.log("cookies already accepted"); //for testing purposes
    } else {
      cookies.style.display = "block";
      cookiesOuter.style.display = "block"; //"flex" caused issues in mobile as need the ability to scroll
      //console.log("user needs to accept cookies"); //for testing purposes

      cookiesOuter.style.overflowY = "auto";
    }
  }); //when cookies are accepted by the user

  cookiesButton.addEventListener('click', function () {
    //accesses the current domain's local Storage object and adds a data item to it.
    myStorage.setItem('cookiesAccepted', 'yes'); //console.log('cookies accepted'); //for testing purposes
    //hides the popup

    cookies.style.display = "none";
    cookiesOuter.style.overflowY = "hidden";
    cookiesOuter.style.display = "none";
  });
}; //cookiesJS(); for when testing this as a separate file

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchbarJS": function() { return /* binding */ searchbarJS; }
/* harmony export */ });
var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var searchInput = document.querySelector("#search-bar-input");
var supportButton = document.querySelector("#support-button");
var contactButton = document.querySelector("#contact-button");
var searchbarJS = function searchbarJS() {
  //re-activate when switch back to the app js file after testing
  //const searchbarJS = () => {    // this line is for testing only
  searchButton.addEventListener('click', function () {
    searchToggle();
  }); //Works absolutely fine.... except for IE

  var searchToggle = function searchToggle() {
    supportButton.classList.toggle("toggle-hide"); //displays/hides the button

    contactButton.classList.toggle("toggle-hide"); //displays/hides the button

    searchBar.classList.toggle("toggle-search-width"); //expands the width of the search container 

    searchInput.classList.toggle("toggle-hide"); // show element - this class is already added to the html
  }; // const searchToggle = () => {
  //     if(supportButton.classList.contains("toggle-hide")) {
  //         supportButton.classList.remove("toggle-hide");
  //     } else {
  //         supportButton.classList.add("toggle-hide");
  //     } 
  //     if(contactButton.classList.contains("toggle-hide")) {
  //         contactButton.classList.remove("toggle-hide");
  //     } else {
  //         contactButton.classList.add("toggle-hide");
  //     }
  //     if(searchBar.classList.contains("toggle-search-width")) {
  //         searchBar.classList.remove("toggle-search-width");
  //     } else {
  //         searchBar.classList.add("toggle-search-width");
  //     }
  //     if(searchInput.classList.contains("toggle-hide")) {
  //         searchInput.classList.remove("toggle-hide");
  //     } else {
  //         searchInput.classList.add("toggle-hide");
  //     }
  // }

}; //searchbarJS(); for testing purposes only - this breaks it if it's set to export.

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickyHeader": function() { return /* binding */ stickyHeader; }
/* harmony export */ });
//currently the related css can be found in js.scss, under STICKY HEADER
var header = document.querySelector("header");
var body = document.querySelector("body");
var bodyCont = document.querySelector(".body-container");
var stickyHeader = function stickyHeader() {
  //re-activate when switch back to the app js file after testing
  //const stickyHeader = () => { // this line is for testing only
  bodyCont.onscroll = function () {
    sticky();
  };

  var previous = 0;

  function sticky() {
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
};
stickyHeader();

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenuJS": function() { return /* binding */ burgerMenuJS; }
/* harmony export */ });
//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp
var menuButton = document.querySelector("#menu"); //const burgerMenu = document.querySelector(".burger-menu"); //not needed currently, but left it here just in case

var burgerMenuCont = document.querySelector(".burger-menu-container");
var bodyCont = document.querySelector(".body-container");
var menuOverlay = document.querySelector(".menu-open-overlay");
var burgerMenuJS = function burgerMenuJS() {
  //re-activate when switch back to the app js file after testing
  //const burgerMenuJS = () => { // this line is for testing only
  document.addEventListener('DOMContentLoaded', function () {
    closeNav();
  }); //I want to find a way to make the viewport resize transition smoother. 
  //This is most problematic when the menu is open, so maybe automatically closing it on resize is smart? Not sure
  // window.addEventListener('resize', () => { //not working
  //     closeNav();
  // })
  //When the burger menu icon is clicked the side menu is revealed

  menuButton.addEventListener('click', function () {
    openNav();
  }); //when the overlay over the main page content is clicked the side menu is hidden.

  menuOverlay.addEventListener('click', function () {
    closeNav();
  }); //pushes the page content to the left, revealing the sidebar below

  var openNav = function openNav() {
    burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll

    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
    menuOverlay.style.zIndex = "800"; //makes the overlay cover the main page content, adding the semi-transparent layer and preventing the main content from being scrolled or clicked on.

    bodyCont.style.transition = "all .5s ease-out";
    menuOverlay.style.transition = "all .5s ease-out";

    if (window.matchMedia('(min-width: 993px)').matches) {
      //wide screens
      bodyCont.style.transform = "translateX(-350px)";
      menuOverlay.style.transform = "translateX(-350px)";
    } else {
      //small screens
      bodyCont.style.transform = "translateX(-270px)";
      menuOverlay.style.transform = "translateX(-270px)";
    }
  }; //moves the page content back to the right, covering the sidebar


  var closeNav = function closeNav() {
    bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.

    menuOverlay.style.transform = "translateX(0px)";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
    menuOverlay.style.zIndex = "0";
    setTimeout(function () {
      burgerMenuCont.scrollTop = 0;
    }, 600);
  };
}; //burgerMenuJS(); //for use when testing this as a separate file

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _searchbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _sticky_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _burger_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
//This file imports all of my other JS files
//jQuery and plugins are separate to avoid any potential conflicts/issues.





var app = function app() {
  (0,_burger_menu_js__WEBPACK_IMPORTED_MODULE_3__.burgerMenuJS)();
  (0,_cookies_js__WEBPACK_IMPORTED_MODULE_0__.cookiesJS)();
  (0,_sticky_header_js__WEBPACK_IMPORTED_MODULE_2__.stickyHeader)();
  (0,_searchbar_js__WEBPACK_IMPORTED_MODULE_1__.searchbarJS)();
};

app(); ////////////////////////////////////////////////////////////////////////////////////////////
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
}();
/******/ })()
;