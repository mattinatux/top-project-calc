let displayValue = 0; // whatever is currently shown in the calc display
let firstNumberStore;
let secondNumberStore;
let nextOperandStore; // Useful if someone wants an operator to act like an equals sign for the display
let operandStore; // Operator to use
const operatorsArray = ["+", "-", "*", "/", "="]; // to work with operate function
const notMathOperatorsArray = ["reset", "backspace", "party"]; // to manipulate variable or display

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

function storeClickedButton(clicked) {
    // Temporary code to ignore party, backspace, and reset buttons
    if (notMathOperatorsArray.includes(clicked)) {
        console.log(`Currently ignoring party, backspace, and reset buttons`);
        return;
    }

    // Equation must start with an integer
    if ( (displayValue == 0) && ( (operatorsArray.includes(clicked)) || (notMathOperatorsArray.includes(clicked)) ) ) {
        return;
    }

    if (operatorsArray.includes(clicked)) {
        if (operandStore === undefined) {
            operandStore = clicked;
        } else {
            nextOperandStore = clicked;
        }
    }

    // Fix to prevent leading 0 on first number entry
    if (displayValue != 0) {
        displayValue = displayValue + clicked;
        display.textContent = displayValue;   
    } else {
        displayValue = clicked;
        display.textContent = displayValue;
    }
}

// Function for what to do when a button is clicked
function buttonClick(displayValue) {
    // display.textContent = displayValue || "0";
    console.log(`click! ${this.id}`);

    if (firstNumberStore === undefined) {
        firstNumberStore = Number(displayValue);
    } else if (secondNumberStore === undefined) {
        secondNumberStore = Number(displayValue);
    } else {
        displayValue = operate(operandStore, firstNumberStore, secondNumberStore);
        display.textContent = displayValue;
    }
}