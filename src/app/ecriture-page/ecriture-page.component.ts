import { Component } from '@angular/core';
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-ecriture-page',
  templateUrl: './ecriture-page.component.html',
  styleUrls: ['./ecriture-page.component.css']
})
export class EcriturePageComponent {
  titrePage=['Mes oeuvres littéraires','My literary works'];
  messageErreur=["[Cette page est en cours de construction elle n'est malheureusement pas encore finie, revenez plus tard et vous aurez peut-être la chance de la voir aboutie]","[This page is still under construction, but unfortunately it's not finished yet. Come back later and you may be lucky enough to see it completed.]"];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
    if (param.chemin == '/loisirs/ecriture') {
      service.styleBoutonsLoisirs = ["styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbies", "styleButtonHobbiesActive"];
    }
  }
}
