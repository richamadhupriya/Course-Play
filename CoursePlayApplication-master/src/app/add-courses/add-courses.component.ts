import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CourseService } from './add-courses.service';


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  searchResult: Course[];
  result:string;
  courses: Course[] = [
    {
      courseName:"Course 1",
      courseDuration:5
    },
    {
      courseName:"Course 2",
      courseDuration:8
    },
    {
      courseName:"Course 3",
      courseDuration:7
    },
    {
      courseName:"Course 4",
      courseDuration:6
    }
  ];
  queryCourse: string = "";
  
  AddCoursesForm:FormGroup;
  SearchCoursesForm:FormGroup;
 
  cName:string="";
  duration:number;
  serachName:string="";

  
  constructor(private frmBuilder: FormBuilder/*, private courseService: CourseService*/) { 
    this.AddCoursesForm = frmBuilder.group({
     
      cName: ['',Validators.compose([
                      Validators.required,
                      Validators.pattern('[A-Za-z0-9 ]+')
           ])],
     duration: ['',Validators.compose([
                         Validators.required,
                          Validators.pattern('^[0-9](\.[0-9]+)?$'),
                          
            ])],
     
    });
    this.SearchCoursesForm = frmBuilder.group({
      serachName: ['',Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9 ]+')
        ])],
    });
  }/*
  ngOnInit() { this.displayCourses(); }
  
  add() {
    this.courseService.addNewCourse(this.AddCoursesForm.value);
  }

  displayCourses() {
    this.courseService.displayCourses().subscribe((courseName: Course[]) => this.courses = courseName);
  }
  

  fetchDuration() {
    this.courseService.fetchDuration(this.queryCourse).subscribe(searchResult => this.searchResult = searchResult);
    
  }*/
  ngOnInit() { }
  add(event:any) {
    event.preventDefault()

    let name = event.target.elements[0].value;
    let duration = event.target.elements[1].value;
    this.courses.push({ 'courseName': name, 'courseDuration': duration });
  }

  fetchDuration(event:any) {
    event.preventDefault();
    let name = event.target.elements[0].value;
    this.result = this.courses.find((course) => course.courseName == name).courseDuration;
  }

}
