# 🖥️ Technocraft — Blog de Tecnologia

Site estático de um blog sobre tecnologia, feito com **HTML, CSS e JavaScript puro**, sem frameworks e sem etapa de build. Foi desenvolvido por estudantes como forma de colocar em prática o que aprenderam sobre desenvolvimento web.

> **Slogan:** *Tecnologia que conecta o presente ao futuro.*

---

## 📌 Sobre o projeto

O **Technocraft** tem como objetivo compartilhar conhecimento sobre tecnologia de forma simples e acessível, tanto para quem já atua na área de T.I. quanto para quem está começando. O conteúdo gira em torno de três pilares:

- **Tecnologia**: novidades e informações sobre diferentes áreas do mundo tech.
- **Inovação**: ideias e tecnologias que estão transformando o dia a dia.
- **Conhecimento**: um espaço para aprender, trocar experiências e descobrir coisas novas.

### Páginas do site

| Página | Arquivo | O que tem |
|---|---|---|
| Início | `BASE/index.html` | Destaque principal, cards dos pilares do blog e chamada para as categorias |
| Artigos | `Páginas/artigos.html` | Lista de 6 artigos de exemplo (IA, programação, hardware, segurança, games e inovação) com imagem, categoria e resumo |
| Categorias | `Páginas/categorias.html` | 8 categorias (Jogos, Sistemas operacionais, Streaming, IA, Telecomunicações, Software, Hardware e Ofertas) com links externos para o Tecnoblog |
| Contato | `Páginas/contato.html` | Formulário com nome, e-mail, assunto e mensagem, com validação em JavaScript |
| Newsletter | `Páginas/newsletter.html` | Explicação da newsletter e formulário de inscrição com escolha de interesses |
| Sobre | `Páginas/sobre.html` | Missão do blog e apresentação da equipe |

### Recursos implementados

- Layout responsivo (adaptado para celular) com **CSS Grid** e **Flexbox**
- Cabeçalho fixo com menu de navegação e rodapé padronizados em todas as páginas
- Tema escuro com paleta definida por variáveis CSS (`--azul`, `--preto`, `--card`, etc.)
- Validação do formulário de contato em JavaScript (`setCustomValidity` / `reportValidity`)
- Marcação semântica e acessível (`aria-label`, `aria-current`, `alt` nas imagens, `lang="pt-BR"`)
- Código validado no validador W3C

---

## 🗂️ Estrutura de pastas

```
blog-technocrat/
├── BASE/                        # Página inicial e estilos base
│   ├── index.html               # Home do site (ponto de entrada)
│   ├── style.css                # Estilos da home (reset, variáveis, cards, cabeçalho, rodapé)
│   ├── script.js                # (vazio, reservado)
│   └── readme.md                # (vazio)
│
├── Páginas/                     # Demais páginas do site
│   ├── artigos.html / .css / .js
│   ├── categorias.html / .css / .js
│   ├── contato.html / .css / .js
│   ├── newsletter.html / .css / .js
│   ├── sobre.html / .css / .js
│   └── imagens/                 # Imagens usadas na página de artigos
│       ├── IA.jpg
│       ├── games.jpg
│       ├── hardware.jpg
│       ├── inovaçoes.jpg
│       ├── programação.jpg
│       └── segurança.jpg
│
├── LICENSE                      # Licença BSD 2-Clause
└── README.md                    # Este arquivo
```

**Convenção:** cada página tem seu próprio trio `.html` + `.css` + `.js`. Hoje apenas o `contato.js` tem código; os demais `.js` existem como espaço para futuras funcionalidades.

---

## 🚀 Como abrir o projeto

### Pré-requisitos

- [Git](https://git-scm.com/downloads) instalado
- Um navegador moderno (Chrome, Firefox, Edge, etc.)
- *(Opcional)* [VS Code](https://code.visualstudio.com/) com a extensão **Live Server**

### 1. Clonar o repositório

Via SSH (como está configurado no repositório original):

```bash
git clone git@github.com:otaviopavoni/blog-technocrat.git
```

Ou via HTTPS:

```bash
git clone https://github.com/otaviopavoni/blog-technocrat.git
```

Depois, entre na pasta:

```bash
cd blog-technocrat
```

### 2. Abrir o site

Como é um site estático, não é preciso instalar dependências. Escolha uma das opções:

**Opção A: direto no navegador**
Abra o arquivo `BASE/index.html` com dois cliques (ou arraste para o navegador).

**Opção B: com Live Server (recomendado para desenvolver)**
1. Abra a pasta no VS Code: `code .`
2. Clique com o botão direito em `BASE/index.html`
3. Escolha **Open with Live Server**

**Opção C: servidor local simples**

```bash
# Python 3
python -m http.server 8000
```

Acesse `http://localhost:8000/BASE/index.html`.

> ⚠️ **Importante:** o ponto de entrada é `BASE/index.html`, e não a raiz do repositório. Os links entre as páginas usam caminhos relativos (`../Páginas/...` e `../BASE/...`), então **não mova ou renomeie as pastas** sem ajustar esses links.

---

## 🤝 Como contribuir (fluxo com Git)

O histórico mostra um fluxo de trabalho colaborativo direto na branch `main`. Para evitar conflitos de merge, recomenda-se:

```bash
# 1. Antes de começar, atualize seu repositório local
git pull origin main

# 2. (Recomendado) crie uma branch para a sua alteração
git checkout -b minha-alteracao

# 3. Faça as mudanças, depois confira o que mudou
git status

# 4. Adicione e registre as alterações
git add .
git commit -m "Descreva claramente o que foi feito"

# 5. Envie para o GitHub
git push origin minha-alteracao
```

Em seguida, abra um **Pull Request** no GitHub para revisão do grupo.

**Dicas:**
- Faça commits pequenos e com mensagens descritivas.
- Dê `git pull` com frequência, especialmente se várias pessoas editam o mesmo CSS.
- Em caso de conflito, resolva-o no editor antes de finalizar o merge.

---

## 🛠️ Tecnologias

- **HTML5**: estrutura e semântica
- **CSS3**: Grid, Flexbox, variáveis CSS, media queries
- **JavaScript (ES6)**: validação do formulário de contato
- **Git / GitHub**: versionamento e trabalho em equipe

---

## 🧭 Pontos de atenção e próximos passos

Alguns pontos observados na análise do projeto que podem virar melhorias:

- **Formulários sem envio real:** o formulário de contato apenas valida os campos e exibe um `alert`; o de newsletter ainda não tem JavaScript. Falta um back-end ou um serviço (como Formspree ou EmailJS) para receber os dados.
- **Artigos de exemplo:** os links "Leia o artigo →" apontam para `#`. Ainda não existem páginas individuais de artigos.
- **Arquivos JS vazios:** `script.js`, `artigos.js`, `categorias.js`, `newsletter.js` e `sobre.js` estão sem conteúdo.
- **CSS repetido:** cada página repete o reset, as variáveis e o estilo de cabeçalho/rodapé. Uma folha de estilos compartilhada reduziria a duplicação.
- **Acentos nos nomes de pasta e arquivos:** `Páginas`, `programação.jpg`, `segurança.jpg` e `inovaçoes.jpg` podem causar problemas em alguns sistemas e servidores. Considere renomear para `paginas`, `programacao.jpg`, etc., ajustando os links.
- **Nomes dos arquivos e pastas em maiúsculas/minúsculas:** em servidores Linux (como o GitHub Pages) o nome precisa bater exatamente com o do link.
- **Imagens externas:** a página de categorias carrega imagens do Unsplash e depende de conexão com a internet.
- **Página inicial dentro de `BASE/`:** para publicar no GitHub Pages direto pela raiz, seria preciso um `index.html` na raiz (ou apontar a publicação para a pasta correta).
- **Pasta `BASE/readme.md` vazia:** pode ser removida, já que este README cobre o projeto.

---

## 👥 Equipe

Projeto desenvolvido por:

- **Otávio Pavoni**
- **Gustavo dos Santos**
- **Hiago Martins**
- **Pedro Lima**
- **Miguel**

---

## 📄 Licença

Distribuído sob a licença **BSD 2-Clause**. Consulte o arquivo [`LICENSE`](./LICENSE) para mais detalhes.

© 2026 Otávio Pavoni
