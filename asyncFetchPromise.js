const ul = document.createElement('ul')
fetch('https://jsonplaceholder.typicode.com/posts')
//con fetch pido datos a un backend externo, de esa direccion web
.then(function (response){
    return response.json();  //transformo datos a formato JSON
})
.then(function(data){//colocamos este otro .then ya que tardara en cargar los datos
    console.log(data);  //al terminar de traer y cargar los datos imprimir
    data.forEach(function(post){
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    })
    document.body.append(ul);//muestra 
    
})

console.log('linea 2')