function calcularFatorial() {
    let a = parseInt(document.getElementById("num1").value);
    


    if (isNaN(a) || a<0) {
    document.getElementById("resultado").innerText = "Por favor, insira dois números válidos.";
    return;
}
    let fatorial = 1;
    for(let i = 1; i <= a; i++){
    fatorial *= i;
}
document.getElementById("resultado").innerText = `O fatorial de ${a} é: ${fatorial}`;

}