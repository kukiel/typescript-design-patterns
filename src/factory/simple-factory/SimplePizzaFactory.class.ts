import { CheesePizza } from './CheesePizza.class';
import { IPizzaType } from './IPizzaType';
import { PepperoniPizza } from './PepperoniPizza.class';
import { Pizza } from './Pizza.class';
import { VeggiePizza } from './VeggiePizza.class';

export class SimplePizzaFactory {
  public createPizza(type: IPizzaType): Pizza {
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    } else {
      pizza = new CheesePizza();
    }

    return pizza;
  }
}
