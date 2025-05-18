package com.fr4231gm.cismanmonitor.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "sensor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String rangoValores;
    private String tipoValor;
    private String unidadMedida;
    private String propiedades;

    @Enumerated(EnumType.STRING)
    private TipoSensor tipoSensor;
}