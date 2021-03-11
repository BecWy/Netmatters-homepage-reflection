//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

    const menuButton = document.querySelector("#menu");
    //const burgerMenu = document.querySelector(".burger-menu");
    const burgerMenuCont = document.querySelector(".burger-menu-container");
    const bodyCont = document.querySelector(".body-container");
    const menuOverlay = document.querySelector(".menu-open-overlay");

export const burgerMenuJS = () => { //re-activate when switch back to the app js file after testing
//const burgerMenuJS = () => { // this line is for testing only

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
        burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll functionality  
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
        menuOverlay.style.zIndex = "800";
        bodyCont.style.transition = "all .5s ease-out";
        menuOverlay.style.transition = "all .5s ease-out";    

        if(window.matchMedia('(min-width: 993px)').matches) { //wide screens
            bodyCont.style.transform = "translateX(-350px)";
            menuOverlay.style.transform = "translateX(-350px)";
            
        } else {  //small screens
            bodyCont.style.transform = "translateX(-270px)";
            menuOverlay.style.transform = "translateX(-270px)";  
        }          
    }
    
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    const closeNav = () => {
        bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.
        menuOverlay.style.transform = "translateX(0px)";
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
        menuOverlay.style.zIndex = "0";
        setTimeout(function(){ burgerMenuCont.scrollTop = 0; }, 1000);
    }
}


burgerMenuJS();


