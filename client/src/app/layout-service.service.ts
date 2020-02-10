import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {
  title = new BehaviorSubject(null);
  back = new BehaviorSubject(null);
  header = new BehaviorSubject(null);
  toolbar = new BehaviorSubject(null);
  constructor() { }
}
