function fibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

const nFibonacci = parseInt(prompt("Ingrese la cantidad de números de la secuencia Fibonacci:"));
const sequence = fibonacci(nFibonacci);
console.log("Secuencia de Fibonacci:", sequence);
