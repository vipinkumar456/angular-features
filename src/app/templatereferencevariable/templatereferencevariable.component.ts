import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariable',
  templateUrl: './templatereferencevariable.component.html',
  styleUrls: ['./templatereferencevariable.component.css']
})
export class TemplatereferencevariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(itm:any){
    console.log(itm);
  }
}
