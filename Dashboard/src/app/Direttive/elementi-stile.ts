import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementiStile]'
})
export class ElementiStile  {
   item: ElementRef<HTMLDivElement> ;
  constructor(item: ElementRef<HTMLDivElement>)
  { 
      this.item = item;


  }

  ngOnInit() {
   // console.log("ok")
  }
   ngAfterViewInit()
   {
      this.modifcaH1();
      this.modifcaH2();
      this.modifcaH3();
      this.item.nativeElement.style.padding='15px';
      
    }
  private modifcaH1() 
  {
    const h1Modicare = this.item.nativeElement.querySelectorAll('h1') as NodeListOf<HTMLHeadingElement>;
    h1Modicare.forEach((h1) => {
      h1.style.color = '#FFA500'
      h1.style.fontSize = '25px';
      });
  }
   private modifcaH2() 
  {
    const h2Modicare = this.item.nativeElement.querySelectorAll('h2') as NodeListOf<HTMLHeadingElement>;
    h2Modicare.forEach((h2) => {
      h2.style.color = '#33333'
      h2.style.fontSize = '16px';
      h2.style.textAlign= 'start';
      });
  }

   private modifcaH3() 
  {
    const h3Modicare = this.item.nativeElement.querySelectorAll('h3') as NodeListOf<HTMLHeadingElement>;
    h3Modicare.forEach((h3) => {
      
      h3.style.fontSize = '14px';
     
      });
  }


}
