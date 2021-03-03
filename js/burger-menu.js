//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

const burgerMenuJS = () => {

    // const menuButton = document.querySelector("#menu");
    // const header = document.querySelector("header");
    // const burgerMenu = document.querySelector(".burger-menu");
    // const burgerMenuCont = document.querySelector(".burger-menu-container");
    // const body = document.querySelector("body");
    // const main = document.querySelector("main");
    // const menuOverlay = document.querySelector(".menu-open-overlay");
    // //const nav = document.querySelector("nav");
    // //const nav2 = document.querySelector(".nav-2");
    // const footer = document.querySelector("footer");

    menuButton.addEventListener('click', () => {
        menuToggle();
    })

    menuOverlay.addEventListener('click', () => {
        menuToggle();
    })

    const menuToggle = () => {

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        function openNav() {
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
        function closeNav() {
            header.style.transform = "none";
            main.style.transform = "none";
            footer.style.transform = "none";
            menuOverlay.style.transform = "none";
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
            menuOverlay.style.zIndex = "0";
            body.style.overflowY = "auto";
            burgerMenuCont.style.overflowY = "hidden"; //removes menu scroll functionality
            burgerMenu.style.visibility = "hidden";
            burgerMenu.style.transition = "all 1s ease-out 3s"; //doesn't disappear until covered by the main content again
        }


        burgerMenu.classList.toggle("menu-hide"); //default setting is hide, already added to the html
        if (burgerMenu.classList.contains("menu-hide")) {
            closeNav();
        } else {
            openNav();
        }
    }

}

burgerMenuJS();




