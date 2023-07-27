import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-cursus-page',
  templateUrl: './cursus-page.component.html',
  styleUrls: ['./cursus-page.component.css']
})
export class CursusPageComponent {
  titrePage=['Mon cursus', 'My curriculum'];
  panneauEtape=[
    ['Bac','Bac'],
    ['Génie mécanique', 'Mechanical engineering'],
    ['Ingénieur...','Engineer...']
  ];
  explicationPanneau=[
    ['J’ai fait ma scolarité au collège Victor Hugo et au lycée Nelson Mandela à Nantes en horaires aménagés musique.','I went to school at the Collège Victor Hugo and the Lycée Nelson Mandela in Nantes, where I studied music.'],
    ['J’ai obtenu mon baccalauréat scientifique spécialité mathématiques mention très bien (avec 18.95 de moyenne)','I passed my scientific baccalauréat with honours, specialising in mathematics (with an average of 18.95).'],
    ['J’ai fait mes études à l’INSA (Institut National des Arts Appliqués) de Lyon, classée 40 sur 800 en fin de 2e année','I studied at the INSA (National Institute of Applied Arts) in Lyon, ranking 40 out of 800 at the end of my 2nd year.'],
    ['Je suis rentrée en génie mécanique pour mes 3 dernières années en spécialité modélisation et expérimentation','I studied mechanical engineering for my last 3 years, specialising in modelling and experimentation.'],
    ['Je réalise un erasmus à Stockholm à KTH durant 1 semestre','I\'m doing an erasmus in Stockholm at KTH for 1 semester']
  ];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin == '/cursus') {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader", "styleButtonHeader", "styleButtonHeader"];
    }
  }
}
