package com.project.cafe.ppt.service;

import java.util.LinkedList;

import com.project.cafe.ppt.model.JugadorTB;

public interface IJugadoresService {

	/**
	 * M�todo para contar los jugadores en BD
	 * 
	 * @return Cantidad de Jugadores
	 */
	public Long contarJugadores();

	/**
	 * M�todo para consultar todos los jugadores de la BD
	 * 
	 * @return Lista de Jugadores
	 */
	public LinkedList<JugadorTB> consultarJugadores();

	/**
	 * M�todo para consultar jugadores de la BD con filtros
	 * 
	 * @param jugadorFiltro
	 * @return Lista de Jugadores
	 */
	public LinkedList<JugadorTB> consultarJugadoresFiltros(JugadorTB jugadorFiltro);

	/**
	 * M�todo para crear un jugador en BD
	 * 
	 * @param jugadorCrear
	 * @return Jugador Creado
	 */
	public JugadorTB crearJugador(JugadorTB jugadorCrear);

	/**
	 * M�todo para modificar un jugador en BD
	 * 
	 * @param jugadorModificar
	 * @return Jugador Modificado
	 */
	public JugadorTB modificarJugador(JugadorTB jugadorModificar);

	/**
	 * M�todo para eliminar un jugador en BD
	 * 
	 * @param idJugador
	 * @return true/false que define si se elimin� el registro
	 */
	boolean eliminarJugador(long idJugador);

}
