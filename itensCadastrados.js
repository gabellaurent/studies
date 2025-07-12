function itensCadastrados() {
  const listaExistente = document.getElementById("listaDeItens");
  if (listaExistente) {
    listaExistente.remove(); // Remove se já existir, para não duplicar
    return;
  }
  const listaDeItens = document.createElement("div");
  listaDeItens.id = "listaDeItens";

  const nenhumItemCadastrado = document.createElement("p");
  nenhumItemCadastrado.textContent = "Nenhum item cadastrado";
  listaDeItens.appendChild(nenhumItemCadastrado);

  document.body.appendChild(listaDeItens);
}
window.addEventListener("DOMContentLoaded", () => {
  const exercicioCadastroItens2 = document.getElementById("linkCadastroItens");
  if (exercicioCadastroItens2) {
    exercicioCadastroItens2.addEventListener("click", itensCadastrados);
  }
});
