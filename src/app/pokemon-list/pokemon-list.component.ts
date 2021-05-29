import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  limit: number = 9;
  pageNumber: number = 1;
  totalPokemons: number;
  searchPokemon: string;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.getPokemonList();
  }

  //Page chnage logic
  onPageChanged(event) {
    this.pageNumber = event;
    this.pokemons = [];
    this.getPokemonList();
  }

  getType(type: string) {
    return type;
  }
  getPokemonList(): void {
    this.pokedexService
      .getPokemon(this.limit, this.pageNumber > 1 ? this.pageNumber * 9 : 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach(result => {
          this.pokedexService
            .getPokemonDetails(result.name)
            .subscribe((pokeResponse: any) => {
              this.pokemons.push(pokeResponse);
            });
        });
      });
  }
}
