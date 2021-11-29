import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Enumerados } from 'src/app/config/Enumerados';
import { Initializer } from 'src/app/config/Initializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { Jugador } from 'src/app/model/JugadorModel';
import { RestService } from 'src/app/services/rest.service';
import { SesionService } from 'src/app/services/sesion.service';
import * as $ from 'jquery';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { Partida } from 'src/app/model/PartidaModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RestService]
})
export class HomeComponent implements OnInit {
  // Objetos de Sesion
  sesion: any;

  // Objetos de Datos
  juego: any;
  jugador1: Jugador;
  jugador2: Jugador;
  seleccion1: any;
  seleccion2: any;
  mensajeValidacion: any;
  historialMensajes: any[];
  listaJugadores: Jugador[];
  jugadorCrear: Jugador;

  // Utilidades
  msg: any;
  const: any;
  loading: boolean;
  enumJuego: any;

  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, public textProperties: TextProperties, public util: Util, public initializer: Initializer, public enumerados: Enumerados, public sesionService: SesionService) {
    this.msg = this.textProperties.getProperties(1);
    this.const = this.initializer.getConst();
    this.enumJuego = this.enumerados.getEnumerados().juego;
  }

  ngOnInit(): void {
    this.juego = '';
    this.listaJugadores = [];
    this.consultarJugadores();
    this.limpiarTerminalValidaciones();
    this.limpiarJugadoresSeleccionados();
    this.limpiarSeleccion();
    this.inicializarJugador();
  }

  // Limpiar o reinicializar variables  
  limpiarTerminalValidaciones() {
    this.mensajeValidacion = '';
    this.historialMensajes = [];
    this.historialMensajes.push('¡Nuevo Juego! (No olvides crear y seleccionar tus jugadores para empezar)');
  }

  limpiarSeleccion() {
    this.seleccion1 = undefined;
    this.seleccion2 = undefined;
    if (this.juego === 'vs') {
      let posicion = this.util.getRandom(0, 2);
      this.seleccion2 = this.enumJuego.valores[posicion];
    }
  }

  limpiarJugadoresSeleccionados() {
    this.jugador1 = undefined;
    this.jugador2 = undefined;
  }

  // Inicialización y selección de jugadores y partidas
  inicializarJugador() {
    this.jugadorCrear = this.initializer.getDataJugador();
  }

  seleccionarJugador1(jugador) {
    this.seleccion1 = undefined;
    this.jugador1 = jugador;
  }

  seleccionarJugador2(jugador) {
    this.seleccion2 = undefined;
    this.jugador2 = jugador;
  }

  seleccionarJuego1(posicion) {
    this.seleccion1 = this.enumJuego.valores[posicion];
  }

  seleccionarJuego2(posicion) {
    this.seleccion2 = this.enumJuego.valores[posicion];
  }

  seleccionarJuegoPC() {
    this.limpiarTerminalValidaciones();
    this.juego = 'vs';
    let posicion = this.util.getRandom(0, 2);
    this.jugador2 = undefined;
    this.seleccion2 = this.enumJuego.valores[posicion];
    this.seleccion1 = undefined;
  }

  seleccionarJuegoMultiplayer() {
    this.limpiarTerminalValidaciones();
    this.juego = 'multiplayer';
    this.seleccion1 = undefined;
    this.seleccion2 = undefined;
    this.jugador1 = undefined;
    this.jugador2 = undefined;
  }

  // Jugar
  iniciarJuego() {
    this.limpiarTerminalValidaciones();
    this.historialMensajes.push('Juego: Comienza el juego.');
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(3));
    this.historialMensajes.push('Juego: ... ');
    let mensajeConteo = 'Juego: ';
    takeFourNumbers.subscribe(conteo => {
      mensajeConteo = `${mensajeConteo.replace('...', '')} ${conteo + 1}, ...`;
      this.historialMensajes[this.historialMensajes.length - 1] = mensajeConteo;
    });

    let mensajeConteoMano = 'Juego: ';
    setTimeout(() => {
      takeFourNumbers.subscribe(conteoManos => {
        mensajeConteoMano = `${mensajeConteoMano.replace('...', '')} ${(conteoManos === 0 ? 'Piedra' : (conteoManos === 1 ? 'Papel' : 'Tijera'))}, ...`;
        this.historialMensajes[this.historialMensajes.length - 1] = mensajeConteoMano;
      });
    }, 3000);

    setTimeout(() => {
      let mensajeGanador = '';
      this.historialMensajes.push(`Juego: Jugador ${this.jugador1.nombre} lanzó ${this.seleccion1.label}.`);
      if (this.juego === 'vs') {
        this.historialMensajes.push(`Juego: El Ordenador lanzó ${this.seleccion2.label}.`);
        this.historialMensajes.push('Juego: El resultado es... ');
        mensajeGanador = this.definirGanadorPC();
      } else if (this.juego === 'multiplayer') {
        this.historialMensajes.push(`Juego: Jugador ${this.jugador2.nombre} lanzó ${this.seleccion2.label}.`);
        this.historialMensajes.push('Juego: El resultado es... ');
        mensajeGanador = this.definirGanadorMultiplayer();
      }
      this.historialMensajes.push(mensajeGanador);
      this.guardarPartida(mensajeGanador);
    }, 9000);
  }

  definirGanadorMultiplayer() {
    let mensaje = '';
    if (this.seleccion1.value === this.seleccion2.value) {
      mensaje = 'Juego: ¡La partida termina en Empate!';
      this.jugador1.juegosEmpatados++;
      this.jugador1.puntaje += 1;
      this.jugador2.juegosEmpatados++;
      this.jugador2.puntaje += 1;
    } else {
      switch (this.seleccion1.value) {
        case 0:
          switch (this.seleccion2.value) {
            case 1:
              mensaje = `Juego: ¡Jugador ${this.jugador2.nombre} Gana!`;
              this.jugador1.juegosPerdidos++;
              this.jugador2.juegosGanados++;
              this.jugador2.puntaje += 3;
              break;
            case 2:
              mensaje = `Juego: ¡Jugador ${this.jugador1.nombre} Gana!`;
              this.jugador1.juegosGanados++;
              this.jugador1.puntaje += 3;
              this.jugador2.juegosPerdidos++;
              break;
          }
          break;

        case 1:
          switch (this.seleccion2.value) {
            case 0:
              mensaje = `Juego: ¡Jugador ${this.jugador1.nombre} Gana!`;
              this.jugador1.juegosGanados++;
              this.jugador1.puntaje += 3;
              this.jugador2.juegosPerdidos++;
              break;
            case 2:
              mensaje = `Juego: ¡Jugador ${this.jugador2.nombre} Gana!`;
              this.jugador1.juegosPerdidos++;
              this.jugador2.juegosGanados++;
              this.jugador2.puntaje += 3;
              break;
          }
          break;

        case 2:
          switch (this.seleccion2.value) {
            case 0:
              mensaje = `Juego: ¡Jugador ${this.jugador2.nombre} Gana!`;
              this.jugador1.juegosPerdidos++;
              this.jugador2.juegosGanados++;
              this.jugador2.puntaje += 3;
              break;
            case 1:
              mensaje = `Juego: ¡Jugador ${this.jugador1.nombre} Gana!`;
              this.jugador1.juegosGanados++;
              this.jugador1.puntaje += 3;
              this.jugador2.juegosPerdidos++;
              break;
          }
          break;
      }
    }

    return mensaje;
  }

  definirGanadorPC() {
    let mensaje = '';
    if (this.seleccion1.value === this.seleccion2.value) {
      mensaje = 'Juego: ¡La partida termina en Empate!';
      this.jugador1.juegosEmpatados++;
      this.jugador1.puntaje += 1;
    } else {
      switch (this.seleccion1.value) {
        case 0:
          switch (this.seleccion2.value) {
            case 1:
              mensaje = `Juego: ¡Ordenador Gana!`;
              this.jugador1.juegosPerdidos++;
              break;
            case 2:
              mensaje = `Juego: ¡Jugador ${this.jugador1.nombre} Gana!`;
              this.jugador1.juegosGanados++;
              this.jugador1.puntaje += 3;
              break;
          }
          break;

        case 1:
          switch (this.seleccion2.value) {
            case 0:
              mensaje = `Juego: ¡Jugador ${this.jugador1.nombre} Gana!`;
              this.jugador1.juegosGanados++;
              this.jugador1.puntaje += 3;
              break;
            case 2:
              mensaje = `Juego: ¡Ordenador Gana!`;
              this.jugador1.juegosPerdidos++;
              break;
          }
          break;

        case 2:
          switch (this.seleccion2.value) {
            case 0:
              mensaje = `Juego: ¡Ordenador Gana!`;
              this.jugador1.juegosPerdidos++;
              break;
            case 1:
              mensaje = `Juego: ¡Jugador ${this.jugador1.nombre} Gana!`;
              this.jugador1.juegosGanados++;
              this.jugador1.puntaje += 3;
              break;
          }
          break;
      }
    }

    return mensaje;
  }

  // CRUD-WS Jugadores y Partidas
  consultarJugadores() {
    // TODO: Implementar WS que consulte la lista de jugadores
    try {
      let url = this.const.urlConsultarJugadores;    
      this.restService.getREST(url)
        .subscribe(resp => {
          this.listaJugadores = JSON.parse(JSON.stringify(resp));
        },
          error => {
            let listaMensajes = this.util.construirMensajeExcepcion(error.error, this.msg.lbl_summary_danger);
            let titleError = listaMensajes[0];
            listaMensajes.splice(0, 1);
            let mensajeFinal = { severity: titleError.severity, summary: titleError.detail, detail: '', sticky: true };
            //this.messageService.clear();

            listaMensajes.forEach(mensaje => {
              mensajeFinal.detail = mensajeFinal.detail + mensaje.detail + " ";
            });
            //this.messageService.add(mensajeFinal);

            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

  crearJugador() {
    // TODO: Implementar WS que cree el Jugador en BD y 
    // responda la lista de jugadores actualizada
    $('#alertCrearJugador').removeClass('show');
    if (this.validarNombreJugador()) {
      let jugador: Jugador = this.initializer.getDataJugador();
      jugador.nombre = this.jugadorCrear.nombre;
      jugador.idJugador = this.listaJugadores.length + 1;
      this.listaJugadores.push(jugador);
      this.inicializarJugador();
    } else {
      this.mensajeValidacion = "El nombre del jugador ya existe";
      $('#alertCrearJugador').addClass('show');
    }
  }

  eliminarJugador(idJugadorBorrar) {
    // TODO: Implementar WS que elimine el Jugador en BD y 
    // responda la lista de jugadores actualizada
    let nuevaLista = this.listaJugadores.filter((jugador) => {
      return jugador.idJugador !== idJugadorBorrar;
    });
    this.listaJugadores = nuevaLista;
  }

  guardarPartida(mensajeGanador) {
    // TODO: Implementar WS que guarde la partida en BD, actualice los puntajes, los jugadores y 
    // responda la lista de jugadores actualizada
    this.limpiarSeleccion();
    /*try {
      let url = this.const.urlGuardarPartida;
      let partidaRequest: Partida = this.initializer.getDataPartida();
      partidaRequest.tipoJuego = this.juego;
      partidaRequest.resultado = mensajeGanador;
      partidaRequest.jugador1 = this.util.copiarElemento(this.jugador1, partidaRequest.jugador1);
      partidaRequest.jugadaJ1 = this.seleccion1.label;
      if (this.juego === 'vs') {
        partidaRequest.jugador2 = null;
        partidaRequest.jugadaJ2 = null;
        partidaRequest.jugadaPC = this.seleccion2.label;
      } else{
        partidaRequest.jugador2 = this.util.copiarElemento(this.jugador2, partidaRequest.jugador2);
        partidaRequest.jugadaJ2 = this.seleccion2.label;
        partidaRequest.jugadaPC = null;
      }      
      this.restService.postREST(url, partidaRequest)
        .subscribe(resp => {
          this.listaJugadores = JSON.parse(JSON.stringify(resp));
          this.limpiarSeleccion();
        },
          error => {
            let listaMensajes = this.util.construirMensajeExcepcion(error.error, this.msg.lbl_summary_danger);
            let titleError = listaMensajes[0];
            listaMensajes.splice(0, 1);
            let mensajeFinal = { severity: titleError.severity, summary: titleError.detail, detail: '', sticky: true };
            //this.messageService.clear();

            listaMensajes.forEach(mensaje => {
              mensajeFinal.detail = mensajeFinal.detail + mensaje.detail + " ";
            });
            //this.messageService.add(mensajeFinal);

            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }*/
  }

  // Validaciones
  validarNombreJugador() {
    let listaCoincidencias = this.listaJugadores.filter((jugador) => {
      return jugador.nombre === this.jugadorCrear.nombre;
    });
    return listaCoincidencias.length === 0;
  }
}
