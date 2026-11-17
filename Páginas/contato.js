// 1. Selecionando os elementos do HTML

const formulario = document.querySelector("#form-contato");

const nome = document.querySelector("#nome");

const mensagem = document.querySelector("#mensagem");


// 2. Escutando o evento de envio do formulário

formulario.addEventListener("submit", function(event) {

    // Impede o envio automático
    event.preventDefault();


    // 3. Verificando se nome e mensagem possuem conteúdo

    nome.setCustomValidity("");

    mensagem.setCustomValidity("");

    if (nome.value.trim() === "") {

        nome.setCustomValidity("Digite seu nome.");

    }

    if (mensagem.value.trim() === "") {

        mensagem.setCustomValidity("Digite sua mensagem.");

    }


    // 4. Verificando se todos os campos são válidos

    if (!formulario.checkValidity()) {

        formulario.reportValidity();

        return;

    }


    // 5. Se chegou aqui, passou pelas validações

    alert("Formulário validado com sucesso!");

});


// 6. Limpando mensagens personalizadas ao digitar

nome.addEventListener("input", function() {

    nome.setCustomValidity("");

});

mensagem.addEventListener("input", function() {

    mensagem.setCustomValidity("");

});