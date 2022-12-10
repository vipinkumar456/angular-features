import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subject, Subscriber,TimeInterval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams,} from '@angular/common/http';
import { of } from 'rxjs';
import { concat,asyncScheduler,scheduled,fromEvent,interval } from 'rxjs';
import { concatAll,combineAll,switchMap,delay,startWith } from 'rxjs/operators';
import { combineLatest,timer } from 'rxjs';
import {forkJoin, from} from 'rxjs';


@Component({
  selector: 'app-arrayarguments',
  templateUrl: './arrayarguments.component.html',
  styleUrls: ['./arrayarguments.component.css']
})
export class ArrayargumentsComponent implements OnInit,OnDestroy {
  combinedTimers:any;
  combined:any;
  constructor() { }

  ngOnInit(): void {
  console.log('example of combined timer');  
  const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
  const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
  const combinedTimers = combineLatest([firstTimer, secondTimer]);
  this.combinedTimers=combinedTimers.subscribe(value => console.log(value));

  console.log('example of delay timer');

  const observables = [1, 5, 10].map(
    n => of(n).pipe(
      delay(n * 1000),   // emit 0 and then emit n after n seconds
      startWith(0),
    )
  );
  const combined = combineLatest(observables);
  this.combined=combined.subscribe(value =>
    console.log(value));
  }
  ngOnDestroy(): void {
      this.combinedTimers.unsubscribe();
      this.combined.unsubscribe();
  }

}
