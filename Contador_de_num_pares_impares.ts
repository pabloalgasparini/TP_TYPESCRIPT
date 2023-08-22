function contadorParesImpares(inicio: number, fin: number): void {
    let pares = 0;
    let impares = 0;

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Cantidad de pares: ${pares}`);
    console.log(`Cantidad de impares: ${impares}`);
}

const inicio = parseInt(prompt("Ingrese el número de inicio:"));
const fin = parseInt(prompt("Ingrese el número de fin:"));

contadorParesImpares(inicio, fin);
