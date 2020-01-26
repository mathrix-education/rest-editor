import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RestEditorComponent} from './components/rest-editor/rest-editor.component';
import {HighlightDirective} from './directives/highlight.directive';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

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
export class RestEditorModule {
}
