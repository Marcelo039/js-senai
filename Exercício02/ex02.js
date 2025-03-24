document.getElementById('triangulo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos inputs
    let lado1 = parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value);
    let lado3 = parseFloat(document.getElementById('lado3').value);

    // Função para classificar o triângulo
    function classificarTriangulo(lado1, lado2, lado3) {
        if (lado1 === lado2 && lado2 === lado3) {
            return "Equilátero";
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    }

    // Exibindo o resultado
    let tipo = classificarTriangulo(lado1, lado2, lado3);
    document.getElementById('resultado').textContent = "O triângulo é " + tipo + ".";
});