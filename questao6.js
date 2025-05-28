/**
 * Memoiza resultados de uma função para evitar recálculos.
 * @param {Function} fn - Função a memoizar
 * @returns {Function} Versão memoizada da função
 */
function memoize(fn) {
    const cache = {};
    return function (arg) {
        const key = JSON.stringify(arg); // Garante que tipos complexos sejam usados como chave
        if (!(key in cache)) {
            cache[key] = fn.call(this, arg); // Executa a função original e armazena no cache
        }
        return cache[key];
    };
}

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

// Cria versão memoizada do fatorial
const fatorialMemoizado = memoize(fatorial);

// Testes
console.log(fatorialMemoizado(5)); // 120 (calculado)
console.log(fatorialMemoizado(5)); // 120 (cache)
console.log(fatorialMemoizado(6)); // 720 (calculado)
console.log(fatorialMemoizado(6)); // 720 (cache)