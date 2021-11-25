import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaposteriorComponent } from './capturaposterior.component';

describe('CapturaposteriorComponent', () => {
  let component: CapturaposteriorComponent;
  let fixture: ComponentFixture<CapturaposteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaposteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaposteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
