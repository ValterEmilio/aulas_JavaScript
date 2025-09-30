const cxCursos=document.querySelector('#caixaCursos')
const btn_Curso=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=['HTML', 'CSS', 'JavaScrpt', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado=document.getElementById('selectCurso')
const removeCurso=document.querySelector('#removeCurso')
const adicionarCursoAntes=document.querySelector('#adicionarCursoAntes')
const adicionarCursoDepois=document.querySelector('#adicionarCursoDepois')
const nomeCurso=document.querySelector('#nomeCurso')

// Percorre a lista de cursos e cria dinamicamente os elementos na tela

const tirarSelecao=()=>{
    const cursoSelecionado=[...document.querySelectorAll('.selecionado')]
    cursoSelecionado.map((el)=>{
        el.classList.remove('selecionado')
    })
}

let indice=0
const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class',  'curso c1')
    novoElemento.innerHTML=curso
    novoElemento.addEventListener('click', (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
        
    })
    
    return novoElemento
    
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    cxCursos.appendChild(novoElemento)
    indice++

})
// Função que retorna o input radio que está marcado
const cursoSelecionado=()=>{
    const cursoSelecionados=[...document.querySelectorAll('.selecionado')]
    return cursoSelecionados[0]
}

// Evento do botão "Selecionar Curso"
btnCursoSelecionado.addEventListener('click', (evt) => {
    try{
        alert('o Elemento selecionado foi:' + cursoSelecionado().innerHTML)
    } catch(ex){
        alert('Selecione um curso')
    }
})
// Evento do botão "Remover Curso"
removeCurso.addEventListener('click', (evt) =>{
    const cs=cursoSelecionado()
    if(cs != undefined){
        cs.remove()
    } else{
        
        window.alert('Selecione um curso')
    }

})


adicionarCursoAntes.addEventListener('click', (evt)=>{
        const cs=cursoSelecionado()
        if(nomeCurso.value==""){
            window.alert('Digite o nome que deseja inserir')
            return
            
        }
        if (cs==undefined){
            window.alert('Selecione um curso')
            return
        }
        const novoCurso=criarNovoCurso(nomeCurso.value)
        cxCursos.insertBefore(novoCurso, cs) 
})

adicionarCursoDepois.addEventListener('click', (evt)=>{
        const cs=cursoSelecionado()
        if(nomeCurso.value==""){
            window.alert('Digite o nome que deseja inserir')
            return           
        }
        if (cs==undefined){
            window.alert('Selecione um curso')
            return
        }
        const novoCurso=criarNovoCurso(nomeCurso.value)
        cxCursos.insertBefore(novoCurso, cs.nextSibling) 
})