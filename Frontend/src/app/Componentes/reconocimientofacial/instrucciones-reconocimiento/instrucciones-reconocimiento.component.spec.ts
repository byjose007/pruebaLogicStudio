import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesReconocimientoComponent } from './instrucciones-reconocimiento.component';

describe('InstruccionesReconocimientoComponent', () => {
  let component: InstruccionesReconocimientoComponent;
  let fixture: ComponentFixture<InstruccionesReconocimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruccionesReconocimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionesReconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
