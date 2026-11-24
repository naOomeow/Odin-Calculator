const outputDisp = document.querySelector(`#output`);
const inputDisp = document.querySelector(`#input`);

const numButtons = document.querySelectorAll(`.num-button`);
const numButtonArr = Array.from(numButtons);
// console.log(numButtonArr);
numButtonArr.forEach((button) => button.addEventListener((`click`), (e) => {
    const num = parseInt(e.target.textContent);
    console.log(num);
}));

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


function UPDATE_DISPLAY() {
    
};


function CALCULATE() {
    
};

function CLEAR() {
    
};