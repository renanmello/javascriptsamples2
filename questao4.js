/**
 * Calcula o fatorial de forma recursiva.
 * @param {number} n - Número inteiro não negativo
 * @returns {number} Fatorial de n
 * @throws Error se n for negativo
 */
function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos.");
    }
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

// Exemplo:
console.log(fatorial(5)); // 120