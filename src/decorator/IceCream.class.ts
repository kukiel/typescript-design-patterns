export abstract class IceCream {
  protected name: string = 'Unknown IceCream';

  public getName(): string {
    return this.name;
  }

  public abstract cost(): number;
}
