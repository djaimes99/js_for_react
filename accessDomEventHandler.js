
const title = document.createElement('h1')
//console.log(title)

document.body.append(title)
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
document.body.append(button)
button.innerText = 'ClickMe'

//agregando un escucha o evento al boton
button.addEventListener('click', function(){
    console.log('Hola Mundo')
})