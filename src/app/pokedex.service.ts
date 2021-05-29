import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Pokemon } from './pokemon';

@Injectable()
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private http: HttpClient) {}
  pokemons: Pokemon[];
  getPokemon(limit:number,offset:number): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
   
  }

  //Get Pokemon details
  getPokemonDetails(name:string){
    return this.http.get(`${this.baseUrl}${name}`)
  }
}
