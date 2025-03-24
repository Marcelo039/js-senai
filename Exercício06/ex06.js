// Função para calcular Bhaskara
function bhaskara(a, b, c) {
    let delta = (b ** 2) - (4 * a * c);

    if (delta < 0) {
        return "Delta é negativo"; // Não há raízes reais
    }

    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [raiz1, raiz2]; // Retorna um array com as raízes
}

// Função que pega os valores do input e exibe os resultados
function calcularBhaskara() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // Verifica se os valores são válidos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Chama a função bhaskara
    let resultado = bhaskara(a, b, c);

    // Exibe o resultado na tela
    document.getElementById("resultado").innerText = 
        Array.isArray(resultado) ? `Raízes: x1 = ${resultado[0].toFixed(2)}, x2 = ${resultado[1].toFixed(2)}` 
                                 : resultado;
}
