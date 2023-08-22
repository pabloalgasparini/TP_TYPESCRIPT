function tablaMultiplicar(numero: number, limite: number): void {
    for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

const numeroTabla = parseInt(prompt("Ingrese el número para la tabla de multiplicar:"));
const limiteTabla = parseInt(prompt("Ingrese el límite de la tabla de multiplicar:"));

tablaMultiplicar(numeroTabla, limiteTabla);

