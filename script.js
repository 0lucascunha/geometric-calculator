function areaDoTriangulo() {
  const base = parseFloat(prompt("Qual o valor da base?"));
  const altura = parseFloat(prompt("Qual o valor da altura"));
  return (base * altura) / 2;
}
function areaDoRetangulo() {
  const base = parseFloat(prompt("Qual o valor da base?"));
  const altura = parseFloat(prompt("Qual o valor da altura"));
  return base * altura;
}
function areaDoQuadrado() {
  const lado = parseFloat(prompt("Qual o valor do lado?"));

  return lado * lado;
}
function areaDoTrapézio() {
  const baseMaior = parseFloat(prompt("Qual o valor da base maior?"));
  const baseMenor = parseFloat(prompt("Qual o valor da base menor"));
  const altura = parseFloat(prompt("Qual o valor da altura"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaDoCirculo() {
  const raio = parseFloat(prompt("Qual o valor do raio?"));

  return 3, 14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Bem vindo a calculadora geometrica!" +
      "\nEscolha a area que deseja calcular:" +
      "\n1.Área do triangulo" +
      "\n2.Área do retangulo" +
      "\n3.Área do quadrado" +
      "\n4.Área do trapézio" +
      "\n5.Área do circulo" +
      "\n6.Encerrar"
  );
}

function executar() {
  let opção = "";
  do {
    opção = exibirMenu();
    let resultado;

    switch (opção) {
      case "1":
        resultado = areaDoTriangulo();
        break;
      case "2":
        resultado = areaDoRetangulo();

        break;
      case "3":
        resultado = areaDoQuadrado();
        break;
      case "4":
        resultado = areaDoTrapézio();
        break;
      case "5":
        resultado = areaDoCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção invalida");
        break;
    }
    if (resultado) {
      alert("O resultado é " + resultado);
    }
  } while (opção != "6");
}

executar();
