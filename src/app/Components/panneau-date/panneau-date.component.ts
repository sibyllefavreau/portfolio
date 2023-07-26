import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-panneau-date',
  templateUrl: './panneau-date.component.html',
  styleUrls: ['./panneau-date.component.css']
})
export class PanneauDateComponent {
  @Input() date: string | undefined;
}
