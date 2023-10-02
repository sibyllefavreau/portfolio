import {Component, Input} from '@angular/core';
import {VariablesGlobales} from "../../variablesGlobales";
import {Router} from "@angular/router";
import {ChangerPageService} from "../../changer-page.service";

@Component({
  selector: 'app-case-entremet',
  templateUrl: './case-entremet.component.html',
  styleUrls: ['./case-entremet.component.css']
})
export class CaseEntremetComponent {
  @Input() titreGateau: string | undefined;
  @Input() photoGateau: string | undefined;
  @Input() photoPartGateau: string | undefined;
  @Input() schemaGateau: string | undefined;
  @Input() description: string | undefined;

  constructor(public param: VariablesGlobales) {
  }
}
