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
//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp
var menuButton = document.querySelector("#menu");
var header = document.querySelector("header");
var burgerMenu = document.querySelector(".burger-menu");
var burgerMenuCont = document.querySelector(".burger-menu-container");
var body = document.querySelector("body");
var bodyCont = document.querySelector(".body-container");
var main = document.querySelector("main");
var menuOverlay = document.querySelector(".menu-open-overlay");
var footer = document.querySelector("footer");
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
    //header.style.transform = "none";

    bodyCont.style.transform = "translateX(0px)"; // header.style.transform = "translateX(0px)";
    // main.style.transform = "translateX(0px)";
    // footer.style.transform = "translateX(0px)";

    menuOverlay.style.transform = "translateX(0px)";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
    menuOverlay.style.zIndex = "0"; //body.style.overflowY = "auto";

    burgerMenuCont.style.overflowY = "scroll"; //scroll bar remains visible, but sits behind the bodyCont scroll bar
    //burgerMenuCont.style.overflowY = "hidden"; //removes menu scroll functionality 
  }; // const hideScroll = () => {
  //     //bodyCont.style.transition = "all 1s ease-out 3s";
  //     bodyCont.style.overflowY = "hidden";
  // }
  //no longer needed, due to changes above
  // burgerMenu.classList.toggle("menu-hide"); //default setting is hide, already added to the html
  // if (burgerMenu.classList.contains("menu-hide")) {
  //     closeNav();
  // } else {
  //     openNav();
  // }

};
/******/ })()
;