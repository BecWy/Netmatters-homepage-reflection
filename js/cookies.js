
const myStorage = window.localStorage;
const cookies = document.querySelector(".cookies");
const cookiesButton = document.querySelector("#cookies-button");
const cookiesOuter = document.querySelector(".cookies-outer-container");

export const cookiesJS = () => {  //re-activate when switch back to the app js file after testing
//const cookiesJS = () => { // this line is for testing only

    document.addEventListener("DOMContentLoaded", ()=> {
        const cookiesSaved = localStorage.getItem('cookiesAccepted');
    
        //Checks if cookies are saved. Decides whether to display the cookies popup or not.
        if (cookiesSaved === 'yes') {
            cookies.style.display = "none";
            cookiesOuter.style.display = "none"; 
            //console.log("cookies already accepted"); //for testing purposes
        } else {
            cookies.style.display = "block";
            cookiesOuter.style.display = "block"; //"flex" caused issues in mobile as need the ability to scroll
            //console.log("user needs to accept cookies"); //for testing purposes
            cookiesOuter.style.overflowY = "auto";
        }
    });
    
    //when cookies are accepted by the user
    cookiesButton.addEventListener('click', () => {
        //accesses the current domain's local Storage object and adds a data item to it.
        myStorage.setItem('cookiesAccepted', 'yes')
        //console.log('cookies accepted'); //for testing purposes
        //hides the popup
        cookies.style.display = "none";
        cookiesOuter.style.overflowY = "hidden";
        cookiesOuter.style.display = "none";  
    });
}

//cookiesJS(); for when testing this as a separate file