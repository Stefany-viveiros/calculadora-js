const display = document.getElementById("display");

let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

// adiciona números no display
function addNumber(numero) {
    if (operador === "") {
        primeiroNumero += numero;
        display.value = primeiroNumero;
    } else {
        segundoNumero += numero;
        display.value = segundoNumero;
    }
}

// adiciona operador (+ - * /)
function addOperator(op) {
    if (primeiroNumero === "") return;
    operador = op;
}

// limpa tudo
function clearDisplay() {
    primeiroNumero = "";
    operador = "";
    segundoNumero = "";
    display.value = "";
}

// faz o cálculo
function calculate() {
    if (primeiroNumero === "" || segundoNumero === "") return;

    const num1 = Number(primeiroNumero);
    const num2 = Number(segundoNumero);
    let resultado = 0;

    if (operador === "+") {
        resultado = num1 + num2;
    } 
    else if (operador === "-") {
        resultado = num1 - num2;
    } 
    else if (operador === "*") {
        resultado = num1 * num2;
    } 
    else if (operador === "/") {
        if (num2 === 0) {
            resultado = "Erro";
        } else {
            resultado = num1 / num2;
        }
    }

    display.value = resultado;
    primeiroNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
}
