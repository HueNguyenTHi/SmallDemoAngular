import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForlazyLoadComponent } from './test-forlazy-load.component';

describe('TestForlazyLoadComponent', () => {
  let component: TestForlazyLoadComponent;
  let fixture: ComponentFixture<TestForlazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestForlazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForlazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
