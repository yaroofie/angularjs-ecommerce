import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingStatusComponent } from './sending-status.component';

describe('SendingStatusComponent', () => {
  let component: SendingStatusComponent;
  let fixture: ComponentFixture<SendingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
