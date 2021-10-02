/*

Encuentra un usuario
Este ejercicio consiste en encontrar y devolver el primer usuario en un arreglo que tenga el el valor que recibimos de una función. La función recibirá la clave que usaremos para la búsqueda y el valor que usaremos para buscar al usuario.

Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ]
key = 'email'
value = 'georg@academlo.com'
El usuario que dedemos retornar es
{ name: 'Georg', email: 'georg@academlo.com' }
Descripción de la función
Escribe el código necesario en la función findUser() para que retorne un objeto que tenga valor y clave recibidos.
Parámetros de la función:
array users: El arreglo de usuarios.
string key: La clave que usaremos para encontrar a un usuario.
string value: El valor por el cuál buscaremos al usuario.
Retorno de la función
Object: Objeto que será el usuario que hayamos encontrado.
Restricciones
Los objetos dentro del arreglo podrán tener cualquier clave y valor:
{ clave: 'valor', clave: 'valor', ... }

Si más de un usario cumplen con los filtros solicitados solo se devolvera el primero

Ejemplos
Ejemplo de entrada
Recibimos los siguientes datos:
users = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 }, { name: 'Erik', email: 'erik@academlo.com', age: 30 } ]
key = 'age'
value = 30
El usuario que debemos retornar es
{ name: 'Andrea', email: 'andrea@gmail.com', age: 30 }

Explicación del retorno
Retornamos a Andres porque es el promer usuario que en age tiene el valor de 30

function findUser(users, key, value)

*/


const users = [
    { name: 'Georg', email: 'georg@academlo.com', age: 22 },
    { name: 'Andrea', email: 'andrea@gmail.com', age: 30 },
    { name: 'Erik', email: 'erik@academlo.com', age: 30 } ]
function findUser(users, key, value) {
    let userFinal = users.find(us => us[key] === value)
    return userFinal
}
findUser( users, "email", 'georg@academlo.com' )