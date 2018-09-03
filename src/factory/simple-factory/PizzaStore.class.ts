import { IPizzaType } from './IPizzaType';
import { Pizza } from './Pizza.class';
import { SimplePizzaFactory } from './SimplePizzaFactory.class';

export class PizzaStore {
  private factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: IPizzaType): Pizza {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
