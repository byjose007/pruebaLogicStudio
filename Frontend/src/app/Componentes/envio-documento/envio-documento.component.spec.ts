import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDocumentoComponent } from './envio-documento.component';

describe('EnvioDocumentoComponent', () => {
  let component: EnvioDocumentoComponent;
  let fixture: ComponentFixture<EnvioDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
