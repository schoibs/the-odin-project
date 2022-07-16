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
            break;
    }

    return ans;
    
}

let firstOperand = 0;
let operation = '';
let secondOperand = 0;
let listeningFor = 'first';


const numberButtons = document.querySelectorAll('.number-btn');
numberButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

        if (listeningFor === 'first'){
            firstOperand = +button.textContent;
        } else if (listeningFor === 'second'){
            secondOperand = +button.textContent;
        }

    });
});


const opeartionButtons = document.querySelectorAll('.operation-btn');
opeartionButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.textContent === '+'){
            operation = 'add';
        } else if (button.textContent === '-'){
            operation = 'subtract';
        } else if (button.textContent === 'x'){
            operation = 'multiply';
        } else if (button.textContent === '/'){
            operation = 'divide';
        }

        listeningFor = 'second';
    });
});


const equalButton = document.querySelector('#equal-btn');
equalButton.addEventListener('click', () => {
    console.log(firstOperand, operation, secondOperand);
    listeningFor = 'first';
});


const clearButton = document.querySelector('#clear-btn');
equalButton.addEventListener('click', () => {
    firstOperand = 0;
    operation = '';
    secondOperand = 0;
    listeningFor = 'first';
});
