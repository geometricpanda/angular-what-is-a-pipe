import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent {
  state: boolean = false;

  toggleOn() {
    this.state = true;
  }

  toggleOff() {
    this.state = false;
  }
}
