function calculadoraSimple(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 !== 0) {
                return num1 / num2;
            }
            else {
                throw new Error("No se puede dividir por cero");
            }
        default:
            throw new Error("Operación no válida");
    }
}
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));
var operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");
var resultado = calculadoraSimple(num1, num2, operacion);
console.log("El resultado es:", resultado);
alert("El resultado es: "+ resultado)