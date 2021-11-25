import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturafrontalComponent } from './capturafrontal.component';

describe('CapturafrontalComponent', () => {
  let component: CapturafrontalComponent;
  let fixture: ComponentFixture<CapturafrontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturafrontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturafrontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
