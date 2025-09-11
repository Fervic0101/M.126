export class ProdottiModel {
  public name: string;
  public price: number;
  public image: string;
  public description: string;
  public available: boolean;
  public convenient: boolean;

  constructor(
    name: string,
    price: number,
    image: string,
    description: string,
    available: boolean
  ) {
    this.name = name || '';
    this.price = price || 0;
    this.image = image || '';
    this.description = description || '';
    this.available = available || false;
    this.convenient = false;
  }
}

/*
### SI PUò FARE ANCHE COSì INFORMATI SU DIFFERENZE (campi costruttore sintasi etc differenze con forma ?implicita?)

export class ProdottiModel {
  constructor(
    public name: string,
    public price: number,
    public image: string,
    public description: string,
    public available: boolean,
    public convenient: boolean = false   // <- NEW
  ) {}
}

*/
