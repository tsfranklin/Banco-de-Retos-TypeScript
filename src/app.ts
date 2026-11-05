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

// 3. Probamos el error (Descomenta esto en tu editor para ver cómo TS se queja)
/*
const usuarioInvalido: UsuarioAPI = {
  id: 2,
  username: 'mariagomez',
  email: 'maria@email.com',
  rol: 'invitado' // ❌ ERROR: Type '"invitado"' is not assignable to type '"admin" | "editor" | "alumno"'
};
*/