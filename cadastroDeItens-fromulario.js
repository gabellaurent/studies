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

  // Escuta o submit do formulário
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valor = formularioInput.value.trim();

    // Verifica se são exatamente 6 dígitos numéricos
    const regexSeisDigitos = /^\d{6}$/;
    if (!regexSeisDigitos.test(valor)) {
      // Verifica se já existe uma mensagem de erro
      const erroExistente = document.getElementById("erroDeFormulario");
      if (erroExistente) return;

      // Cria a mensagem de erro
      const alertaDeErro = document.createElement("p");
      alertaDeErro.id = "erroDeFormulario";
      alertaDeErro.textContent = "Por favor, insira exatamente 6 números.";
      alertaDeErro.style.color = "red";

      document.body.insertBefore(alertaDeErro, listaDeItens);
      return;
    }

    const lista = document.getElementById("listaDeItens");
    if (!lista) return;

    // Remove mensagem padrão se ainda estiver
    const pNenhum = lista.querySelector("p");
    if (pNenhum && pNenhum.textContent === "Nenhum item cadastrado") {
      pNenhum.remove();
    }

    const novoItem = document.createElement("p");
    novoItem.textContent = valor;
    lista.appendChild(novoItem);

    formularioInput.value = ""; // limpa o input
    erroDeFormulario.remove();
  });

  document.body.insertBefore(formulario, listaDeItens);
}
