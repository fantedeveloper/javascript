// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua Belem',
        numero: 123
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)