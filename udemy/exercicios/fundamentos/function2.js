// Armazenando uma function em uma variavel
const imprimirSoma = function(a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

// Armazenando uma function arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 5))

// Retorno implicido
const subtracao = (a, b) => a - b

console.log(subtracao(5, 4))