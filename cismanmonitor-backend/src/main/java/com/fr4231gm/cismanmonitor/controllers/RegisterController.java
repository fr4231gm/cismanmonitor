package com.fr4231gm.cismanmonitor.controllers;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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
	
	 private static final Logger logger = LogManager.getLogger(LoginController.class);
	
	@Autowired
	UsuarioService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

    @PostMapping("/registro")
    public String registrarUsuario(@RequestBody RegisterRequest request) {
        // Aquí podrías guardar en base de datos, validar, enviar email, etc.
        logger.info("Nuevo registro:");
        logger.info("Nombre: " + request.getNombre());
        logger.info("Apellidos: " + request.getApellidos());
        logger.info("Identificador: " + request.getIdentificador());
        logger.info("Email: " + request.getEmail());
        logger.info("Teléfono: " + request.getTelefono());
        
        try {
        	Usuario newUser = new Usuario();
        	newUser.setNombre(request.getNombre());
        	newUser.setCodigoUsuario(request.getIdentificador());
        	newUser.setApellidos(request.getApellidos());
        	newUser.setCorreo(request.getEmail());
        	newUser.setNumeroTelefono(request.getTelefono());
        
        	String codificada = passwordEncoder.encode(request.getContraseña());
        	
        	newUser.setContraseña(codificada);
        	newUser.setTipoUsuario(TipoUsuario.comun_pendiente);
        	
        	this.userService.save(newUser);        	
        }catch (Exception e) {
        	return "Error en el proceso de registro, inténtelo más tarde";
        }
        
        return "Registro recibido correctamente.";
    }
}

