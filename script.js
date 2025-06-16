// Refrence display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false; // Flag to track if a calculation was just performed and will change if calculation is performed

// Function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char)
}

// Function to get the last character of the display value
function getLastChar() { // Get the last character of the display value
    return display.value.slice(-1); // Return the last character of the display value
}


// Testing function to append value to display and show an alert
function appendToDisplay(value) {
    console.log('Button pressed: ', value); 

    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) { // If a calculation was just performed and the value is not a numbre than is will return true but because of the execution order(!) it will not append the value and will return false.
        display.value = value;
        justCalculated = false; // Reset the flag after appending a new value
        return;
    }
  

    if (justCalculated && isOperator(value)) { // If a calculation was just performed and the value is an operator, we want to append the operator to the display
        display.value = currentValue + value; // Append the operator to the current value
        justCalculated = false;
        return;
    }

// Handles Operators 
    if (isOperator(value)) {
        // Dont allow operator as first char (exception for minus)
        if(currentValue === '0' && value !== '-') {
            return; // If the current value is 0 and the value is not a minus sign, do not append the operator
    }

    // If the last character is already an operator, replace it
    if (isOperator(getLastChar())) { // Check if the last character is an operator
        display.value = currentValue.slice(0, -1) + value; // Replace the last character with the new operator
    } else {
        display.value = currentValue + value; // Append the operator to the current value
    }
        } else if (!isNaN(value)) { // If the value is a number
            if (currentValue === '0') {
                display.value = value;
            } else {
                display.value = currentValue + value; // Append the number to the current value
            }
        } else if (value === '.') {  // If the value is a decimal point
            if (currentValue === '0') {
                display.value = currentValue + value; // If the current value is 0, append the decimal point
            } else {
                // Get the last number in the display (after last operator)
                let parts = currentValue.split('/[+\-*/]'); // Split the current value by operators to get the last number
                let lastNumber = parts[parts.length -1]; // Get the last number from the parts

                // Only add decimal if number doesn't have one
                if (!lastNumber.includes('.')) {  // Check if the last number already has a decimal point and if it doesn't, append the decimal point
                    display.value = currentValue + value;
                }
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

