import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteProfileComponent } from './modal-delete-profile.component';

describe('ModalDeleteProfileComponent', () => {
  let component: ModalDeleteProfileComponent;
  let fixture: ComponentFixture<ModalDeleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
