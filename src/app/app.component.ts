import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'ng-helloapp-metanit';
  name = 'name';
  surname = 'surname';
  age = 25;
  name1 = 'Tom';
  age1 = 24;

  sayFullName() {
    console.log(`My name is: ${this.name} ${this.surname}`);
  }
}
