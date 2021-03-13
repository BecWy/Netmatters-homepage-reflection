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
/* harmony export */   "stickyHeader": function() { return /* binding */ stickyHeader; }
/* harmony export */ });
//currently the related css can be found in js.scss, under STICKY HEADER
var header = document.querySelector("header"); //const body = document.querySelector("body"); //not currently used

var bodyCont = document.querySelector(".body-container"); //let scrollbarWidth = bodyCont.offsetWidth - bodyCont.clientWidth;
//header.style.width = "100vh" - scrollbarWidth; 
// console.log(`The bodyCont width is ${bodyCont.clientWidth}`);
// header.style.width = bodyCont.clientWidth;

var stickyHeader = function stickyHeader() {
  //re-activate when switch back to the app js file after testing
  //const stickyHeader = () => { // this line is for testing only
  //when the body content is scrolls the sticky function is run
  bodyCont.onscroll = function () {
    sticky();
  };

  var previous = 0; //this is the previous value of scrolltop. It is used to compare with the new value of scrolltop.

  function sticky() {
    //compares the current value of scrolltop with the previous value of scrolltop to determine the scroll direction.
    //Scrolling down - hide the top nav
    if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) {
      header.classList.remove("nav-show");
      header.classList.add("nav-hide");
    } //if there is no change - i.e. the burger menu is open
    // else if (bodyCont.scrollTop === previous){
    //   if () {
    //   }
    // }
    //Scrolling up - display the top nav
    else {
        header.classList.remove("nav-hide");
        header.classList.add("nav-show"); //stickybits(document.querySelector("header")); //Plugin I tried to help with IE - doesn't work
        //Stickyfill.add(header); //Plugin I tried to help with IE - doesn't work
      } //set the current value as the new previous value so that it can be used in the next comparison.


    previous = bodyCont.scrollTop;
  }
}; //stickyHeader(); for when testing this as a separate file only
/******/ })()
;