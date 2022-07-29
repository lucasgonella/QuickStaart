const perguntaPadrao = {   
    "title": "Background",
    "description": "A propriedade CSS background é usada para definir os valores de fundo individuais em um único lugar na folha de estilo.", 
    }

function revelarResposta() {
    var resposta = document.querySelector('#resposta');
    resposta.classList.toggle('blur');
}

function proximaPergunta(proximaPergunta) {
    var card = document.querySelector('#cardContainer');
    card.innerHTML = ""

    var novaDiv = document.createElement('div');

    novaDiv.classList.add('card', "animate__animated", "animate__backInRight");

    novaDiv.innerHTML = `
        <div class="card-pergunta centralizar">
            <h1 class="pergunta">O que é ${proximaPergunta.title}?</h1>
        </div>    

        <div id="resposta" class="card-resposta blur">
            <p class="resposta">
            ${proximaPergunta.description}
            </p>
            
        </div>
        `;

    card.appendChild(novaDiv)

}

function buscarInformacao() {
    fetch("https://flash.quickstaart.com/random/")
      .then(function (resultado) {
        if (resultado.ok) {
          proximaPergunta(resultado);
        }
        throw new Error("Erro ao realizar o fetch");
      })
      .catch(function () {
        proximaPergunta(perguntaPadrao);
      });
  }

window.addEventListener("load", buscarInformacao);