package com.fr4231gm.cismanmonitor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fr4231gm.cismanmonitor.domain.TipoUsuario;
import com.fr4231gm.cismanmonitor.domain.Usuario;
import com.fr4231gm.cismanmonitor.dto.RegisterRequest;
import com.fr4231gm.cismanmonitor.services.UsuarioService;

@RestController
@RequestMapping("/api")
public class RegisterController {
	
	@Autowired
	UsuarioService userService;

    @PostMapping("/registro")
    public String registrarUsuario(@RequestBody RegisterRequest request) {
        // Aquí podrías guardar en base de datos, validar, enviar email, etc.
        System.out.println("Nuevo registro:");
        System.out.println("Nombre: " + request.getNombre());
        System.out.println("Apellidos: " + request.getApellidos());
        System.out.println("Identificador: " + request.getIdentificador());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Teléfono: " + request.getTelefono());
        System.out.println("Contraseña: " + request.getContraseña());

        try {
        	Usuario newUser = new Usuario();
        	newUser.setNombre(request.getNombre());
        	newUser.setCodigoUsuario(request.getIdentificador());
        	newUser.setApellidos(request.getApellidos());
        	newUser.setCorreo(request.getEmail());
        	newUser.setNumeroTelefono(request.getTelefono());
        	newUser.setContraseña(request.getContraseña());
        	newUser.setTipoUsuario(TipoUsuario.comun_pendiente);
        	
        	this.userService.save(newUser);        	
        }catch (Exception e) {
        	return "Error en el proceso de registro, inténtelo más tarde";
        }
        
        return "Registro recibido correctamente.";
    }
}

