/*

Meclando datos de 2 arreglos
Este ejercicio consiste en mezclar la información de 2 arreglos usando como identificador el correo.

Ejemplos
Recibimos los siguientes datos:
users = [ { name: 'Georg', email: 'georg@academlo.com', }, { name: 'Andrea', email: 'andrea@gmail.com', } ]
attendance = [ { email: 'georg@academlo.com', attendance: true }, { email: 'andrea@gmail.com', attendance: false } ]
El arreglo que dedemos retornar es
[ { name: 'Georg', email: 'georg@academlo.com', attendance: true }, { name: 'Andrea', email: 'andrea@gmail.com', attendance: false } ]
Descripción de la función
Escribe el código necesario en la función mergeData() para que retorne un arreglo de objetos con los datos correspondientes.
Parámetros de la función:
array users: El arreglo de usuarios.
array attendance: La información de asistencia, que deberá menzclarse con la de usuarios.
Retorno de la función
array: Arreglo con los datos mezclados de ambos arreglos.
Restricciones
Los objetos dentro del arreglo de usuarios siempre tendrán la siguiente forma:
{ name: 'nombre', email: 'correo', }

Los objetos dentro del arreglo de attendance siempre tendrán la siguiente forma:
{ email: 'email', attendance: true or false }

Ejemplos
Ejemplo de entrada
Recibimos los siguientes datos:
users = [ { name: 'Georg', email: 'georg@academlo.com', }, { name: 'Andrea', email: 'andrea@gmail.com', } ]
attendance = [ { email: 'georg@academlo.com', attendance: true }, { email: 'andrea@gmail.com', attendance: false } ]
El arreglo que debemos de retornar es
[ { name: 'Georg', email: 'georg@academlo.com', attendance: true }, { name: 'Andrea', email: 'andrea@gmail.com', attendance: false } ]

Explicación del retorno
Mezclamos la información de los 2 arreglos y es lo que devolvemos, tomamos como referencia el correo para hacer la mezcla.

function mergeData(users, attendance)

*/




let usuarios = [

    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' },
    { name: 'juan', email: 'juan@gmail.com' }
]

let asistencia = [

    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false },
    { email: 'juan@gmail.com', attendance: false }
]


function mergeData(users, attendance) {
    for (let i = 0; i < users.length; i++) {
        const usuariosEmail = users[i].email;

        for (let a = 0; a < attendance.length; a++) {
            const asistenciaEmail = attendance[a].email;
            if (usuariosEmail === asistenciaEmail) {
                users[i].attendance = attendance[a].attendance
            }
        }

    }

    return users
}

mergeData(usuarios, asistencia)