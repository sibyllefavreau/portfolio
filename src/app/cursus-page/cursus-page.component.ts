import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-cursus-page',
  templateUrl: './cursus-page.component.html',
  styleUrls: ['./cursus-page.component.css']
})
export class CursusPageComponent {
  constructor(param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin == '/cursus') {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader", "styleButtonHeader", "styleButtonHeader"];
    }
  }
}
