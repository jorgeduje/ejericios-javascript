/*

Obten todos los correos
Este ejercicio consiste en obtener todos los correos de un areglo de objetos.

Ejemplos
Recibimos el siguiente arreglo:
[ { name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }, { name: 'Georg', email: 'georg@academlo.com', gender: 'Male' } ]
El arreglo que debemos retornar es [erik@academlo.com, georg@academlo.com]
Descripción de la función
Escribe el código necesario en la función getEmails() para que retorne un arreglo con todos los correos.
Parámetros de la función:
array users: El arreglo del cual obtendremos los correos.
Retorno de la función
Array: Arreglo con todos los correos.
Restricciones
Los objetos dentro del arreglo que recobe la función siempre tendrán el siguiente formato:
{ name: 'Nombre de usuario', email: 'correo del usuario', gender: 'genero del usuario' }

Ejemplos
Ejemplo de entrada
[ { name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }, { name: 'Georg', email: 'georg@academlo.com', gender: 'Male' } ]
Ejemplo de salida
[erik@academlo.com, georg@academlo.com]
Explicación de la salida
Los correos que existen en el arreglo son erik@academlo.com y georg@academlo.com, por lo cuál retornamos los mismos en un arreglo

function getEmails(users)


*/


let usuarios = [
    {
        name: 'Erik',
        email: 'erik@academlo.com',
        gender: 'Male'
    },

    {   name: 'Georg',
        email: 'georg@academlo.com',
        gender: 'Male'
    },
    {   name: 'jorge',
        email: 'jorge@gmail.com',
        gender: 'Male'
    }
]

function getEmails(users) {
    let saludo = [users[0].email, users[1].email, users[2].email]
    return saludo
}
getEmails(usuarios)