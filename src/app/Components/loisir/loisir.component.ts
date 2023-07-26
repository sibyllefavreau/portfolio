import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loisir',
  templateUrl: './loisir.component.html',
  styleUrls: ['./loisir.component.css']
})
export class LoisirComponent {
  @Input() passion: string | undefined;
  @Input() image: string | undefined;
}
