import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RestEditorLibModule} from 'rest-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RestEditorLibModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
