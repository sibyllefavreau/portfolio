import { Component, EventEmitter, Output } from '@angular/core';
import {ChangerPageService} from "../changer-page.service";
import {VariablesGlobales} from "../variablesGlobales";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  texteBouton = [
    ["Mon parcours", "My career"],
    ["Mes projets mécaniques\net informatiques", "My mechanical and\ncomputer projects"],
    ["Mes loisirs", "My hobbies"]
  ];

  constructor(public param: VariablesGlobales, public route: Router, public service: ChangerPageService) {
    param.chemin = this.route.url;
    if (param.chemin == '/') {
      service.styleBoutonsHeader = ["styleButtonHeaderActive", "styleButtonHeader", "styleButtonHeader", "styleButtonHeader", "styleButtonHeader"];
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

