import { IceCream } from './IceCream.class';

export class Choco extends IceCream {
  constructor() {
    super();
    this.name = 'Choco IceCream';
  }

  public cost(): number {
    return 2.5;
  }
}
