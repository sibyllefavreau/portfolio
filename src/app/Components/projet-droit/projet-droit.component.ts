import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-projet-droit',
  templateUrl: './projet-droit.component.html',
  styleUrls: ['./projet-droit.component.css']
})
export class ProjetDroitComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() symbol: string[] =[];
  @Input() taille: number[] =[0,0];
}
