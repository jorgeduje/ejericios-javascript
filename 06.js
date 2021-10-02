/*


Reemplaza la última palabra de una frase
Este ejercicio consiste en reemplazar la última palabra de una frase por otra palabra.

Ejemplos
En la frase "Tengo 10 años " reemplazamos la palabra "años" por "pesos" y la frase resultante es "Tengo 10 pesos".
Descripción de la función
Escribe el código necesario en la función replaceLastWord() para que retorne la frase con la última palabra cambiada.
Parámetros de la función:
string phrase: frase de la cual obtendrás la última palabra y posteriormente la reemplazarás.
string word: palabra con la cuál reemplazarás la última palabra de la frase.
Retorno de la función
string: La nueva frase.
Restricciones
N/A

Ejemplos
Ejemplo de entrada
phrase = "Hola me llamo Juan" word = "Erik"
Ejemplo de salida
"Hola me llamo Erik"
Explicación de la salida
La última palabra de la frase "Hola me llamo Juan" es Juan, la cuál es reemplazada por la palabra Erik.


*/



function replaceLastWord(phrase, word) {
    let posision = phrase.lastIndexOf(" ") + 1;
    let ultimaPalabra = phrase.substring(posision);
    let expresion = new RegExp(ultimaPalabra+'$');
    const newPhrase = phrase.replace(expresion, word);
    return newPhrase;
}
const final = replaceLastWord("el arbol es azul y mi perro azul", "rojo");