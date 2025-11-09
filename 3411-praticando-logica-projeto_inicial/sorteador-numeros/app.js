let resultado = document.getElementById("resultado")


function sortear(){
    let quantidade = document.getElementById("quantidade").value
    let de = document.querySelector("#de").value
    let ate = document.querySelector("#ate").value

    if (quantidade==='' || de===''|| ate==='' ){
        alert('Por favor, digite um Numero!')
        return
    }

    quantidade = parseInt(quantidade);
    de = parseInt(de);
    ate = parseInt(ate);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || de > ate || quantidade <= 0) {
        alert("Verifique se os valores inseridos são válidos!");
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert("A quantidade de números a sortear é maior que o intervalo disponível!");
        return;
    }

    let sorteados = []
    let numeros
    
    for (let i = 0; i < quantidade; i++){
        numeros = pegarnumeroaleatorio(de, ate)
        while(sorteados.includes(numeros)){
            numeros = pegarnumeroaleatorio(de, ate)
        }
        sorteados.push(numeros)
    }
    
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    
    habilitarBotao() 
}
function pegarnumeroaleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitarBotao(){
    let reinicia = document.getElementById('btn-reiniciar')
    if(reinicia.classList.contains('container__botao-desabilitado')){
        reinicia.classList.remove('container__botao-desabilitado')
        reinicia.classList.add('container__botao')
    } 
}

 function reiniciar(){
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("quantidade").focus()
    desabilitaboatao()


}
function desabilitaboatao(){
    let desab = document.getElementById('btn-reiniciar')
    if (desab.classList.contains('container__botao')) {
        desab.classList.remove('container__botao')
        desab.classList.add('container__botao-desabilitado')
    }
}
