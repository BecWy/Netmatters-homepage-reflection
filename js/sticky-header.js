
//currently the related css can be found in js.scss, under STICKY HEADER
const header = document.querySelector("header");
const body = document.querySelector("body");
const bodyCont = document.querySelector(".body-container");

export const stickyHeader = () => {
  bodyCont.onscroll = function() {sticky()};
  let previous = 0;

  function sticky() {
  //   if (bodyCont.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) {
      //header.className = "nav-hide";
      header.classList.remove("nav-show");
      header.classList.add("nav-hide");
    } else {
      //header.className = "nav-show";
      header.classList.remove("nav-hide");
      header.classList.add("nav-show");
    }
    previous = bodyCont.scrollTop;
  }
}