const filmes = [
    {
        "nome": "Homem Aranha - Sem Volta Pra Casa",
        "link": "https://www.baixefilme.net/homem-aranha-sem-volta-para-casa-2021-torrent-dublado-e-legendado/",
        "imagem": "capasfilmes/homem aranha.jpg"
    },
    {
        "nome": "The Batman",
        "link": "https://www.baixefilme.net/batman-2022-torrent-dublado-e-legendado/",
        "imagem": "capasfilmes/the batmam.jpg"
    },
    {
        "nome": "Encanto",
        "imagem": "capasfilmes/encanto.jpg",
    },
    { "imagem": "capasfilmes/red.jpg" },
    { "imagem": "capasfilmes/alerta vermelho.jpg" },
    { "imagem": "capasfilmes/kingsman.jpg" },
    { "imagem": "capasfilmes/eternos.jpg" },
    { "imagem": "capasfilmes/venom.jpg" },
    { "imagem": "capasfilmes/matrix.jpg" },
    { "imagem": "capasfilmes/ghost buster.jpg" },
    { "imagem": "capasfilmes/chang shi.jpg" },
    { "imagem": "capasfilmes/luca.jpg" }
]

const content = document.querySelector('.content')

filmes.forEach(filme => {
    const li = document.createElement('li')
    li.className = 'capa'
    li.innerHTML = `
    <img src="${filme?.imagem}"><img>
    <p>${filme?.nome}</p>
    `
    content.appendChild(li)
})