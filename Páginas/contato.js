
// 1. Selecionando os elementos do HTML

const formulario = document.querySelector("#form-contato");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");

const mensagemSucesso = document.querySelector("#mensagem-sucesso");
const textoSucesso = document.querySelector("#texto-sucesso");


// 2. Escutando o envio do formulário

formulario.addEventListener("submit", function(event) {

    // Impede o envio automático
    event.preventDefault();


    // 3. Limpando mensagens de validação anteriores

    nome.setCustomValidity("");
    mensagem.setCustomValidity("");


    // 4. Verificando nome e mensagem

    if (nome.value.trim() === "") {
        nome.setCustomValidity("Digite seu nome.");
    }

    if (mensagem.value.trim() === "") {
        mensagem.setCustomValidity("Digite sua mensagem.");
    }


    // 5. Verificando se todos os campos são válidos

    if (!formulario.checkValidity()) {

        formulario.reportValidity();

        return;

    }


    // 6. Criando a mensagem personalizada

    textoSucesso.textContent =
        `Olá, ${nome.value.trim()}! Sua mensagem sobre "${assunto.options[assunto.selectedIndex].text}" foi registrada com o e-mail ${email.value}.`;


    // 7. Escondendo o formulário

    formulario.hidden = true;


    // 8. Exibindo a confirmação

    mensagemSucesso.hidden = false;

});


// 9. Limpando erros ao digitar

nome.addEventListener("input", function() {
    nome.setCustomValidity("");
});

mensagem.addEventListener("input", function() {
    mensagem.setCustomValidity("");
});
