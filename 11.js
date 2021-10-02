/*


Obten el correo de un usuario
Este ejercicio consiste en obtener el correo de un usuario.

Ejemplos
Recibimos el siguiente objeto:
{ name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }
El correo que debemos obtener es erik@academlo.com
Descripción de la función
Escribe el código necesario en la función getEmail() para que retorne el correo que se encuentre en el objeto.
Parámetros de la función:
object user: El objeto del cuál obtendremos el correo.
Retorno de la función
String: El correo que se encuentra en el objeto.
Restricciones
La forma del objeto siemore será:
{ name: 'Nombre de usuario', email: 'correo del usuario', gender: 'genero del usuario' }

Ejemplos
Ejemplo de entrada
user = { name: 'Daniel', email: 'daniel@gmail.com', gender: 'Male' }
Ejemplo de salida
daniel@gmail.com
Explicación de la salida
El correo que se encuentra en el objeto recibido es daniel@gmail.com, por lo tanto la función debe de retornar daniel@gmail.com

function getEmail(user)

*/


let usuario = { name: 'jorge', email: 'jorge@gmail.com', gender: 'masculino' }
function getEmail(user) {
    return user.email
}
getEmail(usuario)