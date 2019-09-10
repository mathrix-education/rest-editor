import { Component } from '@angular/core';
import {Observable, of} from 'rxjs';
import {UPCOMING_LAUNCHES_MOCK} from '../mocks/upcoming';
import {PolicyEditor} from 'rest-editor/interfaces/policy-editor.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-editor-app';
  displayedColumns = ['mission_name', 'details', 'launch_date_unix'];
  dataSource: Observable<any> = of(UPCOMING_LAUNCHES_MOCK);
  policy: PolicyEditor = {
    add: false,
    edit: false,
    delete: false,
    visible: true
  };
  isLoading = false;


}
