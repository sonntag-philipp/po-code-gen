import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTextViewerComponent } from './code-text-viewer.component';

describe('CodeTextViewerComponent', () => {
  let component: CodeTextViewerComponent;
  let fixture: ComponentFixture<CodeTextViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeTextViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTextViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
