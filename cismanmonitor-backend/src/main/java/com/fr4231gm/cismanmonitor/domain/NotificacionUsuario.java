package com.fr4231gm.cismanmonitor.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "notificaciones_usuario")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class NotificacionUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String medio;
    private String tipo;
    private String parametros;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;
}