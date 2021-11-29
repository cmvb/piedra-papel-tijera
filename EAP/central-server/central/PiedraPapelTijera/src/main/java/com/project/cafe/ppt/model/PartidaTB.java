package com.project.cafe.ppt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;

@Entity
@Table(name = "ppt_partida_tb")
@Data
public class PartidaTB implements Serializable {
	private static final long serialVersionUID = -5650446128348425139L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column(name = "par_id_partida", nullable = false, length = 19)
	private long idPartida;

	@NotNull
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "jug_id_jugador1")
	private JugadorTB jugador1;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "jug_id_jugador2")
	private JugadorTB jugador2;

	@NotNull
	@Column(name = "par_jugada_j1", nullable = false, length = 20)
	private String jugadaJ1;

	@Column(name = "par_jugada_j2", nullable = true, length = 20)
	private String jugadaJ2;

	@Column(name = "par_jugada_pc", nullable = true, length = 20)
	private String jugadaPC;

	@NotNull
	@Column(name = "par_tipo_juego", nullable = false, length = 20)
	private String tipoJuego;

	@NotNull
	@Column(name = "par_resultado", nullable = false, length = 100)
	private String resultado;

}
