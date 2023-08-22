function calculadoraSimple(num1: number, num2: number, operacion: string): number {
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
            } else {
                throw new Error("No se puede dividir por cero");
            }
        default:
            throw new Error("Operación no válida");
    }
}

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

const resultado = calculadoraSimple(num1, num2, operacion);
console.log("El resultado es:", resultado);
