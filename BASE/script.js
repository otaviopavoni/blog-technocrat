const mensagem = document.getElementById("mensagem-boas-vindas");

window.addEventListener("load", function() {

    mensagem.classList.add("mostrar");

    setTimeout(function() {
        mensagem.classList.remove("mostrar");
    }, 5000);

});

document.addEventListener("DOMContentLoaded", function() {

    const botaoMenu = document.getElementById("botao-menu");
    const menu = document.getElementById("menu-principal");

    botaoMenu.addEventListener("click", function() {

        menu.classList.toggle("aberto");

        botaoMenu.classList.toggle("ativo");

        const aberto = menu.classList.contains("aberto");

        botaoMenu.setAttribute("aria-expanded", aberto);

        botaoMenu.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

    });

    // FECHAR MENU AO CLICAR EM UM LINK

    const links = menu.querySelectorAll("a");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            menu.classList.remove("aberto");
            botaoMenu.classList.remove("ativo");

            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");

        });

    });

});