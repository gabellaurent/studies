function criarBotaoCadastrar() {
  const botao = document.createElement("button");
  botao.innerText = "Cadastrar Item";
  botao.id = "cadastroDeItensBotao";

  document.body.appendChild(botao);
}

criarBotaoCadastrar();
