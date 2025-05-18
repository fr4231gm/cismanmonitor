package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.Sensor;
import com.fr4231gm.cismanmonitor.repositories.SensorRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {

    private final SensorRepository sensorRepository;

    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public List<Sensor> findAll() {
        return sensorRepository.findAll();
    }

    public Sensor save(Sensor sensor) {
        return sensorRepository.save(sensor);
    }
}
