import { FormGroup, FormControl, FormArray, Form, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  id:string;
  name:string;
  cansave:true;
  
  title = 'Angular App';
  courses=[{ id:1,name:'vipin'},
          { id:2,name:'rites'},
          ];
  viewMode = "map";
  post= {
  tit :"title",
  isFavorite:true
}
onFavoriteChanged(isFavorite:any)
{
  console.log("changed",isFavorite);
}
add()
{
  const todo=
  {
    
    id:this.id,
    name:this.name
  }
 this.todoadd(todo);
}
 todoadd(todo:any)
 {
      console.log(todo);
      this.courses.push(todo);
 }
 
Remove(course:any)
{
    let index=this.courses.indexOf(course);
    console.log(index);
    this.courses.splice(index,1);
}

  constructor() { }

  ngOnInit(): void {
    
  }
  // form =new FormGroup({
  //  name: new FormControl('',Validators.required),
  //  contact : new FormGroup({
  //   email : new FormControl(),
  //   phone : new FormControl()
  //  }),
  // });
     form:any;
  // contructor(fb:FormBuilder)
  // {
  //  this.form= fb.group({
  //     name : ['',Validators.required],
  //     contact : fb.group({
  //       email:[],
  //       phone:[]
  //     }),
  //   });
  // }
 

}
