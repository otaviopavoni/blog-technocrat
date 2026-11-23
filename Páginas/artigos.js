
// 1. Selecionando os elementos do HTML

const botaoFormulario = document.querySelector("#abrir-formulario");

const formulario = document.querySelector("#form-publicacao");

const autor = document.querySelector("#autor");
const titulo = document.querySelector("#titulo");
const categoria = document.querySelector("#categoria");
const resumo = document.querySelector("#resumo");
const conteudo = document.querySelector("#conteudo");

const listaPublicacoes = document.querySelector("#lista-publicacoes");


// 2. Abrindo e fechando o formulário


botaoFormulario.addEventListener("click", function() {

    formulario.hidden = !formulario.hidden;

    // Se o formulário estiver aberto
    if (!formulario.hidden) {

        // Rola a página até o formulário
        formulario.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Coloca o cursor no campo nome
        autor.focus();

    }

});




// Função responsável por exibir as publicações

function exibirPublicacoes(publicacoes) {

    listaPublicacoes.innerHTML = "";

    publicacoes.forEach(function(publicacao) {

        // Criando o card
        const card = document.createElement("article");

        card.classList.add("publicacao");


        // Criando os elementos
        const categoriaCard = document.createElement("span");
        const tituloCard = document.createElement("h3");
        const resumoCard = document.createElement("p");
        const conteudoCard = document.createElement("p");
        const autorCard = document.createElement("p");

        // Criando o botão de exclusão
        const botaoExcluir = document.createElement("button");

        botaoExcluir.type = "button";
        botaoExcluir.textContent = "Excluir publicação";
        botaoExcluir.classList.add("botao-excluir");

        // Identificando a publicação
        botaoExcluir.dataset.id = publicacao.id;


        // Inserindo os textos
        categoriaCard.textContent = publicacao.categoria;
        tituloCard.textContent = publicacao.titulo;
        resumoCard.textContent = publicacao.resumo;
        conteudoCard.textContent = publicacao.conteudo;

        autorCard.textContent = "Publicado por: " + publicacao.autor;
        autorCard.classList.add("autor-publicacao");


        // Adicionando os elementos ao card
        card.appendChild(categoriaCard);
        card.appendChild(tituloCard);
        card.appendChild(resumoCard);
        card.appendChild(conteudoCard);
        card.appendChild(autorCard);
        card.appendChild(botaoExcluir);


        // Adicionando o card à página
        listaPublicacoes.appendChild(card);

    });

}



// 4. Recuperando as publicações salvas

let publicacoes = JSON.parse(
    localStorage.getItem("publicacoes")
) || [];

// Garante que publicações antigas também tenham um ID
publicacoes.forEach(function(publicacao, indice) {

    if (!publicacao.id) {
        publicacao.id = "antiga-" + indice + "-" + Date.now();
    }

});

// Atualiza os dados salvos
localStorage.setItem(
    "publicacoes",
    JSON.stringify(publicacoes)
);

// Exibe as publicações
exibirPublicacoes(publicacoes);


// Exibindo as publicações quando a página abrir

exibirPublicacoes(publicacoes);


function excluirPublicacao(id) {

    // Pergunta se o visitante realmente deseja excluir
    const confirmar = confirm(
        "Tem certeza que deseja excluir esta publicação?"
    );

    if (!confirmar) {
        return;
    }

    // Remove a publicação do array
    publicacoes = publicacoes.filter(function(publicacao) {
        return String(publicacao.id) !== String(id);
    });

    // Atualiza o armazenamento
    localStorage.setItem(
        "publicacoes",
        JSON.stringify(publicacoes)
    );

    // Atualiza os cards na página
    exibirPublicacoes(publicacoes);

}


// Detectando cliques nos botões de exclusão

listaPublicacoes.addEventListener("click", function(event) {

    if (event.target.classList.contains("botao-excluir")) {

        const id = event.target.dataset.id;

        excluirPublicacao(id);

    }

});



// 5. Evento de envio do formulário

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    // Verificando se os campos estão preenchidos

    if (
        autor.value.trim() === "" ||
        titulo.value.trim() === "" ||
        categoria.value === "" ||
        resumo.value.trim() === "" ||
        conteudo.value.trim() === ""
    ) {

        alert("Preencha todos os campos!");

        return;

    }


    // Criando um objeto com os dados da publicação

   const novaPublicacao = {

    id: Date.now().toString(),

    autor: autor.value.trim(),

    titulo: titulo.value.trim(),

    categoria: categoria.value,

    resumo: resumo.value.trim(),

    conteudo: conteudo.value.trim()

};


    // Adicionando a publicação ao array

    publicacoes.unshift(novaPublicacao);


    // Salvando no navegador

    localStorage.setItem("publicacoes", JSON.stringify(publicacoes));


    // Atualizando os cards da página

    exibirPublicacoes(publicacoes);


    // Limpando o formulário

    formulario.reset();


    // Fechando o formulário

    formulario.hidden = true;


    // Mensagem de confirmação

    alert("Publicação realizada com sucesso!");

});
