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
var body = document.querySelector("body");
var cookiesJS = function cookiesJS() {
  document.addEventListener("DOMContentLoaded", function () {
    var cookiesSaved = localStorage.getItem('cookiesAccepted'); //console.log(cookiesSaved); //this works, the value saves as true after the button is clicked.
    //Checks if cookies are saved. Decides whether to display the cookies popup or not.

    if (cookiesSaved === 'yes') {
      cookies.style.display = "none";
      cookiesOuter.style.display = "none";
      console.log("cookies already accepted"); //for testing purposes
    } else {
      cookies.style.display = "block";
      cookiesOuter.style.display = "block"; //"flex" caused issues in mobile as need to scroll

      console.log("user needs to accept cookies"); //for testing purposes

      cookiesOuter.style.overflowY = "auto";
    }
  });
  cookiesButton.addEventListener('click', function () {
    //accesses the current domain's local Storage object and adds a data item to it.
    myStorage.setItem('cookiesAccepted', 'yes');
    console.log('cookies accepted'); //for testing purposes

    cookies.style.display = "none";
    cookiesOuter.style.overflowY = "hidden";
    cookiesOuter.style.display = "none";
  });
};

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
  searchButton.addEventListener('click', function () {
    searchToggle();
  });

  var searchToggle = function searchToggle() {
    if (supportButton.classList.contains("toggle-hide")) {
      supportButton.classList.remove("toggle-hide");
    } else {
      supportButton.classList.add("toggle-hide");
    }

    if (contactButton.classList.contains("toggle-hide")) {
      contactButton.classList.remove("toggle-hide");
    } else {
      contactButton.classList.add("toggle-hide");
    }

    if (searchBar.classList.contains("toggle-search-width")) {
      searchBar.classList.remove("toggle-search-width");
    } else {
      searchBar.classList.add("toggle-search-width");
    }

    if (searchInput.classList.contains("toggle-hide")) {
      searchInput.classList.remove("toggle-hide");
    } else {
      searchInput.classList.add("toggle-hide");
    }
  }; //Works absolutely fine.... except for IE
  // const searchToggle = () => {
  //     supportButton.classList.toggle("toggle-hide"); //displays/hides the button
  //     contactButton.classList.toggle("toggle-hide"); //displays/hides the button
  //     searchBar.classList.toggle("toggle-search-width"); //expands the width of the search container 
  //     searchInput.classList.toggle("toggle-hide") // show element - this class is already added to the html
  // }

};

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

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenuJS": function() { return /* binding */ burgerMenuJS; }
/* harmony export */ });
//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp
var menuButton = document.querySelector("#menu"); //const header = document.querySelector("header");

var burgerMenu = document.querySelector(".burger-menu");
var burgerMenuCont = document.querySelector(".burger-menu-container"); //const body = document.querySelector("body");

var bodyCont = document.querySelector(".body-container"); //const main = document.querySelector("main");

var menuOverlay = document.querySelector(".menu-open-overlay"); //const footer = document.querySelector("footer");

var burgerMenuJS = function burgerMenuJS() {
  document.addEventListener('DOMContentLoaded', function () {
    closeNav();
  }); // window.addEventListener('resize', () => { //not working
  //     closeNav();
  // })

  menuButton.addEventListener('click', function () {
    openNav();
  });
  menuOverlay.addEventListener('click', function () {
    closeNav();
  }); // bodyCont.addEventListener('animationend', () => {
  //     hideScroll();
  // })

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

  var openNav = function openNav() {
    //body.style.overflowY = "hidden";
    burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll functionality

    burgerMenu.style.transition = "all 1s ease-out 0s";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
    menuOverlay.style.zIndex = "800";
    bodyCont.style.transition = "all 1s ease-out"; // header.style.transition = "all 1s ease-out";
    // main.style.transition = "all 1s ease-out";
    // footer.style.transition = "all 1s ease-out";

    menuOverlay.style.transition = "all 1s ease-out";

    if (window.matchMedia('(min-width: 993px)').matches) {
      //wide screens
      bodyCont.style.transform = "translateX(-350px)"; //bodyCont.style.marginLeft = "-350px";
      // header.style.transform = "translateX(-350px)";
      // main.style.transform = "translateX(-350px)";
      // footer.style.transform = "translateX(-350px)";

      menuOverlay.style.transform = "translateX(-350px)";
    } else {
      //small screens
      bodyCont.style.transform = "translateX(-270px)"; // header.style.transform = "translateX(-270px)";
      // main.style.transform = "translateX(-270px)";
      // footer.style.transform = "translateX(-270px)";

      menuOverlay.style.transform = "translateX(-270px)";
    }
  };
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */


  var closeNav = function closeNav() {
    burgerMenu.style.transition = "all 1s ease-out 3s"; //doesn't disappear until covered by the main content again

    bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header

    menuOverlay.style.transform = "translateX(0px)";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
    menuOverlay.style.zIndex = "0";
    burgerMenuCont.style.overflowY = "scroll"; //scroll bar remains visible, but sits behind the bodyCont scroll bar
  };
};

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





var app = function app() {
  (0,_burger_menu_js__WEBPACK_IMPORTED_MODULE_3__.burgerMenuJS)();
  (0,_cookies_js__WEBPACK_IMPORTED_MODULE_0__.cookiesJS)();
  (0,_searchbar_js__WEBPACK_IMPORTED_MODULE_1__.searchbarJS)();
  (0,_sticky_header_js__WEBPACK_IMPORTED_MODULE_2__.stickyHeader)();
};

app(); // //not working properly
// window.onresize = app();
//not working properly
// window.addEventListener('resize', () => {
//     stickyHeader();
//     burgerMenuJS();
// });
//not working properly
//window.addEventListener('resize', app);
}();
/******/ })()
;