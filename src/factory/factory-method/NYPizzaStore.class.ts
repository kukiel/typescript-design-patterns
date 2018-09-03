import { IPizzaType } from './IPizzaType';
import { NYStyleCheesePizza } from './NYStyleCheesePizza.class';
import { NYStyleClamPizza } from './NYStyleClamPizza.class';
import { NYStyleVeggiePizza } from './NYStyleVeggiePizza.class';
import { Pizza } from './Pizza.class';
import { PizzaStore } from './PizzaStore.class';

export class NYPizzaStore extends PizzaStore {
  public createPizza(type: IPizzaType): Pizza {
    if (type === 'cheese') {
      return new NYStyleCheesePizza();
    } else if (type === 'clam') {
      return new NYStyleClamPizza();
    } else if (type === 'veggie') {
      return new NYStyleVeggiePizza();
    } else {
      return new NYStyleCheesePizza();
    }
  }
}
