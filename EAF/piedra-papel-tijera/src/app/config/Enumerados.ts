import { Injectable } from '@angular/core';
import { SesionService } from '../services/sesion.service';
import { TextProperties } from './TextProperties';



@Injectable()
export class Enumerados {

  constructor(public textProperties: TextProperties, public sesionService: SesionService) {
  }

  getEnumerados() {
    let properties = this.textProperties.getProperties(1);

    return {
      sino: {
        cod: 1, valores: [
          { value: 1, label: properties.lbl_enum_si },
          { value: 0, label: properties.lbl_enum_no }
        ]
      },
      idioma: {
        cod: 2, valores: [
          { value: 0, label: properties.lbl_enum_idioma_es },
          { value: 1, label: properties.lbl_enum_idioma_en }
        ]
      },
      juego: {
        cod: 3, valores: [
          { value: 0, label: properties.lbl_enum_piedra },
          { value: 1, label: properties.lbl_enum_papel },
          { value: 2, label: properties.lbl_enum_tijera },
        ]
      },
    }
  };
}