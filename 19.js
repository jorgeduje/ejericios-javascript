/*

Suma todos los números pares en un rango
Este ejercicio consiste en sumar todos los números pares en un rango de 2 números (sin incluir a los 2 números).

Ejemplos
Recibimos los siguientes datos:
start = 20
end = 30
La suma de pares sin incluir start ni end es 100
Ya que los pares en ese rango (sin incluir start ni end) son 22, 24, 26 y 28; al realizar la suma de estos pares obtenemos 100

Descripción de la función
Escribe el código necesario en la función sumEvens() para que retorne la suma de los pares en el rango entre start y end.
Parámetros de la función:
number start: El número inicial que tomaremos como referencia para obtener los pares.
number end: El número final que tomaremos como referencia para obtener los pares.
Retorno de la función
Number: La suma de todos los pares en el rango de los dos números recibidos.
Restricciones
startsiempre será menor a end

function sumEvens(start, end) 

*/




function sumEvens(start, end) {
    let pares = [];

    for (let i = (start + 1); i < end; i++) {
        const par = i;
        let resto = par % 2;
        if (resto == 0) {
            pares.push(i);
        }
    }

    const sumados = pares.reduce((acc, item) => {
        return acc = acc + item;
    })

    return sumados
}
