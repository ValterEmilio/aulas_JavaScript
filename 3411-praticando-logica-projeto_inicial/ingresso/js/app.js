let ingressos = document.getElementById('tipo-ingresso')
let quantidade = document.getElementById('qtd')
let pista = document.getElementById('qtd-pista')
let inferior = document.getElementById('qtd-inferior')
let superior = document.getElementById('qtd-superior')
function comprar() {
    
    if( ingressos.value === 'pista'){
        if( parseInt(pista.textContent) == 0 || quantidade.value > parseInt(pista.textContent)) {
            alert('Verifique a quantidade Disponivel!')
        } else{
            alert(`foram ${quantidade.value} ingressos na ${ingressos.value}`)
            let sub = parseInt(pista.textContent) - quantidade.value
            pista.textContent = sub

            

        }       

    } else if (ingressos.value === 'superior') {
        if( parseInt(superior.textContent) == 0 || quantidade.value > parseInt(superior.textContent)) {
            alert('Verifique a quantidade Disponivel!') 
        }else {
            alert(`foram ${quantidade.value} ingressos na ${ingressos.value}`)
            let sub = parseInt(superior.textContent) - quantidade.value
            superior.textContent = sub
        }     

    } else if (ingressos.value === 'inferior') {
         if( parseInt(inferior.textContent) == 0 || quantidade.value > parseInt(inferior.textContent)) {
            alert('Verifique a quantidade Disponivel!')
        } else{
            alert(`foram ${quantidade.value} ingressos na ${ingressos.value}`)
            let sub = parseInt(inferior.textContent) - quantidade.value
            inferior.textContent = sub
        }

    } else {
        alert('Selecione uma area!')
    }

    document.getElementById('qtd').value = ''
    
}
