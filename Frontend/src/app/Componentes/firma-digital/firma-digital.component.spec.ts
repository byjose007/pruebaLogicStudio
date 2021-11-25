import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaDigitalComponent } from './firma-digital.component';

describe('FirmaDigitalComponent', () => {
  let component: FirmaDigitalComponent;
  let fixture: ComponentFixture<FirmaDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmaDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
