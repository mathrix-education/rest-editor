import {Component, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UPCOMING_LAUNCHES_MOCK} from '../mocks/upcoming';
import {MatSort} from '@angular/material/sort';
import {PolicyEditor} from '../../../rest-editor/src/interfaces/policy-editor.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-editor-app';
  displayedColumns = ['mission_name', 'details', 'launch_date_unix', 'actions'];
  dataSource: Observable<any> = of(UPCOMING_LAUNCHES_MOCK);
  policy: PolicyEditor = {
    add: true,
    edit: true,
    delete: true,
    visible: true,
    move: true
  };
  isLoading = false;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  startEdit($event: any) {
    alert('Edit');
  }

  delete($event: any) {
    alert('Delete');
  }

  visible($event: any) {
    alert('Visible');
  }
}
