function contadorPalabras(oracion: string): number {
    const palabras = oracion.split(" ").filter(word => word !== "");
    return palabras.length;
}

const inputOracion = prompt("Ingrese una oración:");
const cantidadPalabras = contadorPalabras(inputOracion);
console.log(`La cantidad de palabras en la oración es: ${cantidadPalabras}`);
