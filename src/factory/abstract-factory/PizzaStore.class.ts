import { IPizzaType } from './IPizzaType';
import { Pizza } from './Pizza.class';

export abstract class PizzaStore {
  public abstract createPizza(type: IPizzaType): Pizza;

  public orderPizza(type: IPizzaType): Pizza {
    let pizza: Pizza = this.createPizza(type);
    console.log(`--- Making a ${pizza.getName()} ---`);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
