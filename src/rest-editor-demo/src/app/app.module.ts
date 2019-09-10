import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RestEditorLibModule} from 'rest-editor';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RestEditorLibModule,
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
