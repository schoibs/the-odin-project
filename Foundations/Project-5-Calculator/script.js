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
                return "Can't divide by zero, idiot!"
            break;
    }

    // round to two decimal places if necessary
    return Math.round((ans + Number.EPSILON) * 100) / 100; 
}


const displayArea = document.querySelector('.display');


// reset the application
let firstOperand = 0;
let operation = '';
let secondOperand = 0;
let content = '0';  // placeholder for storing display content
displayArea.textContent = firstOperand; // at the beginning, display the first operand which is zero

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
        // when user click operation button, store content as first operand
        firstOperand = +displayArea.textContent;

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
    secondOperand = +displayArea.textContent;

    // display answer
    const answer = operate(operation, firstOperand, secondOperand);
    displayArea.textContent = answer;

    // reset content after calculating answer
    content = '0';
});


const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', () => {
    // reset the application
    firstOperand = 0;
    operation = '';
    secondOperand = 0;
    content = '0';
    displayArea.textContent = firstOperand;
});
