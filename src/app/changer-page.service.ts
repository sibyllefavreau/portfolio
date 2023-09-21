import {Injectable, OnInit} from '@angular/core';
import{Router} from "@angular/router";
import{VariablesGlobales} from "./variablesGlobales";

@Injectable({
  providedIn: 'root'
})
export class ChangerPageService{

  styleBoutonsHeader=["styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader","styleButtonHeader"];
  styleBoutonsLangue=["langueFr", "langueEn"];
  styleBoutonsLoisirs=["styleButtonHobbies","styleButtonHobbies","styleButtonHobbies","styleButtonHobbies","styleButtonHobbies"];

}
