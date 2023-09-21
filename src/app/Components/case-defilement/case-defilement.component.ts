import {Component, Input} from '@angular/core';
import {VariablesGlobales} from "../../variablesGlobales";

@Component({
  selector: 'app-case-defilement',
  templateUrl: './case-defilement.component.html',
  styleUrls: ['./case-defilement.component.css']
})
export class CaseDefilementComponent {
  @Input() styleClass:string |undefined
  @Input() titreSection:string |undefined
  @Input() titreGateau:string[][] =[['']];
  @Input() photos:string[] =[''];

  numero: number =0;

  constructor(public param: VariablesGlobales) {
  }
  defilerGauche(){
    if (this.numero!=0){
      this.numero=this.numero-1;
    }
  }
  defilerDroite(){
    if(this.numero+2!=this.titreGateau.length-1){
      this.numero=this.numero+1;
    }
  }
}



