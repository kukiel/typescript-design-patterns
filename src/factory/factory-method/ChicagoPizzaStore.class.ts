import { ChicagoStyleCheesePizza } from './ChicagoStyleCheesePizza.class';
import { ChicagoStyleClamPizza } from './ChicagoStyleClamPizza.class';
import { ChicagoStyleVeggiePizza } from './ChicagoStyleVeggiePizza.class';
import { IPizzaType } from './IPizzaType';
import { Pizza } from './Pizza.class';
import { PizzaStore } from './PizzaStore.class';

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: IPizzaType): Pizza {
    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza();
    } else if (type === 'clam') {
      return new ChicagoStyleClamPizza();
    } else if (type === 'veggie') {
      return new ChicagoStyleVeggiePizza();
    } else {
      return new ChicagoStyleCheesePizza();
    }
  }
}
