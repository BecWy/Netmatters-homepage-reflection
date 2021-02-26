//on page load need to run an if statement, using local storage
//if cookies are saved do not display
//if cookies are not saved then do display

//will need an event listener for the button
//will need to change the value of cookiesSaved based on info from local storage.


const myStorage = window.localStorage;
const cookies = document.querySelector(".cookies");
const cookiesButton = document.querySelector("#cookies-button");
let cookiesSaved = false;


//CHECKS IF COOKIES ARE SAVED. DECIDES WHETHER TO DISPLAY THE COOKIES POP UP OR NOT
//this works :)
if (cookiesSaved) {
    cookies.style.display = "none";
} else {
    cookies.style.display = "block";
}

if (myStorage.getItem('cookieSeen') != 'shown') {
    cookiesSaved = true;
}

cookiesButton.addEventListener('click', () => {
    myStorage.setItem('cookieSeen','shown')
    cookies.style.display = "none";
});

// if (myStorage.getItem(‘cookieSeen’) != ‘shown’) {
//     cookiesSaved = true;
//     // cookies.delay(2000).fadeIn();
//     // myStorage.setItem(‘cookieSeen’,’shown’)
//   };

//   $(‘.close’).click(function() {
//     $(‘.cookie-banner’).fadeOut();
//   })