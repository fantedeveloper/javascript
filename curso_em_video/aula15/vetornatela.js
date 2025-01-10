let num = [5,7,9,1]

for (let pos = 0; pos < num.length;pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

console.log('Agora usando o for in')

for (let pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}