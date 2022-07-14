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
