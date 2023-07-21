import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-titre-page',
  templateUrl: './titre-page.component.html',
  styleUrls: ['./titre-page.component.css']
})
export class TitrePageComponent {
  @Input() texteTitre: string | undefined;
}
