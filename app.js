function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // se campoPesqui for uma stg sem nada
    if (!campoPesquisa){
        section.innerHTML = "Nenhum livro foi encontrado! Você precisa digitar um nome de um livro ou tema"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo =  "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo inludes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Comprar!</a>
            </div>
        `;
        }
    }

    if (!resultados ) {
        resultados = "<p>Ainda não temos nada com essa descrição</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}