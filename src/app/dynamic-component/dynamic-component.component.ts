import { AfterContentInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { DynamicSubComponent } from '../dynamic-sub/dynamic-sub.component';
import { PlaceholderdirectiveDirective } from '../placeholderdirective.directive';
@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit,AfterContentInit {
  say:any;
  @Input() ads:[] = [];
  hasFoo:any='red';
  // @ViewChild(PlaceholderdirectiveDirective) adHost:PlaceholderdirectiveDirective;
  @ViewChild(PlaceholderdirectiveDirective, {static: true}) adHost!: PlaceholderdirectiveDirective;
  constructor(private ComponentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.createComponent();
  
  }

  createComponent(){
    // const componentFactory=this.ComponentFactoryResolver.resolveComponentFactory(DynamicSubComponent);
    // this.adHost.ViewContainerRef.clear();
    // this.adHost.ViewContainerRef.createComponent(componentFactory);
    console.log(this.adHost);
    const viewContainerRef = this.adHost.ViewContainerRef;
    viewContainerRef.clear();
    console.log(this.adHost+'onit');
  }
  ngAfterContentInit(): void {
    // debugger
    // console.log(this.adHost+'conentinit')
    // const viewContainerRef = this.adHost.ViewContainerRef;
    // viewContainerRef.clear();
  }
}
