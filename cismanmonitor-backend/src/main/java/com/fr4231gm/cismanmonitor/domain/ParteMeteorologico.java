package com.fr4231gm.cismanmonitor.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "parte_meteorologico")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ParteMeteorologico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime fecha;
    private Double lluviaAcumulada;
    private Double horasDeSol;
    private Double vientoMedio;
    private Double vientoMaximo;
    private Double temperaturaMinima;
    private Double temperaturaMedia;
    private Double temperaturaMaxima;
    private Double humedadMinima;
    private Double humedadMedia;
    private Double humedadMaxima;
    private Double humedadSueloMinima;
    private Double humedadSueloMedia;
    private Double humedadSueloMaxima;
}