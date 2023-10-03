//Display
var display = document.querySelector("#display");

//Numbers buttons
const seven = document.querySelector("#seven");
const eigth = document.querySelector("#eigth");
const nine = document.querySelector("#nine");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");

//Other Operations buttons
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");
const percentage = document.querySelector("#percentage");

//Main Operations buttons
const divide = document.querySelector("#divide-btn");
const cross = document.querySelector("#cross-btn");
const minus = document.querySelector("#minus-btn");
const plus_btn = document.querySelector("#plus-btn");
const equals = document.querySelector("#equals-btn");

var display_value = [];
var sum_accumulator = [];
var total = 0;

console.log(total);

//Other operations
clear.addEventListener("click", cleanDisplayOperation);
back.addEventListener("click", backOperation);

function addNumberAtDisplay(number) {
    var numero = document.querySelector("#display").innerHTML;
    document.querySelector("#display").innerHTML = numero + number;
}

function cleanDisplayOperation() {
    display.innerText = ""
}

function backOperation() {
    let resultado = display.innerText;
    display.innerText = resultado.substring(0, resultado.length - 1);
}
function equalsOperation() {
    let resultado = display.innerHTML;
    if (resultado) {
        display.innerHTML = eval(resultado);
    } else {
        display.innerHTML = "Nada...";
    }
}

//Numbers operations
seven.addEventListener("click", () => {
    addNumberAtDisplay("7");
});
eigth.addEventListener("click", () => {
    addNumberAtDisplay("8");
});
nine.addEventListener("click", () => {
    addNumberAtDisplay("9");
});
four.addEventListener("click", () => {
    addNumberAtDisplay("4");
});
five.addEventListener("click", () => {
    addNumberAtDisplay("5");
});
six.addEventListener("click", () => {
    addNumberAtDisplay("6");
});
one.addEventListener("click", () => {
    addNumberAtDisplay("1");
});
two.addEventListener("click", () => {
    addNumberAtDisplay("2");
});
three.addEventListener("click", () => {
    addNumberAtDisplay("3");
});
zero.addEventListener("click", () => {
    addNumberAtDisplay("0");
});
dot.addEventListener("click", () => {
    addNumberAtDisplay(".");
});

plus_btn.addEventListener("click", () => {
    addNumberAtDisplay("+");
});

minus.addEventListener("click", () => {
    addNumberAtDisplay("-");
});

cross.addEventListener("click", () => {
    addNumberAtDisplay("*");
});

divide.addEventListener("click", () => {
    addNumberAtDisplay("/");
});

equals.addEventListener("click", equalsOperation);
