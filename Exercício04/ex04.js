// Função para formatar o valor inserido pelo usuário
function formatarValor() {
    let inputValor = document.getElementById("valor");  // Pega o input
    let valor = parseFloat(inputValor.value);  // Converte o valor para número

    // Verifica se o valor é válido
    if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }

    // Formata o valor em R$
    let valorFormatado = "R$" + valor.toFixed(2).replace('.', ',');

    // Atualiza o campo de input com o valor formatado
    inputValor.value = valorFormatado;

    // Exibe o resultado abaixo
    document.getElementById("resultado").innerText = "Valor formatado: " + valorFormatado;
}
