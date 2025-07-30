const cards = [
    {
        id: window.crypto.randomUUID(),
        code: 'a',
        image: "../public/images/maça.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'a',
        image: "../public/images/maça.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'b',
        image:"../public/images/uva.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'b',
        image:"../public/images/uva.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'c',
        image:"../public/images/morango.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'c',
        image:"../public/images/morango.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'd',
        image:"../public/images/cereja.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'd',
        image:"../public/images/cereja.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'e',
        image:"../public/images/Limão.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'e',
        image:"../public/images/Limão.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'f',
        image:"../public/images/abacaxi.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'f',
        image:"../public/images/abacaxi.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'g',
        image:"../public/images/melancia.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'g',
        image:"../public/images/melancia.png",
    },
    {
        id: window.crypto.randomUUID(),
        code: 'h',
        image:"../public/images/banana.png"
    },
    {
        id: window.crypto.randomUUID(),
        code: 'h',
        image:"../public/images/banana.png"
    }
]

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
        if (bloqueado || this.classList.contains('virada') || pecasViradas.length === 2) return;
        this.classList.add('animar');
        setTimeout(() => this.classList.remove('animar'), 500);
        virarPeca(this, hash);
    });
});



document.querySelectorAll('.peca').forEach(img => {
    img.addEventListener('click', function() {
        if (bloqueado || this.classList.contains('virada') || pecasViradas.length === 2) return;
        virarPeca(this);
    });
});


const contador = document.querySelector('.contador');
let pontos = 0;

function virarPeca(img) {
    const tipo = img.getAttribute('data-peca');
    img.classList.add('virada');
    mudarImagem(img);
    pecasViradas.push({ img, tipo });

    if (pecasViradas.length === 2) {
        bloqueado = true;
        const [peca1, peca2] = pecasViradas;
        if (peca1.tipo === peca2.tipo) {
            // mantêm viradas e escurece
            peca1.img.style.filter = "brightness(0.7)";
            peca2.img.style.filter = "brightness(0.7)";
            pecasViradas.length = 0;
            bloqueado = false;
            // Adiciona ponto ao acertar um par
            pontos += 100;
            contador.textContent = pontos;
        } else {
            // desvira depois de 1s
            setTimeout(() => {
                mudarImagem(peca1.img);
                mudarImagem(peca2.img);
                peca1.img.classList.remove('virada');
                peca2.img.classList.remove('virada');
                pecasViradas.length = 0;
                bloqueado = false;
            }, 1000);
        }
    }
}


function mudarImagem(img) {
    const tipo = img.getAttribute('data-peca');
    
    if (img.getAttribute("src") === "../public/images/fundo de Ina.png") {
        const card = cards.find(card  => card.id === tipo)

        img.setAttribute("src", card.image)
    } else {
        img.setAttribute("src", "../public/images/fundo de Ina.png");
    }
}

// Função para embaralhar um array (Fisher-Yates)
function embaralhar(peca) {
    for (let i = peca.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [peca[i], peca[j]] = [peca[j], peca[i]];
    }
    return peca;
}

// Tipos de peças (pares)
const tipos = cards.map(card => card.id)
const todasPecas = embaralhar(tipos);


const tabuleiro = document.getElementById('tabuleiro');
tabuleiro.innerHTML = '';
todasPecas.forEach((tipo, idx) => {
    const img = document.createElement('img');
    img.setAttribute('data-peca', tipo);
    img.setAttribute('data-id', idx); 
    img.setAttribute('class', 'peca');
    img.setAttribute('src', '../public/images/fundo de Ina.png');
    tabuleiro.appendChild(img);
});

// Virar todas as peças ao carregar com animação
const todasImgs = document.querySelectorAll('.peca');
todasImgs.forEach(img => {
    img.classList.add('virando');
    setTimeout(() => {
        img.classList.remove('virando');
        mudarImagem(img); // mostra a frente
        img.classList.add('virada');
    }, 600); // tempo igual ao da animação
});

// Depois de 2 segundos, desvira todas com animação
setTimeout(() => {
    todasImgs.forEach(img => {
        img.classList.add('virando');
        setTimeout(() => {
            img.classList.remove('virando');
            mudarImagem(img); // volta para o fundo
            img.classList.remove('virada');
        }, 600);
    });
}, 2000);

// Agora adicione os eventos de clique nas peças criadas
const pecasViradas = [];
let bloqueado = false;

document.querySelectorAll('.peca').forEach(img => {
    img.addEventListener('click', function() {
        if (bloqueado || this.classList.contains('virada') || pecasViradas.length === 2) return;
        this.classList.add('animar');
        setTimeout(() => this.classList.remove('animar'), 500); // animação
        virarPeca(this);
    });
});

