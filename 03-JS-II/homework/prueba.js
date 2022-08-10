
function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if(numero === 0 || numero === 1){
        return false
    }
    if(numero === 2 || numero === 3){
        return true
    }
    if(numero % 2 === 0){
        return false
    }
    if(numero > 4){
        for (let i = 2; i <= Math.floor(Math.pow(numero, 0.5)); i++) {
            if(numero % i === 0){
                return false
            }
        }
    return true
    }
}

console.log(esPrimo(0), '0')
console.log(esPrimo(1), '1')
console.log(esPrimo(2), '2')
console.log(esPrimo(3), '3')
console.log(esPrimo(4), '4')
console.log(esPrimo(5), '5')
console.log(esPrimo(6), '6')
console.log(esPrimo(48541), '48541') 
console.log(esPrimo(7), '7')
console.log(esPrimo(8), '8')
console.log(esPrimo(9), '9')

function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    const MULTIPLICANDO = 6
    const tabla_del_seis = []
    for (let multiplicador = 0; multiplicador < 10; multiplicador++) {
      tabla_del_seis.push(MULTIPLICANDO * multiplicador)
    }
    return tabla_del_seis
}

console.log(tablaDelSeis())

function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    if(String(numero).length === 3){
    return true
    }else{
    return false
    }
}

console.log(tieneTresDigitos(1))
console.log(tieneTresDigitos(11))
console.log(tieneTresDigitos(111))
console.log(tieneTresDigitos(1111))

function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let repeticiones = 0
    do{
        numero += 5
        repeticiones += 1
    }while(repeticiones !== 8);
    return numero
}

console.log(doWhile(1))
