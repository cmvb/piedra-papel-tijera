package com.project.cafe.ppt.util;

import java.util.LinkedList;

import org.apache.commons.lang3.StringUtils;

import com.project.cafe.ppt.model.JugadorTB;
import com.project.cafe.ppt.model.PartidaTB;

public abstract class Util {

	/**
	 * Método que valida la cantidad de caracteres permitidos
	 * 
	 * @param cadenaValidar
	 * @param cantidadChar
	 * @return true/false que identifica si cumple o no con la condición
	 */
	public static boolean tieneCantidadCharPermitida(String cadenaValidar, int cantidadChar) {
		boolean result = false;
		if (!StringUtils.isBlank(cadenaValidar)) {
			result = cadenaValidar.length() <= cantidadChar;
		}
		return result;
	}

	/**
	 * Método que realiza validaciones de un objeto entidad, se castea de acuerdo al
	 * nombre de la tabla que hace referencia
	 * 
	 * @param tabla
	 * @param entidadTB
	 * @return Lista de validaciones
	 */
	public static LinkedList<String> validaDatos(String tabla, Object entidadTB) {
		LinkedList<String> errores = new LinkedList<>();
		if (!StringUtils.isBlank(tabla)) {
			switch (tabla) {
			case ConstantesTablasNombre.PPT_JUGADOR_TB:
				errores = validarJugador((JugadorTB) entidadTB);
				break;
			case ConstantesTablasNombre.PPT_PARTIDA_TB:
				errores = validarPartida((PartidaTB) entidadTB);
				break;
			}
		} else {
			errores.add(ConstantesValidaciones.TABLA_NO_ESTABLECIDA_VALIDACIONES);
		}
		return errores;
	}

	/**
	 * Método que realiza validaciones para creación del objeto Jugador
	 * 
	 * @param jugadorTB
	 * @return Lista de validaciones
	 */
	public static LinkedList<String> validarJugador(JugadorTB jugadorTB) {
		LinkedList<String> errores = new LinkedList<>();
		if (StringUtils.isBlank(jugadorTB.getNombre())) {
			errores.add(ConstantesValidaciones.NOMBRE + ConstantesValidaciones.VALOR_VACIO);
		}
		return errores;
	}

	/**
	 * Método que realiza validaciones para creación del objeto Partida
	 * 
	 * @param jugadorTB
	 * @return Lista de validaciones
	 */
	public static LinkedList<String> validarPartida(PartidaTB jugadorTB) {
		LinkedList<String> errores = new LinkedList<>();

		// Jugador 1
		if (jugadorTB.getJugador1() != null && jugadorTB.getJugador1().getIdJugador() > 0) {
			if (StringUtils.isBlank(jugadorTB.getJugadaJ1())) {
				errores.add(ConstantesValidaciones.JUGADA + jugadorTB.getJugador1().getNombre()
						+ ConstantesValidaciones.VALOR_VACIO);
			}
		} else {
			errores.add(ConstantesValidaciones.JUGADOR_1 + ConstantesValidaciones.VALOR_VACIO);
		}

		// Tipo Juego
		if (StringUtils.isBlank(jugadorTB.getTipoJuego())) {
			errores.add(ConstantesValidaciones.TIPO_JUEGO + ConstantesValidaciones.VALOR_VACIO);
		} else {
			if (jugadorTB.getTipoJuego().equalsIgnoreCase(ConstantesValidaciones.TIPO_JUEGO_VS)) {
				// Ordenador
				if (StringUtils.isBlank(jugadorTB.getJugadaPC())) {
					errores.add(ConstantesValidaciones.JUGADA + ConstantesValidaciones.ORDENADOR
							+ ConstantesValidaciones.VALOR_VACIO);
				}
			} else if (jugadorTB.getTipoJuego().equalsIgnoreCase(ConstantesValidaciones.TIPO_JUEGO_MULTIPLAYER)) {
				// Jugador 2
				if (jugadorTB.getJugador2() != null && jugadorTB.getJugador2().getIdJugador() > 0) {
					if (StringUtils.isBlank(jugadorTB.getJugadaJ1())) {
						errores.add(ConstantesValidaciones.JUGADA + jugadorTB.getJugador2().getNombre()
								+ ConstantesValidaciones.VALOR_VACIO);
					}
				} else {
					errores.add(ConstantesValidaciones.JUGADOR_2 + ConstantesValidaciones.VALOR_VACIO);
				}
			} else {
				errores.add(ConstantesValidaciones.TIPO_JUEGO + ConstantesValidaciones.VALOR_INCORRECTO);
			}
		}

		// Resultado
		if (StringUtils.isBlank(jugadorTB.getResultado())) {
			errores.add(ConstantesValidaciones.RESULTADO + ConstantesValidaciones.VALOR_VACIO);
		}

		return errores;
	}

}