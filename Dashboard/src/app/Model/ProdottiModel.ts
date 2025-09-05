export class ProdottiModel {
    public name: string;
    public price: number;
    public image: string;
    public description: string;
    public available: boolean;
    constructor( name : string , price: number ,image: string,description:string,available:boolean) 
    {
      this.name = name || '';
      this.price = price || 0;
      this.image = image || '';
      this.description = description || '';
      this.available = available || false;
    }
}

