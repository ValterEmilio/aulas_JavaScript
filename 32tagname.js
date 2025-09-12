const curso1 = document.getElementById('div1')
const curso2 = document.getElementById('div2')
const curso3 = document.getElementById('div3')
const curso4 = document.getElementById('div4')
const curso5 = document.getElementById('div5')
const curso6 = document.getElementById('div6')

const elementos = [ curso1, curso2, curso3, curso4, curso5, curso6]
// conceito conhecido com spreed, transofarm elemtos html em um array
// usar chaves[] e tres pontos ...
const colection = [...document.getElementsByTagName('div')]

colection.map((e)=>{
    console.log(e)
})