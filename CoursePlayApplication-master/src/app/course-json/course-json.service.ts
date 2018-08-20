import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseJsonService {

  path: string = '/assets/courses.json'
  constructor(private http: HttpClient) { }

  displayCourses() {
    return this.http.get<Course[]>(this.path);
  }
}
