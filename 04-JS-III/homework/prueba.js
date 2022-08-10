function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    var enero = ''
    var marzo = ''
    var noviembre = ''
    var newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ) {
            newArray.push(array[i])
        }
    }

    if(newArray.length < 3){
        return "No se encontraron los meses pedidos"
    }else{
        return newArray
    }
}

var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];

    console.log(mesesDelAño(ok))
    console.log(mesesDelAño(wrong))