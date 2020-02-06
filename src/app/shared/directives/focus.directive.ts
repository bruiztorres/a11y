import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements OnChanges {
  @Input() focus: boolean;

  constructor(private element: ElementRef) {}

  ngOnChanges() {
    if (!this.focus) {
      return;
    }

    this.element.nativeElement.focus();
  }
}
