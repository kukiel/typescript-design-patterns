import { CaffeineBeverage } from './CaffeineBeverage.class';

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log('Dripping coffee through filter');
  }

  protected addCondiments() {
    console.log('Adding sugar and milk');
  }

  protected customerWantsCondiments() {
    return false;
  }
}
