//mostrar pagina de dificuldade

function dificuldade(escolherDificuldade) {
    const ids = ["facil", "medio", "dificil"]
    const pegarId = ids.filter(item => item != escolherDificuldade)
    const abrirPagina = document.getElementById(escolherDificuldade)

    for (let item of pegarId) {
        const modo = document.getElementById(item)
        modo.style.display = "none"
    } 
        abrirPagina.style.display = "flex"
}


document.querySelectorAll('.peca').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.add('animar');
        setTimeout(() => this.classList.remove('animar'), 500); // duração da animação
    });
});

function gerarHash(str) {
    let hash = 0, i, codigo;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        codigo   = str.charCodeAt(i);
        hash  = ((hash < 5) - hash) + codigo;
        hash |= 0;
    }
    return 'peca_' + Math.abs(hash);
}


const hashMap = {};
document.querySelectorAll('.peca').forEach(img => {
    const nome = img.getAttribute('data-peca');
    const hash = gerarHash(nome);
    img.id = hash;
    hashMap[hash] = nome;
    img.addEventListener('click', function() {
        this.classList.add('animar');
        setTimeout(() => this.classList.remove('animar'), 500);
        mudarImagem(hash);
    });
});

function mudarImagem(hash) {
    const dados = {
        maca:"../public/images/GOAT.jpg",
        uva:"../public/images/uva.png",
        morango:"../public/images/cereja.png",
        cereja:"",
        limao:"",
        abacaxi:"",
        melancia:"../public/images/melancia.png",
        banana:"",    
    };
    const nome = hashMap[hash];
    const imagem = document.getElementById(hash);
    if (imagem.getAttribute("src") === "../public/images/fundo de Ina.png") {
        imagem.setAttribute("src", dados[nome]);
    } else {
        imagem.setAttribute("src", "../public/images/fundo de Ina.png");
    }
}