
// const myStorage = window.localStorage;
// const cookies = document.querySelector(".cookies");
// const cookiesButton = document.querySelector("#cookies-button");
// const cookiesOverlay = document.querySelector(".cookies-open-overlay");
// const cookiesOuter = document.querySelector(".cookies-outer-container");
// const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", ()=> {
    const cookiesSaved = localStorage.getItem('cookiesAccepted');
    //console.log(cookiesSaved); //this works, the value saves as true after the button is clicked.

    //Checks if cookies are saved. Decides whether to display the cookies popup or not.
    if (cookiesSaved === 'yes') {
        cookies.style.display = "none";
        cookiesOuter.style.display = "none"; //was overlay
        console.log("cookies already accepted"); //for testing purposes
    } else {
        cookies.style.display = "block";
        cookiesOuter.style.display = "block"; //was overlay
        console.log("user needs to accept cookies"); //for testing purposes
        body.style.overflowY = "hidden";
    }
})

cookiesButton.addEventListener('click', () => {
    //accesses the current domain's local Storage object and adds a data item to it.
    myStorage.setItem('cookiesAccepted', 'yes')
    console.log('cookies accepted'); //for testing purposes
    cookies.style.display = "none";
    cookiesOuter.style.display = "none"; //was overlay
    body.style.overflowY = "scroll";
});