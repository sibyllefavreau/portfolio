import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-musique-page',
  templateUrl: './musique-page.component.html',
  styleUrls: ['./musique-page.component.css']
})
export class MusiquePageComponent {
  titrePage=['Ma pratique de la musique','My music practice'];
  paragraphe=['J’ai étudié mes 10 premières années au conservatoire régional de Nantes en horaires aménagés au collège et au lycée. J’ai ainsi pu participé à de nombreux projets, et faire de nombreux concerts que ce soient en musique de chambre, en percussions africaines, en choeur, en orchestre harmonique ou en solo de saxophone accompagné par un piano.','For the first 10 years of my life, I studied at the Conservatoire Régional de Nantes, with special timetables at secondary school. As a result, I was able to take part in a number of projects and chamber music, African percussion, choir, harmonic orchestra or saxophone solo accompanied by piano.'];
  year= ['2010', '2017', '2018', '2019', '2019', '2021', '2021'];
  description=[
    ["Entrée au conservatoire en saxophone", "Entry to the conservatoire in saxophone"],
    ["Solfège : Certificat de fin d’études mention bien", "Music theory: Certificate of completion with distinction"],
    ["Participation aux folles journées à Nantes","Taking part in the 'folles journées' in Nantes"],
    ["Saxo : Certificat de fin d’études musicales","Saxo : Certificat de fin d’études musicales"],
    ["Carte blanche : arrangement d’un medley pour 7 instruments","Carte blanche: arrangement of a medley for 7 instruments"],
    ["Concert à la Rotonde (salle de spectacle de l'INSA) d’un arrangement d’un medley pour quintette de saxophones","Concert at the Rotonde (INSA concert hall) of an arrangement of a medley for saxophone quintet"],
    ["Concert à la Rotonde (salle de spectacle de l'INSA) en quatuor de saxophone (soprano pour ma part)","Concert at the Rotonde (INSA concert hall) with a saxophone quartet (soprano for me)"]
  ];
  images=[
    ['assets/noteMusique.png','assets/saxophoneTransparent.png'],
    ['assets/cléSol.png', 'assets/cléUt.png'],
    ['assets/folleJournee.png','assets/saxophoneTransparent.png'],
    ['assets/noteMusique.png','assets/saxophoneTransparent.png'],
    ['assets/partition.png', 'assets/noteMusique.png'],
    ['',''],
    ['','']
  ];


  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
    if (param.chemin == '/loisirs/musique') {
      service.styleBoutonsLoisirs = ["styleButtonHobbiesActive", "styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbies"];
    }
  }
}
