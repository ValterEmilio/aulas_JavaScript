const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const btn=document.querySelector('#btn_copiar')
const todosCursos=[...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const curso=evt.target
        curso.classList.toggle('selecionar')
    })

})
// esse codigo pode servir para criar um cardapio web simples.para selecionar os items do pedido

btn.addEventListener('click', ()=>{
    const moverCursos=[...document.querySelectorAll('.selecionar')]
    const retornarCursos=[...document.querySelectorAll('.curso:not(.selecionar)')]
    moverCursos.map((el)=>{
        if(!document.querySelector(`#caixa2 #${el.id}`)){
            const copiar= el.cloneNode(true)
            caixa2.appendChild(copiar)
        }
    })
    retornarCursos.map((el)=>{
        const copiar = document.querySelector(`#caixa2 #${el.id}`)
        if (copiar){
            copiar.remove()
        }
    })

})
// btn.addEventListener('click', ()=>{
//     const moverCursos=[...document.querySelectorAll('.selecionar')]
//     const retornarCursos=[...document.querySelectorAll('.curso:not(.selecionar)')]
//     moverCursos.map((el)=>{
//         caixa2.appendChild(el)
//     })
//     retornarCursos.map((el)=>{
//         caixa1.appendChild(el)
//     })

// })
