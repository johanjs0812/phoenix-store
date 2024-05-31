import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteChangeService {

  constructor(private router: Router) { }

  onRouteChange(callback: (route: string) => void) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const route = this.router.url.split('/')[2];
      console.log('?')
      callback(route);
    });
  }

}
