/*

Suma los valores de un arreglo
Este ejercicio consiste en sumar los valores de un arreglo con 3 elementos.

Ejemplos
Recibimos el siguiente arreglo:
[1, 2, 3]
La suma de los valores es 5
Descripción de la función
Escribe el código necesario en la función sumArrayValeus() para que retorne la suma de los elementos.
Parámetros de la función:
array array: El arreglo del cuál sumarás los valores.
Retorno de la función
Number: La suma de todos los valores del arreglo.
Restricciones
La longitud del arreglo siempre será 3.

Ejemplos
Ejemplo de entrada
array = [5, 6, 3]
Ejemplo de salida
14
Explicación de la salida
La suma de 5, 6 y 3 es 14, por eso la salida es 14

function arraySumValues(array)

*/


const array = [1, 2, 3];

function arraySumValues(array) {
    let num1 = array[0]
    let num2 = array[1]
    let num3 = array[2]
    let resultado = num1 + num2 + num3
    return resultado
}
arraySumValues(array)