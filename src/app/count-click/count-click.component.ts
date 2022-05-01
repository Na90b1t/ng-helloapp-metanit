import { Component } from '@angular/core';

@Component({
  selector: 'app-count-click',
  templateUrl: './count-click.component.html',
  styleUrls: ['./count-click.component.scss'],
})
export class CountClickComponent {
  count: number = 0;
  countEvent: number = 0;
  countForLog: number = 0;
  increase(): void {
    this.count++;
  }
  increaseEvent($event: any): void {
    this.countEvent++;
    console.log($event);
  }
  increaseLog(): void {
    console.log(this.countForLog++);
  }
}
