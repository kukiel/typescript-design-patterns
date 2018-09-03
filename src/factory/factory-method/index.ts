import { ChicagoPizzaStore } from './ChicagoPizzaStore.class';
import { NYPizzaStore } from './NYPizzaStore.class';
import { Pizza } from './Pizza.class';

export default function() {
  const chicagoStore = new ChicagoPizzaStore();
  const chicagoStylePizza: Pizza = chicagoStore.orderPizza('cheese');
  console.log(chicagoStylePizza.toString());

  const nyStore = new NYPizzaStore();
  const nyStylePizza: Pizza = nyStore.orderPizza('clam');
  console.log(nyStylePizza.toString());
}
