const background = 'blue', color = 'white'

const button = document.createElement('button')
button.innerText = 'click me'
button.style = `background: ${background}; color: ${color}` //interpolar
const isAuthorized = true

button.addEventListener('click',  () =>{

    if(isAuthorized){
        return alert('esta autorizado!!')
    }
    alert('no esta autorizado')    
})
document.body.append(button)
//en este caso un botón interpolando con`${variable}`;  notese las tildes invertidas..``