function criarBotaoCadastrar() {
  if (document.getElementById("cadastroDeItensBotao")) {
    document.getElementById("cadastroDeItensBotao").remove();
    document.getElementById("cadastroDeItensFormulario").remove();
    return;
  }

  const botao = document.createElement("button");
  botao.innerText = "Cadastrar Item";
  botao.id = "cadastroDeItensBotao";

  botao.addEventListener("click", criarFormularioItens);

  document.body.appendChild(botao);
}

window.addEventListener("DOMContentLoaded", () => {
  const exercicioCadastroItens = document.getElementById("linkCadastroItens");
  if (exercicioCadastroItens) {
    exercicioCadastroItens.addEventListener("click", criarBotaoCadastrar);
  }
});
