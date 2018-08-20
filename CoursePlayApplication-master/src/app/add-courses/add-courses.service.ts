import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   courses: Course[] = [];
  constructor() { }

  displayCourses()
   {
    return of(this.courses);
  }

  addNewCourse(course: Course) {
    this.courses.push(course);
  }

  fetchDuration(name: string) {
    let searchResult = this.courses.find((course: Course) => course.courseName == name);
    return of<Course>(searchResult);
  }
}
