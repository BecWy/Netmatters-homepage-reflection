/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
//currently the related css can be found in js.scss, under STICKY HEADER
var header = document.querySelector("header");
var bodyCont = document.querySelector(".body-container"); //export const stickyHeader = () => { //re-activate when switch back to the app js file after testing

var stickyHeader = function stickyHeader() {
  // this line is for testing only
  //console.log(`the header position is ${headerPosition}`); //for testing
  var internetExplorer = false; //get the header position to test if position:sticky is supported by the browser

  var headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase(); //each time the user scrolls the scrollTop value is saved so it can be used to compare against the next value of scrollTop

  var previousScrollTop = 0; //each time the user scrolls the scrollDirection is saved so it can be used to compare against the next value of scrollDirection

  var previousScrollDirection = "up"; //store scroll direction

  var scrollDown = false;
  var scrollUp = true; //check if the browser is Internet Explorer

  if (headerPosition === "sticky") {
    internetExplorer = false; //console.log("the browser is modern and supports sticky");
  } else {
    internetExplorer = true; //console.log("the browser is old and does not support sticky");
  } //when the body content is scrolled the sticky function is run


  bodyCont.onscroll = function () {
    sticky();
  }; //when the page is loaded the sticky function is run


  document.addEventListener('DOMContentLoaded', function () {
    sticky();
  }); //call the right function for the browser

  var sticky = function sticky() {
    if (internetExplorer === false) {
      stickyRegular();
    } else {
      stickyIE();
    }
  }; //determine the scroll direction


  var scrollDirection = function scrollDirection() {
    if (bodyCont.scrollTop > previousScrollTop) {
      scrollDown = true;
      scrollUp = false; //console.log('scrolling down'); //for testing
    } else if (previousScrollTop > bodyCont.scrollTop) {
      scrollUp = true;
      scrollDown = false; //console.log('scrolling up'); //for testing
    }
  }; //sticky code for modern browsers


  var stickyRegular = function stickyRegular() {
    scrollDirection();
    var headerHeight = header.clientHeight;
    var windowHeight = window.innerHeight; //if scrolltop is 0

    if (bodyCont.scrollTop === 0) {
      header.classList.remove("nav-hide");
      header.classList.add("nav-show");
    } //SCROLLING DOWN - hide the top nav        
    //Condition 1
    //controls the behaviour when less than the header height is scrolled
    //when scrolling down want the header to remain relatively positioned (don't want it to slide up) until the header is no longer visible
    //when scrolling up want it to stay fixed right up to the very top
    else if (bodyCont.scrollTop < 500 && scrollDown === true) {
        //also try window.innerHeight & header.clientHeight
        header.classList.remove("nav-show");
        header.classList.add("nav-hide"); //set the current value as the new previous value so that it can be used in the next comparison.
        //previousScrollDirection = "down";
        //console.log("scrolling shorter than the window innerheight");
      } // //TEST CONDITION (similar to number 3)
      // else if(bodyCont.scrollTop < 500 && scrollDown === false) { //also try window.innerHeight & header.clientHeight
      //     //header.classList.remove("nav-hide");
      //     //header.classList.add("nav-show");
      //     //set the current value as the new previous value so that it can be used in the next comparison.
      //     previousScrollDirection = "up";
      //     //console.log("scrolling shorter than the window innerheight");
      // }
      //Condition 2
      //when more than the header height has been scrolled down
      //only want to run if the scroll direction changes and have scrolled past the image carousel
      else if (previousScrollDirection !== "down" && scrollDown === true) {
          //removed condition - no longer needed now change of direction is taken into account? && (bodyCont.scrollTop - previousScrollTop) > 10
          header.style.transition = "all .2s ease-out";
          header.style.transform = "translateY(-208px)"; //allow the header to animate before switching to relative positioning

          setTimeout(function () {
            header.classList.remove("nav-show");
            header.classList.add("nav-hide");
          }, 200); //set the current value as the new previous value so that it can be used in the next comparison.

          previousScrollDirection = "down"; //console.log("change direction"); //testing
        } //SCROLLING UP - display the top nav
        //only want to run if the scroll direction changes and the header isn't already visible
        //condition 1
        //when scrolling up and down in the header section don't want the header position to keep switching between relative and sticky
        // else if(bodyCont.scrollTop < 600) { //removed condition && scrollUp === true //also try window.innerHeight & header.clientHeight
        //     //header.classList.remove("nav-hide");
        //     //header.classList.add("nav-show");
        //     //set the current value as the new previous value so that it can be used in the next comparison.
        //     //console.log("scrolling up shorter than the header height");
        //     previousScrollDirection = "up";
        // }
        //condition 2
        else if (previousScrollDirection !== "up" && scrollUp === true) {
            //header.style.animation = "slide 1s forwards";
            //header.classList.add("slide-down");
            header.style.transition = "all .2s ease-out";
            header.style.transform = "translateY(0px)";
            header.classList.remove("nav-hide");
            header.classList.add("nav-show"); //set the current value as the new previous value so that it can be used in the next comparison.

            previousScrollDirection = "up"; //console.log("change direction"); //testing
          } //set the current value as the new previous value so that it can be used in the next comparison.


    previousScrollTop = bodyCont.scrollTop; //console.log("this fucntion is working?")
  }; ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  //sticky code for older browsers, including IE


  var stickyIE = function stickyIE() {
    scrollDirection(); //if scrolltop is 0

    if (bodyCont.scrollTop === 0) {
      header.classList.remove("nav-hide");
      header.classList.add("nav-show"); //on page load in Internet Explorer top padding is added to the body container so that the header doens't overlap the carousel

      if (internetExplorer === true && window.matchMedia('(min-width: 993px)').matches) {
        bodyCont.style.paddingTop = "208px";
      } else if (internetExplorer === true && window.matchMedia('(min-width: 768px)').matches) {
        bodyCont.style.paddingTop = "110px";
      } else if (internetExplorer === true) {
        bodyCont.style.paddingTop = "168px";
      }
    } //SCROLLING DOWN - hide the top nav
    //only want to run if scroll direction has changed
    else if (previousScrollDirection !== "down" && scrollDown === true) {
        //header slides up
        header.style.transition = "all .2s ease-out";
        header.style.transform = "translateY(-208px)";
        bodyCont.style.paddingTop = "0px"; //allow the header to animate before switching to relative positioning

        setTimeout(function () {
          header.classList.remove("nav-show");
          header.classList.add("nav-hide");
        }, 200); //set the current value as the new previous value so that it can be used in the next comparison.

        previousScrollDirection = "down"; //console.log("change direction");
      } //SCROLLING UP - display the top nav
      //only want to run if scroll direction has changed
      else if (previousScrollDirection !== "up" && scrollUp === true) {
          header.classList.remove("nav-hide");
          header.classList.add("nav-show");

          if (window.matchMedia('(min-width: 993px)').matches) {
            bodyCont.style.paddingTop = "208px";
          } else if (window.matchMedia('(min-width: 768px)').matches) {
            bodyCont.style.paddingTop = "110px";
          } else {
            bodyCont.style.paddingTop = "168px";
          } //header slides down - WORKS


          header.style.transition = "all .5s ease-out";
          header.style.transform = "translateY(0px)"; //set the current value as the new previous value so that it can be used in the next comparison.

          previousScrollDirection = "up"; //console.log("change direction");
        } //set the current value as the new previous value so that it can be used in the next comparison.


    previousScrollTop = bodyCont.scrollTop;
  };
};

stickyHeader(); //for when testing this as a separate file only
/******/ })()
;