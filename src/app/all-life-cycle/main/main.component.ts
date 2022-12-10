import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy,DoCheck{
  isCounter:any
  channelName:any;
  isChild:boolean=true;
  constructor(
  ) {
    console.log('parent Constructor called');
  }

  ngOnInit(): void {
    console.log('parent init called');
    let counter=0
  //  this.isCounter= setInterval(()=>{
  //     counter=counter+1;
      
  //   },1000)
  //   console.log(counter);
  }
  ngDoCheck(): void {
      console.log('parent do check is called');
  }

  toggle(){
    this.isChild=!this.isChild;
  }

  ngOnDestroy() {
      clearInterval(this.isCounter);
  }

}
