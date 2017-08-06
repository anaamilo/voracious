import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { SessionService} from './session.service';

@Injectable()
export class FoodActivationService implements CanActivate {
constructor(public sessionService:SessionService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

      let acceso = this.sessionService.user ? true : false;
console.log("Hola soy el activated route y me he pasado por aquí")
    return acceso;
  }
}
