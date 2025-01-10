let num = [5,8,4,9,7]
console.log(num)
num.push(3)
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
num.sort()
let pos = num.indexOf(2)

if (pos == -1) {
    console.log('Valor nao encontrado no vetor.')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
