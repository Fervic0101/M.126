import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class Container implements AfterViewInit {

  item: ElementRef<HTMLDivElement>;
  private size:number=100
  constructor(item: ElementRef<HTMLDivElement>) {
    this.item = item;
    this.item.nativeElement.style.display = 'flex';
    this.item.nativeElement.style.flexWrap = 'wrap';
    this.item.nativeElement.style.justifyContent = 'center';
    this.item.nativeElement.style.alignItems = 'center';
    this.item.nativeElement.style.width = '100%';
    this.item.nativeElement.style.textAlign = 'center';


   }
  ngAfterViewInit() {
    this.size = 100/this.item.nativeElement.children.length;
    console.log(this.size);
    for(let i=0;i<this.item.nativeElement.children.length;i++)
    {
      var children = this.item.nativeElement.children[i] as HTMLDivElement;
      children.style.width = this.size+'%';
      children.style.height = '50pc';
      console.log(this.item.nativeElement.children[i] );
    }
  }

}
