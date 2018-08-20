import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseJsonComponent } from './course-json.component';

describe('CourseJsonComponent', () => {
  let component: CourseJsonComponent;
  let fixture: ComponentFixture<CourseJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
