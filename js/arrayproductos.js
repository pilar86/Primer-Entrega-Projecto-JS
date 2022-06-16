
function listarProductosTienda() {
    console.table(productosTienda)
} 

function agregarProducto() {
    //debugger
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingresa el precio:"))
        productosTienda.push(new Producto(id, nombre, precio))
}


function creoID() {
    return parseInt(Math.random() * 10000)
}

function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        let resultado = productosTienda.find((producto)=> producto.nombre.includes(aBuscar)) 
        if (resultado !== undefined) {
            console.table(resultado) //mostrar el resultado en pantalla
        }
}
      
function filtrarProductos() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productosTienda.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

function existeProducto() {
    let aBuscar = prompt("Ingrese el código del producto a buscar:")
    let resultado = productosTienda.some((producto)=> producto.id === parseInt(aBuscar))
        if (resultado) {
            console.log("El producto existe.")
        } else {
            console.error("No se encontró el producto.")
        }
}

function proyectarIncremento(porc) {
    
    let proyeccion = productosTienda.map((producto)=> {
            return {
                id: producto.id,
                nombre: producto.nombre,
                importe: producto.importe,
                proyeccion: (producto.importe * porc).toFixed(2)
            }
    })
    console.table(proyeccion)
}

function calcularCarrito() {
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        console.log("TOTAL DEL CARRITO:", total)
}



//FUNCION QUE SE USA PARA LLENAR AUTOMÁTICAMENTE EL ARRAY DE OBJETOS A USAR
function generadorAutomatico() {
    productosTienda.push(new Producto(01, "SOFÁ MODULAR CAMARO", 245000))
    productosTienda.push(new Producto(02, "BUTACA FUSION", 85750))
    productosTienda.push(new Producto(03, "LAMPARA WHITE", 76850))
    productosTienda.push(new Producto(04, "MESA C", 97700))
}
generadorAutomatico()

function generarCarrito() {
    carrito.push(new Producto(01, "SOFA MODULAR CAMARO", 29950))
    carrito.push(new Producto(02, "BUTACA FUSION", 85750))
    carrito.push(new Producto(03, "LAMPARA WHITE", 76850))
    carrito.push(new Producto(04, "MESA C", 97700))
}

generarCarrito()

