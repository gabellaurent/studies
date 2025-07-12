function criarTopo() {
  const menu = document.createElement("nav");
  menu.id = "topoMenu";

  const menuUl = document.createElement("ul");

  const ulLi1 = document.createElement("li");
  const item1 = document.createElement("a");
  item1.textContent = "Exercicio Cadastro";
  item1.href = "#";
  ulLi1.appendChild(item1);

  const ulLi2 = document.createElement("li");
  const item2 = document.createElement("a");
  item2.textContent = "Em breve";
  item2.href = "#";
  ulLi2.appendChild(item2);

  menuUl.appendChild(ulLi1);
  menuUl.appendChild(ulLi2);
  menu.appendChild(menuUl);
  document.body.appendChild(menu);
}

criarTopo();
