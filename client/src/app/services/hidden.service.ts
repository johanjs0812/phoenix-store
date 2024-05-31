import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HiddenService {
  private hiddenSource = new BehaviorSubject(false);
  currentHidden = this.hiddenSource.asObservable();

  changeHidden(hidden: boolean) {
    this.hiddenSource.next(hidden);
    console.log('value at service:', hidden);
  }
}
