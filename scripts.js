let numA;
let numB;

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

container.addEventListener("click", (event) => {
    switch (event.target.id){
        case 'btn1':
            
            break;
        case 'btn2':

            break;
        case 'btn3':

            break;
    }
  });

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