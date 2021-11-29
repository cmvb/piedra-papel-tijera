package com.project.cafe.ppt.dao;

import java.util.LinkedList;

import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.project.cafe.ppt.model.JugadorTB;

@EnableTransactionManagement
public interface IJugadoresDao {

	/**
	 * M�todo para contar los jugadores en BD
	 * 
	 * @return Cantidad de Jugadores
	 */
	Long contarJugadores();

	/**
	 * M�todo para consultar todos los jugadores de la BD
	 * 
	 * @return Lista de Jugadores
	 */
	LinkedList<JugadorTB> consultarJugadores();

	/**
	 * M�todo para consultar jugadores de la BD con filtros
	 * 
	 * @param jugadorFiltro
	 * @return Lista de Jugadores
	 */
	LinkedList<JugadorTB> consultarJugadoresFiltros(JugadorTB jugadorFiltro);

	/**
	 * M�todo para crear un jugador en BD
	 * 
	 * @param jugadorCrear
	 * @return Jugador Creado
	 */
	JugadorTB crearJugador(JugadorTB jugadorCrear);

	/**
	 * M�todo para modificar un jugador en BD
	 * 
	 * @param jugadorModificar
	 * @return Jugador Modificado
	 */
	JugadorTB modificarJugador(JugadorTB jugadorModificar);

	/**
	 * M�todo para eliminar un jugador en BD
	 * 
	 * @param idJugador
	 * @return true/false que define si se elimin� el registro
	 */
	boolean eliminarJugador(long idJugador);

}
