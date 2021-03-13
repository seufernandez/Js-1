//mudar o h1 pelo Js

//pegar conteudo do .titulo
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);

// mudar o conteudo do h1/.titulo(se alguem quiser mudar o h1 p h2 vai poder por agora a variavel busca pela classe)
titulo.textContent = "Aparecida Nutricionista";

//Calculadora IMC----------------------------------------------------------

//Pega o container dos dados do paciente paulo
var pacientes = document.querySelectorAll(".paciente"); // a função query selector só nos passa um elemento

for (var i = 0; i < pacientes.length; i++) {
  // para pegar cada paciente individual, colocar uma variavel de números, no caso "i"
  var paciente = pacientes[i];

  //Pega o dado de peso usando a variavel com a classe do fr de peso
  var tdPeso = paciente.querySelector(".info-peso");

  //pegar o conteúdo do peso (textContent)
  var peso = tdPeso.textContent;

  //pegando altura
  var tdAltura = paciente.querySelector(".info-altura");
  //pegando txt
  var altura = tdAltura.textContent;

  //Colar imc na tabela
  var imcPaciente = paciente.querySelector(".info-imc");
  var imcFinal = imcPaciente.textContent;

  var pesoEhValido = true;
  var AlturaEhValida = true;

  //validação de peso--------------------------------
  if (peso < 0 || peso > 600) {
    console.log("Peso inválido");
    pesoEhValido = false;

    imcPaciente.textContent = "Peso Inválido";

    paciente.classList.add("paciente-invalido");
  }

  //validação de altura--------------------------------
  if (altura < 0 || altura > 3) {
    console.log("Altura inválida");
    AlturaEhValida = false;

    imcPaciente.textContent = "Altura Inválida";

    paciente.classList.add("paciente-invalido"); //mudar cor quando inválido pegando do css, a classe paciente-invalido esta no css e através do classlist.add u adiciono a classe do css no css ja existente, meio que atualizando ele. Mais fácil se quiser alterar algo na interface da pagina
  }

  //se peso ou altura invalida vai mostrar na tela
  //se ambos forem
  if (pesoEhValido == false && AlturaEhValida == false) {
    imcPaciente.textContent = "Altura e peso Inválidos";

    paciente.classList.add("paciente-invalido");
  }

  //se os numeros de altura e peso forem validos, realize a operacion
  if (AlturaEhValida && pesoEhValido) {
    //----calculando IMC--------------------------------

    //imc = peso/altura^2  mudando o imc na tabela
    var imc = calculaImc(peso,altura)
    imcPaciente.textContent = imc; 
  }
}

//Boa pratica, transformar partes do código que possam ser reutilizadas
function calculaImc (peso,altura){
  var imc = 0;
  imc = peso / (altura*altura);

  return imc.toFixed(2);//toFixed pra colocar somente duas casas decimais no numeral
}