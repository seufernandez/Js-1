var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    console.log("está funcionando");

    //PEGAR DADOS DA API

    //responsável por fazer as requisições pra gente
    var xhr = new XMLHttpRequest();

    //ensina qual tipo de requisição a gente quer fazer e para onde; funcao .open abre a conexão que a gente quer fazer
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function(){// quando tiver carregado ele executará esta função
        
        if (xhr.status == 200) { // 200 = solicitação executada com êxito

            var resposta = xhr.responseText//.responseText = envir o texto da req, nesse caso enviou os nomes e as características dos pacientes
            var pacientes = JSON.parse(resposta)// JSON.parser vai ler a resposta e devolver em objeto JavaScript(array)
    
    
            //vai passar por cada paciente da api e adicionar na tabela
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            
            console.log(xhr.status);//vai mostrar a natureza do problema se houver
            console.log(xhr.responseText);
            
        }

            

    })
    xhr.send();// .send pega a req e envia
})