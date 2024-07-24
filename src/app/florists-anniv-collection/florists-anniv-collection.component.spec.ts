import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristsAnnivCollectionComponent } from './florists-anniv-collection.component';

describe('FloristsAnnivCollectionComponent', () => {
  let component: FloristsAnnivCollectionComponent;
  let fixture: ComponentFixture<FloristsAnnivCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloristsAnnivCollectionComponent]
    });
    fixture = TestBed.createComponent(FloristsAnnivCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
