/**
 * Jogo de adivinhação que pede ao usuário um número entre 1 e 100 até acertar.
 */
function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    while (true) {
        const palpite = parseInt(prompt("Adivinhe o número (1 a 100):"));

        if (isNaN(palpite)) {
            alert("Digite um número válido!");
            continue;
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            alert(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            break;
        } else if (palpite < numeroSecreto) {
            alert("Mais alto!");
        } else {
            alert("Mais baixo!");
        }
    }
}

// Para rodar no navegador:
// jogoAdivinhacao();