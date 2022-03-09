function realDolar(valor) {
  return valor * 5.06;
}

function converter() {
  let valor = document.querySelector("#valor");
  let resultado = document.querySelector("#resultado");
  let valorConvertido = realDolar(parseFloat(valor.value));
  resultado.value = valorConvertido.toFixed(2);
}

function telaResultado() {
  let title = document.querySelector("#title");
  title.style.display = "none";

  let cardResultado = document.querySelector("#card-resultado");
  cardResultado.style.display = "flex";
}

function voltar() {
  let title = document.querySelector("#title");
  title.style.display = "inline";

  let dolar = document.querySelector("#dolar");
  dolar.style.display = "flex";

  let cardResultado = document.querySelector("#card-resultado");
  cardResultado.style.display = "none";

  let valor = document.querySelector("#valor");
  valor.value = "";

  let resultado = document.querySelector("#resultado");
  resultado.value = "";
}