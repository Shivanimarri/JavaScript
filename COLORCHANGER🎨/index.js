const buttons = document.querySelectorAll('input');
const body = document.querySelector('body');

// Array of color IDs
const colors = ["grey", "red", "blue", "yellow"];

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);

        // Loop through the colors array
        for (let color of colors) {
            if (event.target.id === color) {
                body.style.backgroundColor = color;
                break; // Exit the loop once the color is found
            }
        }
    });
});

