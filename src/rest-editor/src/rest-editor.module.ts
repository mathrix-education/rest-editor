import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatIconModule, MatProgressBarModule, MatTableModule, MatTooltipModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {RestEditorComponent} from './components/rest-editor/rest-editor.component';
import {HighlightDirective} from './directives/highlight.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    RestEditorComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    DragDropModule,
    MatProgressBarModule
  ],
  exports: [
    RestEditorComponent
  ]
})
export class RestEditorModule { }
