import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({

  selector: '[appCardDir]'
})
export class CardDir implements AfterViewInit{
  item: ElementRef<HTMLDivElement>;
  @Input() appCardDir: boolean = false;
  constructor(item: ElementRef<HTMLDivElement>){
    this.item = item;
  }

  ngAfterViewInit() {
    console.log(" bbbbbbbbbbbbbbbbbbbbbbbbbbb");
      if(this.appCardDir===true){
        console.log(" AAAAAAAAAAAAAAAAAAA");
        console.log(this);
        this.item.nativeElement.style.backgroundColor="red";
      }
  }

}


// memo: approfondire get set nelle dir :)