/*Pagina los datos de un arreglo
Este ejercicio consiste en devolver los elementos de un arreglo en bloques de 2, cada bloque representa una página, por ejemplo: los primeros 2 elementos son la primer página, los siguientes 2 elementos son la segunda página, etc.
Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Daniela', email: 'daniela@academlo.com', }, { name: 'Juan', email: 'juan@academlo.com', }, { name: 'Luis', email: 'luis@academlo.com', }, { name: 'Pedro', email: 'pedro@academlo.com', } ];
page=2
El arreglo que debemos retornar es [ { name: 'Luis', email: 'luis@academlo.com', }, { name: 'Pedro', email: 'pedro@academlo.com', } ]
ya que Luis y Pedro se encuentran en la página 2, mientras que Daniela y Juan se encuentran en la primer página.
Descripción de la función
Escribe el código necesario en la función paginateUsers() para que retorne todos los usuarios que se encuentren en la página que recibe como parámetro.
Parámetros de la función:
array users: El arreglo de usuarios.
numberpage: La página que tienes que devolver
Retorno de la función
array: Un arreglo con todos los usuarios que se encuentren en la página recibida. */

// function paginateUsers( users, page )




function paginateUsers( users, page ){

  let index = page * 2

  let pageResult = users.slice( index - 2 , index )

  
  return pageResult
}

console.log( paginateUsers( users, 3 ) ) 