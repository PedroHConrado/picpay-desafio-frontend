import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResultSuccessComponent } from './modal-result-success.component';

describe('ModalResultSuccessComponent', () => {
  let component: ModalResultSuccessComponent;
  let fixture: ComponentFixture<ModalResultSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResultSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResultSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
