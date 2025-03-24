function calcularOperacoes() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("resultado").innerText = "Por favor, insira dois números válidos.";
        return;
    }

    let resultado = "Soma: " + (a + b) + "\n";
    resultado += "Subtração: " + (a - b) + "\n";
    resultado += "Multiplicação: " + (a * b) + "\n";
    resultado += (b !== 0) ? "Divisão: " + (a / b) : "Divisão: Não é possível dividir por zero";

    document.getElementById("resultado").innerText = resultado;
}
