//essa função vai somando valores parametro rest quantos valores forem atribuidos a soma
function soma(...valores){
    let tamanho = valores.length
    let resultado = 0
    for (let v of valores){
        resultado+=v
    }
    return resultado
}
console.log (soma(10,5,4,6,25, 30, 50, 1))