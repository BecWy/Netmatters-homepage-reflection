//also includes some code relating to the sticky header, particularly when viewport is resized



const menuButton = document.querySelector("#menu");
const burgerMenu = document.querySelector(".burger-menu"); 
const burgerMenuCont = document.querySelector(".burger-menu-container");
const bodyCont = document.querySelector(".body-container");
const menuOverlay = document.querySelector(".menu-open-overlay");
const burgerIcon = document.querySelector(".hamburger");
const header = document.querySelector("header");
let bodyContWidth = document.querySelector(".body-container").clientWidth; //this is the width of the body container. It is used as a comparison for the header, to make sure that the header width is always the same as the body width. Position fixed in IE will make the header cover the scroll bar otherwise

//for IE purposes. Returns the value of the header's css position - sticky or fixed
const headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase();
//console.log(`the header position is ${headerPosition}`); //for testing
let internetExplorer = false;

export const burgerMenuJS = () => { //re-activate when switch back to the app js file after testing
//const burgerMenuJS = () => { // this line is for testing only

    //determine if the browser supports position: sticky
    if(headerPosition === "sticky") {
        internetExplorer = false;
        console.log("the browser is modern and supports sticky");
        
    } else {
        internetExplorer = true;
        console.log("the browser is old and does not support sticky");
    }

    //on page load the side menu is closed
    document.addEventListener('DOMContentLoaded', () => {
        closeNav();
    })

    //When the burger menu icon is clicked the side menu is revealed
    menuButton.addEventListener('click', () => {
        openNav();
    })

    //when the overlay over the main page content is clicked the side menu is hidden.
    menuOverlay.addEventListener('click', () => {
        closeNav();
    })

    //is the menu open
    let menuOpen = false;


    //When the page is resized, this updates the distance the page content translates to the left
    window.addEventListener('resize', () => {
        if(internetExplorer === true) {
            bodyContWidth = document.querySelector(".body-container").clientWidth; //get the value each time
            header.style.width = `${bodyContWidth}px`; //makes sure the header is the correct width if set to position:fixed (for IE sticky header settings)
        }

        //for wide screens with the menu open translate the page content by the correct distance
        if(window.matchMedia('(min-width: 993px)').matches && menuOpen === true) { 
            bodyCont.style.transform = "translateX(-350px)"; 
            menuOverlay.style.transform = "translateX(-350px)"; 
            bodyCont.style.transition = "none";
            menuOverlay.style.transition = "none";
            header.style.transition = "none"; //only applies to IE - makes sure there's no transition
            if(internetExplorer === true) {
                header.style.transform = "translateX(-350px)"; 
            }
        //for small screens with the menu open translate the page content by the correct distance
        } else if (menuOpen === true) {  //small screens
            bodyCont.style.transform = "translateX(-270px)"; 
            menuOverlay.style.transform = "translateX(-270px)"; 
            bodyCont.style.transition = "none";
            menuOverlay.style.transition = "none";
            header.style.transition = "none"; //only applies to IE - makes sure there's no transition
            if(internetExplorer === true) {
                header.style.transform = "translateX(-270px)"; 
            }
        //when the menu is closed and resized, this avoids part of the menu displaying unintentionally due to the transition time
        } else {
            bodyCont.style.transition = "none";
            menuOverlay.style.transition = "none";
            if(internetExplorer === true) {
                header.style.transition = "none"; //only applies to IE - makes sure there's no transition
            }
        }
    })

  //pushes the page content to the left, revealing the sidebar below
    const openNav = () => {
        if(internetExplorer === true) {
            burgerMenu.style.display = "block";
        }
        burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
        menuOverlay.style.zIndex = "800"; //makes the overlay cover the main page content, adding the semi-transparent layer and preventing the main content from being scrolled or clicked on.
        bodyCont.style.transition = "all .5s ease-out";
        menuOverlay.style.transition = "all .5s ease-out"; 
        burgerIcon.classList.add("is-active"); //hamburger animation
        
        if(internetExplorer === true) {
            header.style.transition = "all .5s ease-out"; 
            //header.style.paddingTop = bodyCont.scrollTop;
        }
        
    
        if(window.matchMedia('(min-width: 993px)').matches) { //wide screens
            bodyCont.style.transform = "translateX(-350px)";
            menuOverlay.style.transform = "translateX(-350px)";
            //if the browser is IE and therefore the position setting is fixed instead of sticky
            if(internetExplorer === true) { 
                header.style.transform =  "translateX(-350px)";
            }
            
        } else {  //small screens
            bodyCont.style.transform = "translateX(-270px)";
            menuOverlay.style.transform = "translateX(-270px)";
            //if the browser is IE and therefore the position setting is fixed instead of sticky
            if(internetExplorer === true) { 
                //console.log(`header position is ${headerPosition}`) testing
                header.style.transform =  "translateX(-270px)";
            } 
        }  
        menuOpen = true;     
    }
    
    //moves the page content back to the right, covering the sidebar
    const closeNav = () => {
        bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.
        menuOverlay.style.transform = "translateX(0px)";
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
        menuOverlay.style.zIndex = "0";
        bodyCont.style.transition = "all .5s ease-out";
        menuOverlay.style.transition = "all .5s ease-out"; 
        burgerIcon.classList.remove("is-active"); //hamburger animation  
        if(internetExplorer === true) { 
            header.style.transition = "all .5s ease-out"; 
            header.style.transform = "none"; //if the translate was applied on open nav (aka in IE) then it is now removed.
            bodyContWidth = document.querySelector(".body-container").clientWidth; //get the value each time
            header.style.width = `${bodyContWidth}px`; //makes sure the header is the correct width if set to position:fixed (for IE sticky header settings)
        }
        setTimeout(function(){ 
            burgerMenuCont.scrollTop = 0; 
            if(internetExplorer === true) {
                burgerMenu.style.display = "none";
            } 
        }, 600);
        menuOpen = false;
    }
}


//burgerMenuJS(); //for use when testing this as a separate file


