package com.fr4231gm.cismanmonitor.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "registro_vigilancia")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegistroVigilancia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime fechaIntrusion;
    private String urlImagen1;
    private String urlImagen2;
    private String urlImagen3;
    private String urlImagen4;
}