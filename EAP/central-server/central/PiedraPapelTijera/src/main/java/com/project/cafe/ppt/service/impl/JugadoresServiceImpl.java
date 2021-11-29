package com.project.cafe.ppt.service.impl;

import java.util.LinkedList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.cafe.ppt.dao.IJugadoresDao;
import com.project.cafe.ppt.model.JugadorTB;
import com.project.cafe.ppt.service.IJugadoresService;

@Service
public class JugadoresServiceImpl implements IJugadoresService {

	@Autowired
	private IJugadoresDao jugadoresDAO;

	@Override
	public Long contarJugadores() {
		return jugadoresDAO.contarJugadores();
	}

	@Override
	public LinkedList<JugadorTB> consultarJugadores() {
		return jugadoresDAO.consultarJugadores();
	}

	@Override
	public LinkedList<JugadorTB> consultarJugadoresFiltros(JugadorTB jugadorFiltro) {
		return jugadoresDAO.consultarJugadoresFiltros(jugadorFiltro);
	}

	@Transactional
	@Override
	public JugadorTB crearJugador(JugadorTB jugadorCrear) {
		return jugadoresDAO.crearJugador(jugadorCrear);
	}

	@Transactional
	@Override
	public JugadorTB modificarJugador(JugadorTB jugadorModificar) {
		return jugadoresDAO.modificarJugador(jugadorModificar);
	}

	@Transactional
	@Override
	public boolean eliminarJugador(long idJugador) {
		return jugadoresDAO.eliminarJugador(idJugador);
	}
}
