import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';
import { CursusPageComponent } from './cursus-page/cursus-page.component';
import { ProjetsPageComponent } from './projets-page/projets-page.component';
import { LoisirsPageComponent } from './loisirs-page/loisirs-page.component';

import { ButtonHeadComponent } from './Components/button-head/button-head.component';
import { SvgParcoursComponent } from './Components/svg-parcours/svg-parcours.component';
import { EngrenageComponent } from './Components/engrenage/engrenage.component';
import { SvgBrainstormComponent } from './Components/svg-brainstorm/svg-brainstorm.component';
import { TennisComponent } from './Components/tennis/tennis.component';
import { TitrePageComponent } from './Components/titre-page/titre-page.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetDroitComponent } from './Components/projet-droit/projet-droit.component';
import { ProjetGaucheComponent } from './Components/projet-gauche/projet-gauche.component';
import {VariablesGlobales} from "./variablesGlobales";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CursusPageComponent,
    ProjetsPageComponent,
    LoisirsPageComponent,
    ButtonHeadComponent,
    SvgParcoursComponent,
    EngrenageComponent,
    SvgBrainstormComponent,
    TennisComponent,
    TitrePageComponent,
    FooterComponent,
    ProjetDroitComponent,
    ProjetGaucheComponent,

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'cursus', component: CursusPageComponent},
      {path: 'projets', component: ProjetsPageComponent},
      {path: 'loisirs', component: LoisirsPageComponent},
    ]),
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
