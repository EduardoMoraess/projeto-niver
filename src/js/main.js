const listaLinks = [
  {id: 1, url: "src/page/cartao.html"},
  {id: 2, url: "src/page/minigame.html"},
]

const abrirLink = (idLink)=>{
  // Encontra o objeto que tem o ID igual ao passado na função
  const linkEncontrado = listaLinks.find((item => item.id === idLink));

  if(linkEncontrado){
    window.open(linkEncontrado.url, '_blank')
  }

  console.error('link não encontrado na lista')
}

setTimeout(()=>{
  alert('Esse site so funciona no PC')
}, 100)