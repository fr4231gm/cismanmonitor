package com.fr4231gm.cismanmonitor.repositories;


import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.fr4231gm.cismanmonitor.domain.TipoSensor;

@Repository
public interface TipoSensorRepository extends JpaRepository<TipoSensor, Long> {
}