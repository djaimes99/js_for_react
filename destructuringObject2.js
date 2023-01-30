const user = {
    name: 'Deivie Jaimes',
    age: 42
}

function printInfo(user){
    const {name, age} = user //desructurar objeto para acceder a sus propiedades..
    //se hace asi {prop1, prop2..}= objeto
    console.log(name, age)
    return '<h1>Hello, my name is: ' + name+ ", my Age: " + age + '</h1>'
}
console.log(printInfo(user))//mostramos por consola el msj
document.body.innerHTML = printInfo(user)//colocamos el mismo en el DOM o pagina
