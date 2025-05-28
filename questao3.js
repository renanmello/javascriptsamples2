/**
 * Retorna todas as palavras únicas de uma string.
 * @param {string} texto - Frase ou texto com palavras repetidas
 * @returns {string[]} Array com palavras únicas
 */
function palavrasUnicas(texto) {
    const palavras = texto.toLowerCase().split(/\s+/);
    const unicas = [];

    for (let palavra of palavras) {
        if (!unicas.includes(palavra)) {
            unicas.push(palavra);
        }
    }

    return unicas;
}

// Exemplo:
console.log(palavrasUnicas("olá olá mundo mundo")); // ["olá", "mundo"]