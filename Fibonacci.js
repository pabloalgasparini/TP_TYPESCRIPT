function fibonacci(n) {
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
var nFibonacci = parseInt(prompt("Ingrese la cantidad de números de la secuencia Fibonacci:"));
var sequence = fibonacci(nFibonacci);
console.log("Secuencia de Fibonacci:", sequence);
alert("Secuencia de Fibonacci: "+ sequence)