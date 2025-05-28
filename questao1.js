/**
 * Verifica se uma data é válida.
 * @param {number} dia - Dia do mês (1-31)
 * @param {number} mes - Mês do ano (1-12)
 * @param {number} ano - Ano (ex: 2025)
 * @returns {boolean} true se a data for válida
 */
function ehDataValida(dia, mes, ano) {
    // Verifica valores fora do intervalo
    if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number') return false;
    if (mes < 1 || mes > 12) return false;

    const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica ano bissexto para fevereiro
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasNoMes[1] = 29;
    }

    return dia >= 1 && dia <= diasNoMes[mes - 1];
}

// Exemplo:
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (não é bissexto)