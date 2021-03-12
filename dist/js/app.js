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
var searchButton = document.querySelector("#submit");
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
    supportButton.classList.toggle("toggle-hide"); //displays/hides the button

    contactButton.classList.toggle("toggle-hide"); //displays/hides the button

    searchBar.classList.toggle("toggle-search-width"); //expands the width of the searchbar container 

    searchInput.classList.toggle("toggle-hide"); //displays/hides the search input
  };
}; //searchbarJS(); for testing purposes only - this breaks it if it's set to export.

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickyHeader": function() { return /* binding */ stickyHeader; }
/* harmony export */ });
//currently the related css can be found in js.scss, under STICKY HEADER
var header = document.querySelector("header"); //const body = document.querySelector("body"); //not currently used

var bodyCont = document.querySelector(".body-container");
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
      //header.className = "nav-hide";
      header.classList.remove("nav-show");
      header.classList.add("nav-hide");
    } //Scrolling up - display the top nav
    else {
        //header.className = "nav-show";
        header.classList.remove("nav-hide");
        header.classList.add("nav-show"); //stickybits(document.querySelector("header")); //Plugin I tried to help with IE - doesn't work
        //Stickyfill.add(header); //Plugin I tried to help with IE - doesn't work
      } //set the current value as the new previous value so that it can be used in the next comparison.


    previous = bodyCont.scrollTop;
  }
}; //stickyHeader(); for when testing this as a separate file only

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
  }); //When the burger menu icon is clicked the side menu is revealed

  menuButton.addEventListener('click', function () {
    openNav();
  }); //when the overlay over the main page content is clicked the side menu is hidden.

  menuOverlay.addEventListener('click', function () {
    closeNav();
  }); //is the menu open

  var menuOpen = false; //When the menu is open and the page is resized, this updates the distance the page content translates to the left

  window.addEventListener('resize', function () {
    //for wide screens with the menu open translate the page content by the correct distance
    if (window.matchMedia('(min-width: 993px)').matches && menuOpen === true) {
      bodyCont.style.transform = "translateX(-350px)";
      menuOverlay.style.transform = "translateX(-350px)";
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none"; //for small screens with the menu open translate the page content by the correct distance
    } else if (menuOpen === true) {
      //small screens
      bodyCont.style.transform = "translateX(-270px)";
      menuOverlay.style.transform = "translateX(-270px)";
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none"; //when the menu is closed and resized, this avoids part of the menu displaying unintentionally due to the transition time
    } else {
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
    }
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

    menuOpen = true;
  }; //moves the page content back to the right, covering the sidebar


  var closeNav = function closeNav() {
    bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.

    menuOverlay.style.transform = "translateX(0px)";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
    menuOverlay.style.zIndex = "0";
    bodyCont.style.transition = "all .5s ease-out";
    menuOverlay.style.transition = "all .5s ease-out";
    setTimeout(function () {
      burgerMenuCont.scrollTop = 0;
    }, 600);
    menuOpen = false;
  };
}; //burgerMenuJS(); //for use when testing this as a separate file

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.7.9
  @link https://github.com/yowainwright/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*
  STICKYBITS 💉
  --------
  > a lightweight alternative to `position: sticky` polyfills 🍬
  --------
  - each method is documented above it our view the readme
  - Stickybits does not manage polymorphic functionality (position like properties)
  * polymorphic functionality: (in the context of describing Stickybits)
    means making things like `position: sticky` be loosely supported with position fixed.
    It also means that features like `useStickyClasses` takes on styles like `position: fixed`.
  --------
  defaults 🔌
  --------
  - version = `package.json` version
  - userAgent = viewer browser agent
  - target = DOM element selector
  - noStyles = boolean
  - offset = number
  - parentClass = 'string'
  - scrollEl = window || DOM element selector || DOM element
  - stickyClass = 'string'
  - stuckClass = 'string'
  - useStickyClasses = boolean
  - useFixed = boolean
  - useGetBoundingClientRect = boolean
  - verticalPosition = 'string'
  - applyStyle = function
  --------
  props🔌
  --------
  - p = props {object}
  --------
  instance note
  --------
  - stickybits parent methods return this
  - stickybits instance methods return an instance item
  --------
  nomenclature
  --------
  - target => el => e
  - props => o || p
  - instance => item => it
  --------
  methods
  --------
  - .definePosition = defines sticky or fixed
  - .addInstance = an array of objects for each Stickybits Target
  - .getClosestParent = gets the parent for non-window scroll
  - .getTopPosition = gets the element top pixel position from the viewport
  - .computeScrollOffsets = computes scroll position
  - .toggleClasses = older browser toggler
  - .manageState = manages sticky state
  - .removeInstance = removes an instance
  - .cleanup = removes all Stickybits instances and cleans up dom from stickybits
*/
var Stickybits = /*#__PURE__*/function () {
  function Stickybits(target, obj) {
    var _this = this;

    var o = typeof obj !== 'undefined' ? obj : {};
    this.version = '3.7.9';
    this.userAgent = window.navigator.userAgent || 'no `userAgent` provided by the browser';
    this.props = {
      customStickyChangeNumber: o.customStickyChangeNumber || null,
      noStyles: o.noStyles || false,
      stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
      parentClass: o.parentClass || 'js-stickybit-parent',
      scrollEl: typeof o.scrollEl === 'string' ? document.querySelector(o.scrollEl) : o.scrollEl || window,
      stickyClass: o.stickyClass || 'js-is-sticky',
      stuckClass: o.stuckClass || 'js-is-stuck',
      stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',
      useStickyClasses: o.useStickyClasses || false,
      useFixed: o.useFixed || false,
      useGetBoundingClientRect: o.useGetBoundingClientRect || false,
      verticalPosition: o.verticalPosition || 'top',
      applyStyle: o.applyStyle || function (item, style) {
        return _this.applyStyle(item, style);
      }
    };
    /*
      define positionVal after the setting of props, because definePosition looks at the props.useFixed
      ----
      -  uses a computed (`.definePosition()`)
      -  defined the position
    */

    this.props.positionVal = this.definePosition() || 'fixed';
    this.instances = [];
    var _this$props = this.props,
        positionVal = _this$props.positionVal,
        verticalPosition = _this$props.verticalPosition,
        noStyles = _this$props.noStyles,
        stickyBitStickyOffset = _this$props.stickyBitStickyOffset;
    var verticalPositionStyle = verticalPosition === 'top' && !noStyles ? stickyBitStickyOffset + "px" : '';
    var positionStyle = positionVal !== 'fixed' ? positionVal : '';
    this.els = typeof target === 'string' ? document.querySelectorAll(target) : target;
    if (!('length' in this.els)) this.els = [this.els];

    for (var i = 0; i < this.els.length; i++) {
      var _styles;

      var el = this.els[i];
      var instance = this.addInstance(el, this.props); // set vertical position

      this.props.applyStyle({
        styles: (_styles = {}, _styles[verticalPosition] = verticalPositionStyle, _styles.position = positionStyle, _styles),
        classes: {}
      }, instance);
      this.manageState(instance); // instances are an array of objects

      this.instances.push(instance);
    }
  }
  /*
    setStickyPosition ✔️
    --------
    —  most basic thing stickybits does
    => checks to see if position sticky is supported
    => defined the position to be used
    => stickybits works accordingly
  */


  var _proto = Stickybits.prototype;

  _proto.definePosition = function definePosition() {
    var stickyProp;

    if (this.props.useFixed) {
      stickyProp = 'fixed';
    } else {
      var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
      var test = document.head.style;

      for (var i = 0; i < prefix.length; i += 1) {
        test.position = prefix[i] + "sticky";
      }

      stickyProp = test.position ? test.position : 'fixed';
      test.position = '';
    }

    return stickyProp;
  }
  /*
    addInstance ✔️
    --------
    — manages instances of items
    - takes in an el and props
    - returns an item object
    ---
    - target = el
    - o = {object} = props
      - scrollEl = 'string' | object
      - verticalPosition = number
      - off = boolean
      - parentClass = 'string'
      - stickyClass = 'string'
      - stuckClass = 'string'
    ---
    - defined later
      - parent = dom element
      - state = 'string'
      - offset = number
      - stickyStart = number
      - stickyStop = number
    - returns an instance object
  */
  ;

  _proto.addInstance = function addInstance(el, props) {
    var _this2 = this;

    var item = {
      el: el,
      parent: el.parentNode,
      props: props
    };

    if (props.positionVal === 'fixed' || props.useStickyClasses) {
      this.isWin = this.props.scrollEl === window;
      var se = this.isWin ? window : this.getClosestParent(item.el, item.props.scrollEl);
      this.computeScrollOffsets(item);
      this.toggleClasses(item.parent, '', props.parentClass);
      item.state = 'default';
      item.stateChange = 'default';

      item.stateContainer = function () {
        return _this2.manageState(item);
      };

      se.addEventListener('scroll', item.stateContainer);
    }

    return item;
  }
  /*
    --------
    getParent 👨‍
    --------
    - a helper function that gets the target element's parent selected el
    - only used for non `window` scroll elements
    - supports older browsers
  */
  ;

  _proto.getClosestParent = function getClosestParent(el, match) {
    // p = parent element
    var p = match;
    var e = el;
    if (e.parentElement === p) return p; // traverse up the dom tree until we get to the parent

    while (e.parentElement !== p) {
      e = e.parentElement;
    } // return parent element


    return p;
  }
  /*
    --------
    getTopPosition
    --------
    - a helper function that gets the topPosition of a Stickybit element
    - from the top level of the DOM
  */
  ;

  _proto.getTopPosition = function getTopPosition(el) {
    if (this.props.useGetBoundingClientRect) {
      return el.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);
    }

    var topPosition = 0;

    do {
      topPosition = el.offsetTop + topPosition;
    } while (el = el.offsetParent);

    return topPosition;
  }
  /*
    computeScrollOffsets 📊
    ---
    computeScrollOffsets for Stickybits
    - defines
      - offset
      - start
      - stop
  */
  ;

  _proto.computeScrollOffsets = function computeScrollOffsets(item) {
    var it = item;
    var p = it.props;
    var el = it.el;
    var parent = it.parent;
    var isCustom = !this.isWin && p.positionVal === 'fixed';
    var isTop = p.verticalPosition !== 'bottom';
    var scrollElOffset = isCustom ? this.getTopPosition(p.scrollEl) : 0;
    var stickyStart = isCustom ? this.getTopPosition(parent) - scrollElOffset : this.getTopPosition(parent);
    var stickyChangeOffset = p.customStickyChangeNumber !== null ? p.customStickyChangeNumber : el.offsetHeight;
    var parentBottom = stickyStart + parent.offsetHeight;
    it.offset = !isCustom ? scrollElOffset + p.stickyBitStickyOffset : 0;
    it.stickyStart = isTop ? stickyStart - it.offset : 0;
    it.stickyChange = it.stickyStart + stickyChangeOffset;
    it.stickyStop = isTop ? parentBottom - (el.offsetHeight + it.offset) : parentBottom - window.innerHeight;
  }
  /*
    toggleClasses ⚖️
    ---
    toggles classes (for older browser support)
    r = removed class
    a = added class
  */
  ;

  _proto.toggleClasses = function toggleClasses(el, r, a) {
    var e = el;
    var cArray = e.className.split(' ');
    if (a && cArray.indexOf(a) === -1) cArray.push(a);
    var rItem = cArray.indexOf(r);
    if (rItem !== -1) cArray.splice(rItem, 1);
    e.className = cArray.join(' ');
  }
  /*
    manageState 📝
    ---
    - defines the state
      - normal
      - sticky
      - stuck
  */
  ;

  _proto.manageState = function manageState(item) {
    var _this3 = this;

    // cache object
    var it = item;
    var p = it.props;
    var state = it.state;
    var stateChange = it.stateChange;
    var start = it.stickyStart;
    var change = it.stickyChange;
    var stop = it.stickyStop; // cache props

    var pv = p.positionVal;
    var se = p.scrollEl;
    var sticky = p.stickyClass;
    var stickyChange = p.stickyChangeClass;
    var stuck = p.stuckClass;
    var vp = p.verticalPosition;
    var isTop = vp !== 'bottom';
    var aS = p.applyStyle;
    var ns = p.noStyles;
    /*
      requestAnimationFrame
      ---
      - use rAF
      - or stub rAF
    */

    var rAFStub = function rAFDummy(f) {
      f();
    };

    var rAF = !this.isWin ? rAFStub : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || rAFStub;
    /*
      define scroll vars
      ---
      - scroll
      - notSticky
      - isSticky
      - isStuck
    */

    var scroll = this.isWin ? window.scrollY || window.pageYOffset : se.scrollTop;
    var notSticky = scroll > start && scroll < stop && (state === 'default' || state === 'stuck');
    var isSticky = isTop && scroll <= start && (state === 'sticky' || state === 'stuck');
    var isStuck = scroll >= stop && state === 'sticky';
    /*
      Unnamed arrow functions within this block
      ---
      - help wanted or discussion
      - view test.stickybits.js
        - `stickybits .manageState  `position: fixed` interface` for more awareness 👀
    */

    if (notSticky) {
      it.state = 'sticky';
    } else if (isSticky) {
      it.state = 'default';
    } else if (isStuck) {
      it.state = 'stuck';
    }

    var isStickyChange = scroll >= change && scroll <= stop;
    var isNotStickyChange = scroll < change / 2 || scroll > stop;

    if (isNotStickyChange) {
      it.stateChange = 'default';
    } else if (isStickyChange) {
      it.stateChange = 'sticky';
    } // Only apply new styles if the state has changed


    if (state === it.state && stateChange === it.stateChange) return;
    rAF(function () {
      var _styles2, _classes, _styles3, _extends2, _classes2, _style$classes;

      var stateStyles = {
        sticky: {
          styles: (_styles2 = {
            position: pv,
            top: '',
            bottom: ''
          }, _styles2[vp] = p.stickyBitStickyOffset + "px", _styles2),
          classes: (_classes = {}, _classes[sticky] = true, _classes)
        },
        default: {
          styles: (_styles3 = {}, _styles3[vp] = '', _styles3),
          classes: {}
        },
        stuck: {
          styles: _extends((_extends2 = {}, _extends2[vp] = '', _extends2), pv === 'fixed' && !ns || !_this3.isWin ? {
            position: 'absolute',
            top: '',
            bottom: '0'
          } : {}),
          classes: (_classes2 = {}, _classes2[stuck] = true, _classes2)
        }
      };

      if (pv === 'fixed') {
        stateStyles.default.styles.position = '';
      }

      var style = stateStyles[it.state];
      style.classes = (_style$classes = {}, _style$classes[stuck] = !!style.classes[stuck], _style$classes[sticky] = !!style.classes[sticky], _style$classes[stickyChange] = isStickyChange, _style$classes);
      aS(style, item);
    });
  }
  /*
    applyStyle
    ---
    - apply the given styles and classes to the element
  */
  ;

  _proto.applyStyle = function applyStyle(_ref, item) {
    var styles = _ref.styles,
        classes = _ref.classes;
    // cache object
    var it = item;
    var e = it.el;
    var p = it.props;
    var stl = e.style; // cache props

    var ns = p.noStyles;
    var cArray = e.className.split(' '); // Disable due to bug with old versions of eslint-scope and for ... in
    // https://github.com/eslint/eslint/issues/12117
    // eslint-disable-next-line no-unused-vars

    for (var cls in classes) {
      var addClass = classes[cls];

      if (addClass) {
        if (cArray.indexOf(cls) === -1) cArray.push(cls);
      } else {
        var idx = cArray.indexOf(cls);
        if (idx !== -1) cArray.splice(idx, 1);
      }
    }

    e.className = cArray.join(' ');

    if (styles['position']) {
      stl['position'] = styles['position'];
    }

    if (ns) return; // eslint-disable-next-line no-unused-vars

    for (var key in styles) {
      stl[key] = styles[key];
    }
  };

  _proto.update = function update(updatedProps) {
    var _this4 = this;

    if (updatedProps === void 0) {
      updatedProps = null;
    }

    this.instances.forEach(function (instance) {
      _this4.computeScrollOffsets(instance);

      if (updatedProps) {
        // eslint-disable-next-line no-unused-vars
        for (var updatedProp in updatedProps) {
          instance.props[updatedProp] = updatedProps[updatedProp];
        }
      }
    });
    return this;
  }
  /*
    removes an instance 👋
    --------
    - cleanup instance
  */
  ;

  _proto.removeInstance = function removeInstance(instance) {
    var _styles4, _classes3;

    var e = instance.el;
    var p = instance.props;
    this.applyStyle({
      styles: (_styles4 = {
        position: ''
      }, _styles4[p.verticalPosition] = '', _styles4),
      classes: (_classes3 = {}, _classes3[p.stickyClass] = '', _classes3[p.stuckClass] = '', _classes3)
    }, instance);
    this.toggleClasses(e.parentNode, p.parentClass);
  }
  /*
    cleanup 🛁
    --------
    - cleans up each instance
    - clears instance
  */
  ;

  _proto.cleanup = function cleanup() {
    for (var i = 0; i < this.instances.length; i += 1) {
      var instance = this.instances[i];

      if (instance.stateContainer) {
        instance.props.scrollEl.removeEventListener('scroll', instance.stateContainer);
      }

      this.removeInstance(instance);
    }

    this.manageState = false;
    this.instances = [];
  };

  return Stickybits;
}();
/*
  export
  --------
  exports StickBits to be used 🏁
*/


function stickybits(target, o) {
  return new Stickybits(target, o);
}

/* harmony default export */ __webpack_exports__["default"] = (stickybits);


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
/* harmony import */ var stickybits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
//This file imports all of my other JS files
//jQuery and plugins are separate to avoid any potential conflicts/issues.






var app = function app() {
  (0,_burger_menu_js__WEBPACK_IMPORTED_MODULE_3__.burgerMenuJS)();
  (0,_cookies_js__WEBPACK_IMPORTED_MODULE_0__.cookiesJS)();
  (0,_sticky_header_js__WEBPACK_IMPORTED_MODULE_2__.stickyHeader)();
  (0,_searchbar_js__WEBPACK_IMPORTED_MODULE_1__.searchbarJS)();
};

app(); //stickybits(document.querySelector("header"), { scrollEl: document.querySelector(".body-container") });
////////////////////////////////////////////////////////////////////////////////////////////
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