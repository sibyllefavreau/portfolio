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
  titrePage=['Mes projets mécaniques et informatiques', 'My mechanical and computer projects'];
  titleProjets=[
    ['Simulation Ansys', 'Simulation Ansys'],
    ['Projet golf', 'Golf project'],
    ['Tableur pédagogique', 'Pedagogical Spreadsheet'],
    ['Portfolio-Sibylle', 'Portfolio-Sibylle'],
    ['ID-meal', 'ID-meal'],
    ['Modélisation épidémie grippe','Modelling the flu epidemic']
  ];
  descripProjets=[
    ['Simulations numériques modélisant l’écoulement d’un fluide déposé par une pipette dans le cadre d’un projet académique en groupe en collaboration avec Rhénova.','Numerical simulations modelling the flow of a fluid deposited by a pipette as part of a group academic project in collaboration with Rhénova.'],
    [ 'Application simulant la trajectoire d’une balle de golf. Cela prend en compte les effets aérodynamiques et la rotation de la balle. Tout le projet a été codé avec Matlab. ','Application that simulates the trajectory of a golf ball. It takes into account aerodynamic effects and the rotation of the ball. The entire project was coded in Matlab.'],
    ['Pedagogical-Spreadsheet est une application de type tableur gérant des feuilles de calcul. L\'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre à manier un tableur (calculs, opérations, diagrammes, ainsi que des jeux permettent de découvrir toutes les fonctionnalités du tableur. Il s\'agit d\'un projet personnel réalisé à 2. Il est codé en Java et utilise la bibliothèque JavaFX et un peu de CSS pour les interfaces.','Pedagogical-Spreadsheet is a spreadsheet application. The application brings together all the essential functions that are primary and useful for learning how to use a spreadsheet (calculations, operations, diagrams, etc.), as well as games to help you discover all the features of the spreadsheet. This is a personal 2-person project, coded in Java using the JavaFX library and a little CSS for the interfaces.'],
    ['Ce projet est le site-web sur lequel vous vous trouvez qui est mon portfolio perso afin d\'en découvrir davantage sur moi: mon cursus scolaire, mes différents projets mécaniques et informatiques (personnels et académiques) et ainsi que mes loisirs. Le site a été dévéloppé à l\'aide du framework Angular 15.0.4. ','This project is the website you\'re visiting, which is my personal portfolio, so you can find out more about me: my educational background, my various mechanical and IT projects (personal and academic) and my hobbies. The site was developed using the Angular 15.0.4 framework.'],
    ['ID-meal est un projet codé entièrement en java, utilisation la programmation orientée objet, permettant d’à partir d’une sélection d’aliments de proposés des recettes adéquates','ID-meal is a project coded entirely in Java, using object-oriented programming, to suggest suitable recipes based on a selection of foods.'],
    ['Projet modélisant l’évolution d’une maladie sur la base du schéma MIR, codé avec Matlab','Project modelling the evolution of a disease based on the MIR scheme, coded with Matlab']
  ];
  imageProjets=['assets/ansys.gif', 'assets/golf.JPG','assets/tableur.JPG','assets/portfolio.JPG', 'assets/projetIdmeal2.JPG','assets/grippe.JPG'];
  symboleProjets=[
    [ '1','fa-solid fa-gears fa-3x'],
    ['2','fa-solid fa-terminal fa-2x', 'fa-solid fa-gears fa-3x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-gears fa-3x']
  ]
  constructor(public param:VariablesGlobales, public route:Router, service: ChangerPageService) {
    param.chemin=this.route.url;
    if(param.chemin=='/projets'){
      service.styleBoutonsHeader=["styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader", "styleButtonHeader"];
    }
  }
}
