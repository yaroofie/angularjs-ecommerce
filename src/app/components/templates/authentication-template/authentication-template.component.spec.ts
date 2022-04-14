import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationTemplateComponent } from './authentication-template.component';

describe('AuthenticationTemplateComponent', () => {
  let component: AuthenticationTemplateComponent;
  let fixture: ComponentFixture<AuthenticationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
