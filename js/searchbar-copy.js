const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-bar-input");
const supportButton = document.querySelector("#support-button");
const contactButton = document.querySelector("#contact-button");

searchButton.addEventListener('click', () => {
    searchToggle()
})

const searchToggle = () => {
//function searchToggle() {
    supportButton.classList.toggle("toggle-hide"); //this toggle is working, the class is being added. But the button isn't being displayed.
    contactButton.classList.toggle("toggle-hide"); //this toggle is working, the class is being added. But the button isn't being displayed.
    searchBar.classList.toggle("toggle-search-width"); //expands the width of the search container 
    searchInput.classList.toggle("toggle-hide") // show element - this class is already added to the html
}