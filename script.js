let displayValue = 0; // whatever is currently shown in the calc display
let buttonValue; // variable to store the clicked button
const operatorsArray = ["+", "-", "*", "/", "=", "reset", "backspace"];

// Function to add 2 numbers
function add(a, b) {
    return a + b;
}

// Function to subtract one number from another
function subtract(a, b) {
	return a - b;
};

// Function to multiple two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide one number by another
function divide(a, b) {
    return a / b;
}

// Function to operate (equals sign)
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }

    if (operator === "-") {
        return subtract(a, b);
    }

    if (operator === "*") {
        return multiply(a, b);
    }

    if (operator === "/") {
        return divide(a, b);
    }
}

// Select the display div and give it a starting value of 0
const display = document.querySelector('#display');
display.textContent = displayValue;

// Select all buttons and add click event listeners
const allButtons = document.querySelectorAll('.buttonsAll');
allButtons.forEach( button => {
    button.addEventListener('click', buttonClick);
});

// Function to store what button was clicked
// If button ID is an operator, then store it in operator variable
// Else store it in display value
// Then, in the buttonClick function, if not an operator then update the display

function storeClickedButton(clicked) {
    // if (clicked matches something from operatorsArray) {
    //     store the id as the operator
    // } else if (clicked matches party mode) {
    //     have a party
    // } else {
    //     store the id as an update to the display value ()
    // }
    console.log(clicked);
}

// Function for what to do when a button is clicked
function buttonClick() {
    display.textContent = `nice`;
}