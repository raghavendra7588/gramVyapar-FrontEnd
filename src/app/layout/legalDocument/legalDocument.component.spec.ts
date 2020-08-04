import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDocumentComponent } from './legalDocument.component';

describe('LegalDocumentComponent', () => {
  let component: LegalDocumentComponent;
  let fixture: ComponentFixture<LegalDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
