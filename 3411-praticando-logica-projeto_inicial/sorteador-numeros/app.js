function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value)
    let de = parseInt(document.querySelector("#de").value)
    let ate = parseInt(document.querySelector("#ate").value)

    if(quantidade==="" || de=== "" || ate===""){
        alert("digite um numero valido!")
        return;
    }

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
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    
    
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("quantidade").focus()
}

function pegarnumeroaleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
