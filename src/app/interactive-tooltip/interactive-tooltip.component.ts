import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-tooltip',
  templateUrl: './interactive-tooltip.component.html',
  styleUrls: ['./interactive-tooltip.component.css']
})
export class InteractiveTooltipComponent implements OnInit {

  tippyOptions = {

  };

  title = 'Change my options';

  constructor() { }

  ngOnInit() {
  }

}
