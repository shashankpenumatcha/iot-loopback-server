import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private devicesSubject$ = new BehaviorSubject([]);
  public devices$ = this.devicesSubject$.asObservable();

  constructor() { }

  setDevices(devices: any []) {
    this.devicesSubject$.next(devices);
  }

}
