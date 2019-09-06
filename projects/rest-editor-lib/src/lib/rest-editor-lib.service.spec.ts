import { TestBed } from '@angular/core/testing';

import { RestEditorLibService } from './rest-editor-lib.service';

describe('RestEditorLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestEditorLibService = TestBed.get(RestEditorLibService);
    expect(service).toBeTruthy();
  });
});
