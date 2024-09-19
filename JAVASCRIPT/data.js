/*const personagens = [
    {
        nome: "homem aranha",
        descricao: "O Homem-Aranha, cuja identidade secreta é Peter Parker, é um herói da Marvel criado por Stan Lee e Steve Ditko. Ele ganhou seus poderes após ser mordido por uma aranha radioativa, o que lhe deu força, agilidade, sentido-aranha e a habilidade de escalar paredes. Após a morte de seu tio Ben, Peter adota o lema 'Com grandes poderes, vêm grandes responsabilidades'. Sua primeira aparição foi em *Amazing Fantasy* #15, em 1962.",
        link: "https://pt.wikipedia.org/wiki/Homem-Aranha"
    }
];*/

const personagens = [
    {
        nome: "homem aranha",
        descricao: "O Homem-Aranha, cuja identidade secreta é Peter Parker, é um herói da Marvel criado por Stan Lee e Steve Ditko. Ele ganhou seus poderes após ser mordido por uma aranha radioativa, o que lhe deu força, agilidade, sentido-aranha e a habilidade de escalar paredes. Após a morte de seu tio Ben, Peter adota o lema 'Com grandes poderes, vêm grandes responsabilidades'. Sua primeira aparição foi em *Amazing Fantasy* #15, em 1962.",
        link: "https://pt.wikipedia.org/wiki/Homem-Aranha",
        imagem: "/IMAGE/Personagens/homeAranha.png"
    },
    {
        nome: "homem de ferro",
        descricao: "O Homem de Ferro, alter ego de Tony Stark, é um dos principais heróis da Marvel. Criado por Stan Lee, Larry Lieber, Don Heck e Jack Kirby, ele fez sua primeira aparição em *Tales of Suspense* #39, em 1963. Tony é um gênio bilionário e filantropo que, após ser sequestrado e ferido, desenvolve uma armadura tecnológica para salvar sua vida e escapar. Ele aprimora a armadura para combater o crime e ameaças globais como o Homem de Ferro.",
        link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro",
        imagem: "/IMAGE/Personagens/homemDeFerro.png"
    },
    {
        nome: "capitã marvel",
        descricao: "Carol Danvers, a Capitã Marvel, é uma heroína poderosa da Marvel criada por Roy Thomas e Gene Colan. Sua primeira aparição foi em *Marvel Super-Heroes* #13, em 1968. Ex-piloto da Força Aérea, Carol ganhou habilidades super-humanas após ser exposta a uma explosão de tecnologia alienígena Kree.",
        link: "https://pt.wikipedia.org/wiki/Captain_Marvel_(Marvel_Comics)",
        imagem: "/IMAGE/Personagens/CapitaMarvel.png"
    },
    {
        nome: "thor",
        descricao: "Thor, o Deus do Trovão, é baseado na mitologia nórdica. Criado por Stan Lee, Larry Lieber e Jack Kirby, Thor fez sua estreia em *Journey into Mystery* #83, em 1962. Ele é o príncipe de Asgard e empunha o martelo mágico Mjolnir, que lhe dá controle sobre o trovão, além de superforça e invulnerabilidade.",
        link: "https://pt.wikipedia.org/wiki/Thor",
        imagem: "/IMAGE/Personagens/thor.png"
    },
    {
        nome: "hulk",
        descricao: "O Hulk, cujo nome verdadeiro é Dr. Bruce Banner, foi criado por Stan Lee e Jack Kirby, aparecendo pela primeira vez em *The Incredible Hulk* #1, em 1962. Banner foi exposto à radiação gama, o que o transformou no Hulk, uma entidade de força imensa e quase indestrutível.",
        link: "https://pt.wikipedia.org/wiki/Hulk",
        imagem: "/IMAGE/Personagens/hulk.png"
    },
    {
        nome: "viúva negra",
        descricao: "Natasha Romanoff, também conhecida como Viúva Negra, é uma espiã e heroína habilidosa. Criada por Stan Lee, Don Rico e Don Heck, apareceu pela primeira vez em *Tales of Suspense* #52, em 1964. Embora não tenha superpoderes, Natasha é uma combatente altamente treinada e membro dos Vingadores.",
        link: "https://pt.wikipedia.org/wiki/Viúva_Negra_(Marvel_Comics)",
        imagem: "/IMAGE/Personagens/viuvaNegra.png"
    },
    {
        nome: "pantera negra",
        descricao: "O Pantera Negra, alter ego de T'Challa, é o rei de Wakanda e um dos heróis mais icônicos da Marvel. Ele foi criado por Stan Lee e Jack Kirby e apareceu pela primeira vez em *Fantastic Four* #52, em 1966. T'Challa possui habilidades sobre-humanas proporcionadas pela erva em forma de coração e é um guerreiro habilidoso e estrategista.",
        link: "https://pt.wikipedia.org/wiki/Pantera_Negra",
        imagem: "/IMAGE/Personagens/panteraNegra.jpg"
    },
    {
        nome: "doutor estranho",
        descricao: "Stephen Strange, o Doutor Estranho, é o Mago Supremo da Terra, responsável por defender o planeta de ameaças mágicas e interdimensionais. Criado por Stan Lee e Steve Ditko, ele fez sua estreia em *Strange Tales* #110, em 1963.",
        link: "https://pt.wikipedia.org/wiki/Doutor_Estranho",
        imagem: "/IMAGE/Personagens/doutorEstranho.jpg"
    },
    {
        nome: "homem formiga",
        descricao: "O Homem-Formiga, Scott Lang, é um ex-ladrão que usa uma tecnologia avançada que lhe permite encolher a níveis subatômicos. Criado por David Michelinie e John Byrne, Scott Lang estreou como Homem-Formiga em *Marvel Premiere* #47, em 1979.",
        link: "https://pt.wikipedia.org/wiki/Homem-Formiga",
        imagem: "/IMAGE/Personagens/homemFormiga.png"
    },
    {
        nome: "gavião arqueiro",
        descricao: "Clint Barton, o Gavião Arqueiro, é um arqueiro e membro dos Vingadores. Criado por Stan Lee e Don Heck, ele fez sua estreia em *Tales of Suspense* #57, em 1964. Barton é um arqueiro habilidoso e agente altamente treinado, sem superpoderes, mas com grande habilidade e estratégia.",
        link: "https://pt.wikipedia.org/wiki/Gavião_Arqueiro",
        imagem: "/IMAGE/Personagens/gaviaoArqueiro.png"
    },
    {
        nome: "feiticeira escarlate",
        descricao: "Wanda Maximoff, conhecida como Feiticeira Escarlate, é uma das heroínas mais poderosas do universo Marvel, com a habilidade de manipular a realidade. Criada por Stan Lee e Jack Kirby, ela apareceu pela primeira vez em *X-Men* #4, em 1964.",
        link: "https://pt.wikipedia.org/wiki/Feiticeira_Escarlate",
        imagem: "/IMAGE/Personagens/feiticeiraEscarlate.png"
    },
    {
        nome: "visão",
        descricao: "Visão é um androide sintético com habilidades sobre-humanas, criado por Ultron e reformulado pelos Vingadores. Ele fez sua estreia em *Avengers* #57, em 1968, sendo uma peça chave em batalhas contra ameaças cósmicas.",
        link: "https://pt.wikipedia.org/wiki/Visão_(Marvel_Comics)",
        imagem: "/IMAGE/Personagens/visao.png"
    },
    {
        nome: "falcon",
        descricao: "Sam Wilson, também conhecido como Falcon, é um super-herói e aliado do Capitão América, que usa asas mecânicas para voar e combater o crime. Ele apareceu pela primeira vez em *Captain America* #117, em 1969.",
        link: "https://pt.wikipedia.org/wiki/Falcon_(Marvel_Comics)",
        imagem: "/IMAGE/Personagens/falcon.png"
    },
    {
        nome: "soldado invernal",
        descricao: "Bucky Barnes, o Soldado Invernal, é o ex-parceiro do Capitão América que foi transformado em um assassino ciberneticamente aprimorado. Ele fez sua primeira aparição em *Captain America Comics* #1, em 1941, criado por Joe Simon e Jack Kirby.",
        link: "https://pt.wikipedia.org/wiki/Soldado_Invernal",
        imagem: "/IMAGE/Personagens/soldadoInvernal.png"
    },
    {
        nome: "senhor das estrelas",
        descricao: "Peter Quill, conhecido como Senhor das Estrelas, é o líder dos Guardiões da Galáxia. Criado por Steve Englehart e Steve Gan, apareceu pela primeira vez em *Marvel Preview* #4, em 1976.",
        link: "https://pt.wikipedia.org/wiki/Star-Lord",
        imagem: "/IMAGE/Personagens/senhorDasEstrelas.png"
    },
    {
        nome: "gamora",
        descricao: "Gamora é uma guerreira altamente habilidosa e a última de sua espécie. Criada por Jim Starlin, ela apareceu pela primeira vez em *Strange Tales* #180, em 1975. Ela é parte dos Guardiões da Galáxia e tem uma conexão com Thanos.",
        link: "https://pt.wikipedia.org/wiki/Gamora",
        imagem: "/IMAGE/Personagens/gamora.png"
    },
    {
        nome: "drax",
        descricao: "Drax é um membro dos Guardiões da Galáxia, conhecido por sua força sobre-humana e habilidades de combate. Criado por Jim Starlin, ele apareceu pela primeira vez em *Iron Man* #55, em 1973.",
        link: "https://pt.wikipedia.org/wiki/Drax_(Marvel_Comics)",
        imagem: "/IMAGE/Personagens/drax.png"
    },
    {
        nome: "rocket raccoon",
        descricao: "Rocket Raccoon é um guaxinim geneticamente modificado, altamente inteligente e armado com tecnologia avançada. Ele apareceu pela primeira vez em *Marvel Preview* #7, em 1976.",
        link: "https://pt.wikipedia.org/wiki/Rocket_Raccoon",
        imagem: "/IMAGE/Personagens/rocket.png"
    },
    {
        nome: "groot",
        descricao: "Groot é uma entidade alienígena em forma de árvore, membro dos Guardiões da Galáxia, cuja frase icônica é 'Eu sou Groot'. Criado por Stan Lee, Larry Lieber e Jack Kirby, apareceu pela primeira vez em *Tales to Astonish* #13, em 1960.",
        link: "https://pt.wikipedia.org/wiki/Groot",
        imagem: "/IMAGE/Personagens/groot.png"
    },
    {
        nome: "venom",
        descricao: "Venom é um simbionte alienígena que se une a diferentes hospedeiros, sendo Eddie Brock o mais conhecido. Criado por David Michelinie e Todd McFarlane, ele apareceu pela primeira vez em *The Amazing Spider-Man* #300, em 1988.",
        link: "https://pt.wikipedia.org/wiki/Venom",
        imagem: "/IMAGE/Personagens/venom.png"
    }
];
