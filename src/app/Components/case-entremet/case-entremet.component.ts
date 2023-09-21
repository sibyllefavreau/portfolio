import {Component, Input} from '@angular/core';

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
}
