import { Component } from '@angular/core';
import{VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import{ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-projets-page',
  templateUrl: './projets-page.component.html',
  styleUrls: ['./projets-page.component.css']
})
export class ProjetsPageComponent {
  titleProjets=['Simulation Ansys', 'Projet golf', 'Pedagogical Spreadsheet', 'Portfolio-Sibylle', 'ID-meal','Modélisation épidémie grippe'];
  descripProjets=['Simulations numériques modélisant l’écoulement d’un fluide déposé par une pipette dans le cadre d’un projet académique en groupe en collaboration avec Rhénova.'
    ,'Application simulant la trajectoire d’une balle de golf. Cela prend en compte les effets aérodynamiques et la rotation de la balle. Tout le projet a été codé avec Matlab. '
    ,'Pedagogical-Spreadsheet est une application de type tableur gérant des feuilles de calcul. L\'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre à manier un tableur (calculs, opérations, diagrammes, ainsi que des jeux permettent de découvrir toutes les fonctionnalités du tableur. Il s\'agit d\'un projet personnel réalisé à 2. Il est codé en Java et utilise la bibliothèque JavaFX et un peu de CSS pour les interfaces.'
    ,'Ce projet est le site-web sur lequel vous vous trouvez qui est mon portfolio perso afin d\'en découvrir davantage sur moi: mon cursus scolaire, mes différents projets mécaniques et informatiques (personnels et académiques) et ainsi que mes loisirs. Le site a été dévéloppé à l\'aide du framework Angular 15.0.4. '
    ,'ID-meal est un projet codé entièrement en java, utilisation la programmation orientée objet, permettant d’à partir d’une sélection d’aliments de proposés des recettes adéquates'
    ,'Projet modélisant l’évolution d’une maladie sur la base du schéma MIR, codé avec Matlab'];
  imageProjets=['assets/ansys.gif', 'assets/golf.JPG','assets/tableur.JPG','assets/portfolio.JPG', 'assets/projetIdmeal2.JPG','assets/grippe.JPG'];
  symboleProjets=[
    [ '1','fa-solid fa-gears fa-3x'],
    ['2','fa-solid fa-terminal fa-2x', 'fa-solid fa-gears fa-3x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-gears fa-3x']
  ]
  constructor(param:VariablesGlobales, public route:Router, service: ChangerPageService) {
    param.chemin=this.route.url;
    if(param.chemin=='/projets'){
      service.styleBoutonsHeader=["styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader", "styleButtonHeader"];
    }
    // console.log(param.parametre);
  }
}
