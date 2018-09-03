import { Pizza } from './Pizza.class';

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Style Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';

    this.toppings.push('Shredded MOzzarella Cheese');
  }

  public cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
