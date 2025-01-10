function contar() {
    var resp = document.getElementById('resp')
    var ini = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var pass = Number(document.getElementById('txtpass').value)
    //resp.innerHTML = `Contando: <br> ${soma}`

    if (ini != "" && fim != "" && pass != "") {
        resp.innerHTML = 'Contando:<br>'
        if (ini < fim) {
            while (ini <= fim) {
                resp.innerHTML += `\u{1F449}${ini} `
                ini = ini+pass
            }
            resp.innerHTML += ` \u{1F3C1}`
        } else if (ini > fim) {
            while (ini >= fim) {
                resp.innerHTML += `\u{1F449}${ini} `
                ini = ini-pass
            }
            resp.innerHTML += ` \u{1F3C1}`
        } else if (ini == fim) {
            alert('Inicio e Fim tem que ser diferentes.')
        } 


    } else {
        alert('Preencha todos os campos.')
    }
}