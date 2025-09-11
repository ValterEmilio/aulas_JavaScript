function aluno(nome, nota) {
    this.nome = nome //o this serve para uma mesma palavra possa ser usada como variavel e parametro de função.
    this.nota = nota
    //console.log(`Caro, aluno ${nome} sua nota foi ${nota}`)

    this.dadosAnonimos = function(){
        setTimeout(function(){ //para funcionar precisa declarar novamente as variaveis com this
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }
    this.dadosArrow = function(){
        setTimeout(()=>{ //para funiconar não precisa declarar novamente a variavel. o que resolve e a arrowFunction.
            console.log(this.nome)
            console.log(this.nota)
        },3000)
    }
}
const aluno1 = new aluno('Valter', 7);
aluno1.dadosAnonimos();
aluno1.dadosArrow();