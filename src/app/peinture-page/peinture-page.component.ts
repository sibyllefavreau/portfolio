import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-peinture-page',
  templateUrl: './peinture-page.component.html',
  styleUrls: ['./peinture-page.component.css']
})
export class PeinturePageComponent {
  titrePage=['Mes oeuvres artistiques','My artworks'];
  description=['Depuis mon enfance, j’ai toujours aimé peindre et j’ai un attrait pour l’art de manière générale. Mais ne savant pas bien dessiner, j’ai trouvé un compris pour peindre : la peinture numérotée qui me permet de peindre mes photos préférées. Cela est devenu un de mes loisirs préférées pour me reposer et cela me permet de peindre sans réfléchir et de me vider la tête. ','Ever since I was a child, I\'ve loved to paint and I\'m generally drawn to art. But as I\'m not very good at drawing, I\'ve found a new way of painting: numbered paint, which allows me to paint my favourite photos. It\'s become one of my favourite ways of relaxing and it allows me to paint without thinking and clear my head.'];
  photosPeinture=[
    ['assets/peinture11.jpg','assets/peinture12.jpg','assets/peinture13.jpg','assets/peinture14.jpg','assets/peinture15.jpg','assets/peinture16.jpg'],
    ['assets/peinture21.jpg','assets/peinture22.jpg','assets/peinture23.jpg','assets/peinture24.jpg','assets/peinture25.jpg','assets/peinture26.jpg']
    ];
  photoPeintureFinie=['assets/paysage.jpg','assets/colmar.jpg'];
  titreGateau=[['',''],['',''],['',''],['',''],['',''],['','']];
  titrePeinture=[
    ["Peinture d'un paysage", "Landscape painting"],
  ["Peinture de Colmar", "Colmar painting"]
  ];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
    if (param.chemin == '/loisirs/peinture') {
      service.styleBoutonsLoisirs = ["styleButtonHobbies", "styleButtonHobbiesActive", "styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbies"];
    }
  }
}
