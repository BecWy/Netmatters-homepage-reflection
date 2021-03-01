//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

const burgerMenu = () => {

    const menuButton = document.querySelector("#menu");
    const burgerMenu = document.querySelector(".burger-menu");
    const pageContent = document.querySelector("body");
    const main = document.querySelector("main");
    const menuOverlay = document.querySelector(".menu-open-overlay");

    menuButton.addEventListener('click', () => {
        menuToggle();
    })

    menuOverlay.addEventListener('click', () => {
        menuToggle();
    })

    const menuToggle = () => {

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        function openNav() {
            pageContent.style.overflowY = "hidden";
            burgerMenu.style.width = "238px";
            pageContent.style.transform = "translate(-238px, 0)"; //moving it the width of the burger menu    
            //pageContent.style.marginLeft = "-238px";
            menuOverlay.style.display = "block";
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
            
        }
        
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {
            burgerMenu.style.width = "0";
            pageContent.style.transform = "none";
            //pageContent.style.marginLeft = "0";
            menuOverlay.style.display = "none";
            menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
            pageContent.style.overflowY = "auto";
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



