//-------------------exemplo----------------------
//titulo.addEventListener("click", mostraMensagem);//sempre que ele escuta uma acao ele ativa a funcao mostraMensagem

// function mostraMensagem(){
//   console.log("olá eu fui clicado");
// }
//--------------------------------------------------------










      //Trazendo o botao adicionar o Js
var botaoAdicionar = document.querySelector("#adicionar-paciente");

      //escutar evento de clique nesse botao
botaoAdicionar.addEventListener("click", function (event) {
        //o botao vai recarregar a pagina, pra isso não acontecer, você terá que adicionar uma prevenção, como descrito logo abaixo; e não esqueça de colocar o event como parametro acima
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

        // TRAZENDO PRO JS AS ENTRADAS DE DADOS
  var paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

        //Criacao e montagem do tr
  // var pacienteTr = montaTr(paciente); //pegou as informações dadas pelos inputs e colocou no objeto que depois foi levado ao var paciente que foi colocado na td e adotado pelo tr e depois adicionado na tabela pelo appendChild que adicionou o Tr todo na tabela, com todas suas tds


  //---------Validação-------------------

  var erros = validaPaciente(paciente);
console.log(erros);

  if (erros.length > 0 ){
    var mensagemErro = document.querySelector("#mensagem-erro")

    exibeMensagemDeErro(erros);

    return;//sai da funcao sem adicionar na tabela
  }

  adicionaPacienteNaTabela(paciente)
        //resetar os campos depois de adicionar
  form.reset();
});


 
function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}


function exibeMensagemDeErro(erros){

  var ul = document.querySelector("#mensagens-erro");
  
  //zerar ul para envio de novas instruções de erro
  ul.innerHTML = ""


  erros.forEach(function(erro){

           //criar li
    var li = document.createElement("li")
    li.textContent = erro // passando o conteúo dos itens do array pro li
          
          //colocar o li dentro do ul
    ul.appendChild(li)
    

  });

}


function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}




function montaTr(paciente) {
  var pacienteTr = document.createElement("tr"); //createElement cria qualquer tag html que você quiser

        //criando tr pra colocar as informações de entrada dps
  var pacienteTr = document.createElement("tr"); //createElement cria qualquer tag html que você quiser
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome, "info-nome")
  var pesoTd = montaTd (paciente.peso, "info-peso")
  var alturaTd = montaTd(paciente.altura, "info-altura")
  var gorduraTd = montaTd(paciente.gordura, "info-gordura")
  var imcTd = montaTd(paciente.imc, "info-imc")

        //colocar as tds dentro da tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}







function montaTd(data, className) {
  var td = document.createElement("td");
  td.textContent = data;
  td.classList.add(className);

  return td;
}



function validaPaciente(paciente){

  var erros = [];

  

        // se peso não for válido ele aciona o .push
  if(!validaPeso(paciente.peso)){
    erros.push("Peso é Inválido") // .push coloca uma string no array erros 
  }

  if (!validaAltura(paciente.altura)){
    erros.push("Altura é Inválida")
  }

   // se o paciente não tiver nome, não adicionar na tabela
   if(paciente.nome.length == 0 ){
     erros.push("Paciente sem nome")
   }


 
   
   // se nao tiver o peso, não adicionar na tabela
   if(paciente.peso.length == 0 ){
     erros.push("Peso não pode ficar em branco");
    }
    
    // se nao tiver a altura, não adicionar na tabela
    if(paciente.altura.length == 0 ){
      erros.push("Altura não pode ficar em branco");
    }
    
    
    // se nao tiver a porcentagem de gordura, não adicionar na tabela
    if(paciente.gordura.length == 0 ){
      erros.push("Porcentagem de Gordura não pode ficar em branco");
    }

  return erros;
}