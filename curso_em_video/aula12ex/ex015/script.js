function verificar() {
    /* 
        Jovem <= 22
        Adulto 23 a 55
        Idoso 55 >
    */
        var data = new Date()
        var ano = data.getFullYear()
        var nasc = document.getElementById('txtano')
        var resp = document.getElementById('resp')
        var genero = ''
        var img = document.getElementById('img')

        if (nasc.value.length == 0 || nasc > ano) {
            alert('Verifique os dados e preencha tudo corretamente.')
        } else {
            var sex = document.getElementsByName('radsex')
            var idade = Number(ano) - Number(nasc.value)
            if (sex[0].checked) {
                genero = 'Homem'
                if (idade <= 30) {
                    img.style.background = "url('./imagens/jovem-homem.jpg') center center"
                    img.style.backgroundSize = 'cover'
                } else if (idade <= 55) {
                    img.style.background = "url('./imagens/homem.jpg') center center"
                    img.style.backgroundSize = 'cover'
                } else {
                    img.style.background = "url('./imagens/idoso.jpg') center center"
                    img.style.backgroundSize = 'cover'
                }
            } else {
                genero = 'Mulher'
                if (idade <= 30) {
                    img.style.background = "url('./imagens/jovem-mulher.jpg') center center"
                    img.style.backgroundSize = 'cover'
                } else if (idade <= 55) {
                    img.style.background = "url('./imagens/mulher.jpg') center center"
                    img.style.backgroundSize = 'cover'
                } else {
                    img.style.background = "url('./imagens/idosa.jpg') center center"
                    img.style.backgroundSize = 'cover'
                }
            }
            resp.innerText = `Detectamos um(a) ${genero} com ${idade} anos.`
        }
        
}