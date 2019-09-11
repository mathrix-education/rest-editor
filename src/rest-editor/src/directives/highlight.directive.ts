import {Highlightable} from '@angular/cdk/a11y';
import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[restEditorHighlight]'
})
export class HighlightDirective implements Highlightable {
  constructor(
    private el: ElementRef
  ) {
  }

  setActiveStyles(): void {
    this.el.nativeElement.style.backgroundColor = 'rgba(0,0,0,.04)';
  }

  setInactiveStyles(): void {
    this.el.nativeElement.style.backgroundColor = 'inherit';
  }
}
