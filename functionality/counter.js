let valueDisplays = document.querySelectorAll('.num');
let interval = 2000;

valueDisplays.forEach((valueDisplays) => {
    let startVal = 0;
    let endVal = parseInt(valueDisplays.getAttribute('data-value'));
    let duration = Math.floor(interval / endVal);
    let counter = setInterval(function () {
        startVal++;
        valueDisplays.textContent = startVal;
        if (startVal === endVal) {
            clearInterval(counter);
        }
    }, duration);
});