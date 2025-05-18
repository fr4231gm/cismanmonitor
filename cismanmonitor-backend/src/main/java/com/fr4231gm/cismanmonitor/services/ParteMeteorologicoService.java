package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.ParteMeteorologico;
import com.fr4231gm.cismanmonitor.repositories.ParteMeteorologicoRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParteMeteorologicoService {

    private final ParteMeteorologicoRepository parteMeteorologicoRepository;

    public ParteMeteorologicoService(ParteMeteorologicoRepository parteMeteorologicoRepository) {
        this.parteMeteorologicoRepository = parteMeteorologicoRepository;
    }

    public List<ParteMeteorologico> findAll() {
        return parteMeteorologicoRepository.findAll();
    }

    public ParteMeteorologico save(ParteMeteorologico parteMeteorologico) {
        return parteMeteorologicoRepository.save(parteMeteorologico);
    }
}
