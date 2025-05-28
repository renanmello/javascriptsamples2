/**
 * Agrupa vendas por cliente e soma os totais.
 * @param {Object[]} vendas - Array de objetos { cliente, total }
 * @returns {Object} Objeto agrupado por cliente com somas
 */
function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        if (!acc[venda.cliente]) {
            acc[venda.cliente] = 0;
        }
        acc[venda.cliente] += venda.total;
        return acc;
    }, {});
}

// Exemplo:
const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "João", total: 200 },
    { cliente: "Ana", total: 50 }
];
console.log(agruparVendasPorCliente(vendas)); // { Ana: 150, João: 200 }