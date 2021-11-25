import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionComponent } from './recomendacion.component';

describe('RecomendacionComponent', () => {
  let component: RecomendacionComponent;
  let fixture: ComponentFixture<RecomendacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
