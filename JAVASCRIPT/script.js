function pesquisar(){
    let section = document.getElementById("dados_pesquisa");

    let conteudoPesquisa = document.getElementById("conteudo-pesquisa").value;
    conteudoPesquisa = conteudoPesquisa.toLowerCase();

    let personagemEncontrado = false;

    if(conteudoPesquisa == ""){
        section.innerHTML = `
        <section class="Conteudo_Aviso">
            <div class="Conteudo_texto">
                <h3>Nenhum Personagem encontrado</h3>
            </div>
        </section>
        `
        return
    }

    for(let dado of personagens){

        if(dado.nome.includes(conteudoPesquisa)){
            personagemEncontrado = true;    
            section.innerHTML = `
            <section class="Conteudo">
                <img src="${dado.imagem}" alt="">
                <div class="Conteudo_texto">
                    <h3>${dado.nome}</h3>
                    <p>${dado.descricao}</p>
                    <a class="leia_mais" target="_blank" href="${dado.link}">Leia mais</a>
                </div>
            </section>
            `
        }

        if(!personagemEncontrado){
            section.innerHTML = `
            <section class="Conteudo_Aviso">
                <div class="Conteudo_texto">
                    <h3>Nenhum Personagem encontrado</h3>
                </div>
            </section>
            `
        }
        
    }

}

function listar(){
    for(let dado of personagens){
        let section = document.getElementById("dados_pesquisa");

        section.innerHTML += `
        <section class="Conteudo">
            <img src="${dado.imagem}" alt="">
            <div class="Conteudo_texto">
                <h3>${dado.nome}</h3>
                <p>${dado.descricao}</p>
                <a class="leia_mais" target="_blank" href="${dado.link}">Leia mais</a>
            </div>
        </section>
        `
        
    }
}
