import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LoginComponent } from './login/login.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [
    LoginComponent,
    StudentDetailsComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports:[
    LoginComponent,
    StudentDetailsComponent
  ]
})
export class StudentModule { }
