import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
})
export class ChildCompComponent implements OnInit {
  @Input() userName: string = '';
  _userAge: number = 0;

  @Input()
  set userAge(age: number) {
    if (age < 0) this._userAge = 0;
    else if (age > 100) this._userAge = 100;
    else this._userAge = age;
  }
  get userAge() {
    return this._userAge;
  }

  ngOnInit(): void {
    console.log('ChildCompComponent OnInit');
  }
}
