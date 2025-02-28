document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.details-button');
    const allDivs = document.querySelectorAll('.detail-content'); // Select all content divs

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetID = button.getAttribute('data-target');
            const targetDIV = document.getElementById(targetID);

            if (targetDIV) {
                // Hide all divs first
                allDivs.forEach(div => div.classList.add('hidden'));

                // Show the selected div
                targetDIV.classList.remove('hidden');
            }

            // Remove "active" class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add "active" class to the clicked button
            button.classList.add('active');
        });
    });
});


/* 
If each button has it's own color, get the color class from the button (red, green, blue, etc.) and
add their respective class (active-red, active-green, active-blue, etc.) to the button.

If possible, add a attribute to each button called "data-color" and set the value to the color class.


*/