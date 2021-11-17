let displayValue = 0; // whatever is currently shown in the calc display
let buttonValue; // variable to store the clicked button
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
// display.textContent = displayValue;

// Select all buttons and add click event listeners
const allButtons = document.querySelectorAll('.buttonsAll');
allButtons.forEach( button => {
    button.addEventListener('click', buttonClick());
});

// Function to store what button was clicked
// If button ID is an operator, then store it in operator variable
// Else store it in display value
// Then, in the buttonClick function, if not an operator then update the display

function storeClickedButton(clicked) {
    // if (clicked matches something from operatorsArray) {
    //     store the id as the operator
    // } else if (clicked matches notMathOperatorsArray) {
    //     change the variable by removing last character (and update display),
    //      or
    //     clear the PIT variable AND anything held in answer variable
    // } else if (clicked matches party mode) {
    //     have a party
    // } else {
    //     store the id as an update to the display value ()
    // }
    if (display.textContent == 0) {
        // need a int first, so if operator just return
        if ((operatorsArray.includes(clicked) || (notMathOperatorsArray.includes(clicked)))) {
            return;
        }
        // otherwise, put it on the screen
        displayValue = clicked;
        display.textContent = displayValue;
    } else {
        // ignore the party, backspace, and reset for now
        if (notMathOperatorsArray.includes(clicked)) {
            console.log(`notMathOperator clicked`)
            return;
        }
        // now if we see a MATH operator, we want to start storing display values and
        // operator in some temp variables (that I haven't declared yet!!!)
        if (operatorsArray.includes(clicked)) {
            console.log(`Math operator clicked`)
            return;
        }
        displayValue = displayValue + clicked;
        display.textContent = displayValue;
    }
}

// Function for what to do when a button is clicked
function buttonClick(displayValue) {
    display.textContent = displayValue || "0";
}