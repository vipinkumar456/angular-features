import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color:any;
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
 }
 @HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.appHighlight || 'red');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}
