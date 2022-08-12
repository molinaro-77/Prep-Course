/* function crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
    function Usuario(opciones){
        this.usuario = opciones.usuario
        this.nombre = opciones.nombre
        this.email = opciones.email
        this.password = opciones.password
    }

    Usuario.prototype.saludar = function saludar(){
    return 'Hola, mi nombre es ', this.nombre
    }

    return Usuario
}


const Usuario = crearUsuario();
const user = new Usuario({usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });

console.log(user.saludar()) */
/* 
function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
    String.prototype.reverse = function(){
    let reversedString = ''
        for (let i = this.length - 1; i >= 0; i--){
            reversedString += this[i]
        }
    return reversedString
    }
}

agregarStringInvertida()
const str = 'Hello'

console.log(str.reverse()) */

var array = ['I', 'am', 'sam']

for(let i = 0; i < array.length; i++){
    if(i === 0){
        console.log(array[i] + ' ' + array[i+1] + ' ' + array[i+2])
        console.log(array[i] + ' ' + array[i+2] + ' ' + array[i+1])
    }else if(i === 1){
        console.log(array[i] + ' ' + array[i-1] + ' ' + array[i+1])
        console.log(array[i] + ' ' + array[i+1] + ' ' + array[i-1])
    }else{
        console.log(array[i] + ' ' + array[i-1] + ' ' + array[i-2])
        console.log(array[i] + ' ' + array[i-2] + ' ' + array[i-1])
    }
}