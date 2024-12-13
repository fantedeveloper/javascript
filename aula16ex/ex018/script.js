let pai = document.getElementById('pai')
let lista = []
let tab = document.getElementById('seltab')
let num = document.getElementById('txtnum')

function adicionar(n) {
    if (lista.indexOf(n) >=0) {
        alert(`Valor ${n} ja inserido na lista.`)
    } else {
        lista.push(n)
        let item = document.createElement('option')
        item.text = `Elemento ${n} adicionado.`
        tab.appendChild(item)
        num.value = ''
    }
}

function verificar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        alert('Preencha com um numero entre 1 e 100')
        num.value = ''
    } else {
        let n = Number(num.value)
        adicionar(n)
    }
}

function finalizar() {
    if (lista.length != 0) {
        lista.sort(function(a,b){return a-b})
        let tamanho = Number(lista.length)-1
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')

        for (let i=0;i<lista.length;i++) {
            let soma = 0
            soma += lista[i]
        }

        p1.textContent = `Total de ${lista.length} elementos`
        pai.appendChild(p1)
        p2.textContent = `O maior valor e o ${lista[lista.length-1]}`
        pai.appendChild(p2)
        p3.textContent = `O menor valor e o ${lista[0]}`
        pai.appendChild(p3)
        p4.textContent = `A soma dos valores e igual a ${soma}`
        pai.appendChild(p4)
        

    } else {
        alert('Adicione numeros a lista antes de finalizar.')
    }
}