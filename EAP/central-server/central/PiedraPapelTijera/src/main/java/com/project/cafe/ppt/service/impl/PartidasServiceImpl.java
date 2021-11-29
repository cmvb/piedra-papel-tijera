package com.project.cafe.ppt.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.cafe.ppt.dao.IPartidasDao;
import com.project.cafe.ppt.service.IPartidasService;

@Service
public class PartidasServiceImpl implements IPartidasService {

	@Autowired
	private IPartidasDao partidasDAO;

}
