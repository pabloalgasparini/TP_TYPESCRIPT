function contadorPalabras(oracion) {
    var palabras = oracion.split(" ").filter(function (word) { return word !== ""; });
    return palabras.length;
}
var inputOracion = prompt("Ingrese una oración:");
var cantidadPalabras = contadorPalabras(inputOracion);
console.log("La cantidad de palabras en la oración es: "+cantidadPalabras);
alert("La cantidad de palabras en la oración es: "+cantidadPalabras)