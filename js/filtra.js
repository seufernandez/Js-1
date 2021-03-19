var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){ // input = para cada tecla digitada ele chama a função
 console.log(this.value);
 
 var pacientes = document.querySelectorAll(".paciente");

    //se tem algo digitado
    if (this.value.length > 0){
        
        for( var i = 0; i < pacientes.length; i++){
            //para pegar somente um paciente em si
            var paciente = pacientes[i];
            
            
            var tdNome = paciente.querySelector(".info-nome") // buscando dentro de um paciente sua td no html
    
            var nome = tdNome.textContent

            var expressao = new RegExp(this.value, "i")// regular expression, primeiro parâmetro é colocar o que você quer que ela busque, a segunda é como; no caso o "i" significa insensivel a letras maiúsculas e minúsculas, somente inportando os caracteres

            if (!expressao.test(nome)){// quero testar se no meu nome tem ao menos uma fração daquele expressao 
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")// 2;233333333333333333333333333333
            }
        }    
    
    }else { // tirar a classe invisível do tr
        for( var i = 0; i < pacientes.length; i++){

            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }



});