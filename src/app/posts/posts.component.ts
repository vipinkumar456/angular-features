
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber,TimeInterval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams,} from '@angular/common/http';
import { of } from 'rxjs';
import { concat } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mySubscription:any;
  mySubscription2:any;
tasks:any;
posts:any;
private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) 
    {
     
    }
    ngOnInit(): void
    {
     this.http.get(this.url)
     .subscribe(response =>
       {
         this.tasks = response; 
         console.log(response );
         console.log(this.tasks);
       
       }
 
     )
     const type= this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((elm:any)=>this.http.get('https://jsonplaceholder.typicode.com/posts'),concat()));
    //  const types=type.subscribe(res=>{console.log(res)});
 
    console.log('example of subject');
     const subject=new Subject();
    const type1=subject.subscribe(res=>{console.log(res)})
    const type2=subject.subscribe(res=>{console.log(res)})
   //  subject.subscribe(res=>console.log(res));
    const result=type.subscribe(subject);
     this.observableExample();
    }

    observableExample(){
      let promisearray=[{ name:'promisearray',phone:'12' },
                        { name:'v',phone:'12' },
                        { name:'v',phone:'12' }]
  
      const promise=new Promise(resolve=>{
        setInterval(()=>{
          resolve(promisearray);
        },1000)
      })
  
      promise.then(res=>{ console.log(res)
      })
  
      // observable 
      const observable =new Observable(subscribe=>{subscribe.next(Math.random())})
      // const observable=new Observable(subscribe=>{
      //   let array=[{ name:'observablearray',phone:'12' },
      //   { name:'v',phone:'12' },
      //   { name:'v',phone:'12' }]
      //   let cal:any=[1,2,3]
      //   let counter=0;
      //   array.map(elm=>{
      //     return elm.name='abc'
      //   })
      //   setInterval(()=>{
         
      //    counter=counter+1;
      //     subscribe.next(counter);
      //     },1000)
      //   // subscribe.next(array);  
      //   })
  
      // subscriber 1
     this.mySubscription=  observable.pipe(map(res=>{ return res })).subscribe(res=>{
        console.log('firstSubscription');     
        console.log(res);
      })
      // subscriber 2
      this.mySubscription2=  observable.pipe().subscribe(res=>{
        console.log('secondsubscription')
        console.log(res);
      })
  
  
      const subject=new Subject();
      // subscriber 1
      subject.subscribe(res=>console.log('subject1 '+res))
      // subscriber 2
      subject.subscribe(res=>console.log('subject2 '+res))
      subject.next(Math.random());
      
      console.log('pipeable example');
      of(1, 2, 3)
    .pipe(map((x:any) => x * x))
    .subscribe((v) => console.log(`example of pipe: ${v}`));
  
  
    }
    createPost(input:HTMLInputElement)

    {
   let post:any ={title:input.value}
   console.log(post);
    input.value='';
      this.http.post(this.url,JSON.stringify(post))
      .subscribe(response =>
        {
       post.id=response;
       console.log(response+'v');
    
       this.tasks.splice(0, 0,post);
          console.log(response);  
        
        })
    }
    updatePost(task:any)
    {
        console.log(task);
        console.log(task.body);
        this.http.patch(this.url+'/'+task.id,JSON.stringify({isRead:true}))
        .subscribe(response=>
          {
            console.log(response);
          });
    }
    DeletePost(task:any)
    {
        
      console.log("vipin");
      console.log(task);
        this.http.delete(this.url+'/'+task.id)
        .subscribe(response=>
          {
            let index=this.tasks.indexOf(task);
            console.log(index);
            this.tasks.splice(index,1);
            console.log(response);
          }); 
    }


}
