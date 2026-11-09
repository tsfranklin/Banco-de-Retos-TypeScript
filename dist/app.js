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
//Reto 3: La Clase Componente y la Encapsulación
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
// 2. Función inteligente que procesa la respuesta
function procesarRespuesta(res) {
    // Si el servidor nos dice que todo fue bien...
    if (res.status === 'success') {
        // Tenemos que comprobar que 'data' exista realmente antes de recorrerlo
        if (res.data) {
            res.data.forEach(item => {
                console.log("Dato recibido:", item);
            });
        }
    }
    // Si el servidor nos dice que hubo un error...
    else if (res.status === 'error') {
        console.error("Hubo un fallo:", res.mensajeError);
    }
}
// Probamos que funciona:
const respuestaBuena = { status: 'success', data: ['Manzana', 'Pera'] };
procesarRespuesta(respuestaBuena);
const respuestaMala = { status: 'error', mensajeError: 'No hay conexión' };
procesarRespuesta(respuestaMala);
// Reto 5: Clases Heredadas y el uso de super()
// 1. La clase Madre (Base)
class ServicioDatos {
    endpoint;
    // Tiene una propiedad pública para guardar la URL (endpoint)
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    // Tiene un método que cualquier clase hija heredará automáticamente
    conectar() {
        console.log("Conectando a " + this.endpoint);
    }
}
// 2. La clase Hija
// Usamos "extends" para decirle que herede todo de "ServicioDatos"
class ServicioUsuarios extends ServicioDatos {
    entidad;
    constructor(endpointPropio) {
        // Obligatorio: "super()" llama al constructor de la clase madre y le pasa el endpoint.
        // Si no pones super(), TypeScript te da un error.
        super(endpointPropio);
        // Una vez la madre está lista, inicializamos las cosas exclusivas de la hija
        this.entidad = 'usuarios';
    }
}
// Comprobación:
const servicio = new ServicioUsuarios('https://mi-api.com/api/v1');
// ¡Magia! La clase hija puede usar el método conectar() porque lo heredó de su madre
servicio.conectar();
console.log("Gestionando la entidad:", servicio.entidad);
export {};
//# sourceMappingURL=app.js.map