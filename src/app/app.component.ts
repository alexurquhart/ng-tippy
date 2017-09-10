import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  htmlOptions = {
    theme: 'light'
  };

  modelOptions = {};

  callback() {
    alert('This callback is a method in the parent component.');
  }
}
