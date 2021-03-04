const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-bar-input");
const supportButton = document.querySelector("#support-button");
const contactButton = document.querySelector("#contact-button");

export const searchbarJS = () => {
    searchButton.addEventListener('click', () => {
        searchToggle()
    })
    
    const searchToggle = () => {
        supportButton.classList.toggle("toggle-hide"); //displays/hides the button
        contactButton.classList.toggle("toggle-hide"); //displays/hides the button
        searchBar.classList.toggle("toggle-search-width"); //expands the width of the search container 
        searchInput.classList.toggle("toggle-hide") // show element - this class is already added to the html
    }
}

