/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
//code adapted from:
// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
//I have edited the code (both JS (minor changes) and SCSS (more changes)), but it is very similar to the original
//currently the related css can be found in js.scss, under STICKY HEADER
var header = document.querySelector("header");
var body = document.querySelector("body");
var bodyCont = document.querySelector(".body-container");

var stickyHeader = function stickyHeader() {
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5; //the minumum amount they have to scroll to trigger a response?

  var navbarHeight = $('header').outerHeight();
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    //let st = $(this).scrollTop();
    var st = bodyCont.scrollTop(); // Make sure they scroll more than delta

    if (Math.abs(lastScrollTop - st) <= delta) return; // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.    

    if (st > lastScrollTop) {
      //my code
      //if (st > lastScrollTop && st > navbarHeight){ ///this is the original code
      // Scroll Down
      //body.style.paddingTop = "0px"; // my code, this is the same as the header height. Removed - now added on scroll up
      bodyCont.style.paddingTop = "0px"; //same as above, but using the body-container instead of body

      $('header').removeClass('nav-down').addClass('nav-up'); //original code
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        if (window.matchMedia('(min-width: 993px)').matches) {
          body.style.paddingTop = "208px"; //wider screen/ desktop header height
        } else if (window.matchMedia('(min-width: 768px)').matches) {
          //body.style.paddingTop = "110px"; //tablet header height
          bodyCont.style.paddingTop = "110px";
        } else {//body.style.paddingTop = "168px"; //mobile header height
        }

        bodyCont.style.paddingTop = "168px";
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }
};

stickyHeader();
/******/ })()
;