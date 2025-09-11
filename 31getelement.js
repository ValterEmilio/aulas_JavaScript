const curso1 = document.getElementById('div1')
const curso2 = document.getElementById('div2')
const curso3 = document.getElementById('div3')
const curso4 = document.getElementById('div4')
const curso5 = document.getElementById('div5')
const curso6 = document.getElementById('div6')

// console.log(curso)
// console.log(curso.id)
// console.log(curso.innerHTML)
// curso.innerHTML = "Valter"

const elementos = [ curso1, curso2, curso3, curso4, curso5, curso6]

elementos.map((e)=> {
    e.style.fontFamily = 'Arial'
    //console.log(e)
})
//show de bolice!!!
