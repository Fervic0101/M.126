export class ProdottiModel {
  public name: string;
  public image: string;
  public description: string;
  public available: boolean;

  public coopPrice: number | null;
  public esselungaPrice: number | null;
  public carrefourPrice: number| null;

  constructor(name: string, image: string, description: string, available: boolean,
              coopPrice: number | null, esselungaPrice: number |null, carrefourPrice: number|null) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.available = available;

    this.coopPrice = coopPrice;
    this.esselungaPrice = esselungaPrice;
    this.carrefourPrice = carrefourPrice;
  }
}
