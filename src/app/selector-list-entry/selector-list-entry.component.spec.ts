import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorListEntryComponent } from './selector-list-entry.component';

describe('SelectorListEntryComponent', () => {
  let component: SelectorListEntryComponent;
  let fixture: ComponentFixture<SelectorListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
