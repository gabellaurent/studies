function criarBotaoCadastrar() {
  const botao = document.createElement("button");
  botao.innerText = "Cadastrar Item";
  botao.id = "cadastroDeItens/botao";

  document.body.appendChild(botao);
}

criarBotaoCadastrar();
