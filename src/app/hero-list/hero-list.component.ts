import { Component, OnInit } from '@angular/core';
import { Hero } from '../Sleague';
import { HeroService } from '../hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  searchHero: string;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.searchHero = this.ActivatedRoute.snapshot.paramMap.get('serachText');
    console.log(this.searchHero);
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes=heroes));
    
   console.log(this.heroes.length);
    // console.log(
    //   this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
    // );
  }
}
