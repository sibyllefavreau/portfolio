import {Component, Input} from '@angular/core';
import {ChangerPageService} from "../changer-page.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() urlRoute: string | undefined;
  constructor(public service: ChangerPageService) {
    console.log(this.urlRoute);
  }
}
