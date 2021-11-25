import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptacionfirmaComponent } from './aceptacionfirma.component';

describe('AceptacionfirmaComponent', () => {
  let component: AceptacionfirmaComponent;
  let fixture: ComponentFixture<AceptacionfirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptacionfirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptacionfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
