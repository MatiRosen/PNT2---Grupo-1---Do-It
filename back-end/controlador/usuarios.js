import Servicio from "../servicio/usuarios.js";

class Controlador {
    constructor() {
        this.servicio = new Servicio();
    }

    // Eliminar
    obtenerUsuarios = async (req, res) => {
        try {
            const { email } = req.params;
            const usuarios = await this.servicio.obtenerUsuarios(email);

            res.json(usuarios);
        } catch (error) {
            console.log(
                "Error al obtener usuarios en el controlador: ",
                error.message
            );
        }
    };

    guardarUsuario = async (req, res) => {
        try {
            const usuario = req.body;
            // Agregar validacion de email unico
            const usuarioGuardado = await this.servicio.guardarUsuario(usuario);

            
            res.json(usuarioGuardado);
        } catch {
            console.log(
                "Error al guardar usuario en el controlador: ",
                error.message
            );
        }
    };

    logUsuario = async (req, res) => {
        try {
            const usuario = req.body;
            const usuarioLogueado = await this.servicio.logUsuario(usuario);

            if (usuarioLogueado != null) {
                res.status(200).json({ nombre: usuarioLogueado.nombre, email:usuarioLogueado.email, tipo: usuarioLogueado.tipo, dinero: usuarioLogueado.dinero });
            } else {
                res.status(401).json({ error: "Credenciales inválidas" });
            }
        } catch (error) {
            console.error(
                "Error al loguear usuario en el controlador:",
                error.message
            );
            res.status(500).json({ error: "Error interno del servidor" });
        }
    };

    actualizarUsuario = async (req, res) => {
        try {
            const { email } = req.params;
            console.log(req.params);
            const usuario = req.body;
            const usuarioActualizado = await this.servicio.actualizarUsuario(
                email,
                usuario
            );

            if (usuarioActualizado != null) {
                res.status(200).json({ dinero: usuarioActualizado.dinero });
            } else {
                res.status(404).json({ error: "Usuario no encontrado" });
            }
        } catch (error) {
            console.log(
                "Error al actualizar usuario en el controlador: ",
                error.message
            );
            res.status(500).json({ error: "Error interno del servidor" });
        }
    };

    eliminarUsuario = async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioBorrado = await this.servicio.eliminarUsuario(id);

            res.json(usuarioBorrado);
        } catch (error) {
            console.log(
                "Error al eliminar usuario en el controlador: ",
                error.message
            );
        }
    };
}

export default Controlador;
