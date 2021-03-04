//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

    const menuButton = document.querySelector("#menu");
    const header = document.querySelector("header");
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerMenuCont = document.querySelector(".burger-menu-container");
    const body = document.querySelector("body");
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

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        const openNav = () => {
            body.style.overflowY = "hidden";
            burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll functionality
            burgerMenu.style.visibility = "visible";
            burgerMenu.style.transition = "all 1s ease-out 0s";  
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
            menuOverlay.style.zIndex = "800";
            header.style.transition = "all 1s ease-out";
            main.style.transition = "all 1s ease-out";
            footer.style.transition = "all 1s ease-out";
            menuOverlay.style.transition = "all 1s ease-out";
            if(window.matchMedia('(min-width: 993px)').matches) { //wide screens
                header.style.transform = "translate(-350px, 0)";
                main.style.transform = "translate(-350px, 0)"; 
                footer.style.transform = "translate(-350px, 0)";
                menuOverlay.style.transform = "translate(-350px, 0)";
            } else {  //small screens
                header.style.transform = "translate(-270px, 0)";
                main.style.transform = "translate(-270px, 0)"; 
                footer.style.transform = "translate(-270px, 0)";
                menuOverlay.style.transform = "translate(-270px, 0)";
            }          
        }
        
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        const closeNav = () => {
            burgerMenu.style.transition = "all 1s ease-out 3s"; //doesn't disappear until covered by the main content again
            header.style.transform = "none";
            main.style.transform = "none";
            footer.style.transform = "none";
            menuOverlay.style.transform = "none";
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
            menuOverlay.style.zIndex = "0";
            body.style.overflowY = "auto";
            burgerMenuCont.style.overflowY = "hidden"; //removes menu scroll functionality
            burgerMenu.style.visibility = "hidden";  
        }

        //no longer needed, due to changes above
        // burgerMenu.classList.toggle("menu-hide"); //default setting is hide, already added to the html
        // if (burgerMenu.classList.contains("menu-hide")) {
        //     closeNav();
        // } else {
        //     openNav();
        // }
}





