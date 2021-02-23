const searchToggle = () => {

    const searchButton = document.querySelector("#search-button");

    const searchInput = document.querySelector("#search-bar input[type=text]");
    const supportButton = document.querySelector("#support");
    const contactButton = document.querySelector("#contact");



    searchButton.addEventListener('click', () => {
        searchInput.classList.toggle("toggle-hide"); //this toggle is working, the class is being added. But the button isn't being displayed.
        supportButton.classList.toggle("toggle-show"); //this toggle is working, the class is being added. But the button isn't being displayed.
        contactButton.classList.toggle("toggle-show"); //this toggle is working, the class is being added. But the button isn't being displayed.
    });
}


searchToggle();