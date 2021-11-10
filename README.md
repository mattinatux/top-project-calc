# top-project-calc
The Odin Project - Calculator Project

https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator
Our final project is going to combine everything you’ve learned so far: you’re going to make an on-screen calculator using JavaScript, HTML, and CSS.

Requirements:
- DO NOT use eval()
- DO NOT return a "new Function()" to evaluate a string

✓ - Basic functions:
    ✓ - Add
    ✓ - Subtract
    ✓ - Multiply
    ✓ - Divide
✓ - Function Operate(): takes an operator and 2 numbers, and then calls one of the basic functions on the numbers
✓ - Basic HTML calculator with buttons for:
    ✓ - Each digit
    ✓ - Each of the basic functions (button for +, -, etc.)
    ✓ - The Operate function (i.e., = button)
    ✓ - Clearing the display
    ✓ - Not a button: don't forget to include a basic display
- Functions to populate the display when you click the number buttons (you should store the display value in a variable so it can be used in next step)
- Make it work!
    - Store the first number input into the calculator when a user presses an operator
    - Save which operation has been chosen and then operate() on them when the user presses the "=" key
    - Once operate() has been called, update the display with the solution

- Extra Credit:
    - Add a "." button and let users input decimals
    - Add a "backspace" button to undo wrong clicks
    - Add keyboard support
    - Add touch support (is that additional or native?)
    - Make it look pretty

- WATCH OUT!
    - Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution. Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.
    
    - You should round answers with long decimals so that they don’t overflow the screen.
    
    - Pressing = before entering all of the numbers or an operator could cause problems!

    - Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
    
    - Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!