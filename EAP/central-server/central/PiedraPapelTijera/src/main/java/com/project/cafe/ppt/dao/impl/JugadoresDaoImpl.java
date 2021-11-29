package com.project.cafe.ppt.dao.impl;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

import com.project.cafe.ppt.dao.AbstractDao;
import com.project.cafe.ppt.dao.IJugadoresDao;
import com.project.cafe.ppt.model.JugadorTB;
import com.project.cafe.ppt.util.ConstantesValidaciones;

@Repository
public class JugadoresDaoImpl extends AbstractDao<JugadorTB> implements IJugadoresDao {

	@PersistenceContext(unitName = "default")
	private EntityManager em;

	@Override
	public Long contarJugadores() {
		// QUERY
		StringBuilder JPQL = new StringBuilder("SELECT COUNT(jug_id_jugador) FROM ppt.ppt_jugador_tb");
		// END QUERY

		Query query = em.createNativeQuery(JPQL.toString());
		return (long) query.getFirstResult();
	}

	@Override
	public LinkedList<JugadorTB> consultarJugadores() {
		LinkedList<JugadorTB> resultado = new LinkedList<>();
		// QUERY
		StringBuilder JPQL = new StringBuilder("SELECT t FROM JugadorTB t ");
		// Q. Order By
		JPQL.append(" ORDER BY t.idJugador DESC");
		// END QUERY

		TypedQuery<JugadorTB> query = em.createQuery(JPQL.toString(), JugadorTB.class);
		List<JugadorTB> listaBD = query.getResultList();
		if (listaBD != null && !listaBD.isEmpty()) {
			listaBD.forEach((jugadorTB) -> resultado.add(jugadorTB));
		}
		return resultado;
	}

	@Override
	public LinkedList<JugadorTB> consultarJugadoresFiltros(JugadorTB jugadorFiltro) {
		// PARAMETROS
		Map<String, Object> pamameters = new HashMap<>();

		// QUERY
		StringBuilder JPQL = new StringBuilder("SELECT t FROM JugadorTB t WHERE 1 = 1 ");
		// WHERE
		if (!StringUtils.isBlank(jugadorFiltro.getNombre())) {
			JPQL.append(" AND UPPER(t.nombre) LIKE :NOMBRE ");
			pamameters.put("NOMBRE", ConstantesValidaciones.COMODIN_BD + jugadorFiltro.getNombre().toUpperCase()
					+ ConstantesValidaciones.COMODIN_BD);
		}
		// Q. Order By
		JPQL.append(" ORDER BY t.idJugador DESC");
		// END QUERY

		TypedQuery<JugadorTB> query = em.createQuery(JPQL.toString(), JugadorTB.class);
		pamameters.forEach((k, v) -> query.setParameter(k, v));

		return (LinkedList<JugadorTB>) query.getResultList();
	}

	@Override
	public JugadorTB crearJugador(JugadorTB JugadorTB) {
		super.create(JugadorTB);
		return JugadorTB;
	}

	@Override
	public JugadorTB modificarJugador(JugadorTB JugadorTB) {
		super.update(JugadorTB);
		return JugadorTB;
	}

	@Override
	public boolean eliminarJugador(long idJugador) {
		boolean result = true;
		try {
			super.deleteById(idJugador);
		} catch (Exception e) {
			result = false;
		}
		return result;
	}

}
