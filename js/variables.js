const IVA = 1.21
const productosTienda = []
const carrito = []

const miCompra = [
    { nombre: "SOFÁ MODULAR CAMARO", precio: 245000},
    { nombre: "BUTACA FUSION", precio: 85750},
    { nombre: "LAMPARA WHITE", precio: 76850},
    { nombre: "MESA C", precio: 97700},  
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total)




