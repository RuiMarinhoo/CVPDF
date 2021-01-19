import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private myRoute: Router) {
    }

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const login = true;
        if (login) {
            return true;

        } else {
            this.myRoute.navigate(['/login']);
            return false;
        }
    }
}
