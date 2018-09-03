import { Caramel } from './Caramel.class';
import { Choco } from './Choco.class';
import { IceCream } from './IceCream.class';
import { Whip } from './Whip.class';

export default function() {
  let icecream: IceCream = new Choco();
  console.log(`${icecream.getName()} ${icecream.cost()}`);
  icecream = new Caramel(icecream);
  console.log(`${icecream.getName()} ${icecream.cost()}`);
  icecream = new Whip(icecream);
  console.log(`${icecream.getName()} ${icecream.cost()}`);
}
