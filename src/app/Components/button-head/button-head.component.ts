import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-head',
  templateUrl: './button-head.component.html',
  styleUrls: ['./button-head.component.css']
})
export class ButtonHeadComponent {
  @Input() texteBouton: string | undefined;
  @Input() styleClass:string="styleDefault"
  @Input() anglais: string | undefined;
}
