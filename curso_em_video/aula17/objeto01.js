let amigo = {nome:'Bruno',
    sexo:'M',
    peso:70,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(0)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
let num = 8
num **= 2
console.log(num)
