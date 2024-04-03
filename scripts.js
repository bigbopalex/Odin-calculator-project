let numA;
let numB;

let displayNum = '';
let display = document.querySelector("#displayText");
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

buttons.addEventListener("click", (event) => {
    switch (event.target.id){
        case 'num1': updateDisplay('1'); break;
        case 'num2': updateDisplay('2'); break;
        case 'num3': updateDisplay('3'); break;
        case 'num4': updateDisplay('4'); break;
        case 'num5': updateDisplay('5'); break;
        case 'num6': updateDisplay('6'); break;
        case 'num7': updateDisplay('7'); break;
        case 'num8': updateDisplay('8'); break;
        case 'num9': updateDisplay('9'); break;
        case 'num0': updateDisplay('0'); break;
    }
  });

function updateDisplay(digit){
    if (digit === '0' && displayNum.length === 0) return;
    else if (displayNum.length >= 7) return;
    displayNum += digit;
    display.textContent = displayNum;
}

//

function add(a,b){

}
function subtract (a,b){

}
function multiply (a,b){

}
function divide(a,b){

}

//

function operate (numA, numB, operator){
    switch (operator){
        case 'add':
            add(numA,numB);
            break;
        case 'subtract':
            subtract(numA,numB);
            break;
        case 'multiply':
            multiply(numA,numB);
            break;
        case 'divide':
            divide(numA,numB);
            break;
    }
}