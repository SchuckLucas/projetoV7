import abrirContato from "./modules.js";

const elementos_perguntas = document.getElementsByClassName("perguntas");
const botao_retornar = document.getElementById("bt_retornar");
const botao_contato = document.getElementById("bt_contato");
const botao_info = document.getElementById("bt_info");
const botao_doar = document.getElementById("bt_doar");

const respostas = [
  "Roupas, brinquedos e materiais escolares.",
  "Para ajudar os refugiados que chegam ao nosso país sem praticamente nenhum recurso.",
  "Vá até um dos pontos de doação das ___ as ___ horas.",
  "Os itens doados serão passados para a Embaixada Solidária, a qual vai distribuir para quem mais precissa.",
  "De ___ a ___ das ___ as ___",
  "Os itens serão repassados para a Embaixada Solidária em Toledo PR, a qual distribuira para os emigrantes refugiados que necessitam.",
];

for (let i = 0; i < elementos_perguntas.length; i++) {
  const pergunta = elementos_perguntas[i];

  pergunta.addEventListener("click", () => {
    const resposta = document.createElement("p");
    resposta.innerHTML = respostas[i];
    resposta.className = "respostas";

    if (pergunta.lastElementChild.className == "respostas") {
      pergunta.removeChild(pergunta.lastElementChild);
    } else {
      pergunta.appendChild(resposta);
    }
  });
}

botao_retornar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

botao_contato.addEventListener("click", abrirContato);
botao_info.addEventListener("click", () => {
  window.location.href = "../ScriptsHTML/info.html";
});
botao_doar.addEventListener("click", () => {
  window.location.href = "../ScriptsHTML/doar.html";
});
