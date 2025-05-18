package com.fr4231gm.cismanmonitor.repositories;


import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.fr4231gm.cismanmonitor.domain.NotificacionUsuario;

@Repository
public interface NotificacionUsuarioRepository extends JpaRepository<NotificacionUsuario, Long> {
    List<NotificacionUsuario> findByUsuarioId(Long usuarioId);
}