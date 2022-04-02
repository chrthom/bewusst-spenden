import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  title = new BehaviorSubject('Bewusst Spenden');

  constructor() {}
}
