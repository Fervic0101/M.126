import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCardDir]',
})
export class CardDir implements AfterViewInit {
  item: ElementRef<HTMLDivElement>;
  @Input() appCardDir: boolean = false;

  constructor(item: ElementRef<HTMLDivElement>) {
    this.item = item;
  }

  ngAfterViewInit() {
    if (this.appCardDir === true) {
      console.log(this);
      this.item.nativeElement.style.backgroundColor = 'red';
    }

    const p = this.item.nativeElement.querySelector(
      'mat-card-content p'
    ) as HTMLElement | null;
    if (p) {
      p.style.fontSize = '3rem';
    }
  }
}

// memo: approfondire get set nelle dir :)
