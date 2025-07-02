package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.Usuario;
import com.fr4231gm.cismanmonitor.repositories.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
	
	@Autowired
	private PasswordEncoder passwordEncoder;

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> findByIdentificador(String identificador) {
        return usuarioRepository.findByCodigoUsuario(identificador);
    }

	
	public Usuario actualizarUsuario(String id, Usuario usuarioEditado) {

		Optional<Usuario> optionalUsuario = usuarioRepository.findByCodigoUsuario(id);
		Usuario usuario = optionalUsuario.get();
		
		usuario.setApellidos(usuarioEditado.getApellidos());
		usuario.setCodigoUsuario(usuarioEditado.getContraseña());
		usuario.setCorreo(usuarioEditado.getCorreo());
		usuario.setNumeroTelefono(usuarioEditado.getNumeroTelefono());
		usuario.setTipoUsuario(usuarioEditado.getTipoUsuario());
		usuario.setNombre(usuarioEditado.getNombre());
		
		usuario.setContraseña(passwordEncoder.encode(usuarioEditado.getContraseña()));
		
		usuarioRepository.save(usuario);
		
		return usuario;
	}

	public void eliminarUsuario(String id) {
		
		Optional<Usuario> optionalUsuario = usuarioRepository.findById(Long.valueOf(id));		
		Usuario usuario = optionalUsuario.get();
				
		usuarioRepository.delete(usuario);
		
	}

	public Usuario obtenerPorId(String id) {
		
		Optional<Usuario> optionalUsuario = usuarioRepository.findById(Long.valueOf(id));		
		Usuario usuario = optionalUsuario.get();
		
		return usuario;
	}
}
