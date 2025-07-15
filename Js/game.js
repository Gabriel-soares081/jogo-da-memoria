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

function mudarImagem(id) {
  const dados = {
    maca:"../public/images/GOAT.jpg",
    uva:"../public/images/fundo-final.png",
    morango:"../public/images/cereja.png",
    cereja:"",
    limao:"",
    abacaxi:"",
    melancia:"",
    banana:"",    
  }

  const imagem = document.getElementById(id);

  if (imagem.getAttribute("src") === "../public/images/fundo de Ina.png") {
    imagem.setAttribute("src", dados[id])
  } else {
    imagem.setAttribute("src", "../public/images/fundo de Ina.png")    
  }
}
document.querySelectorAll('.peca').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.add('animar');
        setTimeout(() => this.classList.remove('animar'), 500); // duração da animação
    });
});