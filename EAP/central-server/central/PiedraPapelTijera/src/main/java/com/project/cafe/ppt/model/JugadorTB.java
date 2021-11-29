package com.project.cafe.ppt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.Getter;

@Entity
@Table(name = "ppt_jugador_tb")
@Data
@Getter
public class JugadorTB implements Serializable {
	private static final long serialVersionUID = -6224901459586127163L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column(name = "jug_id_jugador", nullable = false, length = 19)
	private long idJugador;

	@NotNull
	@Column(name = "jug_nombre", nullable = false, length = 50)
	private String nombre;

	@NotNull
	@Column(name = "jug_juegos_ganados", nullable = false, length = 19)
	private long juegosGanados;

	@NotNull
	@Column(name = "jug_juegos_empatados", nullable = false, length = 19)
	private long juegosEmpatados;

	@NotNull
	@Column(name = "jug_juegos_perdidos", nullable = false, length = 19)
	private long juegosPerdidos;

	@NotNull
	@Column(name = "jug_puntaje", nullable = false, length = 19)
	private long puntaje;

}
