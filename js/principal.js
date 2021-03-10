//mudar o h1 pelo Js

//pegar conteudo do .titulo 
var titulo = document.querySelector(".titulo");
		console.log(titulo.textContent);

		// mudar o conteudo do h1/.titulo(se alguem quiser mudar o h1 p h2 vai poder por agora a variavel busca pela classe)
		titulo.textContent = "Aparecida Nutricionista";
		

//Calculadora IMC----------------------------------------------------------

//Pega o container dos dados do paciente paulo
var paciente = document.querySelector("#primeiro-paciente")

//Pega o dado de peso usando a variavel com a classe do fr de peso
var tdPeso = paciente.querySelector(".info-peso");

//pegar o conteúdo do peso (textContent)
var peso = tdPeso.textContent;


//pegando altura
var tdAltura = paciente.querySelector(".info-altura");
//pegando txt
var altura = tdAltura.textContent;


//Colar imc na tabela
var imcPaciente = paciente.querySelector(".info-imc")
var imcFinal = imcPaciente.textContent

var pesoEhValido = true
var AlturaEhValida = true


//validação de peso--------------------------------
if(peso < 0 || peso > 600){
    console.log("Peso inválido");
    pesoEhValido = false

    imcPaciente.textContent = "Peso Inválido" 
}

//validação de altura--------------------------------
if(altura < 0 || altura > 3){
    console.log("Altura inválida");
    AlturaEhValida = false

    imcPaciente.textContent = "Altura Inválida" 
}

//se os numeros de altura e peso forem validos, realize a operacion
if(AlturaEhValida && pesoEhValido){

    //----calculando IMC--------------------------------
    
    //imc = peso/altura^2
    var imc = peso / (altura*altura); // 100/2*2
    imcPaciente.textContent = imc
}

//se peso ou altura invalida vai mostrar na tela
//se ambos forem
if(pesoEhValido == false && AlturaEhValida == false){

    imcPaciente.textContent = "Altura e peso Inválidos" 

}



console.log(imcPaciente)
