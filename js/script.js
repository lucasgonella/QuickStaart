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
    fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
        return resultado.json();
    })
    .then(function (resultadoJson) {
        proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInformacao);