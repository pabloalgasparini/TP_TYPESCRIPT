function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

const conversionType = prompt("Seleccione la conversión (celsiusToFahrenheit / fahrenheitToCelsius):");
const temperatura = parseFloat(prompt("Ingrese la temperatura:"));

let resultadoConversion: number;

if (conversionType === "celsiusToFahrenheit") {
    resultadoConversion = celsiusToFahrenheit(temperatura);
    console.log(`${temperatura}°C equivale a ${resultadoConversion}°F`);
} else if (conversionType === "fahrenheitToCelsius") {
    resultadoConversion = fahrenheitToCelsius(temperatura);
    console.log(`${temperatura}°F equivale a ${resultadoConversion}°C`);
} else {
    console.log("Tipo de conversión no válido");
}
