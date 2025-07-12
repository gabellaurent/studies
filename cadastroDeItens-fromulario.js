function criarFormularioItens() {
  // criei esse IF para impedir que o formulario seja criado caso o usuario clique 2 vezes no botão 'cadastrar item'
  if (document.getElementById("cadastroDeItensFormulario")) {
    document.getElementById("cadastroDeItensFormulario").remove();
    return;
  }

  const formulario = document.createElement("form");
  formulario.id = "cadastroDeItensFormulario";

  const formularioBotao = document.createElement("button");
  formularioBotao.type = "submit";
  formularioBotao.innerText = "Cadastrar";

  const formularioInput = document.createElement("input");
  formularioInput.type = "text";
  formularioInput.name = "item";
  formularioInput.placeholder = "Numero do Item";
  formularioInput.required = true;

  formulario.appendChild(formularioInput);
  formulario.appendChild(formularioBotao);
  document.body.appendChild(formulario);
}

window.addEventListener("DOMContentLoaded", () => {
  const cadastroDeItensButton = document.getElementById("cadastroDeItensBotao");
  if (cadastroDeItensButton) {
    cadastroDeItensButton.addEventListener("click", criarFormularioItens);
  }
});
