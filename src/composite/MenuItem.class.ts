import { MenuComponent } from './MenuComponent.class';

export class MenuItem extends MenuComponent {
  private name: string;
  private description: string;
  private vegetarian: boolean;
  private price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }

  public isVegetarian(): boolean {
    return this.vegetarian;
  }

  public print(): void {
    let text = `  ${this.getName()}`;
    if (this.isVegetarian()) {
      text += '(v)';
    }
    text += `, ${this.getPrice()}`;
    text += `     -- ${this.getDescription()}`;
    console.log(text);
  }
}
