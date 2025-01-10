const escola = 'Cod3r'

console.log(escola.charAt(0)) // retorna o caractere dde indice informado
console.log(escola.charCodeAt(0))
console.log(escola.indexOf(3))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola.concat("!")))
console.log(`Escola `+escola)

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // substitui todos numeros por e
console.log(escola.replace(/\w/g, '4')) // substitui tudo por 4

console.log('Ana,Maria,Pedro'.split(',')) // gerar uma array