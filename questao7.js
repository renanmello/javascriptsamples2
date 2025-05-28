/**
 * Retorna nomes dos produtos ordenados por preço crescente.
 * @param {Object[]} produtos - Array de objetos { nome, preco }
 * @returns {string[]} Nomes dos produtos ordenados
 */
function ordenarProdutosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

// Exemplo:
const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 }
];
console.log(ordenarProdutosPorPreco(produtos)); // ["Mouse", "Teclado", "Notebook"]