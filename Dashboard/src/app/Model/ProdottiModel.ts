export class ProdottiModel {
    public name: string;
    public price: number;
    public convenient: boolean;
    public image: string;
    public description: string;
    public available: boolean;
    constructor( name : string , price: number , convenient: boolean, image: string,description:string,available:boolean) 
    {
      this.name = name || '';
      this.price = price || 0;
      this.convenient= convenient || false;
      this.image = image || '';
      this.description = description || '';
      this.available = available || false;
    }
}

