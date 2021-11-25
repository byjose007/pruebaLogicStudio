import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebavidaComponent } from './pruebavida.component';

describe('PruebavidaComponent', () => {
  let component: PruebavidaComponent;
  let fixture: ComponentFixture<PruebavidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebavidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebavidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
