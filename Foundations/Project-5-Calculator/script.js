function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operation, num1, num2){
    
    let ans = 0;
    
    switch(operation){
        case 'add':
            ans = add(num1, num2);
            break;
        case 'subtract':
            ans = subtract(num1, num2);
            break;
        case 'multiply':
            ans = multiply(num1, num2);
            break;
        case 'divide':
            ans = divide(num1, num2);
            if (ans === Infinity)
                return "Can't divide by zero, idiot!";
            break;
    }

    if (isNaN(ans)){
        return "Invalid Operation!";
    }
    
    // round to two decimal places if necessary
    return Math.round((ans + Number.EPSILON) * 100) / 100; 
}


const displayArea = document.querySelector('.display');


// reset the application
let operands = [null, null];
let answer = null;
let operation = null;
let content = '0';  // placeholder for storing display content
displayArea.textContent = 0; // at the beginning, display the first operand which is zero

const numberButtons = document.querySelectorAll('.number-btn');
numberButtons.forEach((button) => {

    button.addEventListener('click', () => {
        // display content
        content = content + button.textContent;
        displayArea.textContent = +content;
    });

});


const operationButtons = document.querySelectorAll('.operation-btn');
operationButtons.forEach((button) => {

    button.addEventListener('click', () => {

        if (operands[0] !== null && operation !== null){
            // when user click operation button, 
            // check if first operand and operation method has already been set.
            // if true, store content as second operand
            operands[1] = (+displayArea.textContent);

            // display answer
            answer = operate(operation, operands[0], operands[1]);
            displayArea.textContent = answer;
        }

        // when user click operation button, store content as first operand
        operands[0] = (+displayArea.textContent);

        if (button.textContent === '+'){
            operation = 'add';
        } else if (button.textContent === '-'){
            operation = 'subtract';
        } else if (button.textContent === 'x'){
            operation = 'multiply';
        } else if (button.textContent === '/'){
            operation = 'divide';
        }

        // reset content before getting second operand
        content = '0';
    });

});


const equalButton = document.querySelector('#equal-btn');
equalButton.addEventListener('click', () => {
    // when user click equal button, store content as second operand
    operands[1] = (+displayArea.textContent);

    // display answer
    answer = operate(operation, operands[0], operands[1]);
    displayArea.textContent = answer;

    // reset operation method
    operation = null;

    // reset content after calculating answer
    content = '0';
});


const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', () => {
    // reset the application
    operands[0] = null;
    operands[1] = null;
    answer = null;
    operation = null;
    content = '0';
    displayArea.textContent = 0;
});
