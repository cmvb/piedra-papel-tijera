import { Injectable } from '@angular/core';
import { Initializer } from '../config/Initializer';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  // Datos
  sessionPokemonAPI: any;

  // Fases
  objServiceSesion: any;
  usuarioRestaurarClave: any;
  esLogueado: boolean = false;

  constructor(public initializer: Initializer) {
    this.inicializar();
    if (localStorage.getItem('objServiceSesion') !== undefined && localStorage.getItem('objServiceSesion') !== null) {
      this.objServiceSesion = JSON.parse(localStorage.getItem('objServiceSesion'));
    }
  }

  inicializar() {
    this.objServiceSesion = this.initializer.getConst().idiomaEs;
  }

}
