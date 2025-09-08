import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMinPrezzo]',
})
export class MinPrezzo implements OnInit {
  @Input() appMinPrezzo!: boolean; // true se deve evidenziare

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appMinPrezzo) {
      this.el.nativeElement.style.backgroundColor = '#13d350ff';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
}
