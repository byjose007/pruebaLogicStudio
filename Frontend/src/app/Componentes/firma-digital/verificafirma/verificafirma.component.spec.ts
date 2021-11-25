import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificafirmaComponent } from './verificafirma.component';

describe('VerificafirmaComponent', () => {
  let component: VerificafirmaComponent;
  let fixture: ComponentFixture<VerificafirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificafirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificafirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
