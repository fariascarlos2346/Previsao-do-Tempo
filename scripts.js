// Variáveis => Um espaço na memória do computador que guardamos algo (um numero, uma letra, um texto, uma image)
// Função => Um trecho de código que só é executado quando é chamado
let chave = "8b68ea2758673ff898d434cdbfcc60c8"

function colocaNaTela(dados){
   console.log(dados)

   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
   document.querySelector(".descricao").innerHTML = dados.weather[0].description
}

async function buscarCidade(cidade){
   let dados = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + 
      cidade +
      "&appid=" +
      chave +
      "&lang=pt_br" +
      "&units=metric")
      .then( resposta => resposta.json())

      colocaNaTela(dados)


}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}