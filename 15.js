/*

Ordenar por score
Este ejercicio consiste en ordenar por 'score' de menor a mayor un arreglo de usuarios.

Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Georg', email: 'georg@academlo.com', score: 100 }, { name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, { name: 'Andrés', email: 'andres@gmail.com', score: 34 } ]
El arreglo que dedemos retornar es
[ { name: 'Andrés', email: 'andres@gmail.com', score: 34 }, { name: 'Andrea', email: 'andrea@gmail.com', score: 70 }, { name: 'Georg', email: 'georg@academlo.com', score: 100 } ]
Descripción de la función
Escribe el código necesario en la función orderUsersByScore() para que retorne un arreglo con los usuarios ordenados por score.
Parámetros de la función:
array users: El arreglo de usuarios.
Retorno de la función
array: Arreglo con los usuarios ordenamos por score.
Restricciones
Los objetos dentro del arreglo siempre tendrán la siguiente forma:
{ name: 'nombre', email: 'correo', score: score }

Ejemplos
Ejemplo de entrada
Recibimos los siguientes datos:
users = [ { name: 'Luis', email: 'luis@gmail.com', score: 100, }, { name: 'Andrea', email: 'andrea@gmail.com', score: 30 }, { name: 'María', email: 'maria@academlo.com', score: 50 } ]
El arreglo que debemos de retornar es
[ { name: 'Andrea', email: 'andrea@gmail.com', score: 30 }, { name: 'María', email: 'maria@academlo.com', score: 50 }, { name: 'Luis', email: 'luisg@academlo.com' age: 100, } ]

Explicación del retorno
El menor score corresponde a Andrea, el siguiente mejor corresponde a María y finalmente, el puntaje mayor pertenece a Luis, por lo cual los devolvemos en ese orden.

function orderUsersByScore(users)

*/


users = [

    { name: 'Andrés', email: 'andres@gmail.com', score: 34 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 50 },
    { name: 'Georg', email: 'georg@academlo.com', score: 10 }
]
function orderUsersByScore(users) {
    users.sort((a, b)=>{
        return a.score - b.score
    })

    return users
}
orderUsersByScore(users)