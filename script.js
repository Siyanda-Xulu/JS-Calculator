// Refrence display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false; // Flag to track if a calculation was just performed and will change if calculation is performed

// Testing function to append value to display and show an alert
function appendToDisplay(value) {
    console.log('Button pressed: ', value); 

    alert('You pressed: ' + value);
}

// Testing function to clear the display and show an alert
function clearDisplay() {
    console.log('Clear button presssed.');

    alert('Clear button was clicked');
}

// Testing function to delete the last character from the display and show an alert
function deleteLast() {
    console.log('Backspace button pressed.');

    alert('Backspace button was clicked');
}

// Testing function to perform a calculation and show an alert
function calculate() {
    console.log('Equals button pressed.');

    alert('Equals button was clicked');
}


// Testing function to see whatever displaced we get the value and if not displaced there is no value displace element not found
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculate loaded successfully');
    console.log('Display elemt', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
}
)