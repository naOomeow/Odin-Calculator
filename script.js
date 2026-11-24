//variables
let inputArr = []; 
let input1 = 0;
let input2 = 0;
let operatorIn = "";

const outputDisp = document.querySelector(`#output`);
const inputDisp = document.querySelector(`#input`);

const equalBtn = document.querySelector(`#equal`);
const clearBtn = document.querySelector(`#clear`);

const numButtons = document.querySelectorAll(`.num-button`);
const numButtonArr = Array.from(numButtons);
// console.log(numButtonArr);
const operatorButtons = document.querySelectorAll(`.operator-buttons`);
const opButtonsArr = Array.from(operatorButtons);


function GET_INPUT(arr) {
    let joined = arr.join(``);
    return parseInt(joined);
}
//Arethmetics
function ADD(a, b) {
    return a + b;
};

function SUBTRACT(a, b) {
    return a - b;
};

function MULTIPLY(a, b) {
    return a * b;
};

function DIVIDE(a, b) {
    return a / b;
};

function EXP(a, b) {
    return a ** b;
};

//update Display
function UPDATE_DISPLAY() {
    console.log(`display updated`);
    console.log(inputArr);
    console.log(input1);
    console.log(operatorIn);
    console.log(input2);
};

//equal function
function CALCULATE() {
    console.log(`CALCULATING`);
    switch (operatorIn) {
        case '+':{
            let answer = ADD(input1, input2);
            input1 = answer;
            input2 = 0;
            break;
        }
        case '-': {
            let answer = SUBTRACT(input1, input2);
            input1 = answer;
            input2 = 0;
            break;
        }
        case '/': {
            let answer = DIVIDE(input1, input2);
            input1 = answer;
            input2 = 0;
            break;
        }
        case '*': {
            let answer = MULTIPLY(input1, input2);
            input1 = answer;
            input2 = 0;
            break;            
        }
        
        case '**': {
            let answer = EXP(input1, input2);
            input1 = answer;
            input2 = 0;
            break;            
        }
    }
    

};
equalBtn.addEventListener(`click`, () => {
    CALCULATE();
    inputArr = [];
    operatorIn = '';
    UPDATE_DISPLAY();
})
//clear button
function CLEAR() {
    console.log(`Cleared`);
    input1 = 0;
    input2 = 0;
    operatorIn = '';
    inputArr = [];
};
clearBtn.addEventListener(`click`, () => {
    CLEAR();
    UPDATE_DISPLAY();
})

numButtonArr.forEach((button) => button.addEventListener((`click`), (e) => {
    const num = parseInt(e.target.textContent);
    inputArr.push(num);
    let input = GET_INPUT(inputArr);
    if (operatorIn === '') {
        input1 = input;
    } else {
        input2 = input;
    };
    
    UPDATE_DISPLAY();
}));

opButtonsArr.forEach((button) => button.addEventListener(`click`, (e) => {
    let op = e.target.textContent;
    if (inputArr.length === 0) {
        operatorIn = op;
        inputArr = [];
    } else {
        CALCULATE();
        operatorIn = op;
        inputArr = [];
    }
    
    UPDATE_DISPLAY();
}));