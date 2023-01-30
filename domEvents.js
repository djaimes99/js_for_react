const button = document.createElement('button')
button.innerText = 'click me'
function handleClick() {
    alert('clicked')
}

button.addEventListener('click', handleClick)

document.body.append(button)
