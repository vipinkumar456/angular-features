import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber,TimeInterval } from 'rxjs';
import { filter, subscribeOn } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams,} from '@angular/common/http';
import { of } from 'rxjs';
import { concat } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  mySubscription:any;
  mySubscription2:any;
  constructor() { }

  ngOnInit(): void {
    this.observable();
    this.promise();
    this.observableExample();
    
  }

 getData(a:any):Observable<any>{
   return a;
 }

  observable(){
    const observable =new Observable(subscribe=>{subscribe.next(Math.random())})
    const a =new Observable(subscribe=>{subscribe.next(12)})
    a.subscribe((res)=>{console.log(res)},(err)=>{console.log(err)})
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
    //     // subscribe.next(counter);
    //     },1000)
    //   subscribe.next(array);  
    //   })

      this.mySubscription=  observable.pipe(map(res=>{ return res })).subscribe(res=>{
        console.log('firstSubscription');     
        console.log(res);
      })
      // subscriber 2
      this.mySubscription2=  observable.pipe().subscribe(res=>{
        console.log('secondsubscription')
        console.log(res);
      })
  }

  promise(){
    let promisearray=[{ name:'promisearray',phone:'12' },
                        { name:'v',phone:'12' },
                        { name:'v',phone:'12' }]
  
      const promise=new Promise(resolve=>{
        setInterval(()=>{
          resolve('1');
          resolve('2');
          resolve('3');
          resolve('4');
        },1000)
      })
  
      promise.then(res=>{ console.log(res)
      })
  }

  observableExample(){
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
  }

  
}

