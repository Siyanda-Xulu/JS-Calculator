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
    } else if (value === '.') {
    // Get the last number in the display
        let lastNumber = currentValue.split('/[+\-*/]').pop(); // Split the current value by operators and get the last number
    // If the last number already contains a decimal point, do not append another one
    if (!lastNumber.includes('.')) { // Check if the last number already has a decimal point
        display.value = currentValue + value;
    }
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

    display.value = '0'; // Reset the display to 0
    justCalculated = false; // Reset the flag after clearing the display

    display.style.backgroundColor = '#f0f0f0'; 
    setTimeout(() => { // Reset the background color after 150ms
        display.style.backgroundColor = '';
   }, 150); 
}

// Testing function to delete the last character from the display and show an alert
function deleteLast() {
    console.log('Backspace button pressed.');

    let currentValue = display.value;

    // If theres only one character or its 0, reset to 0
    if (currentValue.length <= 1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0, -1); // Remove the last character
    }
}

// Testing function to perform a calculation and show an alert
function calculate() {
    console.log('Equals button pressed.');

    alert('Equals button was clicked');
}


document.addEventListener('keydown', function(event) {  // Listen for keydown events
    console.log('Key pressed', event.key); 

    if (event.key >= '0' && event.key <= '9') { // Check if the key is a number
        appendToDisplay(event.key);
    } else if (event.key === '.') { // Check if the key is a decimal point
        appendToDisplay('.');
    } else if (event.key === '+') { // Check if the key is a plus sign
        appendToDisplay('+');
    } else if (event.key === '-') { // Check if the key is a minus sign
        appendToDisplay('-');
    } else if (event.key === '*') { // Check if the key is a multiplication sign
        appendToDisplay('*');
    } else if (event.key === '/') { // Check if the key is a division sign
        event.preventDefault(); // Prevent default behavior for division key
        appendToDisplay('/');    
    }
      else if (event.key === 'Enter' || event.key === '=') { // Check for Enter or Equals key
        calculate();
    } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') { // Check for Escape or 'c' key
        clearDisplay();
    } else if (event.key === 'Backspace') { // Check for Backspace key
        deleteLast();
    }
})


// Testing function to see whatever displaced we get the value and if not displaced there is no value displace element not found
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculate loaded successfully');
    console.log('Display element', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
})

