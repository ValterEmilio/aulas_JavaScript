// const div=document.querySelector("#c1")

const clicou=[...document.querySelectorAll('.class')]
const adicionar = document.querySelector('#adicionar')

clicou.map((element)=>{
    element.addEventListener('click', (evento)=>{
        const element=evento.target
        element.classList.add('destaque')
        adicionar.innerHTML += element.innerHTML + " " + 'Foi Clicado <br>'
    })
})

// clicou.addEventListener('click', ()=>{alert("clicou")})