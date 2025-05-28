/**
 * Memoiza resultados de uma função para evitar recálculos.
 * @param {Function} fn - Função a memoizar
 * @returns {Function} Versão memoizada da função
 */
function memoize(fn) {
    const cache = {};
    return function (arg) {
        if (!(arg in cache)) {
            cache[arg] = fn(arg);
        }
        return cache[arg];
    };
}

// Exemplo:
const fatorialMemoizado = memoize(fatorial);
console.log(fatorialMemoizado(5)); // 120
console.log(fatorialMemoizado(5)); // 120 (cache)