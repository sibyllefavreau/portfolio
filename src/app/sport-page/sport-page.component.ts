import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-sport-page',
  templateUrl: './sport-page.component.html',
  styleUrls: ['./sport-page.component.css']
})
export class SportPageComponent {
  titrePage=['Ma pratique du sport','My sports activities'];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
    if (param.chemin == '/loisirs/sport') {
      service.styleBoutonsLoisirs = ["styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbiesActive", "styleButtonHobbies"];
    }
  }
}
