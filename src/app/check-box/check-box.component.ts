import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {
  isRed: boolean = false;
  isGreen: boolean = false;
  border: string = 'wrap-checkbox--border';

  ngOnInit(): void {}
}
