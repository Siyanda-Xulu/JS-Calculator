// Refrence display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false; // Flag to track if a calculation was just performed and will change if calculation is performed

// Testing function to append value to display and show an alert
function appendToDisplay(value) {
    console.log('Button pressed: ', value); 

    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) { // If a calculation was just performed and the value is not a numbre than is will return true but because of the execution order(!) it will not append the value and will return false.
        display.value = value;
        justCalculated = false; // Reset the flag after appending a new value
        return;
    }

    // If current display show 0 and user enters a number, we wanna replace the 0 with the new number
    if (currentValue === '0' && !isNaN(value)) {
        display.value = value;
    // If the current display shows 0 and the user enters decimals, keep the 0
    } else if (currentValue === '0' && value === '.') {
        display.value = currentValue + value;
    } else {
        display.value = currentValue + value;
    }

    //Reset the justCalculated flag when user starts typing
    justCalculated = false;

    console.log('Display updated to: ', display.value);
}

   

// Testing function to clear the display and show an alert
function clearDisplay() {
    console.log('Clear button presssed.');

    alert('Clear button was clicked');
}

// Testing function to delete the last character from the display and show an alert
function deleteLast() {
    console.log('Backspace button pressed.');

    // If theres only one character or its 0, reset to 0
    if (currentValue.length <= 1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0, -1); // Remove the last character
    }
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