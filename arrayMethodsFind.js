const names = ['ryan', 'joe','maria']

const nameFound = names.find(function(name) {
    if(name === 'joe'){
        return name
    }
})

console.log(nameFound)//arreglo nuevo creado