/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenuJS": function() { return /* binding */ burgerMenuJS; }
/* harmony export */ });
var menuButton = document.querySelector("#menu"); //const burgerMenu = document.querySelector(".burger-menu"); //not needed currently, but left it here just in case

var burgerMenuCont = document.querySelector(".burger-menu-container");
var bodyCont = document.querySelector(".body-container");
var menuOverlay = document.querySelector(".menu-open-overlay");
var header = document.querySelector("header");
var bodyContWidth = document.querySelector(".body-container").clientWidth; //this is the width of the body container. It is used as a comparison for the header, to make sure that the header width is always the same as the body width. Position fixed in IE will make the header cover the scroll bar otherwise
//for IE purposes. Returns the value of the header's css position - sticky or fixed

var headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase(); //console.log(`the header position is ${headerPosition}`); //for testing

var internetExplorer = false;
var burgerMenuJS = function burgerMenuJS() {
  //re-activate when switch back to the app js file after testing
  //const burgerMenuJS = () => { // this line is for testing only
  //determine if the browser supports position: sticky
  if (headerPosition === "sticky") {
    internetExplorer = false;
    console.log("the browser is modern and supports sticky");
  } else {
    internetExplorer = true;
    console.log("the browser is old and does not support sticky");
  } //on page load the side menu is closed


  document.addEventListener('DOMContentLoaded', function () {
    closeNav();
  }); //When the burger menu icon is clicked the side menu is revealed

  menuButton.addEventListener('click', function () {
    openNav();
  }); //when the overlay over the main page content is clicked the side menu is hidden.

  menuOverlay.addEventListener('click', function () {
    closeNav();
  }); //is the menu open

  var menuOpen = false; //When the page is resized, this updates the distance the page content translates to the left

  window.addEventListener('resize', function () {
    if (internetExplorer === true) {
      bodyContWidth = document.querySelector(".body-container").clientWidth; //get the value each time

      header.style.width = "".concat(bodyContWidth, "px"); //makes sure the header is the correct width if set to position:fixed (for IE sticky header settings)
    } //for wide screens with the menu open translate the page content by the correct distance


    if (window.matchMedia('(min-width: 993px)').matches && menuOpen === true) {
      bodyCont.style.transform = "translateX(-350px)";
      menuOverlay.style.transform = "translateX(-350px)";
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
      header.style.transition = "none"; //only applies to IE - makes sure there's no transition

      if (internetExplorer === true) {
        header.style.transform = "translateX(-350px)";
      } //for small screens with the menu open translate the page content by the correct distance

    } else if (menuOpen === true) {
      //small screens
      bodyCont.style.transform = "translateX(-270px)";
      menuOverlay.style.transform = "translateX(-270px)";
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
      header.style.transition = "none"; //only applies to IE - makes sure there's no transition

      if (internetExplorer === true) {
        header.style.transform = "translateX(-270px)";
      } //when the menu is closed and resized, this avoids part of the menu displaying unintentionally due to the transition time

    } else {
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
      header.style.transition = "none"; //only applies to IE - makes sure there's no transition
    }
  }); //pushes the page content to the left, revealing the sidebar below

  var openNav = function openNav() {
    burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll

    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
    menuOverlay.style.zIndex = "800"; //makes the overlay cover the main page content, adding the semi-transparent layer and preventing the main content from being scrolled or clicked on.

    bodyCont.style.transition = "all .5s ease-out";
    menuOverlay.style.transition = "all .5s ease-out";

    if (internetExplorer === true) {
      header.style.transition = "all .5s ease-out"; //header.style.paddingTop = bodyCont.scrollTop;
    }

    if (window.matchMedia('(min-width: 993px)').matches) {
      //wide screens
      bodyCont.style.transform = "translateX(-350px)";
      menuOverlay.style.transform = "translateX(-350px)"; //if the browser is IE and therefore the position setting is fixed instead of sticky

      if (internetExplorer === true) {
        header.style.transform = "translateX(-350px)";
      }
    } else {
      //small screens
      bodyCont.style.transform = "translateX(-270px)";
      menuOverlay.style.transform = "translateX(-270px)";
      header.style.transform = "translateX(-270px)"; //if the browser is IE and therefore the position setting is fixed instead of sticky

      if (internetExplorer === true) {
        //console.log(`header position is ${headerPosition}`) testing
        header.style.transform = "translateX(-270px)";
      } else {
        header.style.transform = "none";
      }
    }

    menuOpen = true;
  }; //moves the page content back to the right, covering the sidebar


  var closeNav = function closeNav() {
    bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.

    menuOverlay.style.transform = "translateX(0px)";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
    menuOverlay.style.zIndex = "0";
    bodyCont.style.transition = "all .5s ease-out";
    menuOverlay.style.transition = "all .5s ease-out";

    if (internetExplorer === true) {
      header.style.transition = "all .5s ease-out";
      header.style.transform = "none"; //if the translate was applied on open nav (aka in IE) then it is now removed.

      bodyContWidth = document.querySelector(".body-container").clientWidth; //get the value each time

      header.style.width = "".concat(bodyContWidth, "px"); //makes sure the header is the correct width if set to position:fixed (for IE sticky header settings)
    }

    setTimeout(function () {
      burgerMenuCont.scrollTop = 0;
    }, 600);
    menuOpen = false;
  };
}; //burgerMenuJS(); //for use when testing this as a separate file
/******/ })()
;