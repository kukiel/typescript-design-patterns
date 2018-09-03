import { CheesePizza } from './CheesePizza.class';
import { IPizzaIngredientFactory } from './IPizzaIngredientFactory';
import { IPizzaType } from './IPizzaType';
import { NYPizzaIngredientFactory } from './NYPizzaIngredientFactory.class';
import { PepperoniPizza } from './PepperoniPizza.class';
import { Pizza } from './Pizza.class';
import { PizzaStore } from './PizzaStore.class';
import { VeggiePizza } from './VeggiePizza.class';

export class NYPizzaStore extends PizzaStore {
  public createPizza(type: IPizzaType): Pizza {
    let pizza: Pizza;
    const ingedientFactory: IPizzaIngredientFactory = new NYPizzaIngredientFactory();

    if (type === 'cheese') {
      pizza = new CheesePizza(ingedientFactory);
      pizza.setName('New York Style Cheese Pizza');
    } else if (type === 'veggie') {
      pizza = new VeggiePizza(ingedientFactory);
      pizza.setName('New York Style Veggie Pizza');
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingedientFactory);
      pizza.setName('New York Style PepperoniPizza');
    } else {
      pizza = new CheesePizza(ingedientFactory);
      pizza.setName('New York Style Cheese Pizza');
    }

    return pizza;
  }
}
