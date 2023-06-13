function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido</div>`
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor invalido: Fale um numero entre
            ${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Voce acertou!</h2>
        <h3> O numero secreto é ${numeroSecreto}</h3 >
        <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML +=
            `<div>O numero secreto e menor <i class="fa-solid fa-down-long"></i> `
    } else {
        elementoChute.innerHTML +=
            `<div>O numero secreto e maior <i class="fa-solid fa-up-long"></i> `
    }

}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
