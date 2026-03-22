const texto = [
  { conteudo: "Hello World! Meu nome é ", classe: "" },
  { conteudo: "Miguel Alvares", classe: "name" },
  { conteudo: " e sou", classe: "" },
];

const container = document.getElementById("subtitle-text");
let parteAtual = 0;
let charAtual = 0;
let spans = [];

texto.forEach((parte) => {
  const span = document.createElement("span");
  if (parte.classe) span.classList.add(parte.classe);
  container.appendChild(span);
  spans.push(span);
});

function digitar() {
  if (parteAtual >= texto.length) return;

  const parte = texto[parteAtual];
  if (charAtual < parte.conteudo.length) {
    spans[parteAtual].textContent += parte.conteudo[charAtual];
    charAtual++;
    setTimeout(digitar, 60);
  } else {
    parteAtual++;
    charAtual = 0;
    setTimeout(digitar, 60);
  }
}

digitar();
