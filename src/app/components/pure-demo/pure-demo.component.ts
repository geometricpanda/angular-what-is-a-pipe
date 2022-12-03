import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-demo',
  templateUrl: './pure-demo.component.html',
  styleUrls: ['./pure-demo.component.css']
})
export class PureDemoComponent {

  value: number = 0;
  increment(): void {
    this.value++;
  }

  decrement(): void {
    this.value--;
  }

}
