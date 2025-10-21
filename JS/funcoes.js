function abrirMenu()
{
    document.getElementById("menuLateral").style.width = "250px";
}

function fecharMenu()
{
    document.getElementById("menuLateral").style.width = "0";
}


document.addEventListener("DOMContentLoaded", () => {
    const subMenu = document.querySelector(".subMenu");
    const botaoProdutos = subMenu.querySelector(".produtosItens");

    botaoProdutos.addEventListener("click", (e) => {
        e.preventDefault(); // impede o link de recarregar a página
        subMenu.classList.toggle("aberto"); // alterna entre mostrar e esconder
    });
});
