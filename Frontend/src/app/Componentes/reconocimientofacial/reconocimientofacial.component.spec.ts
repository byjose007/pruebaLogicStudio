import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientofacialComponent } from './reconocimientofacial.component';

describe('ReconocimientofacialComponent', () => {
  let component: ReconocimientofacialComponent;
  let fixture: ComponentFixture<ReconocimientofacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientofacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientofacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
