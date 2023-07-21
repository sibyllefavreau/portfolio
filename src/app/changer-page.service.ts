import {Injectable, OnInit} from '@angular/core';
import{Router} from "@angular/router";
import{VariablesGlobales} from "./variablesGlobales";

@Injectable({
  providedIn: 'root'
})
export class ChangerPageService{

  styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader"];




  clickProjets(){
    this.styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeaderActive","styleButtonHeader","styleButtonHeader"];
  console.log("VariablesGlobales.parametre");
    // return this.styleBoutonsHeader;
  }
  clickAccueil(){
    this.styleBoutonsHeader=["styleButtonHeaderActive","styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader"];
    // return this.styleBoutonsHeader;
  }
  clickCursus(){
    this.styleBoutonsHeader=["styleButtonHeader","styleButtonHeaderActive","styleButtonHeader","styleButtonHeader","styleButtonHeader"];
    // return this.styleBoutonsHeader;
  }
  clickLoisirs(){
    this.styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeaderActive","styleButtonHeader"];
    // return this.styleBoutonsHeader;
  }
}
