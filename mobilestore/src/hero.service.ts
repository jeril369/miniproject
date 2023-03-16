import { Injectable } from '@angular/core';
import { data } from './assets/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getdata()
  {
    return data
  }
}
