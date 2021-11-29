package com.project.cafe.ppt.dto;

import java.io.Serializable;

//@XmlRootElement
public class JugadorDTO implements Serializable {
	private static final long serialVersionUID = -93749543131258839L;

	String nombreArchivo;
	String tipoArchivo;
	byte[] archivo;
	String rutaArchivo;
	int destinoArchivo;

	public String getNombreArchivo() {
		return nombreArchivo;
	}

	public void setNombreArchivo(String nombreArchivo) {
		this.nombreArchivo = nombreArchivo;
	}

	public String getTipoArchivo() {
		return tipoArchivo;
	}

	public void setTipoArchivo(String tipoArchivo) {
		this.tipoArchivo = tipoArchivo;
	}

	public byte[] getArchivo() {
		return archivo;
	}

	public void setArchivo(byte[] archivo) {
		this.archivo = archivo;
	}

	public String getRutaArchivo() {
		return rutaArchivo;
	}

	public void setRutaArchivo(String rutaArchivo) {
		this.rutaArchivo = rutaArchivo;
	}

	public int getDestinoArchivo() {
		return destinoArchivo;
	}

	public void setDestinoArchivo(int destinoArchivo) {
		this.destinoArchivo = destinoArchivo;
	}

}
