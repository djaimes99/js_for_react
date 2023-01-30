function hello(){
    return  function(){
        return 'hola mundo'
    }
}

//const cade = hello()
console.log(hello()())
