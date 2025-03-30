package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.RegistroSensor;
import com.fr4231gm.cismanmonitor.repositories.RegistroSensorRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistroSensorService {

    private final RegistroSensorRepository registroSensorRepository;

    public RegistroSensorService(RegistroSensorRepository registroSensorRepository) {
        this.registroSensorRepository = registroSensorRepository;
    }

    public List<RegistroSensor> findAll() {
        return registroSensorRepository.findAll();
    }

    public RegistroSensor save(RegistroSensor registroSensor) {
        return registroSensorRepository.save(registroSensor);
    }
}
