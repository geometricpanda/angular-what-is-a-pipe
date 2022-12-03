import { Component } from '@angular/core';

@Component({
  selector: 'app-impure-demo',
  templateUrl: './impure-demo.component.html',
  styleUrls: ['./impure-demo.component.css']
})
export class ImpureDemoComponent {

  value: number = 0;
  increment(): void {
    this.value++;
  }

  decrement(): void {
    this.value--;
  }

}
