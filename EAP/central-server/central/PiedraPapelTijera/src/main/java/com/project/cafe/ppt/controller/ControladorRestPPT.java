package com.project.cafe.ppt.controller;

import java.util.LinkedList;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.cafe.ppt.exception.ModelNotFoundException;
import com.project.cafe.ppt.model.JugadorTB;
import com.project.cafe.ppt.service.IJugadoresService;
import com.project.cafe.ppt.service.IPartidasService;
import com.project.cafe.ppt.util.ConstantesTablasNombre;
import com.project.cafe.ppt.util.PropertiesUtil;
import com.project.cafe.ppt.util.Util;

@RestController
@RequestMapping("/central/ppt")
public class ControladorRestPPT {

	@Autowired
	private IPartidasService partidasService;

	@Autowired
	private IJugadoresService jugadoresService;

	// SELECT

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping("/contarJugadores")
	public ResponseEntity<Long> contarJugadores() {
		try {
			Long conteoJugadores = jugadoresService.contarJugadores();
			return new ResponseEntity<Long>(conteoJugadores, HttpStatus.OK);
		} catch (JSONException e) {
			throw new ModelNotFoundException(e.getMessage());
		}
	}

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping("/consultarJugadores")
	public ResponseEntity<LinkedList<JugadorTB>> consultarJugadores() {
		try {
			LinkedList<JugadorTB> listaJugadores = jugadoresService.consultarJugadores();
			return new ResponseEntity<LinkedList<JugadorTB>>(listaJugadores, HttpStatus.OK);
		} catch (JSONException e) {
			throw new ModelNotFoundException(e.getMessage());
		}
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping("/consultarJugadoresFiltros")
	public ResponseEntity<LinkedList<JugadorTB>> consultarJugadoresFiltros(@RequestBody JugadorTB filtroJugadorTB) {
		try {
			LinkedList<JugadorTB> listaJugadores = jugadoresService.consultarJugadoresFiltros(filtroJugadorTB);
			return new ResponseEntity<LinkedList<JugadorTB>>(listaJugadores, HttpStatus.OK);
		} catch (JSONException e) {
			throw new ModelNotFoundException(e.getMessage());
		}
	}

	// CREATE

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping("/crearJugador")
	public ResponseEntity<JugadorTB> crearJugador(@RequestBody JugadorTB jugadorTB) {
		try {
			LinkedList<String> errores = Util.validaDatos(ConstantesTablasNombre.PPT_JUGADOR_TB, jugadorTB);

			JugadorTB nuevoJugador = new JugadorTB();
			if (errores.isEmpty()) {
				nuevoJugador = jugadoresService.crearJugador(jugadorTB);
			} else {
				StringBuilder mensajeErrores = new StringBuilder();
				String erroresTitle = PropertiesUtil.getProperty("ppt.msg.validate.erroresEncontrados") + "|";
				errores.forEach((error) -> mensajeErrores.append(error + "|"));

				throw new ModelNotFoundException(erroresTitle + mensajeErrores);
			}

			return new ResponseEntity<JugadorTB>(nuevoJugador, HttpStatus.OK);
		} catch (JSONException e) {
			throw new ModelNotFoundException(e.getMessage());
		}
	}

}
