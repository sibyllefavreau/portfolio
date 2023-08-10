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
