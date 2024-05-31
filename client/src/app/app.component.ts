import { Component, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Event, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phoenix Store';
  isHidden: boolean = false;

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {

      this.isHidden = event.urlAfterRedirects.startsWith('/admin') || event.urlAfterRedirects.startsWith('/payment');

      if (this.isHidden) {
        this.renderer.removeClass(document.body, 'overflow-hidden');
      } else {
        this.renderer.addClass(document.body, 'overflow-hidden');
      }
    });
  }
}
