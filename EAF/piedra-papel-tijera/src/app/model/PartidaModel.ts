import { Jugador } from "./JugadorModel";

export interface Partida {
  idPartida;
  jugador1: Jugador;
  jugadaJ1;
  jugador2: Jugador;
  jugadaJ2;
  jugadaPC;
  tipoJuego;
  resultado;
}