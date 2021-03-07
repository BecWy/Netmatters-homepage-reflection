//code adapted from:
// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
//I have edited the code (both JS (minor changes) and SCSS (more changes)), but it is very similar to the original

//currently the related css can be found in js.scss, under STICKY HEADER
const header = document.querySelector("header");
const body = document.querySelector("body");
const bodyCont = document.querySelector(".body-container");


scrollTop = bodyCont.scrollTop;
console.log(`This is the scroll top in pixels: ${scrollTop}`);


bodyCont.onscroll = function() {myFunction()};

function myFunction() {
//   if (bodyCont.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (bodyCont.scrollTop > 50) {
    header.className = "nav-down";
  } else {
    header.className = "nav-up";
  }
}



// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     header.className = "nav-down";
//   } else {
//     header.className = "nav-up";
//   }
// }





// bodyCont.addEventListener('scroll', () => {
//    // if(e === true) {
//         header.classList.remove('nav-down');
//         header.classList.add('nav-up');
//     //}
// })



// const stickyHeader = () => { 
//     // Hide Header on on scroll down
//     let didScroll;
//     let lastScrollTop = 0;
//     const delta = 5;  //the minumum amount they have to scroll to trigger a response?
//     //let navbarHeight = $('header').outerHeight();

//     //$(window).scroll(function(event){
//     bodyCont.scroll(function(event){
//         didScroll = true;
//     });

//     setInterval(function() {
//         if (didScroll) {
//             hasScrolled();
//             didScroll = false;
//         }
//     }, 250);

//     function hasScrolled() {
//         //let st = $(this).scrollTop();
//         let st = bodyCont.scrollTop();
        
//         // Make sure they scroll more than delta
//         if(Math.abs(lastScrollTop - st) <= delta)
//             return;
        
//         // If they scrolled down and are past the navbar, add class .nav-up.
//         // This is necessary so you never see what is "behind" the navbar.    
//         if (st > lastScrollTop){ //my code
        
//         //if (st > lastScrollTop && st > navbarHeight){ ///this is the original code
//             // Scroll Down
//             //body.style.paddingTop = "0px"; // my code, this is the same as the header height. Removed - now added on scroll up
//             bodyCont.style.paddingTop = "0px"; //same as above, but using the body-container instead of body
//             $('header').removeClass('nav-down').addClass('nav-up'); //original code
//         } else {
//             // Scroll Up
//             if(st + bodyCont.height() < body.height()) {
//                 if(window.matchMedia('(min-width: 993px)').matches) {
//                     body.style.paddingTop = "208px"; //wider screen/ desktop header height
//                 } else if(window.matchMedia('(min-width: 768px)').matches) {
//                     //body.style.paddingTop = "110px"; //tablet header height
//                     bodyCont.style.paddingTop = "110px";
//                 } else {
//                     //body.style.paddingTop = "168px"; //mobile header height
//                 }   bodyCont.style.paddingTop = "168px";
//                 $('header').removeClass('nav-up').addClass('nav-down');
//             }
//         }

//         lastScrollTop = st;
//     }
// }

// stickyHeader();

