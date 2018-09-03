import { Pizza } from './Pizza.class';
import { PizzaStore } from './PizzaStore.class';
import { SimplePizzaFactory } from './SimplePizzaFactory.class';

export default function() {
  const pizzaFactory = new SimplePizzaFactory();
  const store = new PizzaStore(pizzaFactory);

  const cheesePizza: Pizza = store.orderPizza('cheese');
  console.log(cheesePizza.toString());

  const veggiePizza: Pizza = store.orderPizza('veggie');
  console.log(veggiePizza.toString());
}
