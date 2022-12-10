import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.testCode();
  }

  testCode(){
    let arr=['a','c','d','b','c','a'];
    for(var i=0;i<arr.length;i++){
      let isFound=false;
        for(var j=0;j<arr.length;j++){
            if(arr[i]==arr[j] && i!=j){
                isFound=true;
                console.log(arr[j]);
            }
        }
        if(isFound){
        break;
        }
    } 
  }

}
