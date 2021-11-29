import { Injectable } from '@angular/core';

export var HOST = 'http://localhost:9002';
//export var HOST = 'http://10.176.56.211:9002';
//export var HOST = 'https://143.198.123.29:8443/CentralPPT';

//export var SYSTEM = 'http://localhost:4200';
//export var SYSTEM = 'http://10.176.56.211:7001';
export var SYSTEM = 'https://www.ppt.cbaeneprojects.com';

@Injectable()
export class Initializer {

  constructor() {
  }

  getLocaleESForCalendar() {
    return {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  };

  getLocaleENForCalendar() {
    return {
      firstDayOfWeek: 1,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear'
    }
  };

  getConst() {
    return {
      // URL'S Info del Sistema
      urlDomain: `${SYSTEM}/`,
      urlRestService: `${HOST}/`,
      urlRestOauth: `${HOST}/oauth/token`,
      urlVCode: `${SYSTEM}/vCode/`,
      // URL'S WS EAP
      urlGuardarPartida: `${HOST}/central/ppt/guardarPartida/`,
      urlContarJugadores: `${HOST}/central/ppt/contarJugadores/`,
      urlConsultarJugadores: `${HOST}/central/ppt/consultarJugadores/`,

      // Model rango de fechas para NGBDatePicker
      minDate: { year: 1000, month: 1, day: 1 },
      actualDate: new Date(),
      maxDate: new Date(),
      formatoFecha: 'dd/mm/yy',
      rangoYears: '1900:3000',

      // Otras Variables
      idiomaEs: 1,
      idiomaEn: 2,
      phaseAdd: 'add',
      phaseDelete: 'delete',
      phaseSearch: 'search',
      phaseEdit: 'edit',
      phasePlus: 'plus',
      tipoCampoTexto: 1,
      tipoCampoEnum: 2,
      disabled: 'disabled',
      readOnly: 'readOnly',
      severity: ['info', 'success', 'warn', 'error'],
      actionModal: { 'show': 1, 'hidde': 2 },
      collectionSize: 0,
      maxSize: 1,
      rotate: true,
      pageSize: 1,
      estadoActivoNumString: 1,
      estadoInactivoNumString: 0,
      passwordAES: 'B13EC3B0742D2308'
    }
  };

  getDataMessage() {
    return {
      // info, success, warning, danger
      severity: '',
      // Title of MSG
      summary: '',
      // Description of MSG
      detail: ''
    }
  };

  getDataEnumerado() {
    return {
      label: '',
      value: ''
    }
  };

  getDataPorcentajeURIWeb(code: String, symbol: String) {
    return {
      codigo: code,
      simbolo: symbol
    }
  };

  getDataJugador() {
    return {
      idJugador: 0,
      nombre: '',
      juegosGanados: 0,
      juegosPerdidos: 0,
      juegosEmpatados: 0,
      puntaje: 0
    }
  }

  getDataPartida() {
    return {
      idPartida: 0,
      jugador1: this.getDataJugador(),
      jugadaJ1: '',
      jugador2: this.getDataJugador(),
      jugadaJ2: '',
      jugadaPC: '',
      tipoJuego: '',
      resultado: ''
    }
  }

}