
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

  if(headerPosition === "sticky") {
    internetExplorer = false;
    console.log("the browser is modern and supports sticky");
    
  } else {
    internetExplorer = true;
    console.log("the browser is old and does not support sticky");
  }


//when the body content is scrolls the sticky function is run
  bodyCont.onscroll = function() {sticky()};
  let previous = 0; //this is the previous value of scrolltop. It is used to compare with the new value of scrolltop.

  function sticky() {
  //compares the current value of scrolltop with the previous value of scrolltop to determine the scroll direction.
      
    //Scrolling down - hide the top nav
    if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) {
      header.classList.remove("nav-show");
      header.classList.add("nav-hide");
      if(internetExplorer === true) {
        bodyCont.style.paddingTop = "0px";
      }
    } 

      //Scrolling up - display the top nav
      else {
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