import { IceCream } from './IceCream.class';
import { ToppingDecorator } from './ToppingDecorator.class';

export class Whip extends ToppingDecorator {
  private icecream: IceCream;

  constructor(icecream: IceCream) {
    super();
    this.icecream = icecream;
  }

  public getName(): string {
    return `${this.icecream.getName()}, Whip`;
  }

  public cost(): number {
    return this.icecream.cost() + 0.5;
  }
}
