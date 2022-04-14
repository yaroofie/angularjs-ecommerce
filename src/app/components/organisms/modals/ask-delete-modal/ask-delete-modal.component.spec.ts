import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskDeleteModalComponent } from './ask-delete-modal.component';

describe('AskDeleteModalComponent', () => {
  let component: AskDeleteModalComponent;
  let fixture: ComponentFixture<AskDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
