import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hero, Heros } from '../Sleague';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const heroIdFromRouteParam = Number(routeParams.get('heroId'));
    console.log(Heros.find(hero => hero.id === heroIdFromRouteParam));
    this.hero = Heros.find(hero => hero.id === heroIdFromRouteParam);
  }
}
