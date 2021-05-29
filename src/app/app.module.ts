//Module Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
//Component Imports
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

//Services Imports
import { LoggingService } from './logging.service';
import { HeroService } from './hero.service';
import { PokedexService } from './pokedex.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgxPaginationModule,

    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      {
        path: 'herolist',

        children: [
          {
            path: '',
            component: HeroListComponent,
            pathMatch: 'full'
          },

          { path: ':serachText', component: HeroListComponent }
        ]
      },
      { path: 'heros/:heroId', component: HeroDetailsComponent },
      { path: 'pokedex', component: PokemonListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeroListComponent,
    HeroDetailsComponent,
    DashboardComponent,
    PokemonListComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoggingService, HeroService, PokedexService]
})
export class AppModule {}
