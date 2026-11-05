// 2. Creamos un usuario correcto que cumple las reglas
const usuarioValido = {
    id: 1,
    username: 'juanperez',
    email: 'juan@email.com',
    rol: 'alumno' // Correcto, está en la lista
    // No ponemos 'token' y no pasa nada porque es opcional (?)
};
export {};
// 3. Probamos el error (Descomenta esto en tu editor para ver cómo TS se queja)
/*
const usuarioInvalido: UsuarioAPI = {
  id: 2,
  username: 'mariagomez',
  email: 'maria@email.com',
  rol: 'invitado' // ❌ ERROR: Type '"invitado"' is not assignable to type '"admin" | "editor" | "alumno"'
};
*/ 
//# sourceMappingURL=app.js.map