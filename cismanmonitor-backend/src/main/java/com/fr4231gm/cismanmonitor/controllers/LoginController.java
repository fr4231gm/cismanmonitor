package com.fr4231gm.cismanmonitor.controllers;

import java.util.Optional;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.fr4231gm.cismanmonitor.domain.TipoUsuario;
import com.fr4231gm.cismanmonitor.domain.Usuario;
import com.fr4231gm.cismanmonitor.dto.LoginRequest;
import com.fr4231gm.cismanmonitor.dto.RegisterRequest;
import com.fr4231gm.cismanmonitor.security.JwtUtil;
import com.fr4231gm.cismanmonitor.services.UsuarioService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Ajusta si cambias el frontend de dominio
public class LoginController {

	private static final Logger logger = LogManager.getLogger(LoginController.class);

	@Autowired
	private UsuarioService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private JwtUtil jwtUtil;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest request) {
		logger.info("Intento de login para: " + request.getIdentificador());

		try {
			Optional<Usuario> optionalUsuario = userService.findByIdentificador(request.getIdentificador());

			if (optionalUsuario.isEmpty()) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no encontrado");
			}

			Usuario usuario = optionalUsuario.get();

			// Comparar la contraseña ingresada con la cifrada
			if (!passwordEncoder.matches(request.getPassword(), usuario.getContraseña())) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
			}
			
			if (usuario.getTipoUsuario().equals(TipoUsuario.comun_pendiente)) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
						.body("Su usuario aún no ha sido autorizado");
			}
			
			if (usuario.getTipoUsuario().equals(TipoUsuario.comun_baneado)) {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
						.body("Su usuario tiene prohibido el acceso al sistema");
			}

			String token = jwtUtil.generateToken(usuario.getCodigoUsuario(), usuario.getTipoUsuario().toString());

			return ResponseEntity.ok(Map.of("token", token));
		} catch (Exception e) {
			logger.error("Error en login", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error en el proceso de login, inténtelo más tarde");
		}
	}

	@PostMapping("/resetPassword")
	public String resetPassword(@RequestBody RegisterRequest request) {
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
		} catch (Exception e) {
			return "Error en el proceso de registro, inténtelo más tarde";
		}

		return "Registro recibido correctamente.";
	}
}
