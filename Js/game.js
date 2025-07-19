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
    img.setAttribute('data-hash', hash); 
    hashMap[hash] = nome;
    img.addEventListener('click', function() {
        this.classList.add('animar');
        setTimeout(() => this.classList.remove('animar'), 500);
        mudarImagem(hash);
    });
});

function mudarImagem(hash) {
    const dados = {
        a:"../public/images/maça.png",
        b:"../public/images/uva.png",
        c:"../public/images/morango.png",
        d:"../public/images/cereja.png",
        e:"../public/images/Limão.png",
        f:"../public/images/abacaxi.png",
        g:"../public/images/melancia.png",
        h:"../public/images/banana.png",
        i:"../public/images/maça.png",
        j:"../public/images/uva.png",
        k:"../public/images/morango.png",
        l:"../public/images/cereja.png",
        m:"../public/images/Limão.png",
        n:"../public/images/abacaxi.png",
        o:"../public/images/melancia.png",
        p:"../public/images/banana.png",     
    };
    const nome = hashMap[hash]; 
    const imagem = document.querySelector(`[data-hash="${hash}"]`);
    if (imagem.getAttribute("src") === "../public/images/fundo de Ina.png") {
        imagem.setAttribute("src", dados[nome]);
    } else {
        imagem.setAttribute("src", "../public/images/fundo de Ina.png");
    }
}