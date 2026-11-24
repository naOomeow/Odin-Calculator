//variables
let inputArr = []; 
let input1 = 0;
let input2 = 0;

const outputDisp = document.querySelector(`#output`);
const inputDisp = document.querySelector(`#input`);

const equalBtn = document.querySelector(`#equal`);
const clearBtn = document.querySelector(`#clear`);

const numButtons = document.querySelectorAll(`.num-button`);
const numButtonArr = Array.from(numButtons);
// console.log(numButtonArr);


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
};

//equal function
function CALCULATE() {
    console.log(`CALCULATING`);

};
equalBtn.addEventListener(`click`, () => {
    CALCULATE();
    UPDATE_DISPLAY();
})
//clear button
function CLEAR() {
    console.log(`Cleared`);
};
clearBtn.addEventListener(`click`, () => {
    CLEAR();
})

numButtonArr.forEach((button) => button.addEventListener((`click`), (e) => {
    const num = parseInt(e.target.textContent);
    inputArr.push(num);
    let input = GET_INPUT(inputArr);
    console.log(input);
}));