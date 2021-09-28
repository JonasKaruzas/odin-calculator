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
        case 'add':
            return add(a, b);
            break;
        case 'subtract':
            return subtract(a, b);
            break;
        case 'multiply':
            return multiply(a, b);
            break;
        case 'divide':
            return divide(a, b);
            break;
        case '':
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
let memoryNumber = '';
let activeOperator = '';

clear.addEventListener('click', function(){
    displayNumber = '';
    memoryNumber = '';
    updateDisplay();
})

buttons.forEach(button => {
    button.addEventListener('click', function(){
        displayNumber += button.textContent;
        updateDisplay();
    })
})

function updateDisplay() {
    display.textContent = displayNumber;
}

operators.forEach(operator => {
    operator.addEventListener('click', function(){
        if(activeOperator){
            equalsFn();
        }
        activeOperatorFn(operator);        
        memoryNumber = displayNumber;
        displayNumber = '';
    })
})

equals.addEventListener('click', function(){
    equalsFn();
})

function equalsFn(){
    displayNumber = operate(activeOperator, parseInt(memoryNumber), parseInt(displayNumber));
    displayNumber = (Math.floor(displayNumber * 100)) / 100;
    updateDisplay();
    activeOperator = '';
    memoryNumber = '';
    removeSelectedOperators();
}

function activeOperatorFn(operator) {
    removeSelectedOperators();
    activeOperator = operator.id;
    operator.classList.add('selected');
}

function removeSelectedOperators(){
    operators.forEach(operator => {
        operator.classList.remove('selected');
    })
}