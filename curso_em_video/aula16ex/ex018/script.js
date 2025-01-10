let pai = document.getElementById('pai')
let lista = []
let tab = document.getElementById('seltab')
let num = document.getElementById('txtnum')
let res = document.getElementById('res')

function adicionar(n) {
    if (lista.indexOf(n) >=0) {
        alert(`Valor ${n} ja inserido na lista.`)
    } else {
        lista.push(n)
        let item = document.createElement('option')
        item.text = `Elemento ${n} adicionado.`
        tab.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''
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
        let total = lista.length
        lista.sort(function(a,b){return a-b})
        let soma = 0
        let media = 0

        res.innerHTML = ''

        for (let i=0;i<total;i++) {
            soma += lista[i]
        }
        media = soma / total
        
        res.innerHTML += `<p>Total de ${total} elementos.</p>`
        res.innerHTML += `<p>O maior valor e ${lista[total-1]}.</p>`
        res.innerHTML += `<p>O menor valor e ${lista[0]}.</p>`
        res.innerHTML += `<p>A soma dos valores e ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores e ${media.toFixed(2)}.</p>`

    } else {
        alert('Adicione numeros a lista antes de finalizar.')
    }
}