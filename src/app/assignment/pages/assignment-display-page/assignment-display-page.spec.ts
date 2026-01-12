import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDisplayPage } from './assignment-display-page';

describe('AssignmentDisplayPage', () => {
  let component: AssignmentDisplayPage;
  let fixture: ComponentFixture<AssignmentDisplayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentDisplayPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentDisplayPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
