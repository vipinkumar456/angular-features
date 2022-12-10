import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholderdirective]'
})
export class PlaceholderdirectiveDirective {

  constructor(public ViewContainerRef : ViewContainerRef) { }

}
