import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {FetchData} from '../shared/services/fetch-data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({ providedIn: 'root' })
export class Chowkidaar implements CanActivate {
    constructor(
        private router: Router,
        private fetchData: FetchData
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        const authorities = route.data['authorities'];
        const url = state.url;
        return this.fetchData.account().toPromise().then(res => {
          if (!authorities || authorities.length === 0) {
            return true;
          }
          if (res && res.roles && res.roles.length) {
              let valid = true;
              authorities.map(a => {
                if (res.roles.indexOf(a) === -1) {
                  valid = false;
                }
                return a;
              });
              if (!valid) {
                if (sessionStorage.getItem('url')) {
                  sessionStorage.setItem('url', '');
                  this.router.navigate(['']);
                }
              }
              sessionStorage.setItem('url', '');
              return valid;
          }
          sessionStorage.setItem('url', url);
          this.logout();
          return false;
        }, error => {
          sessionStorage.setItem('url', url);
          this.logout();
          return false;
        });
    }

    logout() {
      this.fetchData.logout().subscribe(r => {});
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
}
