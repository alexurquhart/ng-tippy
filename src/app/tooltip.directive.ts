import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit, OnChanges {

  @Input() options: object = {};
  @Input() title: any = '';

  private _el: any;
  private _host: any;

  constructor(el: ElementRef) {
    this._el = el.nativeElement;
    this._host = el.nativeElement;
  }

  ngOnInit() {
    this.detectHostNode();
    tippy(this._el, this.options);
  }

  // Re-create the tooltip on changes
  ngOnChanges(changes) {
    let options = this.options;

    if (changes.options) {
      options = changes.options.currentValue;
    }

    this.detectHostNode();

    tippy(this._el, options);
  }

  detectHostNode() {
    const attrs = this._el.attributes;

    let hostNode = false;
    for (let i = 0; i < attrs.length; i++) {
      if (attrs[i].name.indexOf('_nghost') > -1) {
        hostNode = true;
      }
    }

    if (hostNode) {
      this._el = this._el.children[0];
      this.xferAttributes(this._host, this._el);
    }
  }

  // If we are transfering the tooltip from the host component
  // node to the first child node, we'll need to copy all the data attributes
  xferAttributes(fromEl: HTMLElement, toEl: HTMLElement) {
    const daList = [
      'position',
      'trigger',
      'interactive',
      'interactiveborder',
      'delay',
      'animation',
      'arrow',
      'arrowsize',
      'animatefill',
      'duration',
      'html',
      'size',
      'distance',
      'theme',
      'offset',
      'hideonclick',
      'multiple',
      'followcursor',
      'inertia',
      'flipduration',
      'sticky',
      'stickyduration',
      'appendto',
      'zindex',
      'touchhold',
      'performance',
      'dynamictitle',
      'popperoptions'
    ];

    // Copy data attributes from the input element to the target element
    for (const da of daList) {
      if (fromEl.dataset[da]) {
        toEl.dataset[da] = fromEl.dataset[da];
      }
    }

    if (fromEl.hasAttribute('title')) {
      toEl.title = fromEl.title;
    }
  }
}
