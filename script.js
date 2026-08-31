document.addEventListener("DOMContentLoaded", () => {

    // ========================================================
    // ELEMENTOS DA INTERFACE
    // ========================================================

    const cardContainer = document.getElementById("card-container");
    const campoBusca = document.getElementById("campo-busca");
    const formBusca = document.getElementById("caixa-busca");
    const botaoLimpar = document.getElementById("botao-limpar");
    const caixaFiltros = document.getElementById("caixa-filtros");
    const tituloResultados = document.getElementById("titulo-resultados");
    const contadorResultados = document.getElementById("contador-resultados");


    // ========================================================
    // ESTADO DA APLICAÇÃO
    // ========================================================

    let todosOsDados = [];
    let categoriaAtiva = "Todos";


    // ========================================================
    // UTILITÁRIOS
    // ========================================================

    function normalizarTexto(texto = "") {
        return texto
            .toString()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }


    function escaparHTML(texto = "") {
        const elemento = document.createElement("div");
        elemento.textContent = texto;
        return elemento.innerHTML;
    }


    // ========================================================
    // CARREGAMENTO DOS DADOS
    // ========================================================

    async function carregarDados() {

        try {

            const response = await fetch("data.json");

            if (!response.ok) {
                throw new Error(
                    `Erro HTTP: ${response.status}`
                );
            }

            const dados = await response.json();

            if (!Array.isArray(dados)) {
                throw new Error(
                    "O arquivo data.json não contém uma lista válida."
                );
            }

            todosOsDados = dados;

            gerarFiltros();
            filtrarERenderizar();

        } catch (error) {

            console.error(
                "Erro ao carregar a base de conhecimento:",
                error
            );

            cardContainer.innerHTML = `
                <div class="empty-state">
                    <h3>Não foi possível carregar a base</h3>
                    <p>
                        Verifique o arquivo data.json
                        e tente recarregar a página.
                    </p>
                </div>
            `;

            contadorResultados.textContent = "";
        }
    }


    // ========================================================
    // FILTROS
    // ========================================================

    function gerarFiltros() {

        const categorias = [
            "Todos",
            "Tecnologia",
            "Criador"
        ];

        caixaFiltros.innerHTML = categorias
            .map(categoria => {

                const rotulo =
                    categoria === "Tecnologia"
                        ? "Tecnologias"
                        : categoria === "Criador"
                            ? "Criadores"
                            : "Todos";

                return `
                    <button
                        type="button"
                        class="filtro-btn ${
                            categoria === categoriaAtiva
                                ? "active"
                                : ""
                        }"
                        data-categoria="${categoria}"
                    >
                        ${rotulo}
                    </button>
                `;
            })
            .join("");
    }


    // ========================================================
    // CRIAÇÃO DOS CARDS
    // ========================================================

    function criarCard(item) {

        const categoria = item.categoria || "Tecnologia";

        const classeCategoria =
            categoria === "Criador"
                ? "card card-criador"
                : "card card-tecnologia";

        const nome = escaparHTML(item.nome || "Sem nome");
        const descricao = escaparHTML(item.descrição || "");
        const tipo = escaparHTML(item.tipo || "");
        const criador = escaparHTML(item.criador || "");
        const ano = escaparHTML(item.ano || "");
        const imagem = escaparHTML(item.imagem_url || "");
        const link = escaparHTML(item.link || "#");

        const rotuloCategoria =
            categoria === "Criador"
                ? "Criador"
                : "Tecnologia";


        // ----------------------------------------------------
        // METADADOS
        // ----------------------------------------------------

        let meta = "";

        if (categoria === "Tecnologia") {

            const partes = [];

            if (tipo) {
                partes.push(tipo);
            }

            if (criador) {
                partes.push(`Criador: ${criador}`);
            }

            if (ano) {
                partes.push(`Desde ${ano}`);
            }

            meta = partes.join(" • ");

        } else {

            const partes = [];

            if (tipo) {
                partes.push(`Tecnologia: ${tipo}`);
            }

            if (ano) {
                partes.push(`Nascimento: ${ano}`);
            }

            meta = partes.join(" • ");
        }


        // ----------------------------------------------------
        // CARD
        // ----------------------------------------------------

        return `
            <article
                class="${classeCategoria}"
                data-categoria="${categoria}"
            >

                <div class="card-image-wrapper">

                    ${
                        imagem
                            ? `
                                <img
                                    src="${imagem}"
                                    alt="${
                                        categoria === "Criador"
                                            ? `Foto de ${nome}`
                                            : `Logo de ${nome}`
                                    }"
                                    class="card-imagem"
                                    loading="lazy"
                                    onerror="tratarErroImagem(this, '${nome}')"
                                >
                            `
                            : `
                                <div class="image-fallback">
                                    ${nome}
                                </div>
                            `
                    }

                </div>

                <div class="card-conteudo">

                    <span class="card-category">
                        ${rotuloCategoria}
                    </span>

                    <h3 class="card-titulo">
                        ${nome}
                    </h3>

                    ${
                        meta
                            ? `
                                <p class="card-meta">
                                    ${meta}
                                </p>
                            `
                            : ""
                    }

                    <p class="card-descricao">
                        ${descricao}
                    </p>

                    ${
                        link !== "#"
                            ? `
                                <a
                                    href="${link}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="card-link"
                                >
                                    Saiba mais →
                                </a>
                            `
                            : ""
                    }

                </div>

            </article>
        `;
    }


    // ========================================================
    // FALLBACK DE IMAGENS
    // ========================================================

    window.tratarErroImagem = function (
        imagem,
        nome
    ) {

        const wrapper = imagem.parentElement;

        imagem.remove();

        const fallback = document.createElement("div");

        fallback.className = "image-fallback";
        fallback.textContent = nome;

        wrapper.appendChild(fallback);
    };


    // ========================================================
    // RENDERIZAÇÃO
    // ========================================================

    function renderizarCards(lista) {

        if (lista.length === 0) {

            cardContainer.innerHTML = `
                <div class="empty-state">
                    <h3>Nenhum resultado encontrado</h3>
                    <p>
                        Tente outro termo ou selecione
                        uma categoria diferente.
                    </p>
                </div>
            `;

            atualizarContador(0);

            return;
        }

        cardContainer.innerHTML =
            lista.map(criarCard).join("");

        atualizarContador(lista.length);
    }


    // ========================================================
    // CONTADOR
    // ========================================================

    function atualizarContador(total) {

        if (total === 0) {
            contadorResultados.textContent =
                "Nenhum resultado";
            return;
        }

        contadorResultados.textContent =
            total === 1
                ? "1 resultado"
                : `${total} resultados`;
    }


    // ========================================================
    // TÍTULO DA SEÇÃO
    // ========================================================

    function atualizarTitulo() {

        if (categoriaAtiva === "Tecnologia") {

            tituloResultados.textContent =
                "Tecnologias";

        } else if (categoriaAtiva === "Criador") {

            tituloResultados.textContent =
                "Criadores";

        } else {

            tituloResultados.textContent =
                "Todos os conteúdos";
        }
    }


    // ========================================================
    // BUSCA E FILTRAGEM
    // ========================================================

    function filtrarERenderizar() {

        const termoBusca =
            normalizarTexto(campoBusca.value);

        const resultados =
            todosOsDados.filter(item => {

                // --------------------------------------------
                // CATEGORIA
                // --------------------------------------------

                const correspondeCategoria =
                    categoriaAtiva === "Todos" ||
                    item.categoria === categoriaAtiva;


                // --------------------------------------------
                // BUSCA
                // --------------------------------------------

                const camposPesquisaveis = [
                    item.nome,
                    item.categoria,
                    item.tipo,
                    item.descrição,
                    item.criador,
                    item.ano
                ];

                const correspondeBusca =
                    termoBusca === "" ||
                    camposPesquisaveis.some(campo =>
                        normalizarTexto(campo)
                            .includes(termoBusca)
                    );


                return (
                    correspondeCategoria &&
                    correspondeBusca
                );
            });


        atualizarTitulo();
        renderizarCards(resultados);
    }


    // ========================================================
    // EVENTOS
    // ========================================================

    campoBusca.addEventListener(
        "input",
        filtrarERenderizar
    );


    formBusca.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            filtrarERenderizar();
        }
    );


    botaoLimpar.addEventListener(
        "click",
        () => {

            campoBusca.value = "";
            categoriaAtiva = "Todos";

            gerarFiltros();
            filtrarERenderizar();
        }
    );


    caixaFiltros.addEventListener(
        "click",
        event => {

            const botao =
                event.target.closest(".filtro-btn");

            if (!botao) {
                return;
            }

            categoriaAtiva =
                botao.dataset.categoria;

            document
                .querySelectorAll(".filtro-btn")
                .forEach(item =>
                    item.classList.remove("active")
                );

            botao.classList.add("active");

            filtrarERenderizar();
        }
    );


    // ========================================================
    // INICIALIZAÇÃO
    // ========================================================

    carregarDados();

});
