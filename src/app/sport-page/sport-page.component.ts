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

  messageErreur=["[Cette page est en cours de construction elle n'est malheureusement pas encore finie, revenez plus tard et vous aurez peut-être la chance de la voir aboutie]","[This page is still under construction, but unfortunately it's not finished yet. Come back later and you may be lucky enough to see it completed.]"];

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
