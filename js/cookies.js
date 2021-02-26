
const myStorage = window.localStorage;
const cookies = document.querySelector(".cookies");
const cookiesButton = document.querySelector("#cookies-button");

document.addEventListener("DOMContentLoaded", ()=> {
    const cookiesSaved = localStorage.getItem('cookiesAccepted');
    //console.log(cookiesSaved); //this works, the value saves as true after the button is clicked.

    //CHECKS IF COOKIES ARE SAVED. DECIDES WHETHER TO DISPLAY THE COOKIES POP UP OR NOT
    if (cookiesSaved === 'yes') {
        cookies.style.display = "none";
        console.log("cookies already accepted"); //for testing purposes
    } else {
        cookies.style.display = "block";
        console.log("user needs to accept cookies"); //for testing purposes
    }
})

cookiesButton.addEventListener('click', () => {
    //accesses the current domain's local Storage object and adds a data item to it.
    myStorage.setItem('cookiesAccepted', 'yes')
    cookies.style.display = "none";
});