import {ActiveDescendantKeyManager, Highlightable} from '@angular/cdk/a11y';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Observable} from 'rxjs';
import {HighlightDirective} from '../../directives/highlight.directive';
import {PolicyEditor} from '../../interfaces/policy-editor.interface';
import {MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'rest-editor',
  templateUrl: './rest-editor.component.html',
  styleUrls: ['./rest-editor.component.scss']
})
export class RestEditorComponent<T> implements AfterContentInit, AfterViewInit {
  /** columns to display */
  @Input() displayedColumns: string[];
  /** data to display inside table */
  @Input() dataSource: Observable<any>;
  /** actions allowed on data */
  @Input() policy: PolicyEditor;
  /** whether we wait for pending request */
  @Input() isLoading = false;
  /** maximum number of action buttons */
  @Input() maxActionElements = 8;

  /** emit when user clicks on add button */
  @Output() add = new EventEmitter<any>();
  /** emit when user clicks on edit button */
  @Output() edit = new EventEmitter<any>();
  /** emit when user clicks on delete button */
  @Output() delete = new EventEmitter<any>();
  /** softDelete event triggered for a soft deletion */
  @Output() softDelete = new EventEmitter<any>();
  /** emit when user drag and drop to new position */
  @Output() move = new EventEmitter<any>();
  /** emit when user clicks on visible toggle button */
  @Output() visible = new EventEmitter<any>();
  /** emit when an element is selected */
  @Output() selectedElement = new EventEmitter<any>();

  @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;

  @ViewChild(MatTable, {static: true}) table: MatTable<T>;
  /** dialog to confirm before deleting elements */
  @ViewChild('deleteDialog', {static: false}) deleteDialog;

  @ViewChildren(HighlightDirective) rows: QueryList<HighlightDirective>;


  /** for action cell ngStyle directive */
  get actionCellStyle() {
    return {'max-width.px': this.maxActionElements * 40};
  }

  /** set to true when dragging. use this trick because cdkDragHandle does not work with material table */
  isDragging = false;

  tempElementToDelete: any;
  /** list key manager for keyboard interaction (see @angular/cdk accessibility) */
  private keyManager: ActiveDescendantKeyManager<Highlightable>;

  constructor(private dialog: MatDialog) {
  }

  /**
   * Keyboard event listener
   */
  @HostListener('document:keydown', ['$event']) onKeydown(event) {
    if (this.dialog.openDialogs.length === 0) {
      this.keyManager.onKeydown(event);
    }
  }

  /**
   * Add ng-content columns inside material data table
   */
  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
  }

  /**
   * Enable keyboard interaction
   */
  ngAfterViewInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.rows).withWrap();
    this.keyManager.setActiveItem(0);
  }

  askDelete(element: any) {
    this.tempElementToDelete = element;
    this.dialog.open(this.deleteDialog);
  }

  confirmDelete() {
    this.delete.emit(this.tempElementToDelete);
  }

  dropElement(event: any) {
    this.move.emit({previousIndex: event.previousIndex, currentIndex: event.currentIndex});
  }

}
