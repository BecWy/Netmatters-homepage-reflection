//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

    const menuButton = document.querySelector("#menu");
    const header = document.querySelector("header");
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerMenuCont = document.querySelector(".burger-menu-container");
    const body = document.querySelector("body");
    const bodyCont = document.querySelector(".body-container");
    const main = document.querySelector("main");
    const menuOverlay = document.querySelector(".menu-open-overlay");
    const footer = document.querySelector("footer");

export const burgerMenuJS = () => {

    document.addEventListener('DOMContentLoaded', () => {
        closeNav();
    })

    // window.addEventListener('resize', () => { //not working
    //     closeNav();
    // })

    menuButton.addEventListener('click', () => {
        openNav();
    })

    menuOverlay.addEventListener('click', () => {
        closeNav();
    })

    // bodyCont.addEventListener('animationend', () => {
    //     hideScroll();
    // })

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    const openNav = () => {
        //body.style.overflowY = "hidden";
        burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll functionality
        burgerMenu.style.transition = "all 1s ease-out 0s";  
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
        menuOverlay.style.zIndex = "800";
        bodyCont.style.transition = "all 1s ease-out";
        // header.style.transition = "all 1s ease-out";
        // main.style.transition = "all 1s ease-out";
        // footer.style.transition = "all 1s ease-out";
        menuOverlay.style.transition = "all 1s ease-out";
        

        if(window.matchMedia('(min-width: 993px)').matches) { //wide screens
            bodyCont.style.transform = "translateX(-350px)";
            //bodyCont.style.marginLeft = "-350px";
            // header.style.transform = "translateX(-350px)";
            // main.style.transform = "translateX(-350px)";
            // footer.style.transform = "translateX(-350px)";
            menuOverlay.style.transform = "translateX(-350px)";
            
        } else {  //small screens
            bodyCont.style.transform = "translateX(-270px)";
            // header.style.transform = "translateX(-270px)";
            // main.style.transform = "translateX(-270px)";
            // footer.style.transform = "translateX(-270px)";
            menuOverlay.style.transform = "translateX(-270px)";
            
        }          
    }
    
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    const closeNav = () => {
        burgerMenu.style.transition = "all 1s ease-out 3s"; //doesn't disappear until covered by the main content again
        bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header
        menuOverlay.style.transform = "translateX(0px)";
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
        menuOverlay.style.zIndex = "0";
        burgerMenuCont.style.overflowY = "scroll"; //scroll bar remains visible, but sits behind the bodyCont scroll bar
    }
}





