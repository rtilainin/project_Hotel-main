import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristsComponent } from './florists.component';

describe('FloristsComponent', () => {
  let component: FloristsComponent;
  let fixture: ComponentFixture<FloristsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloristsComponent]
    });
    fixture = TestBed.createComponent(FloristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
