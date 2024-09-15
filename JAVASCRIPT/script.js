function pesquisar(){
    let section = document.getElementById("dados_pesquisa");

for(let dado of personagens){
    section.innerHTML += `
    <section class="Conteudo">
        <img src="/IMAGE/Personagens/homeAranha.png" alt="">
        <div class="Conteudo_texto">
            <h3>${dado.nome}</h3>
            <p>${dado.descricao}</p>
            <a class="leia_mais" target="_blank" href="${dado.link}">Leia mais</a>
        </div>
    </section>
`
}

}
