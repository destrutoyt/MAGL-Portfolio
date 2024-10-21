const init = addEventListener("DOMContentLoaded", getUserPreference)
const button = document.getElementById('theme_button');
const moonImage = document.querySelector('.moon');
const body = document.body;

button.addEventListener('click', buttonClicked);

function getUserPreference() {
    console.log("DOM loaded. getUserPreference() executed");

    if (localStorage.getItem('theme') === 'dark') {
        console.log('Dark theme detected');
        darkMode();
    }
    else {
        console.log("Light theme detected");
        lightMode();
    }
}

function buttonClicked() {
    if (body.classList.contains('darkMode')) {
        console.log("body element contains .darkMode. Changing to Light Mode");
        localStorage.setItem('theme', 'light');
        lightMode();
    }
    else {
        console.log("body element does NOT contains .darkMode. Changing to Dark Mode");
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
}

function lightMode() {
    console.log("Light Mode On");
    body.classList.remove('darkMode');
    moonImage.src = './node_modules/bootstrap-icons/icons/lightbulb.svg';
}

function darkMode() {
    console.log("Dark Mode On")
    body.classList.add('darkMode');
    moonImage.src = './node_modules/bootstrap-icons/icons/lightbulb-off.svg';
}