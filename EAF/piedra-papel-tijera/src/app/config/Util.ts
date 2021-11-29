import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Enumerados } from './Enumerados';
import { Functions } from './Functions';
import { TextProperties } from './TextProperties';
import * as $JQ from 'jquery';
import { Initializer } from './Initializer';

@Injectable()
export class Util {
  ex: any;
  msg: any;
  mensaje: any;
  const: any;
  enums: any;
  modeloTablas: any;
  func: any;

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, textProperties: TextProperties, enums: Enumerados, functions: Functions, public initializer: Initializer) {
    this.mensaje = this.initializer.getDataMessage();
    this.const = this.initializer.getConst();
    this.msg = textProperties.getProperties(this.const.idiomaEs);
    this.func = functions;
    this.enums = enums.getEnumerados();
  }

  cargarMatrizPorcentajeUri() {
    // SÍMBOLOS URI
    let listaRefPorcentajesUri = [];

    //%20	%21	%22	%23	%24	%25	%26	%27	%28	%29	
    //     !   "	 #	 $	 %   &	 '	 (	 )
    let ESPACIO = this.initializer.getDataPorcentajeURIWeb('%20', ' ');
    let CIERRA_ADMIRACION = this.initializer.getDataPorcentajeURIWeb('%21', '!');
    let COMILLA_DOBLE = this.initializer.getDataPorcentajeURIWeb('%22', '\"');
    let NUMERAL = this.initializer.getDataPorcentajeURIWeb('%23', '#');
    let DOLAR = this.initializer.getDataPorcentajeURIWeb('%24', '$');
    let PORCENTAJE = this.initializer.getDataPorcentajeURIWeb('%25', '%');
    let AMPER = this.initializer.getDataPorcentajeURIWeb('%26', '&');
    let COMILLA_SIMPLE = this.initializer.getDataPorcentajeURIWeb('%27', '\'');
    let ABRE_PARENTESIS = this.initializer.getDataPorcentajeURIWeb('%28', '(');
    let CIERRA_PARENTESIS = this.initializer.getDataPorcentajeURIWeb('%29', ')');
    listaRefPorcentajesUri.push(ESPACIO);
    listaRefPorcentajesUri.push(CIERRA_ADMIRACION);
    listaRefPorcentajesUri.push(COMILLA_DOBLE);
    listaRefPorcentajesUri.push(NUMERAL);
    listaRefPorcentajesUri.push(DOLAR);
    listaRefPorcentajesUri.push(PORCENTAJE);
    listaRefPorcentajesUri.push(AMPER);
    listaRefPorcentajesUri.push(COMILLA_SIMPLE);
    listaRefPorcentajesUri.push(ABRE_PARENTESIS);
    listaRefPorcentajesUri.push(CIERRA_PARENTESIS);

    //%2A	%2B %2C	%2D	%2E	%2F	
    // *	 +   ,	 -   .   /
    let ASTERISCO = this.initializer.getDataPorcentajeURIWeb('%2A', '*');
    let SIGNO_MAS = this.initializer.getDataPorcentajeURIWeb('%2B', '+');
    let COMA = this.initializer.getDataPorcentajeURIWeb('%2C', ',');
    let SIGNO_MENOS = this.initializer.getDataPorcentajeURIWeb('%2D', '-');
    let PUNTO = this.initializer.getDataPorcentajeURIWeb('%2E', '.');
    let SLASH = this.initializer.getDataPorcentajeURIWeb('%2F', '/');
    listaRefPorcentajesUri.push(ASTERISCO);
    listaRefPorcentajesUri.push(SIGNO_MAS);
    listaRefPorcentajesUri.push(COMA);
    listaRefPorcentajesUri.push(SIGNO_MENOS);
    listaRefPorcentajesUri.push(PUNTO);
    listaRefPorcentajesUri.push(SLASH);

    //%3A	%3B	%3C	%3D	%3E	%3F	%40
    // :	 ;	 <   =	 >   ?	 @
    let DOS_PUNTOS = this.initializer.getDataPorcentajeURIWeb('%3A', ':');
    let PUNTO_COMA = this.initializer.getDataPorcentajeURIWeb('%3B', ';');
    let MENOR_QUE = this.initializer.getDataPorcentajeURIWeb('%3C', '<');
    let SIGNO_IGUAL = this.initializer.getDataPorcentajeURIWeb('%3D', '=');
    let MAYOR_QUE = this.initializer.getDataPorcentajeURIWeb('%3E', '>');
    let CIERRA_PREGUNTA = this.initializer.getDataPorcentajeURIWeb('%3F', '?');
    let ARROBA = this.initializer.getDataPorcentajeURIWeb('%40', '@');
    listaRefPorcentajesUri.push(DOS_PUNTOS);
    listaRefPorcentajesUri.push(PUNTO_COMA);
    listaRefPorcentajesUri.push(MENOR_QUE);
    listaRefPorcentajesUri.push(SIGNO_IGUAL);
    listaRefPorcentajesUri.push(MAYOR_QUE);
    listaRefPorcentajesUri.push(CIERRA_PREGUNTA);
    listaRefPorcentajesUri.push(ARROBA);

    //%5B	%5D %5C	%5E	%5F	%60	%7B	%7C	%7D	%7E	%C2%B4
    // [	 ]   \	 ^	 _   `	 { 	 |	 }	 ~ 	  ´  
    let ABRE_LLAVE_ANGULAR = this.initializer.getDataPorcentajeURIWeb('%5B', '[');
    let CIERRA_LLAVE_ANGULAR = this.initializer.getDataPorcentajeURIWeb('%5D', ']');
    let SLASH_INVERTIDO = this.initializer.getDataPorcentajeURIWeb('%5C', '\\');
    let CIRCUNFLEJO = this.initializer.getDataPorcentajeURIWeb('%5E', '^');
    let GUION_BAJO = this.initializer.getDataPorcentajeURIWeb('%5F', '_');
    let ACENTO_INVERTIDO = this.initializer.getDataPorcentajeURIWeb('%60', '`');
    let ABRE_LLAVE = this.initializer.getDataPorcentajeURIWeb('%7B', '{');
    let PIPE = this.initializer.getDataPorcentajeURIWeb('%7C', '|');
    let CIERRA_LLAVE = this.initializer.getDataPorcentajeURIWeb('%7D', '}');
    let APROXIMADO = this.initializer.getDataPorcentajeURIWeb('%7E', '~');
    let ACENTO = this.initializer.getDataPorcentajeURIWeb('%C2%B4', '´');
    listaRefPorcentajesUri.push(ABRE_LLAVE_ANGULAR);
    listaRefPorcentajesUri.push(CIERRA_LLAVE_ANGULAR);
    listaRefPorcentajesUri.push(SLASH_INVERTIDO);
    listaRefPorcentajesUri.push(CIRCUNFLEJO);
    listaRefPorcentajesUri.push(GUION_BAJO);
    listaRefPorcentajesUri.push(ACENTO_INVERTIDO);
    listaRefPorcentajesUri.push(ABRE_LLAVE);
    listaRefPorcentajesUri.push(PIPE);
    listaRefPorcentajesUri.push(CIERRA_LLAVE);
    listaRefPorcentajesUri.push(APROXIMADO);
    listaRefPorcentajesUri.push(ACENTO);

    return listaRefPorcentajesUri;
  }

  transformarSimboloUri(uriSimbolos, listaRefPorcentajesUri) {
    for (let uriObject of listaRefPorcentajesUri) {
      uriSimbolos = uriSimbolos.split(uriObject.codigo).join(uriObject.simbolo);
    }

    return uriSimbolos;
  }

  limpiarExcepcion() {
    console.clear;
    return this.ex;
  }

  limpiarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    console.clear();
    return true;
  }

  limpiarSesionXItem(listaItems) {
    if (listaItems == null || listaItems.length <= 0) {
      return false;
    }
    for (let item in listaItems) {
      localStorage.setItem(listaItems[item], null);
    }
    return true;
  }

  // Subir variables a la sesión
  agregarSesionXItem(listaItems) {
    if (listaItems == null || listaItems.length <= 0) {
      return false;
    }
    listaItems.forEach(function (element, index) {
      localStorage.setItem(element.item, JSON.stringify(element.valor));
    });
    return true;
  }

  //limpiar las variables en sesion
  limpiarVariableSesion() {
    let sesion = JSON.parse(localStorage.getItem("usuarioSesion"));
    localStorage.clear();
    localStorage.setItem("usuarioSesion", JSON.stringify(sesion));

    return true;
  }

  // Bajar variables a la sesión
  obtenerSesionXItem(item) {
    if (item == null) {
      return null;
    }

    let temp = localStorage.getItem(item);
    return JSON.parse(temp);
  }

  getEnum(enumerado) {
    if (enumerado == this.enums.sino.cod) {
      return this.enums.sino.valores;
    } else if (enumerado == this.enums.sexo.cod) {
      return this.enums.sexo.valores;
    } else if (enumerado == this.enums.tipoDocumento.cod) {
      return this.enums.tipoDocumento.valores;
    } else if (enumerado == this.enums.idioma.cod) {
      return this.enums.idioma.valores;
    }

    else if (enumerado == this.enums.tipoPlan.cod) {
      return this.enums.tipoPlan.valores;
    } else if (enumerado == this.enums.calificacion.cod) {
      return this.enums.calificacion.valores;
    }


    else if (enumerado == null) {
      return false;
    }
    return false;
  }

  getEnumValString(array) {
    let lis = [];
    for (let ind in array) {
      let obj = { value: 0, label: '' };
      obj.value = array[ind].value.toString();
      obj.label = array[ind].label;
      lis.push(obj);
    }
    return lis;
  }

  getEnumName(enumerado, val) {
    let name = '';
    enumerado.forEach(function (obj) {
      if (obj.value == val) {
        name = obj.label;
      }
    })
    return name;
  }

  getValorEnumerado(enumerado, id) {
    let valor = { value: 0, label: '' };

    for (var key in enumerado) {
      let obj = enumerado[key];
      if (obj.value == id) {
        valor = enumerado[key];
        break;
      }
    }

    return valor;
  }

  obtenerTipoDeVariable(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  }

  getUrlActual() {
    let url = window.location.href.toString();
    return url.split('4200')[1];
  }

  // Función que arma el enumerado de Ubicaciones desde la lista
  obtenerEnumeradoDeListaUbicacion(lista, tipoUbicacion) {
    let enumerado = [{ value: '0', label: this.msg.lbl_enum_generico_valor_vacio }];
    for (let i in lista) {
      let ubicacion = lista[i];
      let nombreUbicacion = tipoUbicacion == 0 ? ubicacion.nombrePais : (tipoUbicacion == 1 ? ubicacion.nombreDepartamento + ' - (' + ubicacion.nombrePais + ')' : ubicacion.nombreCiudad + ' - (' + ubicacion.nombreDepartamento + ')');
      let enumObj = { value: ubicacion, label: nombreUbicacion };
      enumerado.push(enumObj);
    }

    return enumerado;
  }

  // Función que arma el model de las tablas de la aplicación
  armarTabla(cabeceras, lista) {
    let cols = [];
    if (lista !== null && lista.length > 0) {
      let rows = Object.keys(lista[0]);
      for (let j in cabeceras) {
        for (let c in rows) {
          let head = cabeceras[j];
          let campo = rows[c].toString();
          if (head.campoLista === campo) {
            let obj = { field: '', header: '' };
            Object.assign(this.modeloTablas, obj);
            obj.header = head.nombreCabecera;
            obj.field = campo;

            cols.push(obj);
          }
        }
      }
    }
    return cols;
  }

  //funcion que valida la respuesta de un servicio del EAP
  reportarExcepcionWS(objResponseWS: any) {
    let mensaje = { severity: '', summary: '', detail: '' };
    let result = typeof objResponseWS === 'undefined' || objResponseWS === null || objResponseWS === 'null' ? null : JSON.parse(JSON.stringify(objResponseWS)).response.result;

    if (typeof result === 'undefined' || result === null || result === 'null' || result === "ERROR") {
      Object.assign(this.mensaje, mensaje);
      mensaje.severity = this.const.severity[2];
      mensaje.summary = objResponseWS.response.result + " " + objResponseWS.response.code + ": ";
      mensaje.detail = objResponseWS.response.description + ". " + objResponseWS.response.detail + ". ";
    } else {
      mensaje = null;
    }
    return mensaje;
  }

  // Funcion que muestra notificaciones de errores, advertencias o informativos
  reportarExcepcion(exc) {
    return { severity: this.const.severity[3], summary: 'ERROR DESCONOCIDO: ', detail: 'Ha ocurrido un error inesperado o no hay conexión con el servidor. No hay detalles del error.' }
  }

  // Función para obtener el objeto ubicacion de una lista con el código
  obtenerUbicacionPorCodigo(codigoUbicacion, listaUbicaciones, tipoUbicacion) {
    let ubicacion: any;
    let label = "";

    for (let i in listaUbicaciones) {
      let ubi = listaUbicaciones[i];

      if (tipoUbicacion == 0) {
        if (ubi.codigoPais == codigoUbicacion) {
          label = ubi.nombrePais;
          ubicacion = ubi;
          break;
        }
      }
      else if (tipoUbicacion == 1) {
        if (ubi.codigoDepartamento == codigoUbicacion) {
          label = ubi.nombreDepartamento;
          ubicacion = ubi;
          break;
        }
      }
      else if (tipoUbicacion == 2) {
        if (ubi.codigoCiudad == codigoUbicacion) {
          label = ubi.nombreCiudad;
          ubicacion = ubi;
          break;
        }
      }
    }
    return { value: ubicacion, label: label };
  }

  // Función que permite validar la estructura de un Email de acuerdo a un patrón REGEX
  validarEstructuraEmail(email) {
    let emailRegex = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');

    return emailRegex.test(email);
  }

  // Función que simula un click en un componente dado su ID
  simularClick(id) {
    document.getElementById(id).click();
  }

  // Función que copia de uno a otro elemento
  copiarElemento(source, target) {
    return Object.assign(target, source);
  }

  //Descargar PDF 
  descargarPdf(arreglo, tipo) {
    let textbuffer = window.atob(arreglo);
    let binaryLen = textbuffer.length;
    let byte = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      let ascii = textbuffer.charCodeAt(i);
      byte[i] = ascii;
    }
    let blob = new Blob([byte], { type: 'application/' + tipo });
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    let fileName = this.obtenerNombreArchivo("." + tipo);
    link.download = fileName;
    link.click();
  }

  obtenerNombreArchivo(extension) {
    let ahora = new Date().toLocaleDateString('es-ES');
    let re = /\//gi;
    let fecha = ahora.replace(re, "_");
    return 'Plan_Pagos_' + fecha + extension;
  }

  fechaActualDdMmYyyyHhMinSeg() {
    var fecha = new Date();
    return fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() + ' ' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
  }

  construirMensajeExcepcion(error, summary) {
    let listaMensajes = [];

    if (error !== undefined && error !== null && error.mensaje !== undefined && error.mensaje !== null) {
      // Extraemos por el split de mensajes |
      let listaErrores = error.mensaje.split('|');
      listaErrores.forEach(errorMSG => {
        let mensaje = { severity: '', summary: '', detail: '', sticky: true };
        Object.assign(this.mensaje, mensaje);
        mensaje.severity = this.const.severity[3];
        mensaje.summary = summary;
        mensaje.detail = errorMSG;
        if (errorMSG.length > 0) {
          listaMensajes.push(mensaje);
        }
      });
    } else {
      let mensaje = { severity: '', summary: '', detail: '', sticky: true };
      mensaje.severity = this.const.severity[3];
      mensaje.summary = summary;
      mensaje.detail = this.msg.lbl_mensaje_sin_detalles_error;
      listaMensajes.push(mensaje);
    }
    return listaMensajes;
  }

  soloNumeros(e) {
    let key = window.Event ? e.which : e.keyCode;
    return (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key === 46) || (key === 8) || (e.shiftKey === 1) || (key === 190);
  }

  dejarSoloUnPunto(palabra) {
    return palabra.replace('.', '|').replaceAll('.', '').replace('|', '.');
  }

  getLabelEnumerado(enumerado, idLabel) {
    let valor = { value: 0, label: '' };

    for (var obj of enumerado) {
      if (obj.label === idLabel) {
        valor = obj;
        break;
      }
    }

    return valor;
  }

  moverScrollA(id) {
    setTimeout(function () {
      $JQ('html, body').animate({
        scrollTop: $JQ("#" + id).offset().top - 50
      }, 100);
    }, 300);
  }

  playAudio(nombreArchivo) {
    try {
      let audio = new Audio();
      audio.src = "/assets/audio/" + nombreArchivo;
      audio.load();
      audio.play();
    } catch (e) {
    }
  }

  stopAudios() {
    $JQ('audio').each(function () {
      this.pause(); // Stop playing
      this.currentTime = 0; // Reset time
    });
  }

  getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

}