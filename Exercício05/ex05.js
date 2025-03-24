// Função para calcular juros simples
function calcularJurosSimples(capital, taxa, tempo) {
    let juros = capital * (taxa / 100) * tempo;
    return capital + juros;
}

// Função para calcular juros compostos
function calcularJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa / 100), tempo);
}

// Função que pega os valores do input e exibe os resultados
function calcularJuros() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let tempo = parseFloat(document.getElementById("tempo").value);

    // Verifica se os valores são válidos
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcula os valores
    let montanteSimples = calcularJurosSimples(capital, taxa, tempo);
    let montanteCompostos = calcularJurosCompostos(capital, taxa, tempo);

    // Exibe os resultados na tela
    document.getElementById("resultadoSimples").innerText = 
        "Juros Simples: R$" + montanteSimples.toFixed(2).replace(".", ",");
    
    document.getElementById("resultadoCompostos").innerText = 
        "Juros Compostos: R$" + montanteCompostos.toFixed(2).replace(".", ",");
}
