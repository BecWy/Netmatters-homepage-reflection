const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#submit");
const searchInput = document.querySelector("#search-bar-input");
const supportButton = document.querySelector("#support-button");
const contactButton = document.querySelector("#contact-button");


export const searchbarJS = () => { //re-activate when switch back to the app js file after testing
//const searchbarJS = () => {    // this line is for testing only
    searchButton.addEventListener('click', () => {
        searchToggle()
    })
    
     const searchToggle = () => {
        supportButton.classList.toggle("toggle-hide"); //displays/hides the button
        contactButton.classList.toggle("toggle-hide"); //displays/hides the button
        searchBar.classList.toggle("toggle-search-width"); //expands the width of the searchbar container 
        searchInput.classList.toggle("toggle-hide") //displays/hides the search input
    }
}

//searchbarJS(); for testing purposes only - this breaks it if it's set to export.

