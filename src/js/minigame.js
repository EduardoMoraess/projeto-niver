let pontos = 0;
let meta = 20;

const botaoClique = document.getElementById("clique-aqui");
const spanPontos = document.getElementById("pontos");
const divParabens = document.getElementById("parabens");
const botaoJogarNovamente = document.getElementById("jogar-novamente");
const somClique = document.getElementById("som-clique");

botaoClique.addEventListener("click", function () {
  // Só soma pontos e toca o som se a pontuação atual for menor que 20
  if (pontos < meta) {
    pontos++;
    spanPontos.textContent = pontos;

    somClique.currentTime = 0; 
    somClique.play();          

    if (pontos >= meta) {
      divParabens.style.display = "block";
    }
  }
});

botaoJogarNovamente.addEventListener("click", function () {
  pontos = 0;
  spanPontos.textContent = pontos;
  divParabens.style.display = "none";
});