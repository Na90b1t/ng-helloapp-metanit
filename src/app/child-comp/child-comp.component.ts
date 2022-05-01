import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
})
export class ChildCompComponent implements OnInit {
  @Input() userName: string = '';
  @Input() userAge: number = 0;

  ngOnInit(): void {
    console.log('ChildCompComponent OnInit');
  }
}
