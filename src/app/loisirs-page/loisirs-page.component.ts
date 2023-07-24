import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-loisirs-page',
  templateUrl: './loisirs-page.component.html',
  styleUrls: ['./loisirs-page.component.css']
})
export class LoisirsPageComponent {
  titrePage=['Mes loisirs', 'My hobbies'];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin == '/loisirs') {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
  }
}
