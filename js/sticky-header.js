
// //currently the related css can be found in js.scss, under STICKY HEADER
// const header = document.querySelector("header");
// const bodyCont = document.querySelector(".body-container");


// //export const stickyHeader = () => { //re-activate when switch back to the app js file after testing
// const stickyHeader = () => { // this line is for testing only
    
//     //console.log(`the header position is ${headerPosition}`); //for testing
//     let internetExplorer = false;
//     //get the header position to test if position:sticky is supported by the browser
//     const headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase();
//     //each time the user scrolls the scrollTop value is saved so it can be used to compare against the next value of scrollTop
//     let previousScrollTop = 0;
//     //each time the user scrolls the scrollDirection is saved so it can be used to compare against the next value of scrollDirection
//     let previousScrollDirection = "up";
//     //store scroll direction
//     let scrollDown = false;
//     let scrollUp = true;

//     //check if the browser is Internet Explorer
//     if(headerPosition === "sticky") {
//         internetExplorer = false;
//         //console.log("the browser supports sticky");
//     } else {
//         internetExplorer = true;
//         //console.log("the browser is old and does not support sticky");
//     }

//     //when the body content is scrolled the sticky function is run
//     bodyCont.onscroll = function() {
//         sticky();
//     };

//     //when the page is loaded the sticky function is run
//     document.addEventListener('DOMContentLoaded', () => {
//         sticky();
//     })


//     //call the right function for the browser
//     const sticky = () => {
//         if(internetExplorer === false) {
//             stickyRegular();
//         } else {
//             stickyIE();
//         }
//     }

//     //determine the scroll direction
//     const scrollDirection = () => {
//         if(bodyCont.scrollTop > previousScrollTop) {
//             scrollDown = true;
//             scrollUp = false;
//             //console.log('scrolling down'); //for testing
//         } else if (previousScrollTop > bodyCont.scrollTop) {
//             scrollUp = true;
//             scrollDown = false;
//             //console.log('scrolling up'); //for testing
//         }
//     }

//     //sticky code for modern browsers
//     const stickyRegular = () => {
//         scrollDirection();
//         //let headerHeight = header.clientHeight; swapped to using 500px from the top of the page instead
//         //let windowHeight = window.innerHeight; swapped to using 500px from the top of the page instead

//         //CONDITION 1
//         //if scrolltop is 0
//         if(bodyCont.scrollTop === 0) {
//             header.classList.remove("nav-hide");
//             header.classList.remove("header-animation-scroll-down");
//             header.classList.remove("header-animation-scroll-up");
//             header.classList.add("nav-show");
//         }

//         //CONDITIONS 2 & 3
//         //if scroll is less than 500px from the top of the page

//         //when scrolling down want the header to remain relatively positioned (don't want it to slide up) until the header is no longer visible
//         //don't set previous scroll direction - don't want it to interfere with previous and next scroll
//         else if(bodyCont.scrollTop < 500 && scrollDown === true) { //also try window.innerHeight & header.clientHeight
//             header.classList.remove("nav-show");
//             header.classList.remove("header-animation-scroll-down");
//             header.classList.remove("header-animation-scroll-up");
//             header.classList.add("nav-hide");
//         }

//         //when scrolling up want it to stay fixed right up to the very top
//         //don't set previous scroll direction - don't want it to interfere with previous and next scroll
//         else if(bodyCont.scrollTop < 500) { //also try window.innerHeight & header.clientHeight
//             header.classList.remove("header-animation-scroll-down");
//             header.classList.remove("header-animation-scroll-up");
//         }

//         //CONDITION 4
//         //when more than 500PX has been scrolled down keep/make the header relatively positioned
//          //only want to run if the scroll direction changes
//         else if(previousScrollDirection !== "down" && scrollDown === true) { //removed condition - no longer needed now change of direction is taken into account? && (bodyCont.scrollTop - previousScrollTop) > 10
//             //allow the header to animate before switching to relative positioning
//             header.classList.remove("header-animation-scroll-up");
            
//             setTimeout(function(){ 
//             header.classList.add("header-animation-scroll-down");
//             }, 200);
            
//            //switch to relative positioning
//             setTimeout(function(){ 
//                 header.classList.remove("nav-show");
//                 header.classList.add("nav-hide");
//             }, 500);
//             //set the current value as the new previous value so that it can be used in the next comparison.
//             previousScrollDirection = "down";
//         } 

//         //CONDITION 5
//         //Scrolling up - display the top nav
//         //only want to run if the scroll direction changes
//         else if(previousScrollDirection !== "up" && scrollUp === true) { 
//             //switch to sticky positioning
//             header.classList.remove("nav-hide");
//             header.classList.add("nav-show");
            
//             //header slides down. Set timeout makes sure the correct positioning is set before the animation starts
//             setTimeout(function(){ 
//                 header.classList.remove("header-animation-scroll-down");
//                 header.classList.add("header-animation-scroll-up");
//             }, 200);
            
//             //set the current value as the new previous value so that it can be used in the next comparison.
//             previousScrollDirection = "up";
//         }
//         //set the current value as the new previous value so that it can be used in the next comparison.
//         previousScrollTop = bodyCont.scrollTop;
//     }


// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////


//     //sticky code for older browsers, including IE
//     const stickyIE = () => {
//         scrollDirection();
        
//         //CONDITION 1
//         //if scrolltop is 0
//         if(bodyCont.scrollTop === 0) {
//             header.classList.remove("nav-hide");
//             header.classList.remove("header-animation-scroll-down");
//             header.classList.remove("header-animation-scroll-up");
//             header.classList.add("nav-show");
//             //on page load in Internet Explorer top padding is added to the body container so that the header doens't overlap the carousel
//             if(window.matchMedia('(min-width: 993px)').matches) {
//                 bodyCont.style.paddingTop = "208px";
//             } else if(window.matchMedia('(min-width: 768px)').matches) {
//                 bodyCont.style.paddingTop = "110px";
//             } else { 
//                 bodyCont.style.paddingTop = "168px";
//             }
//         }


//         //CONDITIONS 2 & 3
//         //if scroll is less than 500px from the top of the page

//         //when scrolling down want the header to remain relatively positioned (don't want it to slide up) until the header is no longer visible
//         //don't set previous scroll direction - don't want it to interfere with previous and next scroll
//         else if(bodyCont.scrollTop < 500 && scrollDown === true) { //also try window.innerHeight & header.clientHeight
//             header.classList.remove("nav-show");
//             header.classList.remove("header-animation-scroll-down");
//             header.classList.remove("header-animation-scroll-up");
//             header.classList.add("nav-hide");
//             bodyCont.classList.remove("header-IE-padding-add");
//             bodyCont.classList.add("header-IE-padding-remove");
//             bodyCont.style.paddingTop = "0px";
//         }

//         //when scrolling up want it to stay fixed right up to the very top
//         //don't set previous scroll direction - don't want it to interfere with previous and next scroll
//         else if(bodyCont.scrollTop < 500) { //also try window.innerHeight & header.clientHeight
//             header.classList.remove("header-animation-scroll-down");
//             header.classList.remove("header-animation-scroll-up");
//         }


//         //CONDITION 4
//         //when more than 500PX has been scrolled down keep/make the header relatively positioned
//          //only want to run if the scroll direction changes
//         else if(previousScrollDirection !== "down" && scrollDown === true) { 
//             //allow the header to slide up before switching to relative positioning
//             header.classList.remove("header-animation-scroll-up");
//             bodyCont.style.paddingTop = "0px";

//             setTimeout(function(){ 
//             header.classList.add("header-animation-scroll-down");
//             }, 200);
            
//            //switch to relative positioning
//             setTimeout(function(){ 
//                 header.classList.remove("nav-show");
//                 header.classList.add("nav-hide");
//             }, 500);
//             //set the current value as the new previous value so that it can be used in the next comparison.
//             previousScrollDirection = "down";
//         }


//         //CONDITION 5
//         //Scrolling up - display the top nav
//         //only want to run if the scroll direction changes
//         else if(previousScrollDirection !== "up" && scrollUp === true) {
//             //switch to fixed positioning
//             header.classList.remove("nav-hide");
//             header.classList.add("nav-show");
        
//             //header slides down. Set timeout makes sure the correct positioning is set before the animation starts
//             setTimeout(function(){ 
//                 header.classList.remove("header-animation-scroll-down");
//                 header.classList.add("header-animation-scroll-up");
//             }, 200);

//             setTimeout(function(){ 
//                 if(window.matchMedia('(min-width: 993px)').matches) {
//                     bodyCont.style.paddingTop = "208px";
//                 } else if(window.matchMedia('(min-width: 768px)').matches) {
//                     bodyCont.style.paddingTop = "110px";
//                 } else { 
//                     bodyCont.style.paddingTop = "168px";
//                 }  
//             }, 500);
            
//             //set the current value as the new previous value so that it can be used in the next comparison.
//             previousScrollDirection = "up";
//         } 
//         //set the current value as the new previous value so that it can be used in the next comparison.
//         previousScrollTop = bodyCont.scrollTop;
//     }
// }

// stickyHeader(); //for when testing this as a separate file only