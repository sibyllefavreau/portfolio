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
