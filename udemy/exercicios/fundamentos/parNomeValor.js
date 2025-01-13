// par nome/valor
const saudacao = 'Opa'  // contexto lexico 1

function exec() {
    const saudacao = 'Faalaa' // contexo lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idadde: 32,
    peso: 80,
    endereco: {
        logradouro: 'Rua Nazare',
        numero: 129
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)