const person = {
    name : 'ryan',
    address: {
        city: 'london'
    },
    location: {}
}

console.log(person.location?.city)

//sin el signo de interrogacion..al ejecuarse dara error
//con el se lee que si esta esa propiedad (o no) ejecuta sin error
//resultado undefined pues location vacio