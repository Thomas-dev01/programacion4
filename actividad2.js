let num1 = Number(prompt("Ingresa el primer numero"));
let num2 = Number(prompt("Ahora ingresa el segundo numero"));
let op = prompt("que operacion vas a usar?");
let resultado;
switch (op) {
    case "+":
        resultado = num1 + num2;
        alert("La suma da: " + resultado);
        break;
    case "-":
        resultado = num1 - num2;
        alert("La resta da: " + resultado);
        break;
    case "*":
        resultado = num1 * num2;
        alert("Esta multiplicacion da: " + resultado);
        break;
    case "/":
        resultado = num1 / num2;
        alert("Esta division da: " + resultado);
        break;

    default: alert("Operacion incorrecta, las operaciones permitidas son +, -, * y /.");

}