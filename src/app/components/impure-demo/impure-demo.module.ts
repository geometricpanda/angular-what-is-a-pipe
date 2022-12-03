import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {ImpureDemoPipe} from "./impure-demo.pipe";
import {ImpureDemoComponent} from "./impure-demo.component";

@NgModule({
  declarations: [
    ImpureDemoComponent,
    ImpureDemoPipe,
  ],
  imports: [CommonModule],
  exports: [ImpureDemoComponent],
})
export class ImpureDemoModule {

}
