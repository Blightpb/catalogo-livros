# React Literatura — Biblioteca Digital

O React Literatura é uma aplicação web desenvolvida com React que simula uma biblioteca digital. O projeto permite visualizar um catálogo de livros, pesquisar títulos e autores, filtrar livros por disponibilidade e adicionar obras aos favoritos.

A aplicação foi desenvolvida com o objetivo de colocar em prática os principais conceitos do React, incluindo JSX, componentes, props, Virtual DOM, listas e renderização condicional.

## Funcionalidades

- **Visualização de livros:** exibe um catálogo com título, autor, gênero e disponibilidade.
- **Busca de livros:** permite pesquisar obras pelo título ou nome do autor.
- **Filtro por disponibilidade:** exibe somente os livros disponíveis para leitura.
- **Lista de favoritos:** permite adicionar e remover livros dos favoritos.
- **Detalhes dos livros:** apresenta informações adicionais sobre o livro selecionado.
- **Renderização condicional:** exibe mensagens diferentes conforme a disponibilidade dos livros e os resultados da pesquisa.
- **Interface responsiva:** adapta o layout para diferentes tamanhos de tela.

## Tecnologias utilizadas

- **React:** biblioteca JavaScript utilizada para construir a interface.
- **JavaScript:** linguagem utilizada para implementar a lógica da aplicação.
- **JSX:** sintaxe utilizada para descrever os elementos da interface.
- **HTML:** estrutura dos elementos da aplicação, gerada a partir do JSX.
- **CSS:** estilização dos componentes e adaptação para dispositivos móveis.
- **Vite:** ferramenta utilizada para criar e executar o projeto.
- **Git e GitHub:** ferramentas utilizadas para versionamento e armazenamento do código-fonte.

## Conceitos de React aplicados

### 1. JSX

O JSX permite escrever elementos semelhantes ao HTML dentro do JavaScript, facilitando a criação da interface.

Exemplo:

```jsx
<h1>Biblioteca <span>Digital</span></h1>
```

### 2. Componentes

A aplicação foi dividida em componentes reutilizáveis, facilitando a organização e a manutenção do código.

- `App`: componente principal da aplicação.
- `ListaLivros`: responsável por exibir a lista de livros.
- `LivroCard`: responsável por apresentar as informações de cada livro.

### 3. Props

As props permitem transmitir informações e funções entre componentes.

Na aplicação, o componente `LivroCard` recebe dados do livro, seu estado de favorito e funções para executar ações.

### 4. Virtual DOM

O Virtual DOM é um mecanismo interno do React que mantém uma representação da interface. Quando o estado da aplicação muda, o React compara as representações e atualiza as partes necessárias do DOM real.

Esse comportamento pode ser observado ao adicionar favoritos, realizar pesquisas e aplicar filtros.

### 5. Listas

O método `map()` é utilizado para percorrer os livros e gerar um componente para cada item do catálogo.

A propriedade `key` identifica cada livro de maneira estável, ajudando o React a acompanhar alterações na lista.

### 6. Renderização condicional

A renderização condicional permite exibir conteúdos diferentes de acordo com determinadas condições.

No projeto, ela é utilizada para:

- Informar se um livro está disponível ou indisponível.
- Exibir uma mensagem quando nenhum livro corresponde à pesquisa.
- Mostrar a janela de detalhes somente quando um livro é selecionado.
- Indicar visualmente quais livros foram adicionados aos favoritos.

### 7. Estado com useState

O hook `useState` é utilizado para controlar informações que podem mudar durante a execução da aplicação, como o texto da busca, o filtro selecionado, os favoritos e o livro selecionado.

Quando esses estados são atualizados, o React renderiza novamente os componentes afetados.

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado, caso deseje clonar o repositório.

### Instalação

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Entre na pasta do projeto:

```bash
cd react-literatura
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador o endereço local apresentado pelo terminal, normalmente `http://localhost:5173`.

## Estrutura do projeto

```text
react-literatura/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Objetivo acadêmico

O objetivo deste projeto é demonstrar, de maneira prática, como os principais conceitos do React podem ser utilizados em conjunto para desenvolver uma aplicação web interativa e responsiva.

A implementação contribui para a compreensão da componentização, da passagem de propriedades, do gerenciamento de estados e da atualização dinâmica da interface.

## Observação

Os dados dos livros são armazenados em uma lista definida no código. A aplicação não utiliza banco de dados e os favoritos não são mantidos após o recarregamento da página.
