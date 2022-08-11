/* var object = {
    x: 0,
    incrementX: function() {
        object.x++;
    },
}

function invocarMetodo (objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
    objeto[metodo]()
    console.log(objeto[metodo])
    console.log(objeto.incrementX)
    console.log(objeto['x'])
}

invocarMetodo(object, 'incrementX');

object['incrementX']()
console.log(object['incrementX'])
console.log(object['x'])
console.log(object.incrementX)
object['incrementX']
console.log(object['x'])
 */

/* const user = {
    amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
};
const newFriend = 'Shay';


function agregarAmigo (usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:
    usuario.amigos.push(nuevoAmigo)
    return usuario
}

agregarAmigo(user, newFriend)

console.log(user) */


/* const user = {
    usernombre: 'Jhon Doe',
    password: 'JavaScript es genial!',
    posts: [
      {
        id: '1',
        title: 'Aventuras en JS!',
        likes: 10
      },
      {
        id: '2',
        title: 'Soy Henry!',
        likes: 100
      },
      {
        id: '3',
        title: 'Qué es un JavaScript?',
        likes: 35
      },
      {
        id: '4',
        title: 'JS Objects for Dummies',
        likes: 42
      },
      {
        id: '5',
        title: 'Educación online',
        likes: 99
      },
    ],
  };

function sumarLikesDeUsuario (usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    var sumaTotal = 0
    for (let i = 0; i < usuario.posts.length; i++) {
      console.log('usuario.posts[i].likes', usuario.posts[i].likes)
      sumaTotal += usuario.posts[i].likes
      console.log('sumaTotal', sumaTotal)
    }
    return sumaTotal
}

sumarLikesDeUsuario(user) */

const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
};
const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
};

function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    producto.calcularPrecioDescuento = function () {
      this.precioConDescuento = this.precio - (this.precio * this.porcentajeDeDescuento)
    return this.precioConDescuento
    }
    return producto
}

agregarMetodoCalculoDescuento(storeItem)
agregarMetodoCalculoDescuento(storeItem2)

console.log(storeItem.calcularPrecioDescuento())
console.log(storeItem2.calcularPrecioDescuento())
