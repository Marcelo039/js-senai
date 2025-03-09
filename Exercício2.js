function lancarDado() {
  let escolha = parseInt(prompt("Escolha um número entre 1 e 6:"));
  if (escolha < 1 || escolha > 6 || isNaN(escolha)) {
    alert("Por favor, escolha um número válido entre 1 e 6.");
    return;
  }

  let resultado = Math.floor(Math.random() * 6) + 1;

  if (escolha === resultado) {
    alert("Parabéns, você acertou!");
  } else {
    alert("Que pena, o número sorteado foi " + resultado);
  }
}

lancarDado();
