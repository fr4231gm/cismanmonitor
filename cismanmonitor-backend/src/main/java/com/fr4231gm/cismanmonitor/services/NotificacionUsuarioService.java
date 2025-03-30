package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.NotificacionUsuario;
import com.fr4231gm.cismanmonitor.repositories.NotificacionUsuarioRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificacionUsuarioService {

    private final NotificacionUsuarioRepository notificacionUsuarioRepository;

    public NotificacionUsuarioService(NotificacionUsuarioRepository notificacionUsuarioRepository) {
        this.notificacionUsuarioRepository = notificacionUsuarioRepository;
    }

    public List<NotificacionUsuario> findAll() {
        return notificacionUsuarioRepository.findAll();
    }

    public NotificacionUsuario save(NotificacionUsuario notificacionUsuario) {
        return notificacionUsuarioRepository.save(notificacionUsuario);
    }
}
