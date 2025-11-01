import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloanComponent } from './viewloan.component';

describe('ViewloanComponent', () => {
  let component: ViewloanComponent;
  let fixture: ComponentFixture<ViewloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewloanComponent]
    });
    fixture = TestBed.createComponent(ViewloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
