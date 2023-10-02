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
  titreLoisirs=[
    ['Musique', 'Music'],
    ['Peinture', 'Painting'],
    ['Pâtisserie', 'Baking'],
    ['Sport', 'Sport'],
    ['Ecriture', 'Writing']
  ];

  constructor(public param: VariablesGlobales, public route: Router, service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin.startsWith('/loisirs')) {
      service.styleBoutonsHeader = ["styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeaderActive", "styleButtonHeader"];
    }
  }
  onTopDirect() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, 0); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
