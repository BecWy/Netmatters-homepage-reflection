
//currently the related css can be found in js.scss, under STICKY HEADER
const header = document.querySelector("header");
const body = document.querySelector("body");
const bodyCont = document.querySelector(".body-container");

export const stickyHeader = () => { //re-activate when switch back to the app js file after testing
//const stickyHeader = () => { // this line is for testing only

//when the body content is scrolls the sticky function is run
  bodyCont.onscroll = function() {sticky()};
  let previous = 0; //this is the previous value of scrolltop. It is used to compare with the new value of scrolltop.

  function sticky() {
  //compares the current value of scrolltop with the previous value of scrolltop to determine the scroll direction.
      
    //Scrolling down - hide the top nav
    if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) {
      //header.className = "nav-hide";
      header.classList.remove("nav-show");
      header.classList.add("nav-hide");
    } 
      //Scrolling up - display the top nav
      else {
      //header.className = "nav-show";
      header.classList.remove("nav-hide");
      header.classList.add("nav-show");
    }

      //set the current value as the new previous value so that it can be used in the next comparison.
      previous = bodyCont.scrollTop;
  }
}

//stickyHeader(); for when testing this as a separate file only