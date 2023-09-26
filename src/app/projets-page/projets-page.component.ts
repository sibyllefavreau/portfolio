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
    ['Conception outil de mesure de l\'usure','Design of wear measurement tool'],
    ['Projet golf', 'Golf project'],
    ['Portfolio-Sibylle', 'Portfolio-Sibylle'],
    ['Tableur pédagogique', 'Pedagogical Spreadsheet'],
    ['ID-meal', 'ID-meal']
  ];
  descripProjets=[
    ['Projet académique en groupe en collaboration avec l\'entreprise grenoblaise Rheonova. Il s\'agissait de la conception et étude d\'un système de dépôt d\'un échantillon inconnu sur une géométrie de rhéomètre. Ce projet comprenait la conception d\'une  pipette automatisée, d\'un algorithme de contrôle d\'absence de bulles dans la pipette et de simulations numériques modélisant l\'écoulement d\'un fluide déposé par une pipette pour connaître l\'angle de dépôt optimal selon la viscosité du fluide. ','Group academic project in collaboration with the Grenoble-based company Rheonova. The project involved the design and study of a system for depositing an unknown sample on a rheometer geometry. The project involved the design of an automated pipette, an algorithm to control the absence of bubbles in the pipette and numerical simulations modelling the flow of a fluid deposited by a pipette to determine the optimum deposition angle depending on the viscosity of the fluid.'],
    ['Projet académique en groupe en collaboration avec l\'entreprise Safran Landing Systems. Conception d\'un système permettant de mesure l\'usure des disques de freins carbone aéronautique de manière fiable, répétable et avec une précision au micromètre. Ce projet comprenait l\'analyse du besoin, l\'analyse fonctionnelle, ainsi que le développement de la solution retenue (notamment le dimensionnement de notre système, et la modélisation 3D CAO fonctionnelle réalisé avec 3D expérience). ','Group academic project in collaboration with Safran Landing Systems. Design of a system to measure the wear of aeronautical carbon brake discs reliably, repeatably and with micrometre precision. This project included an analysis of the need, a functional analysis, and the development of the chosen solution (in particular the dimensioning of our system, and the functional 3D CAD modelling carried out with 3D Experience). '],
    [ 'Projet acamdémique scientifique et technique. Création d\'une application simulant la trajectoire d\'une balle de golf. Cela prend en compte les effets aeérodynamiques et la rotation de la balle du lancement jusqu\'à l\'arrêt total de la balle (choc de la balle à l\'envoi, l\'envol dans les airs, les rebonds (modélisant la rotation de la balle au rebond), la phase de roulement au sol). Projet codé avec Matlab, code d\'un espace utilisateur pour modifier les paramètres impactant la trajectoire.','Scientific and technical academic project. Creation of an application simulating the trajectory of a golf ball. This takes into account the aero-dynamic effects and the rotation of the ball from launch to total stop (impact of the ball at launch, flight through the air, bounces (modelling the rotation of the ball on rebound), the rolling phase on the ground). Project coded with Matlab, code of a user space to modify the parameters impacting the trajectory.'],
    ['Pedagogical-Spreadsheet est une application de type tableur gérant des feuilles de calcul. L\'application rassemble toutes les fonctions essentielles primaires et utiles pour apprendre à manier un tableur (calculs, opérations, diagrammes, ainsi que des jeux permettent de découvrir toutes les fonctionnalités du tableur. Il s\'agit d\'un projet personnel réalisé à 2. Il est codé en Java et utilise la bibliothèque JavaFX et un peu de CSS pour les interfaces.','Pedagogical-Spreadsheet is a spreadsheet application. The application brings together all the essential functions that are primary and useful for learning how to use a spreadsheet (calculations, operations, diagrams, etc.), as well as games to help you discover all the features of the spreadsheet. This is a personal 2-person project, coded in Java using the JavaFX library and a little CSS for the interfaces.'],
    ['Ce projet est le site-web sur lequel vous vous trouvez qui est mon portfolio personnel qui vous permet d\'en découvrir davantage sur moi: mon cursus scolaire, mes différents projets mécaniques et informatiques (personnels et académiques) et ainsi que mes loisirs. Le site a été dévéloppé à l\'aide du framework Angular 15.0.4. Il utilise notamment les langages html, css, typescript et javascript.','This project is the website you are currently visiting, which is my personal portfolio that allows you to find out more about me: my educational background, my various mechanical and IT projects (personal and academic) and my hobbies. The site was developed using the Angular 15.0.4 framework and uses html, css, typescript and javascript.'],
    ['ID-meal est un projet académique en groupe codé entièrement en java. Il permet à partir d\'une sélection d\'aliments, et d\'un type de repas voulu, de proposer des recettes adéquates aux ingrédients que vous possédez chez vous, et à ce que vous désirez. Il utilise la programmation orientée objet, les listes chaînées et se sert de recettes disponibles en open source sur internet. ','ID-meal is an academic group project coded entirely in Java. Based on a selection of foods and the type of meal you want, it suggests recipes that match the ingredients you have at home and what you want. It uses object-oriented programming, linked lists and recipes available as open source on the Internet. ']
  ];
  imageProjets=['assets/ansys.gif', 'assets/disque.JPG','assets/golf.JPG','assets/portfolio.JPG','assets/tableur.JPG', 'assets/projetIdmeal2.JPG'];
  symboleProjets=[
    [ '1','fa-solid fa-gears fa-3x'],
    ['1','fa-solid fa-gears fa-3x'],
    ['2','fa-solid fa-terminal fa-2x', 'fa-solid fa-gears fa-3x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-terminal fa-2x'],
    ['1','fa-solid fa-terminal fa-2x'],
  ]

  tailleImage=[
    [275,400],
    [250,400],
    [250,380],
    [300,400],
    [275,450],
    [275,400]
  ];
  constructor(public param:VariablesGlobales, public route:Router, service: ChangerPageService) {
    param.chemin=this.route.url;
    if(param.chemin=='/projets'){
      service.styleBoutonsHeader=["styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader", "styleButtonHeader"];
    }
  }
}
