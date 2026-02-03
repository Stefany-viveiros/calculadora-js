const display = document.getElementById("display");

let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

function addNumber(numero) {
    if (numero === "." && (operador === "" ? primeiroNumero.includes(".") : segundoNumero.includes("."))) return;

    if (operador === "") {
        primeiroNumero += numero;
    } else {
        segundoNumero += numero;
    }

    updateDisplay();
}

function addOperator(op) {
    if (primeiroNumero === "") return;

    if (operador !== "" && segundoNumero !== "") {
        calculate();
    }

    operador = op;
    updateDisplay();
}

function clearDisplay() {
    primeiroNumero = "";
    operador = "";
    segundoNumero = "";
    display.value = "";
}

function calculate() {
    if (primeiroNumero === "" || segundoNumero === "") return;

    const num1 = Number(primeiroNumero);
    const num2 = Number(segundoNumero);
    let resultado = 0;

    switch (operador) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/": resultado = num2 === 0 ? "Erro" : num1 / num2; break;
    }

    primeiroNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
    display.value = primeiroNumero;
}

function updateDisplay() {
    display.value = primeiroNumero + operador + segundoNumero;
}
