const mensagem = document.getElementById("mensagem-boas-vindas");

window.addEventListener("load", function() {

    mensagem.classList.add("mostrar");

    setTimeout(function() {
        mensagem.classList.remove("mostrar");
    }, 5000);

});