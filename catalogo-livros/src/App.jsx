
import { useState } from "react";
import "./App.css";

const livrosIniciais = [
  {
    id: 1,
    titulo: "Crepúsculo",
    autor: "Stephenie Meyer",
    genero: "Fantasia",
    disponivel: true,
  },
  {
    id: 2,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
    genero: "Fantasia",
    disponivel: true,
  },
  {
    id: 3,
    titulo: "A Culpa é das Estrelas",
    autor: "John Green",
    genero: "Romance",
    disponivel: false,
  },
  {
    id: 4,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    genero: "Aventura",
    disponivel: true,
  },
];

// COMPONENTE: recebe informações pelas props
function LivroCard({ livro, favorito, aoFavoritar, aoVerDetalhes }) {
  return (
    <article className="livro-card">
      <div className="livro-capa">
        <span className="livro-icone">📚</span>

        <button
          className="botao-favorito"
          onClick={() => aoFavoritar(livro.id)}
          aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {favorito ? "♥" : "♡"}
        </button>
      </div>

      <div className="livro-info">
        <span className="genero">{livro.genero}</span>

        <h2>{livro.titulo}</h2>
        <p className="autor">Por {livro.autor}</p>

        {livro.disponivel ? (
          <p className="disponibilidade disponivel">
            Disponível para leitura
          </p>
        ) : (
          <p className="disponibilidade indisponivel">
            Indisponível no momento
          </p>
        )}

        <button
          className="botao-detalhes"
          onClick={() => aoVerDetalhes(livro)}
        >
          Ver detalhes
        </button>
      </div>
    </article>
  );
}

// COMPONENTE: recebe uma lista e outras informações pelas props
function ListaLivros({
  livros,
  favoritos,
  aoFavoritar,
  aoVerDetalhes,
}) {
  // Renderização condicional para lista vazia
  if (livros.length === 0) {
    return (
      <p className="mensagem-vazia">
        Nenhum livro encontrado. Tente outro filtro.
      </p>
    );
  }

  return (
    <section className="lista-livros">
      {livros.map((livro) => (
        <LivroCard
          key={livro.id}
          livro={livro}
          favorito={favoritos.includes(livro.id)}
          aoFavoritar={aoFavoritar}
          aoVerDetalhes={aoVerDetalhes}
        />
      ))}
    </section>
  );
}

// COMPONENTE PRINCIPAL
function App() {
  const [livros] = useState(livrosIniciais);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [favoritos, setFavoritos] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id]
    );
  }

  const livrosFiltrados = livros.filter((livro) => {
    const correspondeBusca =
      livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(busca.toLowerCase());

    const correspondeFiltro =
      filtro === "todos" ||
      (filtro === "disponiveis" && livro.disponivel) ||
      (filtro === "favoritos" && favoritos.includes(livro.id));

    return correspondeBusca && correspondeFiltro;
  });

  return (
    <main className="aplicacao">
      <header className="cabecalho">
        <div>
          <p className="subtitulo">SEU ESPAÇO DE LEITURA</p>
          <h1>Biblioteca <span>Digital</span></h1>
          <p>Descubra sua próxima história favorita.</p>
        </div>
        <div className="icone-cabecalho">📖</div>
      </header>

      <section className="controles">
        <input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          aria-label="Buscar livros"
        />

        <div className="filtros">
          <button
            className={filtro === "todos" ? "ativo" : ""}
            onClick={() => setFiltro("todos")}
          >
            Todos
          </button>

          <button
            className={filtro === "disponiveis" ? "ativo" : ""}
            onClick={() => setFiltro("disponiveis")}
          >
            Disponíveis
          </button>

          <button
            className={filtro === "favoritos" ? "ativo" : ""}
            onClick={() => setFiltro("favoritos")}
          >
            Favoritos ({favoritos.length})
          </button>
        </div>
      </section>

      <section className="secao-catalogo">
        <div className="titulo-secao">
          <h2>Nosso catálogo</h2>
          <span>{livrosFiltrados.length} livro(s)</span>
        </div>

        <ListaLivros
          livros={livrosFiltrados}
          favoritos={favoritos}
          aoFavoritar={alternarFavorito}
          aoVerDetalhes={setLivroSelecionado}
        />
      </section>

      {livroSelecionado && (
        <div className="modal-fundo" onClick={() => setLivroSelecionado(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal"
            onClick={(evento) => evento.stopPropagation()}
          >
            <button
              className="fechar-modal"
              onClick={() => setLivroSelecionado(null)}
              aria-label="Fechar detalhes"
            >
              ×
            </button>

            <span className="livro-icone">📚</span>
            <h2 id="titulo-modal">{livroSelecionado.titulo}</h2>
            <p>Autor: {livroSelecionado.autor}</p>
            <p>Gênero: {livroSelecionado.genero}</p>

            <p>
              Status:{" "}
              {livroSelecionado.disponivel
                ? "Disponível"
                : "Indisponível"}
            </p>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
