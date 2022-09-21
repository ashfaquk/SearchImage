import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(private er: ElementRef) {
    this.er.nativeElement.style.backgroundColor = 'red';
  }

}
