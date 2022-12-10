import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
@Component({
  selector: 'app-latestfrom',
  templateUrl: './latestfrom.component.html',
  styleUrls: ['./latestfrom.component.css']
})
export class LatestfromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const result = clicks.pipe(withLatestFrom(timer));
result.subscribe(x => console.log(x));
  }

}
