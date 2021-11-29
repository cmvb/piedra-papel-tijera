package com.project.cafe.ppt.dao.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.project.cafe.ppt.dao.AbstractDao;
import com.project.cafe.ppt.dao.IPartidasDao;
import com.project.cafe.ppt.model.PartidaTB;

@Repository
public class PartidasDaoImpl extends AbstractDao<PartidaTB> implements IPartidasDao {

	@PersistenceContext(unitName = "default")
	private EntityManager em;

}
