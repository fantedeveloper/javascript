function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora <= 12) {
        img.style.backgroundImage = "url('./imagens/manha.jpg')"
        document.body.style.backgroundColor = 'rgb(90, 127, 184)'
    } else if (hora > 12 && hora < 18) {
        img.style.backgroundImage = "url('./imagens/tarde.jpg')"
        document.body.style.backgroundColor = 'rgb(22, 72, 146)'
    } else {
        img.style.backgroundImage = "url('./imagens/noite.jpg')"
        document.body.style.backgroundColor = 'rgb(7, 27, 56)'
    }
}
