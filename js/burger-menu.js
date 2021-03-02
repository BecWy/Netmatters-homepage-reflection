//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

const burgerMenu = () => {

    const menuButton = document.querySelector("#menu");
    const burgerMenu = document.querySelector(".burger-menu");
    const pageContent = document.querySelector("body");
    const main = document.querySelector("main");
    const menuOverlay = document.querySelector(".menu-open-overlay");
    const nav = document.querySelector("nav");
    const nav2 = document.querySelector(".nav-2");
    const footer = document.querySelector("footer");

    menuButton.addEventListener('click', () => {
        menuToggle();
    })

    menuOverlay.addEventListener('click', () => {
        menuToggle();
    })

    const menuToggle = () => {

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        function openNav() {
            //pageContent.style.width = "100%"; //"calc(100vw - (100vw - 100%))";//"100vw";
            pageContent.style.overflowY = "hidden";
            
            nav.style.transform = "translate(-238px, 0)";
            nav2.style.transform = "translate(-238px, 0)";
            main.style.transform = "translate(-238px, 0)";
            footer.style.transform = "translate(-238px, 0)";

            //pageContent.style.transform = "translate(-238px, 0)";//"translate(-238px, 0)"; //moving it the width of the burger menu 
            
            //burgerMenu.style.position = "fixed";
            //burgerMenu.style.top = "0px";
            //burgerMenu.style.right = "calc(100vw - 100%)";
            //burgerMenu.style.display = "block";
            
            menuOverlay.style.display = "block";
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
            
            
        }
        
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {
            pageContent.style.transform = "none";
            //burgerMenu.style.display = "none";
            menuOverlay.style.display = "none";
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
            pageContent.style.overflowY = "auto";
            pageContent.style.width = "100%";
        }


        burgerMenu.classList.toggle("menu-hide"); //default setting is hide, already added to the html
        if (burgerMenu.classList.contains("menu-hide")) {
            closeNav();
        } else {
            openNav();
        }
    }

}

burgerMenu();





//CSS///////////////////////////////////////////////////////////////////////////////////////////
//looks like i need to set the width of the menu to 0 inititally
//   width: 0; /* 0 width - change this with JavaScript */
// overflow-x: hidden; /* Disable horizontal scroll */
// transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
// #main {
//     transition: margin-left .5s;
//     padding: 20px;
//   }



/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
// @media screen and (max-height: 450px) {
//     .sidenav {padding-top: 15px;}
//     .sidenav a {font-size: 18px;}
//   }



