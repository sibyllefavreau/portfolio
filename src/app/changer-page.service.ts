import {Injectable, OnInit} from '@angular/core';
import{Router} from "@angular/router";
import{VariablesGlobales} from "./variablesGlobales";

@Injectable({
  providedIn: 'root'
})
export class ChangerPageService{

  styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader"];
  styleBoutonsLangue=["langueFr", "langueEn"];



  clickProjets(){
    this.styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeaderActive","styleButtonHeader","styleButtonHeader"];
  }
  clickAccueil(){
    this.styleBoutonsHeader=["styleButtonHeaderActive","styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader"];
  }
  clickCursus(){
    this.styleBoutonsHeader=["styleButtonHeader","styleButtonHeaderActive","styleButtonHeader","styleButtonHeader","styleButtonHeader"];
  }
  clickLoisirs(){
    this.styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeaderActive","styleButtonHeader"];
  }
}
