import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-patisserie-page',
  templateUrl: './patisserie-page.component.html',
  styleUrls: ['./patisserie-page.component.css']
})
export class PatisseriePageComponent {
  titrePage=['Mes desserts','My desserts'];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
    if (param.chemin == '/loisirs/patisserie') {
      service.styleBoutonsLoisirs = ["styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbiesActive", "styleButtonHobbies", "styleButtonHobbies"];
    }
  }
}
