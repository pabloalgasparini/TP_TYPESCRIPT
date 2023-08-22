function contadorParesImpares(inicio, fin) {
    var pares = 0;
    var impares = 0;
    for (var i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    console.log("Cantidad de pares: ".concat(pares));
    console.log("Cantidad de impares: ".concat(impares));
    alert("Cantidad de pares: "+pares)
    alert("Cantidad de impares: "+impares)
}
var inicio = parseInt(prompt("Ingrese el número de inicio:"));
var fin = parseInt(prompt("Ingrese el número de fin:"));
contadorParesImpares(inicio, fin);
