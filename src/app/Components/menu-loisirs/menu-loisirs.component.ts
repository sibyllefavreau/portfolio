import { Component } from '@angular/core';
import {VariablesGlobales} from "../../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../../changer-page.service";

@Component({
  selector: 'app-menu-loisirs',
  templateUrl: './menu-loisirs.component.html',
  styleUrls: ['./menu-loisirs.component.css']
})
export class MenuLoisirsComponent {
  loisirs=[
    ['Musique', 'Music'],
    ['Peinture', 'Painting'],
    ['Pâtisserie', 'Baking'],
    ['Sport', 'Sport'],
    ['Ecriture', 'Writing']
  ];

  constructor(public param: VariablesGlobales, public route: Router, public service: ChangerPageService) {
    param.chemin = this.route.url;
  }
  onClick1(){
    if(this.param.chemin!='/loisirs/musique'){
      this.onTopDirect();
    }else {
      this.onTheTop();
    }
  }
  onClick2(){
    if(this.param.chemin!='/loisirs/peinture'){
      this.onTopDirect();
    }else {
      this.onTheTop();
    }
  }
  onClick3(){
    if(this.param.chemin!='/loisirs/patisserie'){
      this.onTopDirect();
    }else {
      this.onTheTop();
    }
  }
  onClick4(){
    if(this.param.chemin!='/loisirs/sport'){
      this.onTopDirect();
    }else {
      this.onTheTop();
    }
  }
  onClick5(){
    if(this.param.chemin!='/loisirs/ecriture'){
      this.onTopDirect();
    }else {
      this.onTheTop();
    }
  }
  onTheTop(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 100); // how far to scroll on each step
      }
      else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
  onTopDirect(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0,  0); // how far to scroll on each step
      }
      else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
