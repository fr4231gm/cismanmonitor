package com.fr4231gm.cismanmonitor.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fr4231gm.cismanmonitor.domain.RegistroSensor;

@Repository
public interface RegistroSensorRepository extends JpaRepository<RegistroSensor, Long> {
	
    List<RegistroSensor> findBySensorId(Long sensorId);
    
}


