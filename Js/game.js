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

function mudarImagem() {
  const imagem = document.getElementById("minhaImagem");
  if (imagem.src.includes("../public/images/fundo de Ina.png")) {
  if (imagem.src.includes("../public/images/renato.png")) {
    imagem.src = "../public/images/renato.png";
  } else {
    imagem.src = "../public/images/fundo de Ina.png";
  }}
}



