import { Component, OnInit } from '@angular/core';
import { CourseJsonService } from './course-json.service';

import { Course } from './course';

@Component({
  selector: 'app-course-json',
  templateUrl: './course-json.component.html',
  styleUrls: ['./course-json.component.css']
})
export class CourseJsonComponent implements OnInit {
  
  courses: Course[] = [];
  
  constructor(private courseJsonService: CourseJsonService) {}
  ngOnInit() {
    this.displayCourseDetails();
  }
  
  displayCourseDetails() {
    this.courseJsonService.displayCourses().subscribe(
      (courseDetails: Course[]) => this.courses = courseDetails);
    
  }
}
