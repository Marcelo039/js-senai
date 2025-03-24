function calcularPotencia() {
    let base = parseFloat(document.getElementById("num1").value);
    let expoente = parseFloat(document.getElementById("num2").value);

    if (isNaN(base) || isNaN(expoente)) {
        document.getElementById("resultado").innerText = "Por favor, insira dois números válidos.";
        return;
    }

    let resultado = "Potência: " + Math.pow(base, expoente);
    
    document.getElementById("resultado").innerText = resultado;
}
