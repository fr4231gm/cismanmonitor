package com.fr4231gm.cismanmonitor.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "registro_sensores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellidos;
    @Column(unique = true, nullable = false)
    private String codigoUsuario;
    @Column(nullable = false)
    private String contraseña;
    @Column(unique = true, nullable = false)
    private String correo;
    private String numeroTelefono;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoUsuario tipoUsuario;

    // Getters y Setters
}
