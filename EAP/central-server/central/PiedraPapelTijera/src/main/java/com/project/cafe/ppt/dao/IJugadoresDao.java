package com.project.cafe.ppt.dao;

import java.util.LinkedList;

import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.project.cafe.ppt.model.JugadorTB;

@EnableTransactionManagement
public interface IJugadoresDao {

	/**
	 * Método para contar los jugadores en BD
	 * 
	 * @return Cantidad de Jugadores
	 */
	Long contarJugadores();

	/**
	 * Método para consultar todos los jugadores de la BD
	 * 
	 * @return Lista de Jugadores
	 */
	LinkedList<JugadorTB> consultarJugadores();

	/**
	 * Método para consultar jugadores de la BD con filtros
	 * 
	 * @param jugadorFiltro
	 * @return Lista de Jugadores
	 */
	LinkedList<JugadorTB> consultarJugadoresFiltros(JugadorTB jugadorFiltro);

	/**
	 * Método para crear un jugador en BD
	 * 
	 * @param jugadorCrear
	 * @return Jugador Creado
	 */
	JugadorTB crearJugador(JugadorTB jugadorCrear);

	/**
	 * Método para modificar un jugador en BD
	 * 
	 * @param jugadorModificar
	 * @return Jugador Modificado
	 */
	JugadorTB modificarJugador(JugadorTB jugadorModificar);

	/**
	 * Método para eliminar un jugador en BD
	 * 
	 * @param idJugador
	 * @return true/false que define si se eliminó el registro
	 */
	boolean eliminarJugador(long idJugador);

}
