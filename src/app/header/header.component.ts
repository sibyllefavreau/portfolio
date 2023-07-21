import {Component, HostListener, Input} from '@angular/core';
import {ChangerPageService} from "../changer-page.service";
import {VariablesGlobales} from "../variablesGlobales";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  texte=[
    ['Accueil', 'Home'],
    ['Cursus', 'Curriculum'],
    ['Projets', 'Projects'],
    ['Loisirs', 'Hobbies'],
    ['Contact', 'Contact']
  ]
  stockageLangue: String|null;
  intLangue: number;

  constructor(public service: ChangerPageService, public param:VariablesGlobales) {
        this.stockageLangue=this.getData();
        if(this.stockageLangue==null){
          this.stockageLangue='0';
          this.intLangue=+this.stockageLangue;
        }else{
          this.intLangue=+this.stockageLangue;
        }
  }

  changerLangueFr(){
    this.param.langue=0;
    this.saveDataFr();
    this.stockageLangue='0';
    this.intLangue=+this.stockageLangue;
  }
  changerLangueEn(){
    this.param.langue=1;
    this.saveDateEn();
    this.stockageLangue='1';
    this.intLangue=+this.stockageLangue;
  }
  saveDataFr(){
    sessionStorage.setItem('langue','0');
  }
  saveDateEn(){
    sessionStorage.setItem('langue', '1');
  }
  getData(){
    return sessionStorage.getItem('langue');
  }

  onClick1(){
    this.service.clickAccueil();
      }
  onClick2(){
    this.service.clickCursus();
  }
  onClick3(){
    this.service.clickProjets();
  }
  onClick4(){
    this.service.clickLoisirs();
  }
}


