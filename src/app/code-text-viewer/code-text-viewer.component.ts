import { Component, Input } from "@angular/core";

@Component({
  selector: 'po-code-text-viewer',
  templateUrl: './code-text-viewer.component.html',
  styleUrls: ['./code-text-viewer.component.scss']
})
export class CodeTextViewerComponent {

  @Input()
  public code?: string;

  public copyCode(): void {
    if (this.code) {
      navigator.clipboard.writeText(this.code);
    }
  }
}
