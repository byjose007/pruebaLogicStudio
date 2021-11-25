import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionescedulaComponent } from './instruccionescedula.component';

describe('InstruccionescedulaComponent', () => {
  let component: InstruccionescedulaComponent;
  let fixture: ComponentFixture<InstruccionescedulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruccionescedulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionescedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
