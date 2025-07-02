package com.fr4231gm.cismanmonitor.controllers;

import com.fr4231gm.cismanmonitor.domain.Usuario;
import com.fr4231gm.cismanmonitor.domain.TipoUsuario;
import com.fr4231gm.cismanmonitor.services.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/usuarios")
public class UsuarioAdminController {

    private final UsuarioService usuarioService;

    public UsuarioAdminController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    // Obtener todos los usuarios
    @GetMapping
    public List<Usuario> obtenerTodos() {
        return usuarioService.findAll();
    }

    // Editar un usuario por ID
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarUsuario(@PathVariable String id, @RequestBody Usuario usuarioEditado) {
        Usuario actualizado = usuarioService.actualizarUsuario(id, usuarioEditado);
        return ResponseEntity.ok(actualizado);
    }

    // Eliminar usuario por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarUsuario(@PathVariable String id) {
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.ok().build();
    }

    // Cambiar el tipo de usuario (por ejemplo, otorgar acceso o revocar)
    @PatchMapping("/{id}/acceso")
    public ResponseEntity<?> cambiarAcceso(@PathVariable String id) {
        Usuario usuario = usuarioService.obtenerPorId(id);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }

        TipoUsuario nuevoTipo;
        switch (usuario.getTipoUsuario()) {
            case comun_pendiente -> nuevoTipo = TipoUsuario.comun_autorizado;
            case comun_autorizado -> nuevoTipo = TipoUsuario.comun_baneado;
            default -> nuevoTipo = TipoUsuario.comun_autorizado;
        }

        usuario.setTipoUsuario(nuevoTipo);
        usuarioService.actualizarUsuario(id, usuario);
        return ResponseEntity.ok(usuario);
    }
}
