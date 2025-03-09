function gerarSenhaSegura() {
  let palavra = prompt("Digite uma palavra:");
  if (palavra) {
    let senhaSegura = palavra
      .trim()
      .replace(/a/g, "@")
      .replace(/i/g, "1")
      .replace(/o/g, "0");
    alert("Sua senha segura é: " + senhaSegura);
  } else {
    alert("Você precisa digitar uma palavra!");
  }
}

gerarSenhaSegura();
