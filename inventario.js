// En la clase "Producto" que implementa la interfaz "IProducto" para encapsular 
//la información de cada producto de la papelería.
var Producto = /** @class */ (function () {
    function Producto(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    // Ayuda a incrementar el stock del producto
    Producto.prototype.incrementarCantidad = function (cantidad) {
        if (cantidad <= 0) {
            throw new Error("El stock no puede estar vacio");
        }
        this.cantidad += cantidad;
    };
    /// Permite decrementar el stock del producto si hay suficiente cantidad
    Producto.prototype.decrementarCantidad = function (cantidad) {
        if (cantidad <= 0) {
            throw new Error("El stock no puede estar vacio");
        }
        if (cantidad > this.cantidad) {
            throw new Error("No hay suficiente stock");
        }
        this.cantidad -= cantidad;
    };
    // Muestra la información del producto
    Producto.prototype.obtenerInfo = function () {
        console.log("- ".concat(this.nombre, ": ").concat(this.cantidad, " unidades  $").concat(this.precio));
    };
    return Producto;
}());
// Guarda los  productos
// consulta, venta y gestion de productos.
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.productos = [];
    }
    // Agrega un producto al inventario 
    Inventario.prototype.agregarProducto = function (producto) {
        var existente = false;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.nombre === producto.nombre) {
                p.incrementarCantidad(producto.cantidad);
                existente = true;
                break;
            }
        }
        if (!existente) {
            this.productos.push(producto);
        }
    };
    // Realiza una venta de un producto 
    Inventario.prototype.venderProducto = function (nombre, cantidad) {
        var productoEncontrado = null;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.nombre === nombre) {
                productoEncontrado = p;
                break;
            }
        }
        if (!productoEncontrado) {
            throw new Error("Producto no encontrado");
        }
        productoEncontrado.decrementarCantidad(cantidad);
        console.log("Venta");
        console.log("Cantidad: ".concat(cantidad, " unidades  ").concat(nombre));
    };
    // Consulta la información 
    Inventario.prototype.consultarInventario = function () {
        if (this.productos.length === 0) {
            console.log("Inventario vasio ");
        }
        else {
            console.log("Inventario actual:");
            this.productos.forEach(function (producto) { return producto.obtenerInfo(); });
        }
    };
    return Inventario;
}());
// Función para operar en el inventario 
function operarInventario(productos) {
    productos.forEach(function (producto) { return producto.obtenerInfo(); });
}
// Productos
var inventario = new Inventario();
var cuaderno = new Producto("Cuaderno", 50, 25);
var pluma = new Producto("Pluma", 100, 5);
var resaltador = new Producto("Resaltador", 30, 15);
inventario.agregarProducto(cuaderno);
inventario.agregarProducto(pluma);
inventario.agregarProducto(resaltador);
console.log("**Inventario inicial**");
inventario.consultarInventario();
console.log("** V E N T A **");
inventario.venderProducto("Pluma", 10);
inventario.venderProducto("Cuaderno", 5);
console.log("** Consulta despues de la venta **");
inventario.consultarInventario();
console.log("** Inventario con incremeneto **");
inventario.agregarProducto(new Producto("Resaltador", 20, 15));
console.log("** Inventario final**");
inventario.consultarInventario();
console.log("** Resumen de los productos");
operarInventario([cuaderno, pluma, resaltador]);
