export abstract class CaffeineBeverage {
  public prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  protected abstract brew(): void;

  protected abstract addCondiments(): void;

  protected boilWater(): void {
    console.log('Boiling water');
  }

  protected pourInCup(): void {
    console.log('Pouring into cup');
  }

  // Hook
  protected customerWantsCondiments() {
    return true;
  }
}
