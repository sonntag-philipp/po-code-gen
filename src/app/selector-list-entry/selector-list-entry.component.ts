import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SelectorModel } from '../models/selector-model';

@Component({
  selector: 'po-selector-list-entry',
  templateUrl: './selector-list-entry.component.html',
  styleUrls: ['./selector-list-entry.component.scss'],
})
export class SelectorListEntryComponent {
  @Input()
  public model = new SelectorModel();

  @Output()
  public modelChange = new EventEmitter<SelectorModel>();
}
