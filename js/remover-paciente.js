var pacientes = document.querySelectorAll(".paciente")


const MEIO_SEGUNDO = 500


// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();//this = paciente, pois é o dono do evento
//     })
// });

//para consertar o erro de novos nomes nao respoderem ao remove acima, vamos colocar um addEventListener no pai de todos para não importando quem for clicado, sempre dentro da tabela o duplo clique vai apagar o magrão

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){// event tem a propriedade de nos mostrar quem foi clicado

    // console.log(event.target);// .target pra saber quem foi clicado, event só da as coordenadas do clique
 
    event.target.parentNode.classList.add("fadeOut") // animação do css ativada pelo js

    //depois da animação remover
    setTimeout(function(){
        
        event.target.parentNode.remove()// seleciona o pai de quem foi clicado e o remove, no caso o pai é o tr
    }, MEIO_SEGUNDO)

});