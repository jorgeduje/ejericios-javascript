/*

Crea un arreglo multiplos
Este ejercicio consiste en recibir 2 números y crear un arreglo con los los múltiplos del primero siempre y cuando sean menores al segundo.

Ejemplos
Recibimos los siguientes parámetros:
20, 100
Los múltiplos de 20 menores a 100 son: 40, 60, 80
Descripción de la función
Escribe el código necesario en la función populateArray() para que retorne un arreglo con todos los múltiplos.
Parámetros de la función:
number number: El número del cuál debes de generar los múltiplos.
number límite: El número que tomarás como límite para generar los múltiplos.
Retorno de la función
Array: Arreglo con todos los múltiplos.
Restricciones
N/A.

Ejemplos
Ejemplo de entrada
number = 10
limit = 45
Ejemplo de salida
[20, 30, 40]
Explicación de la salida
Todos los múltiplos de 10 y menores a 45 son: 20, 30 y 40

function populateArray(number, limit)

*/


function populateArray(number, limit) {
    let multiplos = []

    for (let i = number; i < limit; i += number) {

        if (i != number) {
            multiplos.push (i)
        }


    }
    return multiplos
}
populateArray(10, 45)