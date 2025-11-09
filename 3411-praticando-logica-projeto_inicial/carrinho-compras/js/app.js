let total

limpar()
function adicionar(){
    let produto = document.querySelector('#produto').value
    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1]
    let quantidade = document.querySelector('#quantidade').value
    if (quantidade ===''|| (quantidade)<=0){
        alert('Digite a Quantidade!')
    }else{
        let subtotal = valorUnitario * quantidade

        let carrinho = document.getElementById('lista-produtos')
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`

    total = total + subtotal
    let valorTotal = document.getElementById('valor-total')
    valorTotal.textContent = `R$ ${total}`
    document.querySelector('#quantidade').value = ''
    }
    
    
    
    
}

function limpar(){
    total = 0
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').textContent = 'R$ 0'
}

function splitar(){
    let numeros = document.getElementById('numeros')
    let separar = numeros.split(',')[3]
     console.log(separar)

}