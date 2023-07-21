import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-projet-gauche',
  templateUrl: './projet-gauche.component.html',
  styleUrls: ['./projet-gauche.component.css']
})
export class ProjetGaucheComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() symbol: string[] =[];

}
