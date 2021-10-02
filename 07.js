/*

Suma de 3 edades encontradas en frases
Este ejercicio consiste en sumas las edades de 3 usuarios, estos usuarios nos dan un texto y nuestro trabajo es obtener las edades de ese texto y sumarlas.

Ejemplos
Recibimos los siguientes 3 textos:
"Me llamo Erik y tengo 8 años"
"Me llamo Daniel y tengo 22 años"
"Me llamo José y tengo 14 años"
La suma total de las edades es 44
Descripción de la función
Escribe el código necesario en la función sumAges() para que retorne la suma de todas las edades.
Parámetros de la función:
string firstUserPhrase: La primer frase que contiene la primer edad.
string secondUserPhrase: La segunda frase que contiene la segunda edad.
string thirdUserPhrase: La tercer frase que contiene la tercer edad.
Retorno de la función
Number: La suma de todas las edades.
Restricciones
La edad siempre será la penúltima palabra de la frase.

Ejemplos
Ejemplo de entrada
firstUserPhrase = "Me llamo Erik y tengo 8 años"
secondUserPhrase = "Me llamo Daniel y tengo 22 años"
thirdUserPhrase = "Me llamo José y tengo 14 años"
Ejemplo de salida
44
Explicación de la salida
La suma de 8 + 22 + 14 es igual a 44

function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase)

*/



let frase1 = "hola mi nombre es alberto y tengo 20 años"
let frase2 = "hola mi nombre es jorge y tengo 21 años"
let frase3 = "hola mi nombre es flavia y tengo 31 años"


function sumAges(usuario1, usuario2, usuario3) {

    let posis1 = usuario1.lastIndexOf(" ") - 2 ;
    let posis2 = usuario2.lastIndexOf(" ") - 2 ;
    let posis3 = usuario3.lastIndexOf(" ") - 2 ;

    let años1 = usuario1.substr(posis1, 2);
    let años2 = usuario2.substr(posis2, 2);
    let años3 = usuario3.substr(posis3, 2);

    let num1 = parseInt(años1);
    let num2 = parseInt(años2);
    let num3 = parseInt(años3);

    let resultado = num1 + num2 + num3

    return resultado

}

sumAges(frase1,frase2,frase3)

