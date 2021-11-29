import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';
import { Initializer } from './Initializer';
import { TextProperties } from './TextProperties';
import { Util } from './Util';

@Injectable()
export class LoginGuard implements CanActivate {
  const: any;
  listaRefPorcentajesUri: any[];
  //  parametrosJSON: ParametroPost;

  constructor(private router: Router, textProperties: TextProperties, public initializer: Initializer, public sesionService: SesionService, public util: Util) {
    this.const = initializer.getConst();
    this.listaRefPorcentajesUri = this.util.cargarMatrizPorcentajeUri();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let HOME = '#/home';
    let result = true;

    //Revisamos parámetros
    let URLactual = window.location.href;
    if (URLactual.includes(HOME)) {

    }

    return result;
  }
}