import { Injectable } from '@angular/core';
import{Router} from "@angular/router";
import{ChangerPageService} from "./changer-page.service";

@Injectable()
export class VariablesGlobales {
  constructor(public route:Router ) {
  }
  chemin: string = this.route.url ;
  langue: number=0;
}
