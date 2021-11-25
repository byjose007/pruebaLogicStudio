import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoAFirmarComponent } from './documento-afirmar.component';

describe('DocumentoAFirmarComponent', () => {
  let component: DocumentoAFirmarComponent;
  let fixture: ComponentFixture<DocumentoAFirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoAFirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoAFirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
