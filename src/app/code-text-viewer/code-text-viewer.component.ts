import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'po-code-text-viewer',
  templateUrl: './code-text-viewer.component.html',
  styleUrls: ['./code-text-viewer.component.scss']
})
export class CodeTextViewerComponent implements OnInit {

  @Input()
  public code?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
