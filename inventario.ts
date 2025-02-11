interface IProducto { // Se va a definir las operaciones básicas de un producto
    incrementarCantidad(cantidad: number): void;
    decrementarCantidad(cantidad: number): void;
    obtenerInfo(): void;
  }
  
  // En la clase "Producto" que implementa la interfaz "IProducto" para encapsular 
  //la información de cada producto de la papelería.
  class Producto implements IProducto {
    constructor(
      public nombre: string,
      public cantidad: number,
      public precio: number
    ) {}
  
 // Ayuda a incrementar el stock del producto
    incrementarCantidad(cantidad: number): void {
      if (cantidad <= 0) {
        throw new Error("El stock no puede estar vacio");
      }
      this.cantidad += cantidad;
    }
  
    /// Permite decrementar el stock del producto si hay suficiente cantidad
    decrementarCantidad(cantidad: number): void {
      if (cantidad <= 0) {
        throw new Error("El stock no puede estar vacio");
      }
      if (cantidad > this.cantidad) {
        throw new Error("No hay suficiente stock");
      }
      this.cantidad -= cantidad;
    }
  
    // Muestra la información del producto
    obtenerInfo(): void {
      console.log(
        `- ${this.nombre}: ${this.cantidad} unidades  $${this.precio}`
      );
    }
  }
  
  // Guarda los  productos
  // consulta, venta y gestion de productos.
  class Inventario {
    private productos: Producto[] = [];
  
    // Agrega un producto al inventario 
    agregarProducto(producto: Producto): void {
      let existente = false;
  
      for (const p of this.productos) {
        if (p.nombre === producto.nombre) {
          p.incrementarCantidad(producto.cantidad);
          existente = true;
          break;
        }
      }
  
      if (!existente) {
        this.productos.push(producto);
      }
    }
  
    // Realiza una venta de un producto 
    venderProducto(nombre: string, cantidad: number): void {
      let productoEncontrado: Producto | null = null;
  
      for (const p of this.productos) {
        if (p.nombre === nombre) {
          productoEncontrado = p;
          break;
        }
      }
  
      if (!productoEncontrado) {
        throw new Error("Producto no encontrado");
      }
  
      productoEncontrado.decrementarCantidad(cantidad);
      console.log("Venta")
      console.log(`Cantidad: ${cantidad} unidades  ${nombre}`);
    }
  
    // Consulta la información 
    consultarInventario(): void {
      if (this.productos.length === 0) {
        console.log("Inventario vasio ");
      } else {
        console.log("Inventario actual:");
        this.productos.forEach((producto) => producto.obtenerInfo());
      }
    }
  }
  
  // Función para operar en el inventario 
  function operarInventario(productos: Producto[]): void {
    productos.forEach((producto) => producto.obtenerInfo());
  }
  
  // Productos
  const inventario = new Inventario();
  
  const cuaderno = new Producto("Cuaderno", 50, 25);
  const pluma = new Producto("Pluma", 100, 5);
  const resaltador = new Producto("Resaltador", 30, 15);
  
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
  