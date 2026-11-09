// 2. Creamos un usuario correcto que cumple las reglas
const usuarioValido = {
    id: 1,
    username: 'juanperez',
    email: 'juan@email.com',
    rol: 'alumno' // Correcto, está en la lista
    // No ponemos 'token' y no pasa nada porque es opcional (?)
};
// 2. Creamos nuestra lista inicial (Array estricto de Tareas)
const misTareas = [
    { id: 1, titulo: 'Aprender TS', completada: false },
    { id: 2, titulo: 'Entender Angular', completada: false },
    { id: 3, titulo: 'Hacer los commits', completada: false }
];
// 3. Función que devuelve una lista NUEVA
function completarTarea(lista, idBuscar) {
    // .map() es una fotocopiadora. Recorre la lista y saca una copia de cada elemento
    return lista.map(tarea => {
        // Si la tarea actual es la que estamos buscando...
        if (tarea.id === idBuscar) {
            // Creamos un clon exacto de esta tarea (...tarea) pero cambiamos 'completada' a true
            return { ...tarea, completada: true };
        }
        // Si no es la que buscamos, la devolvemos tal cual estaba
        return tarea;
    });
}
// Comprobación:
const nuevasTareas = completarTarea(misTareas, 2);
console.log('Original (intacta):', misTareas[1]?.completada); // false
console.log('Nueva lista:', nuevasTareas[1]?.completada); // true
//Reto 3:
class ProductComponent {
    nombreProducto;
    precioBase;
    // 1. Propiedad privada normal (nadie desde fuera puede verla ni tocarla)
    iva = 0.21;
    // 2. El ATAJO del constructor: 
    // Al poner 'public' y 'private' aquí dentro de los paréntesis, TypeScript 
    // crea las variables y les asigna el valor todo de un solo golpe.
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    // 3. Método público (una función que sí podemos usar desde fuera)
    obtenerPrecioFinal() {
        // Para usar el IVA o el precioBase de esta misma clase, usamos la palabra "this" (esto)
        const calculoIva = this.precioBase * this.iva;
        return this.precioBase + calculoIva;
    }
}
// 4. Fabricamos el objeto usando el plano (la clase)
const miProducto = new ProductComponent('Zapatillas', 100);
// Comprobaciones:
console.log(miProducto.nombreProducto); // Perfecto, es public (Zapatillas)
console.log(miProducto.obtenerPrecioFinal()); // Perfecto, es public (121)
export {};
// miProducto.precioBase = 50; 
// ❌ ERROR: Si descomentas la línea anterior, TS te dirá que "precioBase" es privado.
//# sourceMappingURL=app.js.map