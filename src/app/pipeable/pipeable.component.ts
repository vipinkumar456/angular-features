import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber,TimeInterval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams,} from '@angular/common/http';
import { of } from 'rxjs';
import { concat } from 'rxjs';

@Component({
  selector: 'app-pipeable',
  templateUrl: './pipeable.component.html',
  styleUrls: ['./pipeable.component.css']
})
export class PipeableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3)
    .pipe(map((x:any) => x * x))
    .subscribe((v) => console.log(`example of pipe: ${v}`));
  }

}
