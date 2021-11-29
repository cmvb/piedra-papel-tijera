package com.project.cafe.ppt.util;

import java.util.regex.Pattern;

public final class ConstantesValidaciones {

	// Expresiones regulares y cadenas
	public static final String EXPRESION_REGULAR_DE_TEXTO_INGRESADO = "[a-zA-Z0-9- äÄëËï�?öÖüÜáéíóúáéíóú�?É�?ÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ//\\.]*";
	public static final String EXPRESION_REGULAR_DE_EMAILS = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";
	public static final Pattern EMAIL_PATTERN = Pattern
			.compile("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");
	public static final String CARACTERES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	// Simbolos y constantes
	public static final String COMODIN_BD = "%";
	public static final String SEPARADOR_TAGS = ";";
	public static final String SEPARADOR_SLASH = "/";
	public static final String PHASE_CREATE = "C";
	public static final String PHASE_UPDATE = "U";
	public static final String TIPO_JUEGO_VS = "vs";
	public static final String TIPO_JUEGO_MULTIPLAYER = "multiplayer";
	public static final int TAMANO_TOKEN = 11;
	public static final int ITERATIONS = 10000;
	public static final int KEY_LENGTH = 256;
	public static final int SALT_ENCRIPTAR_CLAVE = 28;
	public static final char[] SIMBOLOS = CARACTERES.toCharArray();
	public static final char[] BUFFER = new char[TAMANO_TOKEN];

	// Mensajes
	public static final String MSG_ERRORES_ENCONTRADOS = PropertiesUtil
			.getProperty("ppt.msg.validate.erroresEncontrados");
	public static final String VALOR_NULL_OBJETO = PropertiesUtil.getProperty("ppt.msg.validate.valor.objeto");
	public static final String VALOR_VACIO = PropertiesUtil.getProperty("ppt.msg.validate.valor.vacio");
	public static final String VALOR_MENOR_CERO = PropertiesUtil.getProperty("ppt.msg.validate.valor.menor.cero");
	public static final String VALOR_INCORRECTO = PropertiesUtil.getProperty("ppt.msg.validate.valor.incorrecto");
	public static final String TABLA_NO_ESTABLECIDA_VALIDACIONES = PropertiesUtil
			.getProperty("ppt.msg.validate.tabla.no.establecida");
	public static final String SUPERA_LONGITUD = PropertiesUtil.getProperty("ppt.msg.validate.valor.superaLongitud");
	public static final String MSG_NOMBRE_REPETIDO = PropertiesUtil.getProperty("ppt.msg.validate.nombreRepetido");

	// Labels Jugador
	public static final String NOMBRE = PropertiesUtil.getProperty("lbl.jugador.nombre");

	// Labels Partida
	public static final String TIPO_JUEGO = PropertiesUtil.getProperty("lbl.partida.tipoJuego");
	public static final String JUGADOR_1 = PropertiesUtil.getProperty("lbl.partida.jugador1");
	public static final String JUGADOR_2 = PropertiesUtil.getProperty("lbl.partida.jugador2");
	public static final String JUGADOR_PC = PropertiesUtil.getProperty("lbl.partida.jugadorPc");
	public static final String JUGADA = PropertiesUtil.getProperty("lbl.partida.jugada");
	public static final String ORDENADOR = PropertiesUtil.getProperty("lbl.partida.ordenador");
	public static final String RESULTADO = PropertiesUtil.getProperty("lbl.partida.resultado");
}
