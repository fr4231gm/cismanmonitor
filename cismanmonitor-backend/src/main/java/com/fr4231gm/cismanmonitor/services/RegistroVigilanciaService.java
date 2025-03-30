package com.fr4231gm.cismanmonitor.services;

import com.fr4231gm.cismanmonitor.domain.RegistroVigilancia;
import com.fr4231gm.cismanmonitor.repositories.RegistroVigilanciaRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistroVigilanciaService {

    private final RegistroVigilanciaRepository registroVigilanciaRepository;

    public RegistroVigilanciaService(RegistroVigilanciaRepository registroVigilanciaRepository) {
        this.registroVigilanciaRepository = registroVigilanciaRepository;
    }

    public List<RegistroVigilancia> findAll() {
        return registroVigilanciaRepository.findAll();
    }

    public RegistroVigilancia save(RegistroVigilancia registroVigilancia) {
        return registroVigilanciaRepository.save(registroVigilancia);
    }
}
