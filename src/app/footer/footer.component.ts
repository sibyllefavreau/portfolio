import {Component, Input} from '@angular/core';
import {ChangerPageService} from "../changer-page.service";
import {VariablesGlobales} from "../variablesGlobales";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  phrase=['Pour plus d\'informations, contactez-moi','For more information, contact me'];

  @Input() urlRoute: string | undefined;
  constructor(public service: ChangerPageService, public param:VariablesGlobales) {
  }
}
