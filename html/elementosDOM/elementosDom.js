const caixa=document.querySelector('#caixa')
const texto=document.querySelector('.texto')
const btn=document.querySelector('.botao')

btn.addEventListener('click', ()=>{
    const elemento=document.createElement('div')
    elemento.innerHTML = texto.value
    elemento.setAttribute('class', 'curso')
    caixa.insertBefore(elemento, btn)
})

// const newElement=document.createElement('div')
// newElement.innerHTML = 'rust'
// newElement.setAttribute('class', 'curso')
// caixa.appendChild(newElement)