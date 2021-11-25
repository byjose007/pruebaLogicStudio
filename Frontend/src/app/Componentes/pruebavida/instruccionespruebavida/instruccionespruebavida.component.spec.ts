import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionespruebavidaComponent } from './instruccionespruebavida.component';

describe('InstruccionespruebavidaComponent', () => {
  let component: InstruccionespruebavidaComponent;
  let fixture: ComponentFixture<InstruccionespruebavidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruccionespruebavidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionespruebavidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
