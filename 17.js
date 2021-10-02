/*

Encuentra la edad que se repite más veces.
Este ejercicio consiste en encontrar la edad que más se repite en un arreglo de estudiantes.

Ejemplos
Recibimos los siguientes datos:
students = [ { name: 'Georg', age: 23, }, { name: 'Andrea', age: 23, }, { name: 'Daniela', age: 25, }, { name: 'José', age: 27, } ];
La edad que se repite más veces es 23
Descripción de la función
Escribe el código necesario en la función findRepeatedAge() para que retorne la edad que se repite más veces.
Parámetros de la función:
array students: El arreglo con todos los estudiantes.
Retorno de la función
Number: La edad que se repite más veces.
Restricciones
Los objetos dentro del arreglo de estudiantes siempre tendrán la siguiente forma:
{ name: 'nombre', age: 'edad_del_estudiante', }


function findRepeatedAge(students)

*/


function findRepeatedAge(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i]["age"] === students[i+1]["age"]) {
            return students[i]["age"]
        }
        else if (students[i]["age"] === students[i+2]["age"]){
            return students[i]["age"]
        }
        else if (students[i]["age"] === students[i+3]["age"]){
            return students[i]["age"]
        }

    }
}