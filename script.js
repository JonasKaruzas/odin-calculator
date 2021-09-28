function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    switch (operator) {
        case add:
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break;
        case multiply:
            return multiply(a, b);
            break;
        case divide:
            return divide(a, b);
            break;
        default:
            alert('ERROR!')
    }
}

let display = document.getElementById('screen');
let clear = document.getElementById('clear');
let decimal = document.getElementById('decimal');
let equals = document.getElementById('equals');
let buttons = document.querySelectorAll('button.number');
let operators = document.querySelectorAll('button.operator')

let displayNumber = '';

clear.addEventListener('click', function(){
    displayNumber = '';
    updateDisplay('');
})

buttons.forEach(button => {
    button.addEventListener('click', function(){
        updateDisplay(button.textContent);
    })
})

function updateDisplay(num) {
    displayNumber += num;
    display.textContent = displayNumber;
}


console.log(decimal)
console.log(equals)