const rocket = document.querySelector(".rocket");
const msg = document.querySelector('.msg');
const form = document.querySelector('.contact-form');

console.warn("Script formValidator.js is active.");

form.addEventListener('input', function(event) {
    event.preventDefault(); // Prevent default form behavior

    let passed = validationTest();

    if (passed === 3) {
        rocket.classList.remove('hidden');
        console.log("Validation test met requirements. Showing rocket.");
    } else {
        rocket.classList.add('hidden');
        console.log("Validation test hasn't met the requirements");
    }
});

function validationTest() {
    let name = document.getElementById('userName');
    let message = document.getElementById('message');
    let email = document.getElementById('emailAddress');
    let passed = 0;

    if (validateInput(name, value => isNaN(value) && value.trim() !== '')) {
        passed++;
    }
    if (validateInput(message, value => value.trim() !== '')) {
        passed++;
    }

    if (validateInput(email, value => /\S+@\S+\.\S+/.test(value) && value.trim() !== '')) {
        passed++;
    }

    return passed;
}

function validateInput(input, condition) {
    // Reset previous validation styles
    input.classList.remove('error', 'success');

    if (condition(input.value)) {
        showSuccess(input);
        return true;
    } else {
        showError(input);
        return false;
    }
}

function showError(input) {
    input.classList.add('error');
}

function showSuccess(input) {
    input.classList.add('success');
}

function launchRocket() {
    rocket.classList.add("launched");
    msg.textContent = "SENDING FORM";
}
