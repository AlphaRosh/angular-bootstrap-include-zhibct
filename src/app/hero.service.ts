import { Injectable } from '@angular/core';
import { Hero, Heros } from './Sleague';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heros);
    return heroes;
  }
}
