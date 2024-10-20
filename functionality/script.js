const init = addEventListener("DOMContentLoaded", getUserPreference)
const button = document.getElementById('theme_button');
const body = document.body;

button.addEventListener('click', buttonClicked);

function getUserPreference() {
    console.log("DOM loaded. getUserPreference() executed");
}

function buttonClicked() {
    console.log('Button has been clicked');
}