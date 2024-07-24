import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristsWeddCollectionComponent } from './florists-wedd-collection.component';

describe('FloristsWeddCollectionComponent', () => {
  let component: FloristsWeddCollectionComponent;
  let fixture: ComponentFixture<FloristsWeddCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloristsWeddCollectionComponent]
    });
    fixture = TestBed.createComponent(FloristsWeddCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
