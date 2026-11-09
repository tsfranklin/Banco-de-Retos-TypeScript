// 1. Creamos la "plantilla" o contrato
interface UsuarioAPI {
  id: number;           // Obligatorio que sea un número
  username: string;     // Obligatorio que sea texto
  email: string;        // Obligatorio que sea texto
  rol: 'admin' | 'editor' | 'alumno'; // Tipado literal: SOLO admite estas 3 palabras exactas
  token?: string;       // El símbolo "?" significa que es opcional (puede existir o no)
}

// 2. Creamos un usuario correcto que cumple las reglas
const usuarioValido: UsuarioAPI = {
  id: 1,
  username: 'juanperez',
  email: 'juan@email.com',
  rol: 'alumno' // Correcto, está en la lista
  // No ponemos 'token' y no pasa nada porque es opcional (?)
};


/*
const usuarioInvalido: UsuarioAPI = {
  id: 2,
  username: 'mariagomez',
  email: 'maria@email.com',
  rol: 'invitado' // ❌ ERROR: Type '"invitado"' is not assignable to type '"admin" | "editor" | "alumno"'
};
*/

// Reto 2: Inmutabilidad Tipada con Arrays de Objetos
// 1. Reutilizamos la interfaz Tarea 
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

// 2. Creamos nuestra lista inicial (Array estricto de Tareas)
const misTareas: Tarea[] = [
  { id: 1, titulo: 'Aprender TS', completada: false },
  { id: 2, titulo: 'Entender Angular', completada: false },
  { id: 3, titulo: 'Hacer los commits', completada: false }
];

// 3. Función que devuelve una lista NUEVA
function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
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