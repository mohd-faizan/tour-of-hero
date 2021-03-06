import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _message:MessageService) {
   }
  getHeroes():Observable<Hero[]>{
    this._message.add(`HeroService: fetched heroes`);
    return of(HEROES);
  }
  getHero(id:number):Observable<Hero>{
    this._message.add(`HeroService: fetched heroe id = ${id}`);
    return of(HEROES.find(o=>o.id==id));
  }
}
