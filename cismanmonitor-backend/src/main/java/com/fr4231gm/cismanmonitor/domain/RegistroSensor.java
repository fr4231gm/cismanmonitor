package com.fr4231gm.cismanmonitor.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "registro_sensores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegistroSensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double valorRegistrado;
    private LocalDateTime fecha;
    private String detectadaIncidencia;

    @ManyToOne
    @JoinColumn(name = "sensor_id", nullable = false)
    private Sensor sensor;
}