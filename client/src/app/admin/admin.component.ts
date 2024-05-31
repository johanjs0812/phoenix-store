import { Component } from '@angular/core';
// import { filter } from 'rxjs/operators';
import { Event, Router, NavigationEnd } from '@angular/router';
import { HiddenService } from '../services/hidden.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router, private hiddenService: HiddenService) { }
}
