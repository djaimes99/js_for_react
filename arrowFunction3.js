const showText = () => { //function con el return y las llaves
    return 'hola mundo'
}

const showText2 = () =>'hola mundo' // function flecha en linea(sin return ni llaves)
console.log('hola mundo')

//Mas ejemplos de funciones flecha (arrow)
const showText3 = () =>'hola mundo'     //string
const showNumber = () => 22             //date Number
const showBoolean = () => true          //date Boolean
const showArray = () => [1, 2, 3]       //date Array
const showObject = () => ({name: 'ryan'}) //date object


//llamados a las funcione flecha retornan los datos ya mencionados arriba..
console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())
