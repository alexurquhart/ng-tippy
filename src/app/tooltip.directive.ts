import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit, OnChanges {

  @Input() options: object = {};
  @Input() title: any = '';

  private _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngOnInit() {
    tippy(this._el.nativeElement, this.options);
  }

  // If the title is bound to a property
  // it will not be picked up in time for tippy to render
  // it properly
  ngOnChanges(changes) {
    let options = this.options;

    if (changes.title) {
      this._el.nativeElement.setAttribute('title', changes.title.currentValue);
    }

    if (changes.options) {
      options = changes.options.currentValue;
    }
    tippy(this._el.nativeElement, options);
  }
}
