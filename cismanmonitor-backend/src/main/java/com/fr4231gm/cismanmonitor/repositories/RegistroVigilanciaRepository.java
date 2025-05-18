package com.fr4231gm.cismanmonitor.repositories;


import java.util.List;




import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.fr4231gm.cismanmonitor.domain.RegistroVigilancia;

@Repository
public interface RegistroVigilanciaRepository extends JpaRepository<RegistroVigilancia, Long> {
    List<RegistroVigilancia> findByUsuarioId(Long usuarioId);
}