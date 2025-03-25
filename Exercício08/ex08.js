// Função para verificar se um ano é bissexto
function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true; // Ano bissexto
    } else {
        return false; // Ano não bissexto
    }
}

// Função que obtém o ano do input e exibe o resultado
function verificarAnoBissexto() {
    let ano = parseInt(document.getElementById("ano").value);

    // Verifica se o valor é válido
    if (isNaN(ano) || ano <= 0) {
        alert("Por favor, insira um ano válido.");
        return;
    }

    // Verifica se o ano é bissexto
    let resultado = ehBissexto(ano) 
        ? `${ano} é um ano bissexto! 🎉` 
        : `${ano} não é um ano bissexto. ❌`;

    document.getElementById("resultado").innerText = resultado;
}
