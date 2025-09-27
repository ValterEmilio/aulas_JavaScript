const nome=document.querySelector('#nome')
const idades=[21,35,15,12,8,34,56,78]
const maior=idades.filter((val,ind,arr)=>{
    if(val >= 18 ){
        return val
    }
})

nome.innerHTML = maior


