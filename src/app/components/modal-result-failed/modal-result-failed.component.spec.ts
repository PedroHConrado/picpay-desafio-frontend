import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResultFailedComponent } from './modal-result-failed.component';

describe('ModalResultFailedComponent', () => {
  let component: ModalResultFailedComponent;
  let fixture: ComponentFixture<ModalResultFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResultFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResultFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
