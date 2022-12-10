import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber,TimeInterval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams,} from '@angular/common/http';
import { of } from 'rxjs';
import { concat,asyncScheduler,scheduled,fromEvent,interval } from 'rxjs';
import { concatAll,combineAll,switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import {forkJoin, from} from 'rxjs';


@Component({
  selector: 'app-scheduler-argument',
  templateUrl: './scheduler-argument.component.html',
  styleUrls: ['./scheduler-argument.component.css']
})
export class SchedulerArgumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const odd$ = from([1,3,5,2]);
const even$ = from([2,4,6]);

// deprecated
forkJoin(odd$, even$);
// suggested change
forkJoin([odd$, even$]);
// or
forkJoin({odd: odd$, even: even$}).subscribe(res=>{console.log(res)})

    concat(of('hello '), of('World'), asyncScheduler).subscribe((x) => console.log(x));

    scheduled([of('concat '), of('All')], asyncScheduler)
  .pipe(concatAll())
  .subscribe((x) => console.log(x));

  fromEvent(document, 'click').pipe(
    switchMap(x => interval( 1000).pipe(
        map(x => x+1)
    ))
);

  }
}
