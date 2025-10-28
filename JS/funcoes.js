document.addEventListener("DOMContentLoaded", () => {
  const subMenus = document.querySelectorAll(".subMenu");

  subMenus.forEach((menu) => {
    const botao = menu.querySelector(".Produtos");
    botao.addEventListener("click", (e) => {
      e.preventDefault(); // evita que o link recarregue a página
      menu.classList.toggle("ativo"); // alterna entre mostrar/esconder

      // opcional: fecha outros submenus quando abrir um
      subMenus.forEach((outro) => {
        if (outro !== menu) {
          outro.classList.remove("ativo");
        }
      });
    });
  });
});