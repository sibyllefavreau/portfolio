import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bulle-musique',
  templateUrl: './bulle-musique.component.html',
  styleUrls: ['./bulle-musique.component.css']
})
export class BulleMusiqueComponent {
  @Input() annee: string | undefined;
  @Input() images: string[]=[""];
  @Input() description: string | undefined;
}
