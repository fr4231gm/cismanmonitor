package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.HistorialUsuario;
import com.fr4231gm.cismanmonitor.repositories.HistorialUsuarioRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistorialUsuarioService {

    private final HistorialUsuarioRepository historialUsuarioRepository;

    public HistorialUsuarioService(HistorialUsuarioRepository historialUsuarioRepository) {
        this.historialUsuarioRepository = historialUsuarioRepository;
    }

    public List<HistorialUsuario> findAll() {
        return historialUsuarioRepository.findAll();
    }

    public HistorialUsuario save(HistorialUsuario historialUsuario) {
        return historialUsuarioRepository.save(historialUsuario);
    }
}
