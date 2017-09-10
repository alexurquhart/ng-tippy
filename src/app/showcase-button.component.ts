import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase-button',
  template: `
    <a href="#" class="button is-large is-showcase">
      <span *ngIf="icon" class="icon"><i class="fa fa-{{icon}}"></i></span>
      <span><ng-content></ng-content></span>
    </a>
  `,
  styleUrls: ['./showcase-button.component.css']
})
export class ShowcaseButtonComponent {

  @Input() icon: string;

  constructor() {}

}
