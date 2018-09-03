import { CaffeineBeverage } from './CaffeineBeverage.class';

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log('Steeping the tea');
  }

  protected addCondiments() {
    console.log('Adding Lemon');
  }

  protected customerWantsCondiments() {
    return true;
  }
}
