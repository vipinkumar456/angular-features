
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber,TimeInterval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams,} from '@angular/common/http';
import { of } from 'rxjs';
import { concat } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.subject();
    this.subjectapiexample();
  }

  subject(){
    const subject=new Subject();
      // subscriber 1
      subject.subscribe(res=>console.log('subject1 '+res))
      // subscriber 2
      subject.subscribe(res=>console.log('subject2 '+res))
      subject.next(Math.random());

 
  }

  subjectapiexample(){
    const type= this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((elm:any)=> elm));
    //  const types=type.subscribe(res=>{console.log(res)});
    // const type= this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((elm:any)=>this.http.get('https://jsonplaceholder.typicode.com/posts'),concat()));
    console.log('example of subject');
     const subject=new Subject();
    const type1=subject.subscribe(res=>{console.log(res)})
    const type2=subject.subscribe(res=>{console.log(res)})
   //  subject.subscribe(res=>console.log(res));
    const result=type.subscribe(subject);
  }
}
