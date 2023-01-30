const background = 'red', color = 'white'
const isAuthorized = true

const button = document.createElement('button')
button.innerText = 'click me'
button.style = `background: ${isAuthorized ? background : 'blue'}; color: ${color}` //interpolar

document.body.append(button)
//`background: ${isAuthorized ? background : 'blue'};... operador ternario ?
//equivale a if(isAuthorize){ background = background} else {background = 'blue'}