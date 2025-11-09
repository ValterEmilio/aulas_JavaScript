let contagem = 0

function itensAlugados(){
    console.log(`quantidade de itens alugados:${contagem} boardgames;`)
}
function alterarStatus(id){
    let mudarBotao = document.getElementById(`game-${id}`)
    let imagem = mudarBotao.querySelector('.dashboard__item__img')
    let botao = mudarBotao.querySelector('.dashboard__item__button')
    let nomeJogo = mudarBotao.querySelector('.dashboard__item__name')

    
    
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Voce deseja Devolver o Jogo ${nomeJogo.textContent}?`)){
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.innerHTML = 'Alugar'}
        contagem--
        
    } else{
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.innerHTML = 'Devolver'
        contagem++
    }

    itensAlugados()

}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    itensAlugados();
});
