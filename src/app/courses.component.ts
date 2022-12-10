import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { BoundElementPropertyAst } from "@angular/compiler";
@Component({
    selector:'courses',
    template:`<div class="container">
            <h2>{{gettitle()}}</h2>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
            <li>{{c.price | currency : 'INR':true}}</li>
            <button type="button"  [style.background]="isActive?'blue':'skyblue' " class="btn btn-primary mt-3" [class.active]="isActive" (click)="onClick($event)">Save</button><br>
        
            <!-- <input [value]="email" (keyup.enter)="email = $any($event.target).value; onKeyup()">-->
            <input [(ngModel)]="email" (keyup.enter)="onKeyup()">
            <label>{{email}}</label>
            </div>`



})
export class CoursesComponent
{
    title="List of Courses";
    img="https://www.w3schools.com/images/w3schools_green.jpg";
    isActive=false;
    colspan=2;
    onClick($event:any)
    {
        console.log(this.isActive ,$event);
        
    }
    c=
    {
        price:100
    }
    email="avc";
    onKeyup()
    {
       
      

            console.log(this.email);
       
    }
    gettitle()
    {
        return this.title;
    }
    courses;
    constructor(service:CoursesService)
    {
      
        this.courses=service.getCourses();
    }
}