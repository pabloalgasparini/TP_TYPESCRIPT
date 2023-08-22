function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
var conversionType = prompt("Seleccione la conversión (C a F / F a C):");
var temperatura = parseFloat(prompt("Ingrese la temperatura:"));
var resultadoConversion;
if (conversionType === "C a F") {
    resultadoConversion = celsiusToFahrenheit(temperatura);
    console.log("".concat(temperatura, "\u00B0C equivale a ").concat(resultadoConversion, "\u00B0F"));
    alert("".concat(temperatura, "\u00B0C equivale a ").concat(resultadoConversion, "\u00B0F"))
}
else if (conversionType === "C a F") {
    resultadoConversion = fahrenheitToCelsius(temperatura);
    console.log("".concat(temperatura, "\u00B0F equivale a ").concat(resultadoConversion, "\u00B0C"));
    alert("".concat(temperatura, "\u00B0F equivale a ").concat(resultadoConversion, "\u00B0C"))
}
else {
    console.log("Tipo de conversión no válido");
}
