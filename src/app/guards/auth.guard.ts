import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    console.log('AuthGuard');

    return this.verificarAcesso();
  }


  private verificarAcesso() {
    if(this.authService.usuarioEstaAutenticado()) {
      console.log('retornou true');
      return true;
    }

    this.router.navigate(['/login']);
    console.log('retornou false');
    return false;
  }

  canLoad(route: Route): boolean | Observable<boolean> {
    console.log('canLoad: Verificando se o usuário pode carregar o código do módulo');

    return this.verificarAcesso();
  }


}
