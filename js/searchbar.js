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
        if(supportButton.classList.contains("toggle-hide")) {
            supportButton.classList.remove("toggle-hide");
        } else {
            supportButton.classList.add("toggle-hide");
        } 
    
        if(contactButton.classList.contains("toggle-hide")) {
            contactButton.classList.remove("toggle-hide");
        } else {
            contactButton.classList.add("toggle-hide");
        }
    
        if(searchBar.classList.contains("toggle-search-width")) {
            searchBar.classList.remove("toggle-search-width");
        } else {
            searchBar.classList.add("toggle-search-width");
        }
    
        if(searchInput.classList.contains("toggle-hide")) {
            searchInput.classList.remove("toggle-hide");
        } else {
            searchInput.classList.add("toggle-hide");
        }
    }

    

    //Works absolutely fine.... except for IE
    // const searchToggle = () => {
    //     supportButton.classList.toggle("toggle-hide"); //displays/hides the button
    //     contactButton.classList.toggle("toggle-hide"); //displays/hides the button
    //     searchBar.classList.toggle("toggle-search-width"); //expands the width of the search container 
    //     searchInput.classList.toggle("toggle-hide") // show element - this class is already added to the html
    // }
}

