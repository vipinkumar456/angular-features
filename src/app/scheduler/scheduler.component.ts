import { Component, OnInit } from '@angular/core';
import { Observable, asyncScheduler, queueScheduler, asapScheduler, merge } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import {concat, of } from 'rxjs';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    concat(of('hello '), of('World'), asyncScheduler).subscribe((x) => console.log(x));
    console.log('script starting');
    let queueScheduler$=of('Queue Scheduler',queueScheduler)
    let asyncScheduler$=of('Async Scheduler',asyncScheduler)
    let asapScheduler$=of('Asap Scheduler',asapScheduler)
    merge(queueScheduler$,asyncScheduler$,asapScheduler$).subscribe((res)=>{
      console.log(res);
    })
    console.log('script Ending');
    this.scheduler();
  }

  scheduler(){
    
    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).pipe(
      observeOn(asyncScheduler)
    );
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x)
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
         console.log('done');
      }
    });
    console.log('just after subscribe');
  }
}
