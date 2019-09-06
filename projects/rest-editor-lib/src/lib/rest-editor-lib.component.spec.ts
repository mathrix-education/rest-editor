import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestEditorLibComponent } from './rest-editor-lib.component';

describe('RestEditorLibComponent', () => {
  let component: RestEditorLibComponent;
  let fixture: ComponentFixture<RestEditorLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestEditorLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestEditorLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
