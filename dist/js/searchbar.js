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
searchbarJS();
/******/ })()
;