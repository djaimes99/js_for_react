const names = ['ryan', 'joe','maria']

const newName = names.filter(function(name) {
    if(name !== 'joe'){
        return name
    }
})

console.log(newName)//arreglo nuevo creado