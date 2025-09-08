export class ProdottiModel {
  public name: string;
  public image: string;
  public description: string;
  public available: boolean;

  public coopPrice: number;
  public esselungaPrice: number;
  public carrefourPrice: number;

  constructor(name: string, image: string, description: string, available: boolean,
              coopPrice: number, esselungaPrice: number, carrefourPrice: number) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.available = available;

    this.coopPrice = coopPrice;
    this.esselungaPrice = esselungaPrice;
    this.carrefourPrice = carrefourPrice;
  }
}
