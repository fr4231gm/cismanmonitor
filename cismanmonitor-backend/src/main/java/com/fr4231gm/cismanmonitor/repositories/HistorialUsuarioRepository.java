package com.fr4231gm.cismanmonitor.repositories;


import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.fr4231gm.cismanmonitor.domain.HistorialUsuario;

@Repository
public interface HistorialUsuarioRepository extends JpaRepository<HistorialUsuario, Long> {
    List<HistorialUsuario> findByUsuarioId(Long usuarioId);
}