/**
 * Converte array de pares para objeto.
 * @param {Array[]} pares - Array de arrays [[chave, valor], ...]
 * @returns {Object} Objeto resultante
 */
function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

/**
 * Converte objeto para array de pares.
 * @param {Object} obj - Objeto a converter
 * @returns {Array[]} Array de arrays [chave, valor]
 */
function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares;
}

// Exemplo:
const pares = [["nome", "João"], ["idade", 30]];
console.log(paresParaObjeto(pares)); // { nome: "João", idade: 30 }

const obj = { cor: "verde", tamanho: "M" };
console.log(objetoParaPares(obj)); // [["cor", "verde"], ["tamanho", "M"]]