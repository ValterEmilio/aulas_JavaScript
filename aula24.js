
// esse codigo é uma função anonima
let f=function(...valores){
    let resultado =0 
    for(let v of valores){
        resultado+=v
    }
    return resultado
}
console.log(f(10,5,7))

// esse codigo é uma função anonima do tipo construtor

let j = new Function('v1', 'v2', 'v3', 'return v1+v2+v3')
console.log(f(10,4,7))