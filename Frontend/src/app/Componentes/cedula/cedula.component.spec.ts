import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaComponent } from './cedula.component';

describe('CedulaComponent', () => {
  let component: CedulaComponent;
  let fixture: ComponentFixture<CedulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
