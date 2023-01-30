const names = ['ryan', 'joe','maria']

const newNames = names.map(function(name) {
    return `Hola ${name}`
})
console.log(names) //arreglo original
console.log(newNames)//arreglo nuevo creado