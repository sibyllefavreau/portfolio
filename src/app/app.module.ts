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
import { LoisirComponent } from './Components/loisir/loisir.component';
import { MusiquePageComponent } from './musique-page/musique-page.component';
import { PeinturePageComponent } from './peinture-page/peinture-page.component';
import { PatisseriePageComponent } from './patisserie-page/patisserie-page.component';
import { SportPageComponent } from './sport-page/sport-page.component';
import { EcriturePageComponent } from './ecriture-page/ecriture-page.component';

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
    LoisirComponent,
    MusiquePageComponent,
    PeinturePageComponent,
    PatisseriePageComponent,
    SportPageComponent,
    EcriturePageComponent,

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'cursus', component: CursusPageComponent},
      {path: 'projets', component: ProjetsPageComponent},
      {path: 'loisirs', component: LoisirsPageComponent},
      {path: 'loisirs/patisserie', component:PatisseriePageComponent},
      {path: 'loisirs/musique', component:MusiquePageComponent},
      {path: 'loisirs/peinture', component:PeinturePageComponent},
      {path: 'loisirs/sport', component:SportPageComponent},
      {path: 'loisirs/ecriture', component:EcriturePageComponent}
    ]),
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
