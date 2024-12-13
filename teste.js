function contar() {
    var ini = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var resp = document.getElementById('resp')
    var soma = ini+fim

    if (ini != "" && fim != "") {
        resp.innerHTML = `Contando:<br>${ini} - ${fim} - ${soma}`
    } else {
        alert('Preencha todos os campos.')
    }
}