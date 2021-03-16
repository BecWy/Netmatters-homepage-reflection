
//currently the related css can be found in js.scss, under STICKY HEADER
const header = document.querySelector("header");
//const body = document.querySelector("body"); //not currently used
const bodyCont = document.querySelector(".body-container");


  //let scrollbarWidth = bodyCont.offsetWidth - bodyCont.clientWidth;
  //header.style.width = "100vh" - scrollbarWidth; 
  // console.log(`The bodyCont width is ${bodyCont.clientWidth}`);
  // header.style.width = bodyCont.clientWidth;

  const headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase();
  //console.log(`the header position is ${headerPosition}`); //for testing
  let internetExplorer = false;


export const stickyHeader = () => { //re-activate when switch back to the app js file after testing
//const stickyHeader = () => { // this line is for testing only

  //check if the browser is internet explorer
  if(headerPosition === "sticky") {
    internetExplorer = false;
    console.log("the browser is modern and supports sticky");
    
  } else {
    internetExplorer = true;
    console.log("the browser is old and does not support sticky");
  }


  //when the body content is scrolled the sticky function is run
  bodyCont.onscroll = function() {sticky()};
  let previous = 0; //this is the previous value of scrolltop. It is used to compare with the new value of scrolltop.

  //when the page is loaded the sticky function is run
 //on page load in Internet Explorer top padding is added to the body container so that the header doens't overlap the carousel
  document.addEventListener('DOMContentLoaded', () => {
    sticky();
  })



  function sticky() {
  //compares the current value of scrolltop with the previous value of scrolltop to determine the scroll direction.
     
    //if scrolltop is 0
    if(bodyCont.scrollTop === 0) {
      header.classList.remove("nav-hide");
      header.classList.add("nav-show");
      if(internetExplorer === true && window.matchMedia('(min-width: 993px)').matches) {
        bodyCont.style.paddingTop = "208px";
      } else if(internetExplorer === true && window.matchMedia('(min-width: 768px)').matches) {
        bodyCont.style.paddingTop = "110px";
      } else if(internetExplorer === true) { 
        bodyCont.style.paddingTop = "168px";
      }
    }

    //Scrolling down - hide the top nav
    //modern browsers
      else if (internetExplorer !== true && bodyCont.scrollTop >= previous && (bodyCont.scrollTop - previous) > 10) {
    //if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) { //former version
        //header.style.animation = "slide 1s backwards";
        //header.classList.add("slide-up");
        header.style.transition = "all .5s ease-out"; 
        header.style.transform =  "translateY(-208px)";
        setTimeout(function(){ 
          header.classList.remove("nav-show");
          header.classList.add("nav-hide");
        }, 1000);
        
      } 
    //internet explorer
      else if(internetExplorer === true && bodyCont.scrollTop >= previous && (bodyCont.scrollTop - previous) > 15) { //meeds to wait longer before scrolling because it's glitchy
        header.classList.remove("nav-show");
        header.classList.add("nav-hide");
        bodyCont.style.paddingTop = "0px";
      }
    

      //Scrolling up - display the top nav
      // modern browsers
      else if(internetExplorer !== true && bodyCont.scrollTop < previous && (previous - bodyCont.scrollTop) > 10) {
        //header.style.animation = "slide 1s forwards";
        //header.classList.add("slide-down");
        setTimeout(function(){ 
          header.classList.remove("nav-hide");
          header.classList.add("nav-show");
        }, 1000);
      }
      //internet explorer
      else if(internetExplorer === true && bodyCont.scrollTop < previous && (previous - bodyCont.scrollTop) > 20) { //meeds to wait longer before scrolling because it's glitchy
        header.classList.remove("nav-hide");
        header.classList.add("nav-show");
        if(internetExplorer === true && window.matchMedia('(min-width: 993px)').matches) {
          bodyCont.style.paddingTop = "208px";
        } else if(internetExplorer === true && window.matchMedia('(min-width: 768px)').matches) {
          bodyCont.style.paddingTop = "110px";
        } else if(internetExplorer === true) { 
          bodyCont.style.paddingTop = "168px";
        }    
      } 
    

      //set the current value as the new previous value so that it can be used in the next comparison.
      previous = bodyCont.scrollTop;
  }
}

//stickyHeader(); for when testing this as a separate file only