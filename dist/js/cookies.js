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
      cookiesOuter.style.display = "flex"; //was "block"; 

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
    cookiesOuter.style.display = "none"; //was overlay
  });
};
/******/ })()
;