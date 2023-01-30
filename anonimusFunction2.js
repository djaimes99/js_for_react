const button = document.createElement('button')
button.innerText = 'click me'
button.addEventListener('click', function () {
    alert('clicked')
})

document.body.append(button)

//Parece no muy útil el uso de funciones anónimas pero, son muy usadas al manejar eventos..