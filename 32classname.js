const classes = [...document.getElementsByClassName('class')] // pega todas as classes class
const classesc1 = [...document.getElementsByClassName('c1')] // pega apenas as classes com c1
const especial=document.getElementsByClassName('class')[2] // pega apenas a classe na posição 2 do array


//aqui mapeia as classes no array informado
classesc1.map((e)=>{
    e.classList.add('destaque')
})
