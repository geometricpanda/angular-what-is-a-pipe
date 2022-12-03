import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PureDemoPipe} from "./pure-demo.pipe";
import {PureDemoComponent} from "./pure-demo.component";

@NgModule({
  declarations: [
    PureDemoComponent,
    PureDemoPipe,
  ],
  imports: [CommonModule],
  exports: [PureDemoComponent],
})
export class PureDemoModule {

}
