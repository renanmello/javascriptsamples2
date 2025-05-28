/**
 * Cria uma função debounce.
 * @param {Function} fn - Função original
 * @param {number} delay - Tempo em ms
 * @returns {Function} Nova função com debounce aplicado
 */
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso:
window.addEventListener('resize', debounce(() => console.log("Resize terminou"), 300));