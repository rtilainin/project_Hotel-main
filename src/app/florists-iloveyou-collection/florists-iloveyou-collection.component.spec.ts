import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristsIloveyouCollectionComponent } from './florists-iloveyou-collection.component';

describe('FloristsIloveyouCollectionComponent', () => {
  let component: FloristsIloveyouCollectionComponent;
  let fixture: ComponentFixture<FloristsIloveyouCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloristsIloveyouCollectionComponent]
    });
    fixture = TestBed.createComponent(FloristsIloveyouCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
