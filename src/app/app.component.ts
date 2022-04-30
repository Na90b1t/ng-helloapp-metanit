import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'ng-helloapp-metanit';
  name = '';
  surname = 'surname'

  // log() {
  //   console.log(12345);
  // }
}
