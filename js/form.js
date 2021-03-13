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
  var pacienteTr = montaTr(paciente); //pegou as informações dadas pelos inputs e colocou no objeto que depois foi levado ao var paciente que foi colocado na td e adotado pelo tr e depois adicionado na tabela pelo appendChild que adicionou o Tr todo na tabela, com todas suas tds

  //colocando os valores para serem mostrados na tela/tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  //resetar os campos depois de adicionar
  form.reset();
});






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







function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
