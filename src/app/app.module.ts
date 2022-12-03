import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PureDemoModule} from "./components/pure-demo/pure-demo.module";
import {ImpureDemoModule} from "./components/impure-demo/impure-demo.module";
import {BindingDemoModule} from "./components/binding-demo/binding-demo.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PureDemoModule,
    ImpureDemoModule,
    BindingDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
