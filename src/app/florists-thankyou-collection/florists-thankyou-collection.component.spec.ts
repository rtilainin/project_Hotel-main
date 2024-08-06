import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristsThankyouCollectionComponent } from './florists-thankyou-collection.component';

describe('FloristsThankyouCollectionComponent', () => {
  let component: FloristsThankyouCollectionComponent;
  let fixture: ComponentFixture<FloristsThankyouCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloristsThankyouCollectionComponent]
    });
    fixture = TestBed.createComponent(FloristsThankyouCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
