import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-submain',
  templateUrl: './submain.component.html',
  styleUrls: ['./submain.component.css']
})
export class SubmainComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  @Input() channelName:any;
  @ContentChild('templatereferencevariable') templatereferencevariable:any
  constructor() { 
    
    console.log('Child constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
      console.log('child onchanges called');
      console.log('onchange -'+this.templatereferencevariable)
  }
  ngOnInit(): void {
    console.log('child init called');
    console.log('onit -'+this.templatereferencevariable)
  }

  ngDoCheck(): void {
      console.log('child do check is called');
      console.log('ondocheck -'+this.templatereferencevariable)
  }

  ngAfterContentInit(): void {
      console.log('child after content init called');
      console.log('onaftercontentinit -'+this.templatereferencevariable)
  }

  ngAfterContentChecked(): void {
      console.log('after content checked called');
  }

  ngAfterViewInit(): void {
      console.log('In after View Init');
  }

  ngAfterViewChecked(): void {
      console.log('In after View Checked');
  }
}
