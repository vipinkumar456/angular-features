import { Component, OnInit,Input,Output } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  color = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }

}
