
const formulario = document.querySelector("form");
const mensagem = document.getElementById("mensagem-sucesso");

formulario.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os dados do usuário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Captura os assuntos selecionados
    const interesses = document.querySelectorAll(
        'input[name="interesse"]:checked'
    );

    // Verifica se algum assunto foi selecionado
    if (interesses.length === 0) {
        alert("Selecione pelo menos um assunto de interesse!");
        return;
    }

    // Exibe a mensagem personalizada
    mensagem.textContent =
        "✓ Inscrição realizada com sucesso!\n\n" +
        "Olá, " + nome + "!\n" +
        "Seu e-mail (" + email + ") foi cadastrado na Newsletter Technocrat.\n\n" +
        "Obrigado por acompanhar nosso blog!";

    // Mostra a mensagem
    mensagem.hidden = false;

    // Limpa os campos
    formulario.reset();

});
