function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length != 0) {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        for (let i = 1;i <= 15;i++) {
            let item = document.createElement('option')
            item.text = `${i} X ${n} = ${i*n}`
            tab.appendChild(item)
        }
    } else {
        alert('Por favor, insira um numero.')
    }
}
