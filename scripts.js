let numA = null;
let operator = null;
let completed;

let displayNum = '';
let display = document.querySelector("#displayText");
let displaySubText = document.querySelector("#displaySubText");
let buttons = document.querySelector("#buttons");

let btn1 = document.querySelector("#num1");
let btn2 = document.querySelector("#num2");
let btn3 = document.querySelector("#num3");
let btn4 = document.querySelector("#num4");
let btn5 = document.querySelector("#num5");
let btn6 = document.querySelector("#num6");
let btn7 = document.querySelector("#num7");
let btn8 = document.querySelector("#num8");
let btn9 = document.querySelector("#num9");
let btn0 = document.querySelector("#num0");
let btnDivide = document.querySelector("#divide");
let btnMultiply = document.querySelector("#multiply");
let btnMinus = document.querySelector("#minus");
let btnAdd = document.querySelector("#add");
let btnClear = document.querySelector("#clear");
let btnDecimal = document.querySelector("#decimal");
let btnEqual = document.querySelector("#equal");

buttons.addEventListener("click", (event) => {
    if (completed){
        clearAll();
        completed = false;
    }
    switch (event.target.id){
        case 'num1': inputNumber('1'); break;
        case 'num2': inputNumber('2'); break;
        case 'num3': inputNumber('3'); break;
        case 'num4': inputNumber('4'); break;
        case 'num5': inputNumber('5'); break;
        case 'num6': inputNumber('6'); break;
        case 'num7': inputNumber('7'); break;
        case 'num8': inputNumber('8'); break;
        case 'num9': inputNumber('9'); break;
        case 'num0': inputNumber('0'); break;
        case 'decimal': inputNumber('.'); break;
        case 'divide': inputOperator('÷'); break;
        case 'multiply': inputOperator('×'); break;
        case 'minus': inputOperator('−'); break;
        case 'add': inputOperator('＋'); break;
        case 'equal': operate(numA, displayNum, operator); break;
        case 'clear': clearButton(); break;
    }
});

document.addEventListener('keydown', (event) => {
    if (/^[0-9]*$/.test(event.key) || event.key === '.') inputNumber(event.key);
    switch (event.key){
        case '/': inputOperator('÷'); break;
        case '*':
        case 'x': inputOperator('×'); break;
        case '-': inputOperator('−'); break;
        case '+': inputOperator('＋'); break;
        case 'Enter': operate(numA, displayNum, operator); break;
        case 'Backspace': operate(numA, displayNum, operator); break;
    }
});

function inputNumber(digit){
    if ((digit === '0' || digit === '.') && displayNum.length === 0) return;
    else if (digit === '.' && displayNum.includes('.')) return;
    else if (displayNum.length >= 7) return;
    displayNum += digit;
    display.textContent = displayNum;
}

function inputOperator(operatorInput){
    if (displayNum.length === 0) return;
    else if (operator === null){
        numA = displayNum;
        operator = operatorInput;
        displayNum = '';
        display.textContent = displayNum;
        displaySubText.textContent = numA + " " + operatorInput;
    }
    else return;
}

function clearAll(){
    numA = null;
    operator = null;
    displayNum = '';
    display.textContent = displayNum;
    displaySubText.textContent = numA;
}

function clearButton(){
    if (displayNum.length === 0) clearAll();
    else{
        displayNum = '';
        display.textContent = displayNum;
    }
}

function add(a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply (a,b){
    return a*b
}
function divide(a,b){
    if (a % b === 0) return a/b;
    else return parseFloat(a/b).toFixed(2);
    //if (b === 0) return "lmao";
}

function operate (numAstr, numBstr, operator){
    if (numAstr === null || numBstr.length === 0 || operator === null){
        return;
    }
    else{
        displaySubText.textContent += " " + numBstr + " =";
        numA = Number(numAstr);
        numB = Number(numBstr);
        switch (operator){
            case '＋': display.textContent = add(numA,numB); break;
            case '−': display.textContent = subtract(numA,numB); break;
            case '×': display.textContent = multiply(numA,numB); break;
            case '÷': display.textContent = divide(numA,numB); break;
        }
        completed = true;
    }
}