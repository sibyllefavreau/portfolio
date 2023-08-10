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
