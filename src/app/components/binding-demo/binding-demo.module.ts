import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BindingDemoComponent} from './binding-demo.component';
import { BindingDemoPipe } from './binding-demo.pipe';

@NgModule({
  declarations: [
    BindingDemoComponent,
    BindingDemoPipe
  ],
  imports: [CommonModule],
  exports: [BindingDemoComponent],
})
export class BindingDemoModule {
}
