import { IDuck } from './IDuck';
import { MallardDuck } from './MallardDuck.class';
import { TurkeyAdapter } from './TurkeyAdapter.class';
import { WildTurkey } from './WildTurkey.class';

export default function() {
  const duck: MallardDuck = new MallardDuck();

  const turkey: WildTurkey = new WildTurkey();
  const turkeyAdapter: IDuck = new TurkeyAdapter(turkey);

  console.log('Turkey says...');
  turkey.gobble();
  turkey.fly();

  console.log('Duck says...');
  duck.quack();
  duck.fly();

  console.log('TurkeyAdapter says...');

  turkeyAdapter.quack();
  turkeyAdapter.fly();
}
