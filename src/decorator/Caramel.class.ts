import { IceCream } from './IceCream.class';
import { ToppingDecorator } from './ToppingDecorator.class';

export class Caramel extends ToppingDecorator {
  private icecream: IceCream;

  constructor(icecream: IceCream) {
    super();
    this.icecream = icecream;
  }

  public getName(): string {
    return `${this.icecream.getName()}, Caramel`;
  }

  public cost(): number {
    return this.icecream.cost() + 0.4;
  }
}
