let numA = null;
let numB = null;
let operator = null;

let completed = false; //helper variable, allow repeat of last operation by pressing enter again 

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
    //if keypress is a number
    if (/^[0-9]*$/.test(event.key) || event.key === '.') inputNumber(event.key);
    switch (event.key){
        case '/': inputOperator('÷'); break;
        case '*':
        case 'x': inputOperator('×'); break
        case '-': inputOperator('−'); break;
        case '+': inputOperator('＋'); break;
        case '=': 
        case 'Enter': operate(numA, displayNum, operator); break;
        case 'Backspace': clearButton(); break;
    }
});

function inputNumber(digit){
    if ((digit === '0' || digit === '.') && displayNum.length === 0) return; //first digit cannot be 0 or decimal
    else if (digit === '.' && displayNum.includes('.')) return; //prevents multiple decimals
    else if (displayNum.length >= 7) return;
    displayNum += digit;
    display.textContent = displayNum;
}

function inputOperator(operatorInput){
    //operator can only be inputted if first number has already been inputed
    if (displayNum.length === 0) return;
    else if (operator === null && !completed){
        numA = displayNum;
        operator = operatorInput;
        displayNum = '';
        display.textContent = displayNum;
        displaySubText.textContent = numA + " " + operatorInput;
    }
    else if (completed && displayNum.length > 0){
        numA = displayNum;
        operator = operatorInput;
        displayNum = '';
        display.textContent = displayNum;
        displaySubText.textContent = numA + " " + operatorInput;
        completed = false;
    }
    else return;
}

function clearAll(){
    completed = false;
    numA = null;
    numB = null;
    operator = null;
    displayNum = '';
    display.textContent = displayNum;
    displaySubText.textContent = numA;
}

function clearButton(){
    if (displayNum.length === 0 || completed) clearAll();
    else{
        displayNum = '';
        display.textContent = displayNum;
    }
}

function reset(inputIsEqualOperator){
    if (inputIsEqualOperator){
        displaySubText.textContent = displaySubText.textContent.slice(0, -1);
        displaySubText.textContent += operator;
        operate(numA, displayNum, operator); 
    }
    else clearAll();
}

function operate (numAstr, numBstr, operator){
    //if both numbers have not been inputted yet
    if (numAstr === null || numBstr.length === 0){
        return;
    }
    if (completed){ //repeat last operation
        numA = Number(display.textContent);
        displaySubText.textContent = displaySubText.textContent.slice(0, -1);
        displaySubText.textContent = numA + " " + operator + " " + numB + " =";
    }
    else { 
        console.log(displaySubText.textContent);
        displaySubText.textContent += " " + numBstr + " =";
        numA = Number(numAstr);
        numB = Number(numBstr);
    }

    switch (operator){
        case '＋': displayNum = add(numA,numB).toString(); break;
        case '−': displayNum = subtract(numA,numB).toString(); break;
        case '×': displayNum = multiply(numA,numB).toString(); break;
        case '÷': displayNum = divide(numA,numB).toString(); break;
    }
    display.textContent = displayNum;
    completed = true;
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