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
export {};
//# sourceMappingURL=app.js.map