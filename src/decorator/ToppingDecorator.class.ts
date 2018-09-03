import { IceCream } from './IceCream.class';

export abstract class ToppingDecorator extends IceCream {
  public abstract getName(): string;
}
