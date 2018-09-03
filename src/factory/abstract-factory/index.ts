import { NYPizzaStore } from './NYPizzaStore.class';
import { Pizza } from './Pizza.class';

export default function() {
  const nyStore = new NYPizzaStore();
  const chicagoStylePizza: Pizza = nyStore.orderPizza('cheese');
  console.log(chicagoStylePizza.toString());
}
