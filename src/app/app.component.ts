import {Component, HostListener, Renderer2} from '@angular/core';
import {ChangerPageService} from "./changer-page.service";
import{Router} from "@angular/router";
import {VariablesGlobales} from "./variablesGlobales";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(public service: ChangerPageService) {
  //
  // }

  title = 'portfolioSibylle';

  largeurEcran: number;

  constructor(public renderer: Renderer2, public param: VariablesGlobales) {
    // Initialiser la largeur de l'écran au chargement du composant
    this.largeurEcran = window.innerWidth;
    param.largeurEcran=this.largeurEcran;
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event, param: VariablesGlobales): void {
    this.largeurEcran = window.innerWidth;
    param.largeurEcran=this.largeurEcran;
  }
}
